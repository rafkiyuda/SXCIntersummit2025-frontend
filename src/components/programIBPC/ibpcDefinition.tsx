import React from 'react';
import IBPC from '/images/programpage/ibpc/ibpctitle.png';

const IbccDefinition: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-[#79CCEA] to-[#8257A9]">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-18 gap-y-8 items-center">
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                What is International Business Plan Competition?
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-justify">
                The International Business Plan Competition is envisioned as the core event of this year’s International Summit, where participants will tackle real-world business challenges through strategic planning, innovation, and empowering them to propose future-ready business solutions.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Who can Participate?
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-justify">
                IBPC is exclusively open to undergraduate university students from all universities across Indonesia and International.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={IBPC}
              alt="International Business Plan Competition card"
              className="w-full max-w-md md:max-w-none rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IbccDefinition;
