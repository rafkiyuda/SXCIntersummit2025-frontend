import React from "react";
import Registration from "@/components/programIBPC/Registeration";
import IbpcDefinition from "@/components/programIBPC/ibpcDefinition";
import Timeline from "@/components/programIBPC/Timeline";
import PrizePool from "@/components/programIBPC/PrizePool"; 
import Benefits from "@/components/programIBPC/Benefits";
import FAQIBPC from "@/components/programIBPC/FAQIBPC";

const programIBPC = () => {
  return(
    <div>
      <Registration/>
      <IbpcDefinition/>
      <Timeline/>
      <PrizePool/>
      <Benefits/>
      <FAQIBPC/>
    </div>
  )

}

export default programIBPC