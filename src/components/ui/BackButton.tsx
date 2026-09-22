import { MoveLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Back Button */}
      <div
        onClick={() => navigate("/")}
        className="absolute top-15 left-15 z-10 group cursor-pointer"
      >
        <button
          type="button"
          className="cursor-pointer text-white flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-200 group-hover:bg-white/70 focus:outline-none"
          aria-label="Back "
        >
          <MoveLeft size={40} />
        </button>
      </div>
    </>
  );
};

export default BackButton;
