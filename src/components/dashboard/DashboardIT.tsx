import React, { useEffect, useState, type JSX } from "react";
import { Link } from "react-router-dom";
import SideBarSection from "@/components/dashboard/sidebar";
import { useUserStore } from "@/store/userStore";
import type { Activity } from "@/types/types";
import { useGetActivityLog } from "@/hooks/Admin/useHandleAdminIT";
import { getDivisionLabel } from "@/utils/utils";

const DashboardIT = () => {
  const { user } = useUserStore();
  const { data } = useGetActivityLog();

  const [activityData, setActivityData] = useState<Activity[]>([]);

  useEffect(() => {
    if (data) {
      setActivityData(data);
    }
  }, [data]);
  // Recent activity data (5 most recent from activity log)
  // const recentActivities = [
  //   {
  //     no: "01",
  //     date: "2025-08-06T14:30:25",
  //     name: "nihil",
  //     role: "Admin BMC",
  //     division: "BMC",
  //     description: "succedssed to add new admmin",
  //     status: "Success",
  //   },
  //   {
  //     no: "02",
  //     date: "2025-08-05T09:15:42",
  //     name: "nihil",
  //     role: "Admin Chambers",
  //     division: "Chambers",
  //     description: "Changed profile picture",
  //     status: "Success",
  //   },
  //   {
  //     no: "03",
  //     date: "2025-08-04T16:20:10",
  //     name: "nihil",
  //     role: "Project Officer",
  //     division: "Project Officer",
  //     description: "Failed to update employee data",
  //     status: "Failed",
  //   },
  //   {
  //     no: "04",
  //     date: "2025-08-03T11:45:33",
  //     name: "nihil",
  //     role: "Admin BMC",
  //     division: "BMC",
  //     description: "Successed to add fund",
  //     status: "Success",
  //   },
  //   {
  //     no: "05",
  //     date: "2025-08-02T08:22:15",
  //     name: "nihil",
  //     role: "Admin IBCC",
  //     division: "IBCC",
  //     description: "Updated system configuration",
  //     status: "Success",
  //   },
  // ];

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

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "success":
        return "✅";
      case "failed":
        return "❌";
      case "pending":
        return "⏳";
      default:
        return "ℹ️";
    }
  };

  // Updated function to format date and time
  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  // New function to format just the date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // New function to format just the time (from ActivityLog component)
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
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
        {/* Main Content */}
        <main className="flex-1 p-6 space-y-6 overflow-auto">
          {/* Header Bar */}
          <header className="flex justify-between items-center mb-6">
            <h1 className="font-semibold text-xl select-none"></h1>
            <div className="flex items-center space-x-4"></div>
          </header>

          {/* Dashboard Title */}
          <h2 className="text-xl sm:text-2xl font-bold select-none text-white">
            Dashboard
          </h2>

          {/* Overview Cards */}
          {/* Info Box */}
          <section className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex-1 text-black bg-white rounded-lg p-4">
              <div className="flex items-center space-x-3 sm:space-x-4">
                {/* Using flex to align them side by side */}
                <div className="flex items-center justify-center bg-[#8257A9] h-8 w-8 sm:h-10 sm:w-10 rounded-full text-white text-ms flex-shrink-0">
                  <img
                    src="/images/dashboardadmin/profile.png"
                    alt="Profile Icon"
                    className="w-4 h-4 sm:w-6 sm:h-6 object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-black font-semibold text-sm sm:text-base">
                    WELCOME, {user?.name}
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm cursor-pointer truncate"></p>
                </div>
              </div>
            </div>
            <a
              href="https://github.com/witaawit/SxCIntersummit2025"
              className="flex-1 text-black bg-white rounded-lg p-4 max-w-lg "
            >
              <p className="text-center text-black">SxC Inter</p>
              <p className="text-center text-gray-600 text-sm">
                Documentation • GitHub
              </p>
            </a>
          </section>

          {/* Recent Activity */}
          <div className="p-4 sm:p-6 rounded-lg bg-gradient-to-br from-[#562780] to-[#8257A9] backdrop-blur-sm border border-white/20 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                Recent Activity
              </h3>
              <Link
                to="/dashboard/activitylog"
                className="text-sm text-white/80 hover:text-white transition-colors underline self-start sm:self-auto"
              >
                View All
              </Link>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {activityData.map((activity, index) => (
                <div
                  key={activity.id}
                  className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-3 sm:p-4 hover:bg-white/15 transition-all duration-200"
                >
                  {/* Mobile Layout */}
                  <div className="sm:hidden">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="text-base">
                          {getStatusIcon(activity.status)}
                        </div>
                        <span className="text-white font-medium text-sm">
                          {activity.activity}
                        </span>
                      </div>
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(
                          activity.status
                        )}`}
                      >
                        {activity.status}
                      </span>
                    </div>

                    <div className="mb-2">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        {activity.staff.role}
                      </span>
                    </div>

                    <p className="text-white/80 text-sm mb-2 line-clamp-3">
                      {activity.activity}
                    </p>

                    <div className="flex flex-col text-xs text-white/60 gap-1">
                      <span>{getDivisionLabel(activity.staff.divisionId)}</span>
                      <div className="flex flex-col">
                        <span>{formatDate(activity.createdAt)}</span>
                        <span>{formatTime(activity.createdAt)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden sm:flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      {/* Status Icon */}
                      <div className="text-lg mt-1">
                        {getStatusIcon(activity.status)}
                      </div>

                      {/* Activity Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-white font-medium text-sm">
                            {activity.activity}
                          </span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                            {activity.staff.role}
                          </span>
                        </div>

                        <p className="text-white/80 text-sm mb-2 line-clamp-2">
                          {activity.activity}
                        </p>

                        <div className="flex items-center space-x-3 text-xs text-white/60">
                          <span>
                            {getDivisionLabel(activity.staff.divisionId)}
                          </span>
                          <span>•</span>
                          <span>{formatDate(activity.createdAt)}</span>
                          <span>•</span>
                          <span>{formatTime(activity.createdAt)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="ml-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                          activity.status
                        )}`}
                      >
                        {activity.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State (if no activities) */}
            {activityData.length === 0 && (
              <div className="text-center py-6 sm:py-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-white/10 rounded-full flex items-center justify-center text-xl sm:text-2xl">
                  📊
                </div>
                <p className="text-white/80 text-base sm:text-lg">
                  No recent activities
                </p>
                <p className="text-xs sm:text-sm mt-2 text-white/60">
                  Check back later for new activities
                </p>
              </div>
            )}

            {/* Activity Summary */}
            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/20">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 text-sm">
                <span className="text-white/60 text-xs sm:text-sm">
                  {activityData.length} recent activities
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// Stat card component
const StatCard = ({
  bg,
  icon,
  title,
  value,
}: {
  bg: string;
  icon: JSX.Element;
  title: string;
  value: string | number;
}) => (
  <div className="flex items-center bg-white text-black rounded-lg shadow p-4 min-w-[200px]">
    <div
      className={`rounded-full p-3 mr-4 flex items-center justify-center ${bg}`}
    >
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-400">{title}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  </div>
);

// Icon button component
const IconButton = ({ name, icon }: { name: string; icon: JSX.Element }) => (
  <button
    type="button"
    aria-label={name}
    title={name}
    className="rounded-full bg-white p-2 text-gray-700 hover:bg-gray-200 transition-colors"
  >
    {icon}
  </button>
);

export default DashboardIT;
