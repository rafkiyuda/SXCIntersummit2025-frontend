import React, { useState } from "react";

const PaidPromoteItems = [
  {
    name: "Special Bundle Offer Bundle Committee",
    img: "images/merchandisepage/1 (1).png",
    products: [],
  },
  {
    name: "Sticker & Keychain",
    img: "images/merchandisepage/2 (1).png",
    products: [],
  },

];

const PaidPromoteSection  = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const selectedItem = PaidPromoteItems[selectedIdx];

  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-[#B6E2A1] via-[#A18AFF] to-[#B6E2A1] flex flex-col items-center py-23 px-2">
      <div className="w-full flex flex-col items-center mb-8">
        <h2
          className="text-4xl md:text-6xl font-extrabold mb-2 flex bg-gradient-to-r from-[#7B5CB6] via-[#7BC6E2] to-[#B6E2A1] bg-clip-text text-transparent drop-shadow-lg"
          style={{
            WebkitTextStroke: '2px white',
            textShadow: '0 4px 16px rgba(0,0,0,0.15)',
          }}
        >
          Paid Promote
        </h2>
      </div>
  <div className="flex flex-col md:flex-row w-full max-w-7xl gap-2 md:gap-8 justify-center items-center">
        {/* Bundles on the left */}
  <div className="flex flex-row md:flex-col gap-4 items-center justify-center mb-0 md:mb-0">
          {PaidPromoteItems.map((item, idx) => (
            <img
              key={item.name}
              src={item.img}
              alt={item.name}
              className={`w-20 h-24  md:w-32 md:h-38 object-contain rounded-xl shadow-lg cursor-pointer border-4 ${
                selectedIdx === idx ? "border-[#A18AFF]" : "border-transparent"
              } transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
              onClick={() => setSelectedIdx(idx)}
            />
          ))}
        </div>
        {/* Main merchandise card */}
        <div className="relative rounded-3xl md:shadow-xl flex flex-col items-center justify-center min-w-[200px] min-h-[120px] md:min-w-[340px] md:min-h-[240px] p-0 overflow-hidden">
          <img
            src={selectedItem.img}
            alt={selectedItem.name}
            className="w-auto h-130 object-contain rounded-xl"
            style={{ maxWidth: '100%', maxHeight: '100%', zIndex: 1 }}
          />
        </div>
        {/* Info and Buy button on the right */}
  <div className="flex flex-col justify-center items-center w-full max-w-lg p-4 md:p-8 mt-6 md:mt-0">
          <h3
            className="text-3xl font-extrabold mb-4 text-center bg-gradient-to-r from-[#7B5CB6] via-[#7BC6E2] to-[#B6E2A1] bg-clip-text text-transparent drop-shadow-lg"
            style={{
              WebkitTextStroke: '1px white',
              textShadow: '0 4px 16px rgba(0,0,0,0.15)',
            }}
          >
            Get Your Brand Noticed
          </h3>
          <hr className="w-full border-t border-white border-opacity-60 mb-6" />
          <p className="text-sm md:text-lg text-white text-justify mb-8">
            Expand your sosial media reach with our monthly Paid Promote program! Your content will be shared through 100+ committees Instagram Stories, ensuring maximum visibility and impactful audience engagement.
          </p>
          <a
            href="https://linktr.ee/paidpromotesummit25"
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

export default PaidPromoteSection;
