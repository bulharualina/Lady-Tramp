"use client";

import { GlobalContext } from "@/context";
import { getAllAdminDogs } from "@/services/dog";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { isAuthUser } = useContext(GlobalContext);

  const [dogs, setDogs] = useState([]);
  const router = useRouter();

  async function getListOfDogs() {
    const res = await getAllAdminDogs();

    if (res.success) {
      setDogs(res.data);
    }
  }

  useEffect(() => {
    getListOfDogs();
  }, []);

  console.log(dogs);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-zinc-900">
      <section className="">
        <div className=" bg-zinc-200 rounded-lg grid max-w-screen-xl px-4 py-8 mx-suto  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"></div>

        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8 mt-10 rounded-lg">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid p-6  rounded-lg place-content-center sm:p-8">
              <div className="max-w-md mx-auto text-center lg:text-left">
                <button
                  onClick={() => router.push("/dog/listing/all-dogs")}
                  className="button-navbar"
                >
                  Adopt
                </button>
              </div>
            </div>
            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4 rounded-lg">
                {dogs && dogs.length
                  ? dogs
                      .filter((item) => item.onSale === "yes")
                      .splice(0, 2)
                      .map((dogItem) => (
                        <li
                          onClick={() => router.push(`/dog/${dogItem._id}`)}
                          className="cursor-pointer"
                          key={dogItem._id}
                        >
                          <div>
                            <img
                              src={dogItem.imageUrl}
                              alt="Sale Dod Item"
                              className="object-cover w-full rounded aspect-square"
                            />
                          </div>
                          <div className="mt-3">
                            <h3 className="font-medium text-zinc-100">
                              {dogItem.name}
                            </h3>
                            <p className="mt-1 text-sm text-zinc-100">
                              {dogItem.gender}
                            </p>
                          </div>
                        </li>
                      ))
                  : null}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
