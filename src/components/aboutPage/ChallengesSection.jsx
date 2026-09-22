import React from "react";

export const ChallengesSection = () => {
  const challengesData = [
    {
      id: 1,
      description: "Encourages problem-solving through business competitions",
      image: "/images/aboutpage/assetabout/refresh.svg",
    },
    {
      id: 2,
      description: "Builds essential skills through practical learning sessions",
      image: "/images/aboutpage/assetabout/puzzle.svg",
    },
    {
      id: 3,
      description: "Connects youth with professionals and real-world industries",
      image: "/images/aboutpage/assetabout/trophy.svg",
    },
    {
      id: 4,
      description: "Sparks global dialogue on how technology can shape a more sustainable and inclusive future",
      image: "/images/aboutpage/assetabout/group.svg",
    },
  ];

  return (
    <section
      className="w-full py-8 relative z-10 px-4 sm:px-8 lg:px-16"
      role="region"
      aria-label="Challenges Section"
    >
      <div className="text-center mb-8">
        <h2 className="flex justify-center items-center">
          <img
            src="/images/aboutpage/Challenges.png" // Ganti dengan gambar yang sesuai
            alt="Challenges Icon"
            className="max-h-[7vh] w-auto object-contain"
          />
        </h2>
      </div>

      {/* Flex Grid for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-3 md:p-15">
        {challengesData.map((challenge) => (
          <article
            key={challenge.id}
            className="flex flex-col items-center bg-[rgba(89,43,130,0.13)] border-[2.776px] border-solid border-[rgba(255,255,255,0.77)] backdrop-blur-[9.254px] text-white rounded-[15px] p-6 transition-transform duration-300 hover:scale-105 hover:z-20"
          >
            {/* Green Circle on Top */}
            <div className="w-8 md:w-16 h-8 md:h-16 mb-1 md:mb-4 flex justify-center items-center">
              <img
                src={challenge.image} // Dynamically use the image from the challenge object
                alt="Challenge Icon"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <p className="text-[#ffffff] text-xs md:text-sm text-center mt-3">
              {challenge.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
