import GymClasses from "@/components/sections/gymclasses";
import Hero from "@/components/sections/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero></Hero>
      <GymClasses />
    </main>
  );
}
