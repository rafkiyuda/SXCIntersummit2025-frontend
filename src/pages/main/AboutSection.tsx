import React from "react";

import { AmbassadorsSection } from "@/components/aboutPage/AmbassadorsSection";
import { ChallengesSection } from "@/components/aboutPage/ChallengesSection";
import { HeaderSection } from "@/components/aboutPage/HeaderSection";
import { InfoCardSection } from "@/components/aboutPage/InfoCardSection";
import { ValueSection } from "@/components/aboutPage/ValueSection";
import TaglineSection from "@/components/aboutPage/TaglineSection";
import { FocusSection } from "@/components/aboutPage/FocusSection";
import MilestoneSection from "@/components/aboutPage/MilestoneSection";
import TestimonialsSection from "@/components/aboutPage/TestimonialsSection";
import { CallingOut } from "@/components/aboutPage/CallingOut";

export const AboutSection = () => {
  return (
    <div className="bg-black w-full overflow-hidden">
      <div className="flex flex-col w-full">
        <HeaderSection />

        </div>
        <div className="w-full bg-[linear-gradient(180deg,rgba(119,56,177,1)_10%,rgba(161,222,244,1)_100%,rgba(135,105,178,1)_100%)]">
          <InfoCardSection />
          <TaglineSection />
          <ValueSection />         
          <ChallengesSection />
          <FocusSection />
          <MilestoneSection />
          {/* <TestimonialsSection /> */}
          {/* <AmbassadorsSection /> */}
          <CallingOut />
        </div>
      </div>

  );
};
