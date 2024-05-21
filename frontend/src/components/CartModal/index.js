"use client";

import { Fragment, useContext, useEffect } from "react";
import CommonModal from "../CommonModal";
import { GlobalContext } from "@/context";
import { toast } from "react-toastify";
import ComponentLevelLoader from "../Loader/componentlevel";
import { useRouter } from "next/navigation";
import { deleteFromCart, getAllCartItems } from "@/services/cart";

export default function CartModal() {
  const {
    showCartModal,
    setShowCartModal,
    cartItems,
    setCartItems,
    user,
    setComponentLevelLoader,
    componentLevelLoader,
  } = useContext(GlobalContext);

  const router = useRouter();

  async function extractAllCartItems() {
    const res = await getAllCartItems(user?._id);

    if (res.success) {
      const updatedData =
        res.data && res.data.length
          ? res.data.map((item) => ({
              ...item,
              dogID: {
                ...item.dogID,
                price:
                  item.dogID.onSale === "yes"
                    ? parseInt(
                        (
                          item.dogID.price -
                          item.dogID.price * (item.dogID.priceDrop / 100)
                        ).toFixed(2)
                      )
                    : item.dogID.price,
              },
            }))
          : [];
      setCartItems(updatedData);
      localStorage.setItem("cartItems", JSON.stringify(updatedData));
    }

    console.log(res);
  }

  useEffect(() => {
    if (user !== null) extractAllCartItems();
  }, [user]);

  async function handleDeleteCartItem(getCartItemID) {
    setComponentLevelLoader({ loading: true, id: getCartItemID });
    const res = await deleteFromCart(getCartItemID);

    if (res.success) {
      setComponentLevelLoader({ loading: false, id: "" });
      toast.success(res.message, {
        position: "top-right",
      });

      extractAllCartItems();
    } else {
      toast.error(res.message, {
        position: "top-right",
      });
      setComponentLevelLoader({ loading: false, id: getCartItemID });
    }
  }

  return (
    <CommonModal
      showButtons={true}
      show={showCartModal}
      setShow={setShowCartModal}
      mainContent={
        cartItems && cartItems.length ? (
          <ul role="list" className="-my-6 divide-y divide-gray-300">
            {cartItems.map((cartItem) => (
              <li key={cartItem._id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={cartItem && cartItem.dogID && cartItem.dogID.imageUrl}
                    alt="Cart Item"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-zinc-100">
                      <h3>
                        <a>
                          {cartItem && cartItem.dogID && cartItem.dogID.name}
                        </a>
                      </h3>
                    </div>
                    <p className="mt-1 text-sm text-zinc-300">
                      ${cartItem && cartItem.dogID && cartItem.dogID.price}
                    </p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <button
                      type="button"
                      className="font-medium text-orange-300 sm:order-2"
                      onClick={() => handleDeleteCartItem(cartItem._id)}
                    >
                      {componentLevelLoader &&
                      componentLevelLoader.loading &&
                      componentLevelLoader.id === cartItem._id ? (
                        <ComponentLevelLoader
                          text={"Removing"}
                          color={"#ffffff"}
                          loading={
                            componentLevelLoader && componentLevelLoader.loading
                          }
                        />
                      ) : (
                        "Remove"
                      )}
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : null
      }
      buttonComponent={
        <Fragment>
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-200">Subtotal</p>
            <p className="text-lg text-zinc-100 font-semibold">
              $
              {cartItems && cartItems.length
                ? cartItems.reduce((total, item) => item.dogID.price + total, 0)
                : "0"}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-200">Shipping</p>
            <p className="text-lg text-zinc-100 font-semibold">$0</p>
          </div>
          <div className="flex items-center justify-between mb-10">
            <p className="text-sm text-zinc-200 ">Total</p>
            <p className="text-lg text-zinc-100 font-semibold ">
              $
              {cartItems && cartItems.length
                ? cartItems.reduce((total, item) => item.dogID.price + total, 0)
                : "0"}
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              router.push("/contact");

              setShowCartModal(false);
            }}
            className={"cart-button"}
          >
            Contact
          </button>
          <div className="mt-6 flex justify-center text-center text-sm text-zinc-200">
            <button
              type="button"
              className="font-medium text-grey"
              onClick={() => router.push("../app/adoptions")}
            >
              Continue adopt
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </div>
        </Fragment>
      }
    />
  );
}
