import React from "react";

const TaglineSection = () => {
  const visionData = {
    title: "Visi",
    description:
      "Empowering businesses to thrive through responsible use of technology by driving innovation, resilience, and sustainable impact in the digital era.",
  };

  const missionData = {
    title: "Misi",
    description: "",
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto mb-8 px-4 py-8 md:mb-[30px] md:p-10 ">
      {/* Tagline Text */}
      <div className="text-center text-base md:text-xl relative z-10">
        TAGLINE
      </div>

      {/* Blockquote Section */}
      <blockquote className="text-center text-white relative z-10 mt-2">
        <span className="font-bold text-3xl md:text-6xl">&quot;</span>
        <span className="font-bold italic text-xl md:text-4xl [font-family:'Rubik-BoldItalic',Helvetica]">
          Speak Ideas,
          <br />
          Spark Movement&quot;
        </span>
      </blockquote>

      {/* Vision and Mission Sections */}
      <div className="flex flex-col lg:flex-row justify-center px-2 md:p-[20px] mt-8 md:mt-10 gap-4 relative z-10 ">
        {/* Vision Section */}
        <div className="w-full lg:w-[45%] p-4 md:p-6 rounded-2xl md:rounded-[38.868px] border-2 border-solid border-[rgba(255,255,255,0.77)] bg-[rgba(89,43,130,0.13)] backdrop-blur-[9.254px] shadow-lg mb-4 lg:mb-0 transition-transform duration-300 hover:scale-105 hover:z-20">
        
          <img 
            src="/images/aboutpage/Vision.png"
            alt="Icon"
            className="max-md:h-[5vh] w-auto object-contain mx-auto"
          />
          <p className="font-[Plus_Jakarta_Sans] text-white text-xs md:text-lg mt-4 text-justify">
            {visionData.description}
          </p>
        </div>

        {/* Mission Section */}
        <div className="w-full lg:w-[45%] p-4 md:p-6 rounded-2xl md:rounded-[38.868px] gap-4 border-2 border-solid border-[rgba(255,255,255,0.77)] bg-[rgba(89,43,130,0.13)] backdrop-blur-[9.254px] shadow-lg transition-transform duration-300 hover:scale-105 hover:z-20">
          
          <img 
            src="/images/aboutpage/Mission.png"
            alt="Icon"
            className="max-md:h-[5vh] w-auto object-contain mx-auto"
          />
          <ul className="font-[Plus_Jakarta_Sans] font-normal text-white text-xs md:text-lg mt-4 list-disc pl-4 md:pl-6">
            <li>Digital transformation drive.</li>
            <li>Tech-powered innovation spotlight</li>
            <li>Collaborative ecosystem.</li>
            <li>Changemaker development.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TaglineSection;
