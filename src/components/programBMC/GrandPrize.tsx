import React from "react";

const FIRST  = "/images/programpage/bmc/1stplace.png";
const SECOND = "/images/programpage/bmc/2ndplace.png";
const THIRD  = "/images/programpage/bmc/3rdplace.png";

export default function GrandPrize() {
  return (
    <section
      className="
        w-full py-20
        bg-gradient-to-r from-[#79CCEA] to-[#8257A9]
        flex flex-col items-center
      "
    >
      <h2 className="text-white text-4xl font-bold mb-16">
        Grand Prize
      </h2>

      <div className="w-full max-w-4xl grid grid-cols-2 gap-x-12 gap-y-16">
        <div className="flex flex-col items-center text-white text-center justify-center">
          <p className="text-2xl font-semibold">Rp 750.000</p>
          <p className="text-2xl font-semibold">E-Certificate</p>
        </div>
        <div className="flex justify-center">
          <img
            src={FIRST}
            alt="1st place"
            className="w-80 h-auto rounded-[20px]"
          />
        </div>

        <div className="flex justify-center">
          <img
            src={SECOND}
            alt="2nd place"
            className="w-80 h-auto rounded-[20px]"
          />
        </div>
        <div className="flex flex-col items-center text-white text-center justify-center">
          <p className="text-2xl font-semibold">Rp 600.000</p>
          <p className="text-2xl font-semibold">E-Certificate</p>
        </div>

        <div className="flex flex-col items-center text-white text-center justify-center">
          <p className="text-2xl font-semibold">Rp 450.000</p>
          <p className="text-2xl font-semibold">E-Certificate</p>
        </div>
        <div className="flex justify-center">
          <img
            src={THIRD}
            alt="3rd place"
            className="w-80 h-auto rounded-[20px]"
          />
        </div>
      </div>
    </section>
  );
}
