"use client";

import InputComponent from "@/components/FormElements/InputComponent";
import SelectComponent from "@/components/FormElements/SelectComponent";
import TitleComponent from "@/components/FormElements/TitleComponent";
import { Sizes } from "@/utils";
import { adminAddDogformControls } from "@/utils";
import Script from "next/script";

export default function AdminAddNewDog() {
  function handleImage() {}
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
            <TitleComponent data={Sizes} />
            <div className="mt-6 mr-0 mb-0 ml-0 relative space-y-8">
              {adminAddDogformControls.map((controlItem) =>
                controlItem.componentType === "input" ? (
                  <InputComponent
                    type={controlItem.type}
                    placeholder={controlItem.placeholder}
                    label={controlItem.label}
                  />
                ) : controlItem.componentType === "select" ? (
                  <SelectComponent
                    label={controlItem.label}
                    options={controlItem.options}
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
