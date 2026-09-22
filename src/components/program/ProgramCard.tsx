import React from "react";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  level: string[];
  onClick?: () => void;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  image,
  category,
  level,
  onClick,
}) => (
  <div
    className="flex flex-col md:flex-row bg-white rounded-xl md:rounded-3xl shadow-lg p-3 md:p-6 mb-4 md:mb-8 items-center transform transition-transform duration-300 hover:scale-105 cursor-pointer"
    onClick={onClick}
  >
    <img
      src={image}
      alt={title}
      className="w-full md:w-60 h-20 md:h-40 rounded-2xl object-cover md:mb-0 md:mr-8"
    />
    <div className="w-full md:h-40 flex flex-col justify-start">
      <h2 className="text-lg md:text-2xl text-center md:text-start font-bold text-[#6c2eb7]">{title}</h2>
      <div className="flex flex-wrap gap-2 text-xs mt-2 mb-2">
        <span className="bg-[#a16ae8] text-white px-2 py-1 rounded-full min-w-[80px] text-center">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </span>
        {level.map((lvl, idx) => {
          let label = lvl;
          if (lvl === "fresh-graduate") label = "Fresh Graduate";
          else if (lvl === "high-school") label = "High School";
          else if (lvl === "public") label = "Public";
          else if (lvl === "university") label = "University";
          else label = lvl.charAt(0).toUpperCase() + lvl.slice(1).replace("-", " ");
          return (
            <span
              key={idx}
              className="bg-[#abdc57] text-black px-2 py-1 rounded-full min-w-[110px] text-center"
            >
              {label}
            </span>
          );
        })}
      </div>
      <p className="mb-4 text-xs md:text-base text-justify text-gray-700">{description}</p>
    </div>
  </div>
);

export default ProgramCard;
