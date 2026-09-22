import { formatDateAnnouncement, formatTime } from "@/utils/utils";
import { UserRound } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
type Notification = {
	id: string;
	title: string;
	message: string;
	date: string;
	createdAt: string;
	from: string;
};

type NotificationDetailsProps = {
	notif: Notification;
};

const NotificationDetails = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [notifData, setNotifData] = useState<Notification>({
		id: "",
		title: "",
		message: "",
		date: "",
		createdAt: "",
		from: "",
	});

	useEffect(() => {
		if (!location.state) return;

		const { notif } = location.state as NotificationDetailsProps;
		setNotifData(notif);
	}, [notifData, location.state]);

	return (
		<div className="flex-1 mx-auto md:px-20 py-6 mt-5">
			<div className="flex flex-col md:flex-row">
				{/* Notifications Section */}
				<div className="flex-1  overflow-auto">
					<div className="flex justify-start items-center">
						<h2 className="text-white text-[25px] font-semibold">
							Notifications
						</h2>{" "}
						{/* Reduced font size */}
					</div>

					{/* Container for Notifications */}
					<div className=" px-4 py-6 bg-[#8257A9] rounded-3xl">
						{/* Scrollable area for notifications */}
						<div className="space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar">
							{[notifData].map((notification) => (
								<>
									<div
										key={notification.id}
										className="bg-[#D9D9D9] rounded-2xl backdrop-blur-sm border-white/30 w-full p-3 lg:p-4 mb-3 "
									>
										<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-3 lg:space-y-0 px-3 ">
											<div className="flex justify-center items-center">
												<UserRound size={50} color="#000000" />
												<div className="ml-3">
													<p className="text-xl font-bold text-black">
														Manager of Program
													</p>
													<div className="flex justify-center items-center w">
														<p className="text-lg font-bold text-black">
															From: MoP@gmail.com
														</p>
														<span className="flex text-gray-500 font-bold text-lg ml-5">
															To:{" "}
															<p className="ml-2 font-bold text-black">Me</p>
														</span>
													</div>
												</div>
											</div>

											<div className="text-left flex text-xl lg:text-right">
												<p className="text-gray-500 text-xs">
													{formatDateAnnouncement(notifData.createdAt)} -
												</p>
												<p className="text-gray-500 text-xs">
													{formatTime(notifData.createdAt)}
												</p>
											</div>
										</div>
									</div>

									{/* Notif Contents */}
									<div className="bg-[#D9D9D9] rounded-2xl backdrop-blur-sm border-white/30 w-full p-3 lg:p-4 mb-3 mt-10">
										<div className="flex flex-col lg:flex-row lg:items-start  space-y-3 lg:space-y-0 px-3 ">
											<div className="">
												<p className="text-2xl font-bold text-black">
													{notifData.title}
												</p>

												<p className="font-bold text-gray-500 text-lg">
													{notifData.message}
												</p>
											</div>
										</div>
									</div>
								</>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotificationDetails;
