import { useGetUserAnnouncements } from "@/hooks/User/useGetUserAnnouncement";
import { useUserStore } from "@/store/userStore";
import type { Notification } from "@/types/types";
import { formatDateAnnouncement, formatTime } from "@/utils/utils";
import { Megaphone } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Announcement = ({ announcementLink }: { announcementLink: string }) => {
	const { user } = useUserStore();
	const navigate = useNavigate();
	const { data } = useGetUserAnnouncements(announcementLink);
	const [notificationData, setNotificationData] = useState<Notification[]>([]);
	const handleViewAnnouncementDetails = (id: number) => () => {
		const notif = notificationData.find((notif) => notif.id === id);
		navigate(`/profile/notifications/${id}`, {
			state: { notif: notif },
		});
	};
	useEffect(() => {
		if (data) {
			setNotificationData(data);
		}
	}, [data]);
	return (
		<>
			{/* Announcement */}
			<div className="text-left mb-4 flex justify-between items-center ">
				<h2 className="text-white text-3xl font-bold my-5">Announcement</h2>{" "}
			</div>
			<div className="px-4 py-6 bg-[#8257A9] rounded-3xl">
				{notificationData.length === 0 ? (
					<div className="flex items-center justify-center h gap-3">
						{/* Content */}
						<Megaphone size={30} />
						<p className="font-semibold text-xl">
							You currently have no announcements.
						</p>
					</div>
				) : (
					<>
						{notificationData.map((notification) => (
							<div
								key={notification.id}
								onClick={handleViewAnnouncementDetails(notification.id)}
								className="cursor-pointer bg-[#D9D9D9] rounded-2xl backdrop-blur-sm border-white/30 p-3 lg:p-4 mb-3 w-full hover:bg-white/95 transition-colors"
							>
								<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-3 lg:space-y-0">
									<div className="flex items-start space-x-3 flex-1">
										{/* Icon */}
										<div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
											<img
												src="/images/profile/pin.svg" // Path to your custom pin icon
												alt="Notification Bell"
												className="w-4 h-4" // Reduced icon size
											/>
										</div>

										{/* Content */}
										<div className="flex-1 min-w-0">
											<h3 className="text-[#000000] text-sm lg:text-base mb-1 break-words">
												{notification.title}
											</h3>
											<p className="text-[#4F4F4F] text-xs leading-relaxed break-words ">
												{notification.message}
											</p>
										</div>
									</div>

									{/* Right side content */}
									<div className="flex items-center justify-between lg:justify-start lg:items-start space-x-3 lg:ml-3">
										<div className="text-left lg:text-right">
											<p className="text-gray-500 text-xs">
												{formatDateAnnouncement(notification.createdAt)}
											</p>
											<p className="text-gray-500 text-xs">
												{formatTime(notification.createdAt)}
											</p>
										</div>
										<button className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-1 flex-shrink-0">
											<img
												src="/images/profile/mail-icon.svg" // Path for the mail icon
												alt="Mail Icon"
												className="w-4 h-4" // Reduced icon size
											/>
										</button>
									</div>
								</div>
							</div>
						))}
					</>
				)}
			</div>
		</>
	);
};

export default Announcement;
