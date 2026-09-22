import React from "react";

const FillingSection = () => {
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
          Questionnaire Filling & Buzzer Service
        </h2>
      </div>
      <div className="flex flex-col md:flex-row w-full max-w-7xl gap-2 md:gap-8 justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full max-w-2xl p-4 md:p-6 mt-6 md:mt-0">
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
            Boost your research and digital presence effortlessly! This program
            offers reliable questionnaire filling services for researchers in
            need of respondents, as well as buzzer support to enhance engagement
            activities such as likes, shares, and online interactions.
          </p>
          <a
            href="https://linktr.ee/fillingservicessummit25"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white text-[#6BC6B6] font-bold py-4 text-xl rounded-full shadow-lg hover:scale-105 transition-transform duration-200 flex items-center justify-center"
          >
            Book Your Slot!
          </a>
        </div>
      </div>
    </section>
  );
};

export default FillingSection;
