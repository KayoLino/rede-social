'use client';

import Header from "./components/Header"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    const value = localStorage.getItem("rede-social:token");
    if (!value) {
      router.push("/login");
    }
  }, [router])

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-zinc-100">
      <Header />
    </div>
  );
}
