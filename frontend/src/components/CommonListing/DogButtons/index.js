"use client";

import ComponentLevelLoader from "@/components/Loader/componentlevel";
import { usePathname, useRouter } from "next/navigation";
import { GlobalContext } from "@/context";
import { useContext } from "react";
import { addToCart } from "@/services/cart";
import { deleteADog } from "@/services/dog";
import { toast } from "react-toastify";

export default function DogButton({ item }) {
  const pathName = usePathname();

  const {
    setCurrentUpdatedDog,
    setComponentLevelLoader,
    componentLevelLoader,
    user,
    showCartModal,
    setShowCartModal,
  } = useContext(GlobalContext);
  const router = useRouter();

  const isAdminView = pathName.includes("admin-view");

  async function handleDeleteDog(item) {
    setComponentLevelLoader({ loading: true, id: item._id });
    const res = await deleteADog(item._id);

    if (res.success) {
      setComponentLevelLoader({ loading: false, id: "" });
      toast.success(res.message, {
        position: "top-right",
      });
      router.refresh();
    } else {
      toast.error(res.message, {
        position: "top-right",
      });
      setComponentLevelLoader({ loading: false, id: "" });
    }
  }

  async function handleAddToCart(getItem) {
    setComponentLevelLoader({ loading: true, id: getItem._id });

    const res = await addToCart({ dogID: getItem._id, userID: user._id });
    if (res.success) {
      toast.success(res.message, {
        position: "top-right",
      });
      setComponentLevelLoader({ loading: false, id: "" });
      setShowCartModal(true);
    } else {
      toast.error(res.message, {
        position: "top-right",
      });
      setComponentLevelLoader({ loading: false, id: "" });
      setShowCartModal(true);
    }
    console.log(res);
  }

  return isAdminView ? (
    <>
      <button
        onClick={() => {
          setCurrentUpdatedDog(item);
          router.push("/admin-view/add-dog");
        }}
        className="button-custom-card"
      >
        Update
      </button>
      <button
        onClick={() => handleDeleteDog(item)}
        className="button-custom-card"
      >
        {componentLevelLoader &&
        componentLevelLoader.loading &&
        item._id === componentLevelLoader.id ? (
          <ComponentLevelLoader
            text={"Deleting Dog"}
            color={"#ffffff"}
            loading={componentLevelLoader && componentLevelLoader.loading}
          />
        ) : (
          "Delete"
        )}
      </button>
    </>
  ) : (
    <>
      <button
        onClick={() => handleAddToCart(item)}
        className="button-custom-card"
      >
        {componentLevelLoader &&
        componentLevelLoader.loading &&
        item._id === componentLevelLoader.id ? (
          <ComponentLevelLoader
            text={"Adding to cart"}
            color={"#ffffff"}
            loading={componentLevelLoader && componentLevelLoader.loading}
          />
        ) : (
          " Add To Card"
        )}
      </button>
    </>
  );
}
