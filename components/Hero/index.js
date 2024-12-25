import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-black text-white text-center py-12 mt-12 px-12 md:px-0">
      <div className="flex justify-center items-center mb-6">
        <Image
          src="/images/logo.png"
          alt="Windsurf Editor"
          width={100}
          height={100}
          className="rounded-lg"
        />
      </div>
      <h1
        className="text-4xl md:text-6xl font-black mb-2"
        style={{
          color: "#FFEDDC",
          backgroundImage: "linear-gradient(90deg, #FFEDDC 49%, #3D9970 53%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        ModifAI
      </h1>

      <h2 className="font-bold text-sm sm:text-lg tracking-widest md:text-3xl text-secondColor max-w-2xl mx-auto mb-4 sm:mb-8">
        Modify, Enhance, Inspire
      </h2>
      <p className="text-sm sm:text-md md:text-lg max-w-2xl mx-auto mb-4 sm:mb-8 text-gray-400">
        Unleash the power of advanced AI technology to effortlessly transform
        your text into captivating, high-quality images that make a lasting
        impact.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
        <button className="bg-firstColor text-secondColor px-4 sm:px-6 py-2 sm:py-3 rounded-md font-bold hover:bg-teal-400">
          Download ModifAI Mobile App
        </button>
        <button className="text-secondColor border border-firstColor px-4 sm:px-6 py-2 sm:py-3 rounded-md font-bold hover:bg-firstColor hover:text-white">
          See How It Works
        </button>
      </div>
    </section>
  );
};

export default Hero;
