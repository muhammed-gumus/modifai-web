import React from "react";

const features = [
  {
    title: "Image Creation from Text",
    description:
      "Transform your text descriptions into visually stunning and highly detailed images. Utilize advanced AI algorithms to turn your imagination into reality, perfect for presentations, social media, or creative projects.",
    icon: "🖼️",
    color: "bg-blue-100 text-blue-500",
  },
  {
    title: "Text Extraction from Images",
    description:
      "Easily extract and interpret text from images with unparalleled accuracy. Whether it’s scanned documents or photos of handwritten notes, our tool simplifies text digitization.",
    icon: "🔍",
    color: "bg-purple-100 text-purple-500",
  },
  {
    title: "Translation",
    description:
      "Communicate effortlessly with our AI-powered translation feature. Instantly translate text between multiple languages with high precision, breaking down language barriers.",
    icon: "🌍",
    color: "bg-green-100 text-green-500",
  },
  {
    title: "Image Sharpening",
    description:
      "Enhance the clarity and details of your images with our powerful sharpening tool. Bring blurry or low-quality images to life with advanced AI enhancements.",
    icon: "✨",
    color: "bg-yellow-100 text-yellow-500",
  },
  {
    title: "Background Removal from Images",
    description:
      "Remove backgrounds from images instantly and with precision. Perfect for creating transparent images, product showcases, or creative edits without any hassle.",
    icon: "🖌️",
    color: "bg-orange-100 text-orange-500",
  },
  {
    title: "AI-Powered Colorization",
    description:
      "Bring black-and-white images to life with realistic colors. Use cutting-edge AI to colorize old photos or grayscale images in seconds.",
    icon: "🎨",
    color: "bg-red-100 text-red-500",
  },
];

const Features = () => {
  return (
    <section className="py-12 px-12 md:px-20">
      <h2 className="text-5xl font-bold text-center mb-4 text-white">Features</h2>
      <p className="text-center text-gray-400 mb-12">
        Explore a comprehensive suite of AI-powered tools designed to enhance your creativity, productivity, and communication.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 bg-white"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
