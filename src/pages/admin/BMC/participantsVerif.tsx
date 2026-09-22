import React from "react";
import Sidebar from "../../../components/admin/bmc/Sidebar";
import type { UserProfile } from "../../../components/admin/bmc/Sidebar";
import ParticipantsTable from "@/components/admin/bmc/ParticipantsTable";

const dummyUser: UserProfile = {
    name: "Admin User",
    email: "admin@sxc.com"
};

const ParticipantsVerif: React.FC = () => {
    return (
    <div className="flex min-h-screen bg-[#7c51a1] overflow-x-hidden w-full">
            <Sidebar user={dummyUser} />
            <div className="flex-1 mt-25">
                <h1 className="text-xl font-bold">Participants Verification</h1>
                <ParticipantsTable />
            </div>
        </div>
    );
};

export default ParticipantsVerif;
