import React from "react";
import { ChevronDown } from "lucide-react";
import ScrollDown from "../ui/ScrollDown";

export const HeaderSection = () => {
  return (
    <header className="relative w-full justify-center min-h-screen overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(/images/aboutpage/orang-kantor-1.png)`,
          backgroundPosition: "50% 50%",
          backgroundSize: "cover",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-50" /> {/* Dark overlay */}

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-center items-center text-center">
        {/* Gradient Text Heading with Shadow */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold  text-white drop-shadow-lg">
          <span className="bg-gradient-to-r from-green-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            StudentxCEOs <br />
            International Summit 2025
          </span>
        </h1>

        {/* Scroll Down Animation */}
        <ScrollDown/>
      </div>
    </header>
  );
};
