import React from "react";

interface TopBarProps {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  selectedStage: string;
  setSelectedStage: (val: string) => void;
  selectedIds: Set<number>;
  setSelectedIds: (ids: Set<number>) => void;
  allIds: number[];
  onSave: () => void;
}

const TopBar: React.FC<TopBarProps> = ({
  searchTerm,
  setSearchTerm,
  selectedStage,
  setSelectedStage,
  selectedIds,
  setSelectedIds,
  allIds,
  onSave,
}) => (
  <div className="w-full flex items-center gap-4 bg-[#8257A9] rounded-2xl px-4 py-2 mb-6">
    <input
      type="text"
      placeholder="Search Name / Team…"
      className="w-64 pl-4 pr-4 py-2 rounded-xl border focus:outline-none bg-transparent text-white placeholder:text-white/60 border-white"
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
    />
    <select
      className="py-2 px-6 rounded-xl border focus:outline-none bg-[#6c2eb7] text-white border-none"
      value={selectedStage}
      onChange={e => setSelectedStage(e.target.value)}
    >
      <option value="Stage">Status</option>
      <option value="All">All</option>
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
    <button
      className="bg-blue-400 text-white px-8 py-2 rounded-xl font-bold"
      onClick={() => {
        if (selectedIds.size === allIds.length) {
          setSelectedIds(new Set());
        } else {
          setSelectedIds(new Set(allIds));
        }
      }}
    >
      Select All
    </button>
    <button
      className="bg-green-400 text-white px-10 py-2 rounded-xl font-bold"
      onClick={onSave}
    >
      Save Changes
    </button>
  </div>
);

export default TopBar;