import React from "react";  

  // WhatsApp icon for button
  const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.13 2.484 7.23L4.07 28.07a1 1 0 0 0 1.2 1.2l5.84-2.414A12.96 12.96 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-2.13 0-4.21-.66-5.97-1.89a1 1 0 0 0-.93-.09l-4.13 1.71 1.71-4.13a1 1 0 0 0-.09-.93A9.97 9.97 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm4.29-6.71c-.23-.12-1.36-.67-1.57-.75-.21-.08-.36-.12-.51.12-.15.23-.58.75-.71.9-.13.15-.26.17-.49.06-.23-.12-.97-.36-1.85-1.13-.68-.6-1.13-1.34-1.26-1.57-.13-.23-.01-.36.11-.48.11-.11.23-.29.35-.44.12-.15.16-.26.24-.43.08-.17.04-.32-.02-.44-.06-.12-.51-1.23-.7-1.68-.18-.44-.37-.38-.51-.39-.13-.01-.28-.01-.43-.01-.15 0-.39.06-.6.28-.21.22-.8.78-.8 1.9s.82 2.21.93 2.37c.11.15 1.62 2.48 3.93 3.38.55.19.98.3 1.31.39.55.14 1.05.12 1.45.07.44-.07 1.36-.56 1.55-1.1.19-.54.19-1 .13-1.1-.06-.1-.21-.16-.44-.28z"
        fill="#fff"
      />
    </svg>
  );

const WhatsappBCL = () => {
  return (
    <div className="mt-4">
      <div className="text-white font-semibold text-lg mb-2 text-center">
        Join BCL's Official WhatsApp Group!
      </div>
      <a
        // href="https://wa.me/yourgroupid" // replace with your WhatsApp group link
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 bg-[#57d96c] hover:bg-[#3ec85c] text-white font-semibold py-2 rounded-xl transition duration-200"
      >
        <WhatsAppIcon />
        Click Me!
      </a>
    </div>
  );
};

export default WhatsappBCL;
