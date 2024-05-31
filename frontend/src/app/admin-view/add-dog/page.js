"use client";

import InputComponent from "@/components/FormElements/InputComponent";
import SelectComponent from "@/components/FormElements/SelectComponent";
import ComponentLevelLoader from "@/components/Loader/componentlevel";
import Notification from "@/components/Notification";
import { GlobalContext } from "@/context";
import { addNewDog, updateADog } from "@/services/dog";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { initializeApp } from "firebase/app";
import { useRouter } from "next/navigation";
import {
  adminAddDogformControls,
  firebaseConfig,
  firebaseStorageURL,
} from "@/utils";
import {
  ref,
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const app = initializeApp(firebaseConfig);
const storage = getStorage(app, firebaseStorageURL);

const createUniqueFileName = (getFile) => {
  const timeStamp = Date.now();
  const randomStringValue = Math.random().toString(36).substring(2, 12);

  return `${getFile.name}-${timeStamp}-${randomStringValue}`;
};

async function helperForUploadingImageToFirebase(file) {
  const getFileName = createUniqueFileName(file);
  const storageReference = ref(storage, `lady_tramp/${getFileName}`);
  const uploadImage = uploadBytesResumable(storageReference, file);

  return new Promise((resolve, reject) => {
    uploadImage.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
        reject(error);
      },
      () => {
        getDownloadURL(uploadImage.snapshot.ref)
          .then((downloadUrl) => resolve(downloadUrl))
          .catch((error) => reject(error));
      }
    );
  });
}

const initialFormData = {
  name: "",
  description: "",
  sizes: "S",
  gender: "Male",
  imageUrl: "",
};

export default function AdminAddNewDog() {
  const [formData, setFormData] = useState(initialFormData);

  const {
    componentLevelLoader,
    setComponentLevelLoader,
    currentUpdatedDog,
    setCurrentUpdatedDog,
  } = useContext(GlobalContext);

  console.log(currentUpdatedDog);

  const router = useRouter();

  useEffect(() => {
    if (currentUpdatedDog !== null) setFormData(currentUpdatedDog);
  }, [currentUpdatedDog]);

  async function handleImage(event) {
    console.log(event.target.files);
    const extractImageUrl = await helperForUploadingImageToFirebase(
      event.target.files[0]
    );

    console.log(extractImageUrl);

    if (extractImageUrl !== "") {
      setFormData({
        ...formData,
        imageUrl: extractImageUrl,
      });
    }
  }

  async function handleAddDog() {
    setComponentLevelLoader({ loading: true, id: "" });
    const res =
      currentUpdatedDog !== null
        ? await updateADog(formData)
        : await addNewDog(formData);

    console.log(res);

    if (res.success) {
      setComponentLevelLoader({ loading: true, id: "" });
      toast.success(res.message, {
        position: "top-right",
      });

      setFormData(initialFormData);
      setCurrentUpdatedDog(null);
      setTimeout(() => {
        router.push("/admin-view/all-dogs");
      }, 1000);
    } else {
      setComponentLevelLoader({ loading: false, id: "" });
      toast.error(res.message, {
        position: "top-right",
      });
      setFormData(initialFormData);
    }
  }

  console.log(formData);

  return (
    <div className="  w-full mt-0 mr-0 mb-0 ml-0 relative">
      <div className="flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl relative  ">
        <div className="w-full mt-6 mr-0 mb-0 ml-0 space-y-8">
          <input
            id="real-file"
            accept="image/*"
            max="1000000"
            type="file"
            onChange={handleImage}
          />
          <div className="flex gap-2 flex-col text-zinc-900 ">
            <div className="mt-6 mr-0 mb-0 ml-0 relative space-y-8">
              {adminAddDogformControls.map((controlItem) =>
                controlItem.componentType === "input" ? (
                  <InputComponent
                    //key={index}
                    type={controlItem.type}
                    placeholder={controlItem.placeholder}
                    label={controlItem.label}
                    value={formData[controlItem.id]}
                    onChange={(event) => {
                      setFormData({
                        ...formData,
                        [controlItem.id]: event.target.value,
                      });
                    }}
                  />
                ) : controlItem.componentType === "select" ? (
                  <SelectComponent
                    //key={index}
                    label={controlItem.label}
                    options={controlItem.options}
                    value={formData[controlItem.id]}
                    onChange={(event) => {
                      setFormData({
                        ...formData,
                        [controlItem.id]: event.target.value,
                      });
                    }}
                  />
                ) : null
              )}
              <button onClick={handleAddDog} className="button-custom ">
                {componentLevelLoader && componentLevelLoader.loading ? (
                  <ComponentLevelLoader
                    text={
                      currentUpdatedDog !== null ? "Updating Dog" : "Adding Dog"
                    }
                    color={"#ffffff"}
                    loading={
                      componentLevelLoader && componentLevelLoader.loading
                    }
                  />
                ) : currentUpdatedDog !== null ? (
                  "Update Dog"
                ) : (
                  "Add Dog"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Notification />
    </div>
  );
}
