import React, { useState } from "react";
import SideBarSection from "@/components/profile/SideBarSection";
import { Link } from "react-router-dom";

const BMCRegister = () => {
  const [registrationType, setRegistrationType] = useState("individual");
  const [teamName, setTeamName] = useState("");
  const [role] = useState("Team Leader (Auto-filled)");

  return (
    <div className="w-full mx-auto md:p-5 space-y-4 md:space-y-6 mt-4 md:mt-15">
      <div className="flex flex-col md:flex-row md:mr-5">
        {/* Sidebar - Hidden on mobile, shown on desktop */}
        <div className="w-1/4 ml-7">
          <SideBarSection />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10 overflow-auto">
          <h2 className="flex justify-center md:justify-start items-center">
            <img
              src="/images/profile/BMC/businessmodel.png"
              alt="BMC Icon"
              className="h-[4vh] md:h-[5vh] w-auto object-contain"
            />
          </h2>
          
          {/* Announcement Card */}
          <div className="rounded-[19.6px] bg-[#8257A9] mt-3 p-4 md:p-6 text-white text-center">
            <div className="flex items-center justify-center space-x-2 md:space-x-3">
              <img
                src="/images/profile/BMC/speaker.png"
                alt="BMC Icon"
                className="w-4 h-4 md:w-5 md:h-5"
              />
              <p className="text-[10px] md:text-[12px]">You currently have no announcements.</p>
            </div>
          </div>

          {/* Registration Section */}
          <h2 className="text-white text-[24px] md:text-[32px] font-semibold mt-4 md:mt-5">
            Register Your Team
          </h2>
          
          <div className="rounded-lg mt-4 md:mt-5 overflow-hidden">
            <div className="space-y-4">
              <div className="p-4 md:p-6 bg-[#8257A9] rounded-lg border border-white/20">
                {/* Registration Type Selection */}
                <div className="mb-3 md:mb-4">
                  <h3 className="text-[16px] md:text-[20px] font-semibold text-white">
                    Select Registration Type
                  </h3>
                </div>

                <div className="flex flex-col space-y-3 md:space-y-0">
                  <label className="text-white text-[14px] md:text-lg flex items-center">
                    <input
                      type="radio"
                      name="registration-type"
                      value="individual"
                      checked={registrationType === "individual"}
                      onChange={() => setRegistrationType("individual")}
                      className="mr-2 w-4 h-4"
                    />
                    As Individual
                  </label>
                  <label className="text-white text-[14px] md:text-lg flex items-center">
                    <input
                      type="radio"
                      name="registration-type"
                      value="group"
                      checked={registrationType === "group"}
                      onChange={() => setRegistrationType("group")}
                      className="mr-2 w-4 h-4"
                    />
                    As Group / Team
                  </label>
                </div>

                {/* Team Name and Role Input */}
                {registrationType === "group" && (
                  <div className="mt-4 md:mt-6 space-y-3 md:space-y-4">
                    <h3 className="text-[16px] md:text-[20px] font-semibold text-white">
                      Create a Team (For Team Leader)
                    </h3>
                    <h3 className="text-[12px] md:text-[15px] font-semibold text-[#DDDDDD]">
                      You will be the Team Leader and can invite others to join using your Team Code.
                    </h3>
                    <div>
                      <label className="text-white text-[14px] md:text-lg">Team Name</label>
                      <input
                        type="text"
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        className="mt-1 md:mt-2 w-full p-2 md:p-3 text-[12px] md:text-[16px] text-[#4F4F4F] bg-[#D9D9D9] rounded-md"
                        placeholder="Enter your team name..."
                      />
                    </div>
                    <div>
                      <label className="text-white text-[14px] md:text-lg">Role</label>
                      <input
                        type="text"
                        value={role}
                        readOnly
                        className="mt-1 md:mt-2 w-full p-2 md:p-3 text-[12px] md:text-[16px] text-[#4F4F4F] bg-[#D9D9D9] rounded-md"
                      />
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row md:items-center justify-start mt-4 md:mt-6 space-y-3 md:space-y-0 md:space-x-4">
                  <button className="bg-[#5EC7ED] text-white py-1 px-4 rounded-md text-[14px] md:text-lg hover:bg-blue-600 transition">
                    Create Team
                  </button>

                  <Link
                    to="/profile/home/bmc/jointeam"
                    className="text-[#FFFFFF] text-[12px] md:text-sm hover:underline text-center md:text-left"
                  >
                    Got a team code? Join here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMCRegister;