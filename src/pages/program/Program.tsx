import React, { useState } from "react";
import ProgramCard from "../../components/program/ProgramCard";
import ProgramFilter from "../../components/program/ProgramFilter";
import { useNavigate } from "react-router-dom";

interface Program {
  title: string;
  description: string;
  image: string;
  category: string;
  level: string[];
  route?: string;
}

const programs: Program[] = [
  {
    title: "Business Model Canvas",
    description:
      "A competition for high school students to present innovative business ideas that solve real-life problems while showcasing entrepreneurial skills.",
    image: "images/allprograms/BMC-businessmodelcanvas.png",
    category: "competition",
    level: ["high-school"],
    route: "./BMC",
  },
  {
    title: "Business Competition Launchpad",
    description:
      "A global forum bringing together speakers and participants to discuss innovations, trends, and opportunities in today’s business landscape.",
    image: "images/allprograms/BCL-businesscompetitionlaunchpad.png",
    category: "event",
    level: ["high-school", "university"],
    route: "./BCL",
  },
  {
    title: "International Business Case Competition",
    description:
      "A global challenge where participants solve real-world business problems through collaboration and strategic thinking.",
    image: "images/allprograms/IBCC-internationalbusinesscasecompetition.png",
    category: "competition",
    level: ["university"],
    route: "./ibcc",
  },
  {
    title: "International Business Plan Competition",
    description:
      "A competition where participants design strategic, innovative, and future-ready business solutions for real-world challenges.",
    image: "images/allprograms/IBPC-internationalbusinessplancompetition.png",
    category: "competition",
    level: ["university"],
    route: "./ibpc",
  },
  {
    title: "Chambers",
    description:
      "A two-day webinar exploring career paths in Banking, Consulting, FMCG, and Startups, complete with classes, CV reviews, and industry case studies.",
    image: "images/allprograms/CHAMBERS.png",
    category: "event",
    level: ["university", "fresh-graduate"],
    route: "./chambers",
  },
  {
    title: "Company Visit",
    description:
      "An exclusive on-site program giving participants firsthand exposure to company operations, innovation, and technology in action.",
    image: "images/allprograms/COMPANYVISIT.png",
    category: "event",
    level: ["university", "fresh-graduate"],
    route: "",
  },
  {
    title: "International Conference",
    description:
      "A global forum bringing together speakers and participants to discuss innovations, trends, and opportunities in today’s business landscape.",
    image: "images/allprograms/INTERNATIONALCONFERENCE.png",
    category: "event",
    level: ["public"],
    route: "",
  },
];

const categories = ["all", "competition", "event"];
const levels = ["all", "high-school", "university", "public", "fresh-graduate"];

const AllPrograms = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const navigate = useNavigate();

  const filteredPrograms = programs.filter(
    (p) =>
      (selectedCategory === "all" || p.category === selectedCategory) &&
      (selectedLevel === "all" ||
        p.level.includes(selectedLevel) ||
        p.level.includes("public"))
  );

  const handleCardClick = (route: string) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#a5c7c7] to-[#9e9ec0] py-16 px-8">
      <div className="max-w-5xl mx-auto">
        <ProgramFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={categories}
          selectedLevel={selectedLevel}
          onLevelChange={setSelectedLevel}
          levels={levels}
        />
        {/*
          Change the gap-8 class to a smaller value like gap-4 or gap-6.
          I've changed it to gap-4 here.
        */}
        <div className="flex flex-col gap-0">
          {filteredPrograms.map((program, idx) => {
            const isClickable = program.route !== undefined;
            return (
              <ProgramCard
                key={idx}
                {...program}
                onClick={
                  isClickable
                    ? () => handleCardClick(program.route!)
                    : undefined
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllPrograms;
