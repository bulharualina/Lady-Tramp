"use client";

import Notification from "@/components/Notification";
import { GlobalContext } from "@/context";
import { createNewDonation } from "@/services/donation";
import { callStripeSession } from "@/services/stripe";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";

export default function Donation() {
  const { user } = useContext(GlobalContext);
  const [donationAmount, setDonationAmount] = useState("");
  const [isDonationProcessing, setIsDonationProcessing] = useState(false);
  const [donationSuccess, setDonationSuccess] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const router = useRouter();
  const params = useSearchParams();

  // Use environment variables for the publishable key
  const publishableKey =
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ||
    "pk_test_51O6F9dECa4BiQczW26rdD6isMG8N7XXVt6q4IHrqzyP3nb5T1begt3ZRIgARdg6WWYTGbsmaHROtFXR7AmRpGQkg00C7vVrVEw";
  const stripePromise = loadStripe(publishableKey);

  useEffect(() => {
    async function createFinalDonation() {
      const isStripe = JSON.parse(localStorage.getItem("stripe"));

      if (isStripe && params.get("status") === "success") {
        setIsDonationProcessing(true);
        const getCheckoutFormData = JSON.parse(
          localStorage.getItem("checkoutFormData")
        );

        const createFinalDonationData = {
          user: user?._id,
          amount: getCheckoutFormData.amount,
          paymentMethod: "Stripe",
          isPaid: true,
          paidAt: new Date(),
        };

        const res = await createNewDonation(createFinalDonationData);

        if (res.success) {
          setIsDonationProcessing(false);
          setDonationSuccess(true);
          setShowMessage(true);
          toast.success(res.message, {
            position: "top-right",
          });
        } else {
          setIsDonationProcessing(false);
          setDonationSuccess(false);
          setShowMessage(true);
          toast.error(res.message, {
            position: "top-right",
          });
        }
      }
    }

    createFinalDonation();
  }, [params]);

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
        router.push("/donate"); // Redirect to the donation page after 5 seconds
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showMessage, router]);

  async function handleCheckout() {
    const stripe = await stripePromise;

    const createLineItems = [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Donation",
          },
          unit_amount: donationAmount * 100,
        },
        quantity: 1,
      },
    ];

    const res = await callStripeSession(createLineItems);
    setIsDonationProcessing(true);
    localStorage.setItem("stripe", true);
    localStorage.setItem(
      "checkoutFormData",
      JSON.stringify({ amount: donationAmount })
    );

    const { error } = await stripe.redirectToCheckout({
      sessionId: res.id,
    });

    if (error) {
      console.log(error);
    }
  }

  if (isDonationProcessing) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <PulseLoader
          color={"#000000"}
          loading={isDonationProcessing}
          size={30}
          data-testid="loader"
        />
      </div>
    );
  }

  if (showMessage) {
    return (
      <section className="h-screen bg-gray-200">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mt-8 max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow">
              <div className="px-4 py-6 sm:px-8 sm:py-10 flex flex-col gap-5">
                {donationSuccess ? (
                  <>
                    <h1 className="font-bold text-lg">
                      Thank you for your donation!
                    </h1>
                    <p>Your support helps us continue our mission.</p>
                  </>
                ) : (
                  <>
                    <h1 className="font-bold text-lg">
                      Oops, something went wrong!
                    </h1>
                    <p>Please try again later.</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div>
      <div className=" donate-bg-img grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0 justify-items-start rounded-md">
          <p className="text-xl font-medium">Donation Details</p>
          <p className="text-green-800 font-bold" style={{ fontFamily: 'Sylfaen' }}>
            Complete your donation by filling in the details below
          </p>
          <div className="w-full mt-6 space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="amount"
                className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Sylfaen' }}
              >
                Donation Amount (USD)
              </label>
              <input
                id="amount"
                name="amount"
                type="number"
                className="mt-1 p-2 border border-gray-300 rounded-md"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-6 border-t border-b py-2">
            <div className="flex items-center justify-between"></div>
            <div className="pb-10">
              <button
                disabled={!donationAmount}
                onClick={handleCheckout}
                className="disabled:opacity-70 rounded-lg mt-5 mr-5 w-full inline-block bg-green-700 text-white px-5 py-3 text-1xl font-medium uppercase tracking-wide" style={{ fontFamily: 'Ink Free' }}
              >
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
      <Notification />
    </div>
  );
}
