import React from "react";

export const FocusSection = () => {
  const focusData = [
    {
      id: 1,
      title: "Lorem",
      description:
        "Empowering Future Innovators through Competitive Thinking",
      image: "/images/aboutpage/assetabout/handshake.svg",
    },
    {
      id: 2,
      title: "Lorem",
      description:
        "Preparing Youth for Global Challenges through Insightful Learning",
      image: "/images/aboutpage/assetabout/book.svg",
    },
    {
      id: 3,
      title: "Lorem",
      description:
        "Bridging Education to Industry through Experiential Exposure",
      image: "/images/aboutpage/assetabout/mental.svg",
    },
    {
      id: 4,
      title: "Lorem",
      description:
        "Bridging Career Readiness with Future-Driven Capabilities",
      image: "/images/aboutpage/assetabout/sprout.svg",
    },
  ];

  return (
    <section className="w-full py-8 px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-8">
        <h2 className="flex justify-center items-center">
          <img 
            src="/images/aboutpage/Focus.png" // Ganti dengan gambar yang sesuai
            alt="Focus Icon"
            className="max-md:h-[7vh] w-auto object-contain"
          />
        </h2>
      </div>

      {/* Flex Container to make items in one row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-3 md:p-15">
        {focusData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center bg-[rgba(89,43,130,0.13)] border-[2.776px] border-solid border-[rgba(255,255,255,0.77)] backdrop-blur-[9.254px] text-white rounded-[15px] p-6 transition-transform duration-300 hover:scale-105 hover:z-20"
          >
            {/* Circle */}
            <div className="w-8 md:w-16 h-8 md:h-16 mb-1 md:mb-4 flex justify-center items-centers">
              <img
                src={item.image} // Dynamically use the image from the focusData array
                alt={item.title} // Use the title for alt text
                className="w-full h-full object-cover"
              />
            </div>
            {/* Description */}
            <p className="text-[#ffffff] text-xs md:text-sm text-center mt-3">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
