"use client";

import { GlobalContext } from "@/context";
import { useContext } from "react";

export default function Home() {
  const { isAuthUser } = useContext(GlobalContext);

  console.log(isAuthUser);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white  text-[#3C2925]">
      <h1>Adoption </h1>
    </main>
  );
}
