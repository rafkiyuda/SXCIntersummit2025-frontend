import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useJoinIBCCteam } from "@/hooks/User/useHandleIBCC";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { ToastBar, Toaster } from "react-hot-toast";

const JoinIBCC = () => {
	const [teamCode, setTeamCode] = useState("");
	const [role] = useState("Team Member (Auto-filled)");
	const { isLoading, joinIBCCteam } = useJoinIBCCteam();
	const handleJoinTeam = () => {
		// Handle team joining logic here
		// ;
		joinIBCCteam({ code: teamCode });
	};

	return (
		<>
			<Toaster />
			<div className="w-full mx-auto">
				<div className="min-h-screen flex flex-col md:flex-row pl-8 md:pl-20 pr-8 md:pr-15 py-6">
					{/* Main Content */}
					<div className="flex-1 p-2 overflow-auto ">
						{/* Header Section */}
						<div className="mb-8">
							<h1 className="text-white text-[32px] md:text-[40px] font-bold mb-6 leading-tight">
								International Business Case
								<br />
								Competition (IBCC)
							</h1>
							<h2 className="text-white text-[24px] md:text-[28px] font-semibold">
								Join Your Team
							</h2>
						</div>

						{/* Join Team Form */}
						<div className="bg-[#8257A9] rounded-[20px] p-6 md:p-8 border border-white/20 max-w-full">
							<div className="mb-6">
								<h3 className="text-white text-[20px] md:text-[24px] font-semibold mb-2">
									Join Existing Team (For Team Members)
								</h3>
								<p className="text-white text-[14px] md:text-[16px] opacity-90">
									Enter the code shared by your team leader to join the team.
								</p>
							</div>

							<div className="space-y-4 md:space-y-6">
								{/* Team Code Input */}
								<div>
									<label className="block text-white text-[16px] md:text-[18px] font-medium mb-2">
										Team Code
									</label>
									<input
										type="text"
										value={teamCode}
										onChange={(e) => setTeamCode(e.target.value)}
										className="w-full p-3 md:p-4 text-[14px] md:text-[16px] text-[#4F4F4F] bg-[#D9D9D9] rounded-lg border-none outline-none"
										placeholder="Enter the 6 letter team code shared with you... (e.g., 77CA59)"
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
									onClick={handleJoinTeam}
									className="bg-[#5EC7ED] text-white py-3 px-6 rounded-lg text-[14px] md:text-[16px] font-medium hover:bg-blue-600 transition cursor-pointer"
								>
									{isLoading ? <LoadingSpinner /> : "Join Team"}
								</button>

								<Link
									to="/profile/home/ibcc/create"
									className="text-white text-[14px] md:text-[16px] hover:underline text-center md:text-left"
								>
									Create a team here!
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default JoinIBCC;
