import React from "react";
import { ChevronDown } from "lucide-react";

const ScrollDown = () => {
  return (
    <div className="absolute bottom-10 left-0 right-0 flex justify-center items-center gap-2">
      <span className="text-white text-lg md:text-xl font-semibold animate-bounce">
        Scroll Down
      </span>
      <ChevronDown className="text-white animate-bounce" size={28} />
    </div>
  );
};

export default ScrollDown;
