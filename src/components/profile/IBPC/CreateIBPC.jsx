import React, { useState } from "react";
import SideBarIBPC from "@/components/profile/IBPC/sidebarIBPC";
import { Link } from "react-router-dom";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { useCreateIBPCteam } from "@/hooks/User/useHandleIBPC";
import { Toaster } from "react-hot-toast";

const CreateIBPC = () => {
  const [teamName, setTeamName] = useState("");
  const [role] = useState("Team Leader (Auto-filled)");
  const { isLoading, createIBPCteam } = useCreateIBPCteam();

  const handleCreateTeam = () => {
    createIBPCteam({ name: teamName });
  };

  return (
    <>
      <Toaster />
      <div className="w-full mx-auto ">
        <div className="min-h-screen flex flex-col md:flex-row pl-8 md:pl-20 pr-8 md:pr-15 py-6">
          {/* Main Content */}
          <div className="flex-1 p-2   overflow-auto">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-white text-[32px] md:text-[40px] font-bold mb-6 leading-tight">
                International Business Plan
                <br />
                Competition (IBPC)
              </h1>
              <h2 className="text-white text-[24px] md:text-[28px] font-semibold">
                Register Your Team
              </h2>
            </div>

            {/* Create Team Form */}
            <div className="bg-[#8257A9] rounded-[20px] p-6 md:p-8 border border-white/20 max-w-full">
              <div className="mb-6">
                <h3 className="text-white text-[20px] md:text-[24px] font-semibold mb-2">
                  Create a Team (For Team Leader)
                </h3>
                <p className="text-white text-[14px] md:text-[16px] opacity-90">
                  You will be the Team Leader and can invite others to join
                  using your Team Code.
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                {/* Team Name Input */}
                <div>
                  <label className="block text-white text-[16px] md:text-[18px] font-medium mb-2">
                    Team Name
                  </label>
                  <input
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="w-full p-3 md:p-4 text-[14px] md:text-[16px] text-[#4F4F4F] bg-[#D9D9D9] rounded-lg border-none outline-none"
                    placeholder="Enter your team name..."
                  />
                </div>

                {/* Role Input */}
                <div>
                  <label className="block text-white text-[16px] md:text-[18px] font-medium mb-2">
                    Role
                  </label>
                  <input
                    type="text"
                    value={role}
                    readOnly
                    className="w-full p-3 md:p-4 text-[14px] md:text-[16px] text-[#4F4F4F] bg-[#D9D9D9] rounded-lg border-none outline-none cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col md:flex-row md:items-center justify-start mt-6 md:mt-8 space-y-4 md:space-y-0 md:space-x-6">
                <button
                  onClick={handleCreateTeam}
                  className="bg-[#5EC7ED] text-white py-3 px-6 rounded-lg text-[14px] md:text-[16px] font-medium hover:bg-blue-600 transition"
                >
                  {isLoading ? <LoadingSpinner /> : "Create Team"}
                </button>

                <Link
                  to="/profile/home/ibpc/join"
                  className="text-white text-[14px] md:text-[16px] text-center md:text-left"
                >
                  Got a team code?{" "}
                  <span className="hover:underline">Join Team</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateIBPC;
