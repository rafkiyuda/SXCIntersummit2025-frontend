import React from "react";
import Sidebar from "../../../components/admin/bmc/Sidebar";
import type { UserProfile } from "../../../components/admin/bmc/Sidebar";
import Announcement from "../../../components/admin/bmc/Announcement";

const dummyUser: UserProfile = {
	name: "Admin User",
	email: "admin@sxc.com"
};

const AnnouncementPage: React.FC = () => {
	return (
		<div className="flex min-h-screen bg-[#7c51a1]">
			<Sidebar user={dummyUser} />
            <Announcement />
		</div>
	);
};

export default AnnouncementPage;
