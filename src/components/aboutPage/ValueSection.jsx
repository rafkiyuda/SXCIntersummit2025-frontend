import React from "react";

export const ValueSection = () => {
  const valuesData = [
    {
      title: "Empowerment",
      description: "Providing tools and knowledge to create change.",
      image: "/images/aboutpage/assetabout/Empowerment.svg",
    },
    {
      title: "Inclusivity",
      description: "Embracing diverse voices in every initiative.",
      image: "/images/aboutpage/assetabout/Inclusivity.svg",
    },
    {
      title: "Ethics",
      description: "Practicing fairness, responsibility, and integrity.",
      image: "/images/aboutpage/assetabout/Ethics.svg",
    },
  ];

  return (
    <section className="w-full mx-auto flex flex-col items-center justify-center py-8 px-4 sm:px-8 lg:px-16">
      <header className="text-center mb-10">
        <h2
            className="justify-center items-center text-4xl md:text-5xl font-extrabold mb-2 flex bg-gradient-to-r from-[#7B5CB6] via-[#7BC6E2] to-[#B6E2A1] bg-clip-text text-transparent drop-shadow-lg"
            style={{
              WebkitTextStroke: "1px white",
              textShadow: "0 4px 16px rgba(0,0,0,0.15)",
            }}
          >
            Our Values
          </h2>
        <p className="text-[#ffffff] text-sm md:text-lg mt-2 max-w-[700px] mx-auto">
          They define who we are, influence how we operate, and help us stay aligned with our future goals.
        </p>
      </header>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {valuesData.map((value, index) => (
          <article
            key={index}
            className="bg-[rgba(89,43,130,0.13)] border-2 border-solid border-[rgba(255,255,255,0.77)] rounded-[15px] p-6 flex flex-col items-center backdrop-blur-[9.254px] shadow-lg transition-transform duration-300 hover:scale-105 hover:z-20"
          >
            {/* Circle Image */}
            <div className="w-8 md:w-16 h-8 md:h-16 mb-2 md:mb-4 flex justify-center items-center">
              <img
                src={value.image} // Dynamically use the image from the value object
                alt={value.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="text-white text-lg md:text-2xl font-semibold">{value.title}</h3>

            {/* Description */}
            <p className="text-[#ffffff] text-xs md:text-sm text-center mt-2 md:mt-4">
              {value.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
