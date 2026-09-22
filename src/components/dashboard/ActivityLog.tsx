import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import SideBarSection from "@/components/dashboard/sidebar";
import Switch from "react-switch"; // npm install react-switch
import { useGetActivityLog } from "@/hooks/Admin/useHandleAdminIT";
import type { Activity } from "@/types/types";
import { getDivisionLabel } from "@/utils/utils";

const ActivityLog = () => {
  const { data } = useGetActivityLog();

  const [activityData, setActivityData] = useState<Activity[]>([]);

  useEffect(() => {
    if (data) {
      setActivityData(data);
    }
  }, [data]);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "success":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "failed":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "pending":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div
      className="flex min-h-screen w-full p-10"
      style={{
        background:
          "linear-gradient(180deg, #562780 0%, #643D87 48.08%, #8257A9 100%)",
      }}
    >
      {/* Sidebar */}
      <div className="w-1/4 ml-7">
        <SideBarSection />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5 mt-3 overflow-auto">
        <main className="flex-1 p-6 space-y-6 overflow-auto">
          {/* Header Bar */}
          <header className="flex justify-between items-center mb-6">
            <h1 className="font-semibold text-xl select-none"></h1>
            <div className="flex items-center space-x-4">
              <IconButton
                name="Settings"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-gray-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 6.75l1.5 0m-1.5 0a3 3 0 012.27 1.18M11.25 6.75H9m4.5 0l1.5 0"
                    />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                }
              />
              <IconButton
                name="Notifications"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="#ff4d4d"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 17h5l-1.405-1.405a2.032 2.032 0 00-.563-1.453L18 14m-6-9v3m0 0v3m0-3a6 6 0 100 12 6 6 0 000-12z"
                    />
                  </svg>
                }
              />
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </header>

          {/* Dashboard Title */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div className="space-y-1">
              <h1 className="text-xl lg:text-2xl font-bold text-white">
                Activity Log
              </h1>
            </div>
          </div>

          {/* Filter and Search Section */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <SearchInput />
            </div>
            <div className="flex gap-2">
              <select className="px-4 py-2 rounded-lg bg-[#8257A9] border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option value="">All Roles</option>
                <option value="admin">Admin</option>
                <option value="staff">Staff</option>
                <option value="user">User</option>
              </select>
              <select className="px-4 py-2 rounded-lg bg-[#8257A9] border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option value="">All Status</option>
                <option value="success">Success</option>
                <option value="failed">Failed</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>

          {/* Activity Log Table */}
          <div className="bg-[#8257A9] backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden md:block">
              {/* Table Header */}
              <div className="bg-white/5 px-6 py-4 border-b border-white/10">
                <div className="grid grid-cols-7 gap-4 text-sm font-semibold text-white">
                  <div>No</div>
                  <div>Date</div>
                  <div>Username</div>
                  <div>Role</div>
                  <div>Division</div>
                  <div>Activity Description</div>
                  <div>Status</div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-white/10">
                {activityData
                  .sort(
                    (a, b) =>
                      new Date(b.createdAt).getTime() -
                      new Date(a.createdAt).getTime()
                  )
                  .map((item, index) => (
                    <div
                      key={item.id}
                      className="px-6 py-4 grid grid-cols-7 gap-4 text-sm text-white/90 hover:bg-white/5 transition-colors"
                    >
                      <div className="font-medium">{index + 1}</div>
                      <div>{formatDate(item.createdAt)}</div>
                      <div>{item.staff.name}</div>
                      <div>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                          {item.staff.role}
                        </span>
                      </div>
                      <div>{getDivisionLabel(item.staff.divisionId)}</div>
                      <div className="pr-4">{item.activity}</div>
                      <div>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(
                            item.status
                          )}`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-white/10">
              {activityData
                .sort(
                  (a, b) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
                )
                .map((item) => (
                  <div key={item.id} className="p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="text-sm font-medium text-white">
                        #{item.id}
                      </div>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-white/80">
                      <div>
                        <span className="font-medium">Date:</span>{" "}
                        {formatDate(item.createdAt)}
                      </div>
                      <div>
                        <span className="font-medium">User:</span>{" "}
                        {item.staff.name}
                      </div>
                      <div className="flex gap-2">
                        <span className="font-medium">Role:</span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                          {item.staff.role}
                        </span>
                      </div>
                      <div>
                        <span className="font-medium">Division:</span>{" "}
                        {getDivisionLabel(item.staff.divisionId)}
                      </div>
                      <div>
                        <span className="font-medium">Activity:</span>{" "}
                        {item.activity}
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Empty State */}
            {activityData.length === 0 && (
              <div className="p-12 text-center">
                <div className="text-white/60 text-lg mb-2">
                  No activity logs found
                </div>
                <div className="text-white/40 text-sm">
                  Try adjusting your filters or check back later
                </div>
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center">
            <div className="text-sm text-white/60">
              Showing 1 to {activityData.length} of {activityData.length}{" "}
              results
            </div>
            <div className="flex gap-2">
              <button
                className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 transition-colors disabled:opacity-50"
                disabled
              >
                Previous
              </button>
              <button className="px-3 py-2 rounded-lg bg-purple-500 border border-purple-400 text-white text-sm hover:bg-purple-600 transition-colors">
                1
              </button>
              <button
                className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 transition-colors disabled:opacity-50"
                disabled
              >
                Next
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// Search input component
const SearchInput = () => (
  <div className="relative">
    <input
      type="text"
      placeholder="Search activities..."
      className="w-full rounded-lg bg-[#8257A9] border border-white/20 text-white placeholder-white/60 px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white/20"
      aria-label="Search"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  </div>
);

// Icon button component
const IconButton = ({
  name,
  icon,
}: {
  name: string;
  icon: React.ReactNode;
}) => (
  <button
    type="button"
    aria-label={name}
    title={name}
    className="rounded-full bg-white p-2 text-gray-700 hover:bg-gray-200 transition-colors"
  >
    {icon}
  </button>
);

export default ActivityLog;
