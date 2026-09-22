import React from "react";

const HandBookSection = () => {
  return (
    <section className="min-h-[70vh] w-full bg-gradient-to-b from-[#B6E2A1] via-[#A18AFF] to-[#B6E2A1] flex flex-col items-center py-10 px-2">
      <div className="w-full flex flex-col items-center mb-8">
        <h2
          className="text-3xl md:text-5xl font-extrabold mb-2 flex bg-gradient-to-r from-[#7B5CB6] via-[#7BC6E2] to-[#B6E2A1] bg-clip-text text-transparent drop-shadow-lg"
          style={{
            WebkitTextStroke: "2px white",
            textShadow: "0 4px 16px rgba(0,0,0,0.15)",
          }}
        >
          Handbook
        </h2>
      </div>
      <div className="flex flex-col md:flex-row w-full max-w-7xl gap-2 md:gap-8 justify-center items-center">
        {/* Bundles on the left */}

        {/* Info and Buy button on the right */}
        <div className="flex flex-col justify-center items-center w-full max-w-2xl p-4 md:p-8 mt-6 md:mt-0">
          {/* <h3
            className="text-3xl font-extrabold mb-4 text-center bg-gradient-to-r from-[#7B5CB6] via-[#7BC6E2] to-[#B6E2A1] bg-clip-text text-transparent drop-shadow-lg"
            style={{
              WebkitTextStroke: "1px white",
              textShadow: "0 4px 16px rgba(0,0,0,0.15)",
            }}
          >
            Get Your Brand Noticed
          </h3>
          <hr className="w-full border-t border-white border-opacity-60 mb-6" /> */}
          <p className="text-sm md:text-lg text-white text-justify mb-8">
            Trying to win our IBPC and IBCC? The Handbook is your shortcut!
            Compiled by our expert mentors, this handbook provides exclusive
            tips and tricks designed to guide participants through the
            competition with clarity and confidence.
          </p>
          <a
            href="https://linktr.ee/handbooksummit"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white text-[#6BC6B6] font-bold py-4 text-xl rounded-full shadow-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center"
          >
            Grab Yours!
          </a>
        </div>
      </div>
    </section>
  );
};

export default HandBookSection;
