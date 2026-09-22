import React, { useEffect } from "react";
import SideBarIBPC from "@/components/profile/IBPC/sidebarIBPC";
import { Link, useNavigate } from "react-router-dom";
import useGetRegisteredPrograms from "@/hooks/User/useGetRegisteredPrograms";
import useGetUserData from "@/hooks/User/useGetUserData";

const RegisterIBPC = () => {
	const navigate = useNavigate();
	const { data } = useGetRegisteredPrograms();
	const { data: userData } = useGetUserData();
	useEffect(() => {
		if (data?.some((a) => a.programId === 2)) {
			navigate("/profile/home/IBPC/preliminary");
		}
	}, [data, userData, navigate]);

	return (
		<div className="w-full mx-auto ">
			<div className="min-h-screen flex flex-col md:flex-row px-20 py-6">
				{/* Main Content */}
				<div className="flex-1 p-4 md:p-10 overflow-auto">
					{/* Header Section */}
					<div className="text-center mb-6 md:mb-8">
						<h1 className="text-white text-[28px] md:text-[40px] font-bold mb-2 leading-tight">
							International Business Plan
							<br />
							Competition (IBPC)
						</h1>
						<h2 className="flex justify-center md:justify-start items-center mt-4">
							<img
								src="images/profile/IBPC/IBPC.svg"
								alt="IBPC Icon"
								className="h-[40px] md:h-[5vh] w-auto object-contain"
							/>
						</h2>
						<h2 className="text-white text-[18px] md:text-[24px] font-semibold mb-2 mt-4">
							Start Your Journey Here!
						</h2>

						<p className="text-white text-[12px] md:text-[16px] opacity-80 px-2 md:px-0">
							Whether you're ready to lead your own team or join one that's
							already formed,
							<br className="hidden md:block" />
							choose the option below to kick off your competition journey
						</p>
					</div>

					{/* Cards Section */}
					<div className="flex flex-col md:flex-row gap-4 md:gap-8 max-w-4xl mx-auto px-2 md:px-0">
						{/* Create New Team Card */}
						<div className="flex-1 bg-[#8257A9] rounded-[20px] p-5 md:p-8 border border-white/20">
							<div className="flex items-center mb-4">
								<div className="bg-[#5EC7ED] rounded-full p-3 mr-4">
									<svg
										className="w-6 h-6 text-white"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
									</svg>
								</div>
								<h3 className="text-white text-[16px] md:text-[20px] font-semibold">
									Create New
									<br />
									Team
								</h3>
							</div>

							<p className="text-white text-[12px] md:text-[14px] mb-6 opacity-90">
								Lead your team,
								<br />
								generate a code, invite
								<br />
								members, and manage
								<br />
								settings in one place.
							</p>

							<Link to="/profile/home/IBPC/create" className="">
								<button
									disabled={userData?.status === 1 ? true : false}
									className={`block w-full bg-[#5EC7ED] text-white py-2 px-4 rounded-md text-[14px] md:text-[16px] font-medium hover:bg-blue-600 transition text-center ${
										userData?.status === 1
											? "opacity-50 cursor-not-allowed"
											: "cursor-pointer"
									}`}
								>
									Create Team
								</button>
							</Link>
						</div>

						{/* Join Existing Team Card */}
						<div className="flex-1 bg-[#8257A9] rounded-[20px] p-5 md:p-8 border border-white/20 mt-4 md:mt-0">
							<div className="flex items-center mb-4">
								<div className="bg-[#A8D982] rounded-full p-3 mr-4">
									<svg
										className="w-6 h-6 text-white"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
									</svg>
								</div>
								<h3 className="text-white text-[16px] md:text-[20px] font-semibold">
									Join Existing
									<br />
									Team
								</h3>
							</div>

							<p className="text-white text-[12px] md:text-[14px] mb-6 opacity-90">
								Already have a code? Join
								<br />
								instantly and connect
								<br />
								with your team.
							</p>

							<Link to="/profile/home/IBPC/join">
								<button
									disabled={userData?.status === 1 ? true : false}
									className={`block w-full bg-[#A8D982] text-white py-2 px-4 rounded-md text-[14px] md:text-[16px] font-medium hover:bg-green-600 transition text-center ${
										userData?.status === 1
											? "opacity-50 cursor-not-allowed"
											: "cursor-pointer"
									}`}
								>
									Join Team
								</button>
							</Link>
						</div>
					</div>
					{userData?.status === 1 ? (
						<p className="mt-2 text-red-500 text-center">
							Please complete your profile in Profile Page before registering.
						</p>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default RegisterIBPC;
