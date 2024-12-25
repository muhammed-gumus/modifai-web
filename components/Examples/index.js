import React from "react";
import Image from "next/image";
import { FaLightbulb } from "react-icons/fa"; // İkon için react-icons kullanımı

const examples = [
  {
    image: "/images/human.png",
    title: "Dynamic Elegance: A Cinematic Masterpiece",
    prompt:
      "Please represent our dynamic in an image hyperrealistic, full body, detailed clothing, highly detailed, cinematic lighting, stunningly beautiful, intricate, sharp focus, f/1. 8, 85mm, (centered image composition), (professionally color graded), ((bright soft diffused light)), volumetric fog, trending on instagram, trending on tumblr, HDR 4K, 8K",
    icon: "🎥",
  },
  {
    image: "/images/dog.png",
    title: "Joyful Senior Dog: Christmas in a Summer Glow",
    prompt:
      "Senior short haired happy tan dog at Christmas in summer with mostly gray face outside hyperrealistic, full body, detailed clothing, highly detailed, cinematic lighting, stunningly beautiful, intricate, sharp focus, f/1. 8, 85mm, (centered image composition), (professionally color graded), ((bright soft diffused light)), volumetric fog, trending on instagram, trending on tumblr, HDR 4K, 8K",
    icon: "🐶",
  },
  {
    image: "/images/sights.png",
    title: "Tranquility in the Wild: A Serene Forest Landscape",
    prompt:
      "((masterpiece)),(((best quality))), 8k, high detailed, ultra detailed, a serene forest landscape, (ancient trees), sunlight filtering through leaves, (a tranquil river), vibrant wildflowers, a deer grazing peacefully hyperrealistic, full body, detailed clothing, highly detailed, cinematic lighting, stunningly beautiful, intricate, sharp focus, f/1. 8, 85mm, (centered image composition), (professionally color graded), ((bright soft diffused light)), volumetric fog, trending on instagram, trending on tumblr, HDR 4K, 8K",
    icon: "🌲",
  },
];

const DarkModeExamples = () => {
  return (
    <section className="text-white py-12 px-4 sm:px-6 md:px-12">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">Examples</h2>
      <p className="text-center text-gray-400 mb-10 px-12">
        Explore a variety of image prompts and see how AI can bring your ideas
        to life.
      </p>
      <div className="space-y-12">
        {examples.map((example, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-10"
          >
            {/* Görsel Bölümü */}
            <div
              className={`${
                index % 2 === 0 ? "md:order-last" : ""
              } flex items-center justify-center`}
            >
              <Image
                width={400}
                height={400}
                src={example.image}
                alt={example.prompt}
                className="w-full max-w-md sm:max-w-full md:max-w-full object-cover rounded-lg shadow-lg"
              />
            </div>
            {/* Prompt Bölümü */}
            <div className="flex flex-col items-start justify-center gap-4 text-gray-400  rounded-lg shadow-lg">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-left text-secondColor">
                {example.title}
              </h3>
              <p className="text-left text-sm sm:text-base md:text-lg">
                {example.prompt}
              </p>
              <button className="bg-firstColor text-secondColor px-4 py-2 md:px-6 md:py-2 rounded-lg font-bold">
                Generate AI Images
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DarkModeExamples;
