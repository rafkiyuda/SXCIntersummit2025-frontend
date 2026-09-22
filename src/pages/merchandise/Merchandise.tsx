import React from "react";
import MerchandiseSection from "@/components/merchandise/MerchandiseSection";
import PaidPromoteSection from "@/components/merchandise/PaidPromoteSection";
import FillingSection from "@/components/merchandise/FillingSection"; 
import HandBookSection from "@/components/merchandise/HandBookSection"; 

const Merchandise: React.FC = () => {
  return (
    <div>
      <MerchandiseSection />
      <PaidPromoteSection />
      <FillingSection />
      <HandBookSection />
    </div>
  );
};

export default Merchandise;
