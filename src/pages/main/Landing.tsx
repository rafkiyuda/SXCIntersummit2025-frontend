import { recentCompetition, recentEvent } from "@/assets/landingPageData";
import { FooterSection } from "@/components/aboutPage/FooterSection";
import FAQHomePage from "@/components/homePage/FAQHomePage";
import LandingPageTimeline from "@/components/homePage/LandingPageTimeline";
import MediaPartner from "@/components/homePage/MediaPartner";
import RecentCard from "@/components/homePage/RecentCard";
import {
  CircleArrowUp,
  MoveUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  const [eventIndex, setEventIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);

  // Carousel logic
  const maxVisible = 3;
  const totalEvents = recentEvent.length;
  const canScroll = totalEvents > maxVisible;
  const visibleEvents = canScroll
    ? recentEvent.slice(eventIndex, eventIndex + maxVisible)
    : recentEvent;

  const handlePrev = () => {
    setDirection("left");
    setEventIndex((prev) => Math.max(prev - 1, 0));
  };
  const handleNext = () => {
    setDirection("right");
    setEventIndex((prev) => Math.min(prev + 1, totalEvents - maxVisible));
  };

  return (
    <>
      <Toaster />
      <div className="min-h-screen relative flex items-center justify-center flex-col bg-gradient-to-t from-[#97d3eb] to-[#592B83] overflow-hidden">
        {/* Lights */}
        <img
          src="/images/homepage/leftLight.png"
          alt=""
          className="absolute top-0 left-0 max-w-[100vw]"
          style={{ transform: "scale(1.5)" }}
        />
        <img
          src="/images/homepage/rightLight.png"
          className="absolute top-0 right-0 max-w-[100vw]"
          alt=""
          style={{ transform: "scale(1.5)" }}
        />

        {/* Hero Section */}
        <img
          src="/images/homepage/eclipse.png"
          className="absolute top-50 w-full z-10"
          alt=""
        />

        <div className="z-20 flex mt-30 md:mt-70 justify-center items-center flex-col text-center max-md:mx-5 h-full w-full px-4">
          <h1
            className="text-2xl md:text-7xl font-extrabold mb-2 flex bg-gradient-to-r from-[#7B5CB6] via-[#7BC6E2] to-[#B6E2A1] bg-clip-text text-transparent drop-shadow-lg"
            style={{
              WebkitTextStroke: "1px white",
              textShadow: "0 4px 16px rgba(0,0,0,0.15)",
            }}
          >
            StudentsxCEOs<br/>International Summit 2025
          </h1>
          <h2
            className="text-lg italic md:text-3xl font-extrabold mb-2 pt-3 flex bg-gradient-to-r from-[#7B5CB6] via-[#694a90] to-[#b295e6] bg-clip-text text-transparent drop-shadow-lg"
            style={{
              WebkitTextStroke: "0.5px white",
              textShadow: "0 4px 16px rgba(0,0,0,0.15)",
            }}
          >
            Bridge the Future: Leveraging Technology<br/>to Accelerate Business Innovation and Growth
          </h2>

          <button
            className="hover:opacity-80 mt-8 md:mt-10 px-6 md:px-8 rounded-full py-2 md:py-3 bg-[#8257A9] text-white text-lg md:text-2xl flex items-center gap-3 transition-all duration-300 hover:scale-105 mx-auto"
            // onClick={() => navigate("/login")}
          >
            Get Started{" "}
            <MoveUpRight
              size={28}
              className="md:size-[40px] animate-arrowFadeUp"
            />
          </button>
        </div>

        {/* Recent Competition */}
        <div className="z-20 w-full mt-12 md:mt-36 px-7 md:px-20 gap-5">
          <p className="text-center font-semibold text-xl md:text-2xl my-5">
            Competitions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {recentCompetition.slice(0, 3).map((item, index) => (
              <RecentCard key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Recent Event */}
        <div className="z-20 w-full mt-12 md:mt-20 px-7 md:px-20">
          <p className="text-center font-semibold text-xl md:text-2xl my-5">
            Events
          </p>
          <div className="relative flex items-center min-h-[270px]">
            {canScroll && (
              <button
                onClick={handlePrev}
                disabled={eventIndex === 0}
                className={`absolute left-0 z-10 cursor-pointer bg-white border-2 border-[#8257A9] text-[#8257A9] rounded-full p-2 shadow-lg transition-all duration-200 hover:bg-[#8257A9] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed`}
                aria-label="Previous"
              >
                <ChevronLeft size={28} />
              </button>
            )}
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-5 w-full mx-auto transition-all duration-500 ${
                direction === "left"
                  ? "animate-slideLeft"
                  : direction === "right"
                  ? "animate-slideRight"
                  : ""
              }`}
              onAnimationEnd={() => setDirection(null)}
            >
              {visibleEvents.map((item, index) => (
                <RecentCard key={index + eventIndex} {...item} />
              ))}
            </div>
            {canScroll && (
              <button
                onClick={handleNext}
                disabled={eventIndex >= totalEvents - maxVisible}
                className={`absolute right-0 z-10 bg-white border-2 cursor-pointer border-[#8257A9] text-[#8257A9] rounded-full p-2 shadow-lg transition-all duration-200 hover:bg-[#8257A9] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed`}
                aria-label="Next"
              >
                <ChevronRight size={28} />
              </button>
            )}
          </div>
        </div>
        {/* Timeline */}
        <LandingPageTimeline />

        {/* FAQ */}
        <FAQHomePage />

        {/* Media Partner */}
        <MediaPartner />
      </div>
      {/* Animation CSS */}
      <style>
        {`
          @keyframes slideLeft {
            0% { opacity: 0; transform: translateX(-40px);}
            100% { opacity: 1; transform: translateX(0);}
          }
          @keyframes slideRight {
            0% { opacity: 0; transform: translateX(40px);}
            100% { opacity: 1; transform: translateX(0);}
          }
          .animate-slideLeft {
            animation: slideLeft 0.4s;
          }
          .animate-slideRight {
            animation: slideRight 0.4s;
          }
        `}
      </style>
    </>
  );
};

export default Landing;
