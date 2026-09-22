import {
	useGetIBPCTeamDetails,
	useGetIBPCteamMembers,
} from "@/hooks/User/useHandleIBPC";
import type { TeamMember } from "@/types/types";
import React, { useEffect, useState } from "react";

const IBPCTeamStatus = () => {
	const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
	const { isLoading, data: teamDetailsData } = useGetIBPCTeamDetails();
	const { data: teamMembersData } = useGetIBPCteamMembers();
	useEffect(() => {
		if (teamMembersData) {
			teamMembersData.sort((a: TeamMember, b: TeamMember) => {
				if (a.role === "LEADER" && b.role !== "LEADER") return -1;
				if (a.role !== "LEADER" && b.role === "LEADER") return 1;
				return 0;
			});
			setTeamMembers(teamMembersData || []);
		}
	}, [teamDetailsData, teamMembersData]);

	// Function to determine the team status based on the members' statuses
	const getTeamStatus = (statusId: number) => {
		const allVerified = statusId === 14;
		const anyIncomplete = statusId === 15;

		if (allVerified) {
			return "verified";
		} else if (anyIncomplete) {
			return "incomplete";
		}
		return "verified"; // Default to verified if no other conditions match
	};

	const teamStatus = getTeamStatus(teamDetailsData?.status || 0); // Get the current team status

	// Team status component
	const TeamStatus = ({ status }: { status: string }) => {
		let statusClass = "";
		let statusText = "";
		let icon = "";
		let bgColor = "";

		if (status === "verified") {
			statusClass = "bg-[#60D394]"; // Green
			icon = "/images/profile/BMC/verified.png";
			statusText = "All team members have been verified. You’re good to go!";
		} else if (status === "verifying") {
			statusClass = "bg-[#FFB74D]"; // Yellow
			icon = "/images/profile/BMC/verifying.png";
			statusText = "Some team members are still being verified.";
		} else if (status === "incomplete") {
			statusClass = "bg-[#F44336]"; // Red
			icon = "/images/profile/BMC/incomplete.png";
			statusText = "One or more members failed verification. Please check.";
		}

		return (
			<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
				<div>
					<p className="text-white font-medium">
						Team name: {teamDetailsData?.name || "No team name"}
					</p>
					<p className="text-white font-medium">
						Team Code: {teamDetailsData?.code || "No team code"}
					</p>
				</div>

				{/* Conditional Status */}
				<div
					className={`flex items-center ${statusClass} border border-[#777] rounded-[10px] text-white text-sm p-2 w-auto mt-2 lg:mt-0`}
				>
					<img src={icon} alt="BMC Icon" className="w-5 h-5" />
					<div className="ml-1 text-[12px]">
						<p className="text-left">
							Team Status: {status.charAt(0).toUpperCase() + status.slice(1)}
						</p>
						<p className="text-left">{statusText}</p>
					</div>
				</div>
			</div>
		);
	};
	return (
		<>
			<h2 className="text-white text-xl font-semibold mt-4">
				Team Information
			</h2>
			<div className="bg-[#8257A9] backdrop-blur-sm border mt-2 border-white/20 rounded-lg overflow-hidden">
				<div className="p-6">
					{/* Team Code */}
					<TeamStatus status={teamStatus} />{" "}
					{/* Display the correct team status */}
					{/* Team Members */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
						<div className="lg:col-span-2">
							<div className="grid grid-cols-1 sm:grid-cols-2 mt-3 gap-4">
								{[
									...teamMembers,
									...Array(3 - teamMembers.length).fill(null),
								].map((member, index) => (
									<div
										key={index}
										className={`flex items-center p-3 rounded-lg ${
											member
												? "bg-white/10" // real member card
												: "border-2 border-dashed border-white/30 bg-transparent"
										}`}
									>
										{member ? (
											<>
												{/* Leader / Member Icon */}
												<div className="flex items-center justify-center h-5 w-5 rounded-full text-white text-ms mr-2">
													<img
														src={
															member.role === "LEADER"
																? "/images/profile/BMC/crown.png"
																: "/images/profile/profile-icon.svg"
														}
														alt=""
														className="w-5 h-5 object-cover"
													/>
												</div>

												{/* Name + Role */}
												<div className="flex-1">
													<p className="text-[12px] font-medium text-white">
														{member.user.name}
													</p>
													<p className="text-[10px] text-white/70">
														{member.role}
													</p>
												</div>

												{/* Status */}
												<div className="flex items-center space-x-1">
													{member.user.status === 2 ? (
														<img
															src="/images/profile/BMC/verified.png"
															alt="verified"
															className="w-5 h-5"
														/>
													) : (
														<img
															src="/images/profile/BMC/Vector.png"
															alt="verifying"
															className="w-5 h-5"
														/>
													)}
													<span className="text-xs text-white/70">
														{member.status}
													</span>
												</div>
											</>
										) : (
											// Placeholder card
											<div className="flex-1 flex justify-center items-center text-center">
												<p className="text-[12px] font-medium text-white/60">
													Ask Others to Join with Your Team Code!
												</p>
											</div>
										)}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default IBPCTeamStatus;
