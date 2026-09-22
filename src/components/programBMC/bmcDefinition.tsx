import React from 'react';
import BMC from '/images/programpage/bmc/BMC.png';

const BmcDefinition: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-[#79CCEA] to-[#8257A9]">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-18 gap-y-8 items-center">
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What is Business Model Canvas?
              </h2>
              <p className="text-lg leading-relaxed">
                Business Model Canvas is a competition exclusively for high school students, to showcase their entrepreneurial skills and business acumen. Students are challenged to present their innovative business idea that can solve the problems around them.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Who can Participate?
              </h2>
              <p className="text-lg leading-relaxed">
                This competition is open to all high school students from Year 10 to Year 12. You may join the competition either as an individual or as part of a team.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={BMC}
              alt="Business Model Canvas competition card"
              className="w-full max-w-md md:max-w-none rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BmcDefinition;
