'use client';

import Image from "next/image";
import { GlobalContext } from '@/context';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';




export default function Home() {
  const { isAuthUser } = useContext(GlobalContext);
  console.log(isAuthUser);
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Lady & Tramp</h1>
    </main>
  );
}
