import React from "react";

export default function TimelineIBCC() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 px-2">
      <h2 className="text-white text-2xl md:text-4xl font-bold mb-6 md:mb-10 text-center">Stage Progress</h2>
      <div className="w-full max-w-2xl mx-auto mb-4 md:mb-6">
        {/* Timeline - center layout for <1024px, spaced for >=1024px */}
        <div className="flex flex-col md:flex-row items-center md:justify-center lg:justify-between w-full">
          {/* Preliminary */}
          <div className="flex flex-col items-center w-full md:w-1/3 mb-4 md:mb-0">
            <div className="bg-[#2563eb] rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-1 md:mb-2 relative">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#2563eb"/><path d="M10 17l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="text-white text-base md:text-xl font-bold">Preliminary</div>
            <div className="text-white/80 text-xs md:text-lg">(ongoing)</div>
          </div>
          {/* Line - only show on md+ */}
          <div className="hidden md:block h-2 w-1/6 bg-[#2563eb]" />
          {/* Semi Final */}
          <div className="flex flex-col items-center w-full md:w-1/3 mb-4 md:mb-0">
            <div className="bg-white/40 border-2 md:border-4 border-[#2563eb] rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-1 md:mb-2 relative">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#fff" fillOpacity="0.4"/></svg>
            </div>
            <div className="text-white text-base md:text-xl font-bold">Semi Final</div>
            <div className="text-white/80 text-xs md:text-lg">(coming soon)</div>
          </div>
          {/* Line - only show on md+ */}
          <div className="hidden md:block h-2 w-1/6 bg-white/40" />
          {/* Grand Final */}
          <div className="flex flex-col items-center w-full md:w-1/3">
            <div className="bg-white/40 border-2 md:border-4 border-[#bdbdbd] rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-1 md:mb-2 relative">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#fff" fillOpacity="0.4"/></svg>
            </div>
            <div className="text-white text-base md:text-xl font-bold">Grand Final</div>
            <div className="text-white/80 text-xs md:text-lg">(TBA)</div>
          </div>
        </div>
      </div>
      <div className="mt-4 md:mt-6 text-center text-white text-base md:text-xl">
        (All tasks shown below are part of the <span className="text-[#b6e857] underline">Preliminary Stage</span>)
      </div>
    </div>
  );
}
