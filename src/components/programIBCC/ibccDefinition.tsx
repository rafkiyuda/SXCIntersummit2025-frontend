import React from 'react';
import IBCC from '/images/programpage/ibcc/IBCCCompetition.png';

const IbccDefinition: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-[#79CCEA] to-[#8257A9]">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-18 gap-y-8 items-center">
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                What is International Business Case Competition?
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                The International Business Case Competition is the core event of the International Summit where participants are challenged to solve real-world business problems through professional collaboration. Through this year's theme, we aim to harness the potential of growing technology to thrive on the modern age of business.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Who can Participate?
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                IBCC is exclusively open to undergraduate university students from all universities across Indonesia.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={IBCC}
              alt="Business Model Canvas competition card"
              className="w-full max-w-md md:max-w-none rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IbccDefinition;
