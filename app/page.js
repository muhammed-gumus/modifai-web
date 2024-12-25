import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Examples from "../components/Examples";
import Footer from "../components/Footer";
import Image from "next/image";
import BackgroundShapes from "../components/BackgroundShapes";
import InteractiveElements from "../components/InteractiveElements";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-2 z-10">
     
      <Navbar />
      <Hero />
      <Image
        className="w-1/2 px-12 md:px-0"
        src={"/images/mockup.png"}
        alt="mockup"
        width={550}
        height={550}
      />
      <Features />
      <Examples />
      <Footer />
    </div>
  );
}
