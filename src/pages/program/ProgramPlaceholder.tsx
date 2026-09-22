import React from "react";
import { useNavigate } from "react-router-dom";

const ProgramPlaceholder = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#A6CEE7] to-[#8563AF] px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 drop-shadow-lg">
        <span className="bg-gradient-to-r from-green-300 via-white to-purple-400 bg-clip-text text-transparent">
          We're working on something exciting!
        </span>
      </h1>
      <p className="text-white text-lg md:text-2xl text-center max-w-2xl mb-10 font-[Plus_Jakarta_Sans]">
        This program page is currently under development. Stay tuned to discover the activities, opportunities, and experiences we’re preparing for you.
      </p>
      <button
        className="bg-[#A8CA85] text-[#592B83] font-semibold px-8 py-3 rounded-xl shadow-md hover:scale-105 transition-all"
        onClick={() => navigate("/program")}
      >
        View Other Programs
      </button>
    </div>
  );
};

export default ProgramPlaceholder;