"use client";

import InputComponent from "@/components/FormElements/InputComponent";
import SelectComponent from "@/components/FormElements/SelectComponent";
import TitleComponent from "@/components/FormElements/TitleComponent";
import {
  adminAddDogformControls,
  firebaseConfig,
  firebaseStorageURL,
  Sizes,
} from "@/utils";
import Script from "next/script";
import { useState } from "react";
import { initializeApp } from "firebase/app";
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
  sizes: [],
  description: "",
  gender: "Male",
  imageUrl: "",
};

export default function AdminAddNewDog() {
  const [formData, setFormData] = useState(initialFormData);

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

  function handleTileClick(getCurrentItem) {
    let cpySizes = [...formData.sizes];
    const index = cpySizes.findIndex((item) => item.id === getCurrentItem.id);

    if (index === -1) {
      cpySizes.push(getCurrentItem);
    } else {
      cpySizes = cpySizes.filter((item) => item.id !== getCurrentItem.id);
    }

    setFormData({
      ...formData,
      sizes: cpySizes,
    });
  }

  console.log(formData);

  return (
    <div className=" bg-zinc-950 w-full mt-0 mr-0 mb-0 ml-0 relative">
      <div className="flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl relative  ">
        <div className="w-full mt-6 mr-0 mb-0 ml-0 space-y-8">
          <input
            id="real-file"
            accept="image/*"
            max="1000000"
            type="file"
            onChange={handleImage}
          />
          <div className="flex gap-2 flex-col text-zinc-900 bg-white">
            <label>Sizes</label>
            <TitleComponent
              selected={formData.sizes}
              onClick={handleTileClick}
              data={Sizes}
            />
            <div className="mt-6 mr-0 mb-0 ml-0 relative space-y-8">
              {adminAddDogformControls.map((controlItem) =>
                controlItem.componentType === "input" ? (
                  <InputComponent
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
              <button className="button-custom">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
