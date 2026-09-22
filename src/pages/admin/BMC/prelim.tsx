import React, { useState } from "react";
import Sidebar from "../../../components/admin/bmc/Sidebar";
import TopBar from "../../../components/admin/bmc/TopBar";
import ParticipantTable from "../../../components/admin/bmc/PrelimTable";
import RoleChanger from "../../../components/admin/bmc/RoleChanger";
import { dummyUsers, dummyTableRows } from "../../../assets/dummyData";

export type MenuItem = {
  name: string;
  icon: string;
  count?: number;
};

export type UserProfile = {
  name: string;
  email: string;
};

const user = dummyUsers[0];
const mockParticipants = dummyTableRows;

const Prelim: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStage, setSelectedStage] = useState("All");
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());

  const filteredParticipants = mockParticipants.filter(p =>
    (searchTerm === "" ||
      p.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.team?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.teamCode?.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedStage === "All" || String(p.status) === selectedStage)
  );

  const allIds = filteredParticipants.map(p => p.id);

  const handleSave = () => {
    // Implement save logic here
    alert("Saved! Selected IDs: " + Array.from(selectedIds).join(", "));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#562780] via-[#6C3B97] to-[#8257A9] flex flex-col w-full md:flex-row">
      <Sidebar user={user} className="order-1 flex justify-center md:order-none md:mt-10" />
      <main className="flex-1 flex flex-col py-10 px-4 md:px-8 w-full order-2 md:order-none md:mt-20 overflow-x-hidden">
        <div>
          <TopBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedStage={selectedStage}
            setSelectedStage={setSelectedStage}
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
            allIds={allIds}
            onSave={handleSave}
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-start w-full">
          <div className="w-full">
            <ParticipantTable
              participants={filteredParticipants}
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
            />
            <RoleChanger />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Prelim;