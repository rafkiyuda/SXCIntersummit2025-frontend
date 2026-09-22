import React, { useState } from "react";
import SideBarSection from "@/components/profile/SideBarSection";
import { Link } from "react-router-dom";

const BMCJoinTeam = () => {
  const [registrationType, setRegistrationType] = useState("individual");
  const [teamName, setTeamName] = useState("");
  const [role] = useState("Team Member (Auto-filled)");

  return (
    <div className="w-full mx-auto md:p-5 space-y-4 md:space-y-6 mt-4 md:mt-15">
      <div className="flex flex-col md:flex-row md:mr-5">
        {/* Sidebar */}
        <div className="w-1/4 ml-7">
          <SideBarSection /> {/* Sidebar positioned on the left */}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10 overflow-auto">
          <h2 className="flex justify-start items-center">
            <img
              src="/images/profile/BMC/businessmodel.png" // Ganti dengan gambar yang sesuai
              alt="BMC Icon"
              className="max-md:h-[5vh] w-auto object-contain"
            />
          </h2>
          <div className="rounded-[19.6px] bg-[#8257A9] mt-3 p-6 text-white text-center">
            <div className="flex items-center justify-center space-x-3">
              <img
                src="/images/profile/BMC/speaker.png"
                alt="BMC Icon"
                className="w-5 h-5"
              />
              <p className="text-[12px]">You currently have no announcements.</p>
            </div>
          </div>

          {/* Tasks Section */}
          <h2 className="text-white text-[32px] font-semibold mt-5">Register Your Team</h2>
          <div className="rounded-lg mt-5 overflow-hidden">
            <div className="space-y-4">
              <div className="p-6 bg-[#8257A9] rounded-lg border border-white/20">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                  <h3 className="text-[20px] font-semibold text-white">
                    Select Registration Type
                  </h3>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
                  <div className="space-y-2">
                    <label className="text-white text-lg flex items-center">
                      <input
                        type="radio"
                        name="registration-type"
                        value="individual"
                        checked={registrationType === "individual"}
                        onChange={() => setRegistrationType("individual")}
                        className="mr-2"
                      />
                      As Individual
                    </label>
                    <label className="text-white text-lg flex items-center">
                      <input
                        type="radio"
                        name="registration-type"
                        value="group"
                        checked={registrationType === "group"}
                        onChange={() => setRegistrationType("group")}
                        className="mr-2"
                      />
                      As Group / Team
                    </label>
                  </div>
                </div>

                {/* Team Name and Role Input (Visible when group is selected) */}
                
                {registrationType === "group" && (
                  <div className="mt-6 space-y-4">
                    <h3 className="text-[20px] font-semibold text-white">
                    Join Existing Team (For Team Members)
                  </h3>
                  <h3 className="text-[15px] font-semibold text-[#DDDDDD]">
                    Enter the code shared by your team leader to join the team.
                  </h3>
                    <div>
                      <label className="text-white text-lg">Team Code</label>
                      <input
                        type="text"
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        className="mt-2 w-full p-3 text-[#4F4F4F] bg-[#D9D9D9] rounded-md"
                        placeholder="Enter the team code shared with you… (e.g., JwKj2006)"
                      />
                    </div>
                    <div>
                      <label className="text-white text-lg">Role</label>
                      <input
                        type="text"
                        value={role}
                        readOnly
                        className="mt-2 w-full p-3 text-[#4F4F4F] bg-[#D9D9D9] rounded-md"
                      />
                    </div>
                  </div>
                )}

                {/* Submit Button and Link to Join Group */}
                <div className="flex justify-start mt-6 items-center space-x-4">
                  <button className="bg-[#5EC7ED] text-white py-1 px-4 rounded-md text-lg hover:bg-blue-600 transition">
                    Join Team
                  </button>

                  {/* Link to Join Team */}
                  <Link
                    to="/profile/home/bmc/register"
                    className="text-[#FFFFFF] text-sm hover:underline"
                  >
                     Create a team here!
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

export default BMCJoinTeam;
