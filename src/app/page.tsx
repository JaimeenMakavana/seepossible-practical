"use client";
import { GlobalContext } from "@/Context/GlobalContext";
import Image from "next/image";
import { useContext } from "react";

export default function Home() {
  const { isSignup } = useContext(GlobalContext);

  return <main>Home</main>;
}
