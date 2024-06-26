"use client";

import { useRouter } from "next/navigation";
import ComponentLevelLoader from "../Loader/componentlevel";

export default function CommonCart({
  cartItems = [],
  handleDeleteCartItem,
  componentLevelLoader,
}) {
  const router = useRouter();

  // Debugging: Log cart items to check their structure
  console.log("cartItems:", cartItems);

  return (
    <section className="h-screen bg-zinc-900">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mt-8 max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow">
            <div className="px-4 py-6 sm:px-8 sm:py-10">
              <div className="flow-root">
                {cartItems && cartItems.length ? (
                  <ul className="-my-8">
                    {cartItems.map((cartItem) => (
                      <li
                        className="flex-col flex space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
                        key={cartItem._id}
                      >
                        <div className="shrink-0">
                          <img
                            src={
                              cartItem &&
                              cartItem.dogID &&
                              cartItem.dogID.imageUrl
                            }
                            alt="Dog image"
                            className="h-24 w-25 max-w-full rounded-lg object-cover"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                            <div className="pr-8 sm:pr-4">
                              <p className="text-base font-semibold text-gray-900">
                                {cartItem &&
                                  cartItem.dogID &&
                                  cartItem.dogID.name}
                              </p>
                            </div>
                            <div className="mt-4 flex gap-3 items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                              <button
                                type="button"
                                className="font-medium text-orange-300 sm:order-2"
                                onClick={() =>
                                  handleDeleteCartItem(cartItem._id)
                                }
                              >
                                {componentLevelLoader &&
                                componentLevelLoader.loading &&
                                componentLevelLoader.id === cartItem._id ? (
                                  <ComponentLevelLoader
                                    text={"Removing"}
                                    color={"#0000000"}
                                    loading={
                                      componentLevelLoader &&
                                      componentLevelLoader.loading
                                    }
                                  />
                                ) : (
                                  "Remove"
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <h1 className="font-bold text-lg">Your cart is Empty !</h1>
                )}
              </div>
              <div className="mt-6 border-t border-b py-2">
                <div className="mt-5 text-center">
                  <button
                    onClick={() => router.push("/contact")}
                    disabled={cartItems && cartItems.length === 0}
                    className="button-custom"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
