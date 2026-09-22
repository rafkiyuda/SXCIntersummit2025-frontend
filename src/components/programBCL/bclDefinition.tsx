import React from 'react';
import BCL from '/images/programpage/bcl/BCL.png';
import { CalendarDays, MapPin, Clock } from 'lucide-react';

const BmcDefinition: React.FC = () => {
  return (
    <>
      <section className="py-12 md:py-20 bg-gradient-to-r from-[#79CCEA] to-[#8257A9]">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-18 gap-y-8 items-center">
            <div className="text-white space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg bg-gradient-to-r from-[#AEE67F] via-white to-[#B97AFF] bg-clip-text text-transparent">
                  What is Business Competition Launchpad?
                </h2>
                <p className="text-lg leading-relaxed">
                  Business Competition Launchpad is a free{' '}
                  <span className="font-bold">competition class program</span> for
                  college and high school students aiming to excel in business case
                  and plan competitions. This opportunity helps students develop
                  strategic thinking, problem-solving, and business planning skills,
                  preparing them to succeed in competitive business challenges.
                </p>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg bg-gradient-to-r from-[#AEE67F] via-white to-[#B97AFF] bg-clip-text text-transparent">
                  Who can Participate?
                </h2>
                <p className="text-lg leading-relaxed">
                  This competition is open to all{' '}
                  <span className="font-bold">high school students</span> from Year
                  10 to Year 12 and{' '}
                  <span className="font-bold">university students</span>.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={BCL}
                alt="Business Model Canvas competition card"
                className="w-full max-w-md md:max-w-none rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Info Section */}
      <section className="flex justify-center py-8 bg-gradient-to-r from-[#79CCEA] to-[#8257A9]">
        <div className="bg-white/70 rounded-2xl shadow-xl border-2 border-[#79CCEA] max-w-md w-full px-6 py-6 flex flex-col gap-4">
          <div className="flex items-center gap-3 mb-2">
            <CalendarDays className="text-[#8257A9]" size={24} />
            <span className="font-bold text-lg md:text-xl text-[#2d2d2d]">
              Saturday, 20th September 2025
            </span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <MapPin className="text-[#8257A9]" size={22} />
            <span className="font-semibold text-base md:text-lg text-[#2d2d2d]">
              Online, Zoom Meetings
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="text-[#8257A9]" size={22} />
            <span className="font-semibold text-base md:text-lg text-[#2d2d2d]">
              10:00 AM – 01:00 PM
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default BmcDefinition;
