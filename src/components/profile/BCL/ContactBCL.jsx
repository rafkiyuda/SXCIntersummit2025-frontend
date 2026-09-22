import React from "react";

const ContactBCL = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mt-4">
      <div className="text-white font-semibold text-lg mb-2 text-center">Need help or have any questions? Reach us!</div>
      <div className="space-y-2">
        <div className="flex items-center gap-2 bg-white/5 rounded-lg p-2">
          <img src="/images/profile/profile-icon.svg" alt="Khalishah" className="w-5 h-5" />
          <div>
            <div className="text-white font-medium text-sm">Khalishah</div>
            <div className="text-white/80 text-xs">085891811546 (WA)</div>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white/5 rounded-lg p-2">
          <img src="/images/profile/profile-icon.svg" alt="Zalfa" className="w-5 h-5" />
          <div>
            <div className="text-white font-medium text-sm">Zalfa</div>
            <div className="text-white/80 text-xs">082210772649 (WA)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBCL;
