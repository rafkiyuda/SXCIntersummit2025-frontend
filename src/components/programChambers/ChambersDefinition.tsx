import React from 'react';
import Chambers from '/images/programpage/chambers/chamberstitle.svg';

const ChambersDefinition: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-[#79CCEA] to-[#8257A9]">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-18 gap-y-8 items-center">
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                What is Chambers?
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-justify">
                Chambers is a two-day offline event designed to explore career paths across four major industries: Banking, Consulting, FMCG, and StartUp. The event features expert-led sessions delivered through career preparation classes, including material presentations, CV & LinkedIn review sessions, and industry case studies in groups.              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Who can Participate?
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-justify">
                Chambers is exclusively open to undergraduate university students & fresh graduates from all universities across Indonesia.              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={Chambers}
              alt="Chambers card"
              className="w-full max-w-md md:max-w-none rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChambersDefinition;
