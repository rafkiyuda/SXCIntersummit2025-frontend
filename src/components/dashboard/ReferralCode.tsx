// @ts-nocheck

import { useState, useMemo, useEffect } from "react";
import { Users, Gift, Edit, Trash2, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import SideBarSection from "@/components/dashboard/sidebar";
import Switch from "react-switch";
import {
  useDeleteReferral,
  useGetAllReferral,
  useGetReferralTotal,
} from "@/hooks/Admin/useHandleAdminIT";
import type { Referral } from "@/types/types";
import LoadingSpinner from "../ui/LoadingSpinner";
import { Toaster } from "react-hot-toast";
{
  /*npm install react-switch*/
}

const ReferralCode = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // State for filters
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // code referral, creation date, valid until, discount amount
  const [referralData, setReferralData] = useState<Referral[]>([
    // {
    //   no: "01.",
    //   code: "BMC.Gm",
    //   creationDate: "5 Aug 2025",
    //   validUntil: "29 Aug 2025",
    //   discountAmount: "10",
    //   status: true, // changed to boolean for toggle
    // },
    // {
    //   no: "02.",
    //   code: "BMC.Gm",
    //   creationDate: "5 Aug 2025",
    //   validUntil: "29 Aug 2025",
    //   discountAmount: "50.000",
    //   status: false, // changed to boolean for toggle
    // },
  ]);

  const { data } = useGetAllReferral();
  const { data: referralTotal } = useGetReferralTotal();

  const { deleteReferral, isLoading } = useDeleteReferral();

  useEffect(() => {
    if (data) {
      setReferralData(data);
    }
  }, [data]);

  const metrics = [
    {
      title: "Total Referral",
      value: data ? String(data.length) : "0",
      icon: Users,
      iconColor: "text-cyan-500",
      bgColor: "bg-cyan-50",
    },
    {
      title: "Total Amount Used",
      value: "0",
      icon: DollarSign,
      iconColor: "text-pink-500",
      bgColor: "bg-pink-50",
    },
    {
      title: "Total Discount Given",
      value: referralTotal ? String(referralTotal.total) : "0",
      icon: Gift,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50",
    },
  ];

  // Filtered data using useMemo for performance
  const filteredData = useMemo(() => {
    return referralData.filter((item) => {
      const matchesSearch =
        searchTerm === "" ||
        item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(item.discountAmount)
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        item.creationDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.validUntil.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "" ||
        (statusFilter === "active" && item.status) ||
        (statusFilter === "inactive" && !item.status);

      return matchesSearch && matchesStatus;
    });
  }, [referralData, searchTerm, statusFilter]);

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setStatusFilter("");
  };

  const handleStatusChange = (index) => {
    const updatedData = [...referralData];
    const originalIndex = referralData.findIndex(
      (item) => item.no === filteredData[index].no
    );
    updatedData[originalIndex].status = !updatedData[originalIndex].status;
    setReferralData(updatedData);
  };

  const navigateToAddReferral = () => {
    navigate("/dashboard/referral/addreferral"); // Navigate to add referral page
  };

  const navigateToEditReferral = (index) => {
    const originalIndex = referralData.findIndex(
      (item) => item.no === filteredData[index].no
    );
    // You can pass the referral data as state or use the index/id in the URL
    navigate("/dashboard/referral/editreferral", {
      state: {
        referralData: referralData[originalIndex],
        index: originalIndex,
      },
    });
    // Alternative: navigate(`/dashboard/editreferral/${index}`) if you prefer URL params
  };

  const handleDeleteReferral = (index) => {
    deleteReferral(index);
  };

  return (
    <>
      <Toaster />
      <div className="min-h-screen flex flex-col md:flex-row p-10">
        {/* Panggil sidebar */}
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
                  Referral Code
                </h1>
              </div>
              <button
                onClick={navigateToAddReferral} // Call the function to navigate
                className="bg-[#5CE7ED] hover:bg-accent/90 text-accent-foreground px-4 lg:px-6 py-2 rounded-lg font-medium self-start sm:self-auto"
              >
                New Referral
              </button>
            </div>

            {/* Overview Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center lg:gap-5">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={index}
                    className="bg-white border-0 shadow-lg rounded-lg p-3 lg:p-4 w-full max-w-xs mx-auto"
                  >
                    <div className="flex items-center space-x-2 lg:space-x-3">
                      <div
                        className={`p-2 lg:p-3 rounded-full ${metric.bgColor}`}
                      >
                        <Icon
                          className={`w-4 h-4 lg:w-5 lg:h-5 ${metric.iconColor}`}
                        />
                      </div>
                      <div>
                        <p className="text-xs lg:text-sm text-gray-600 font-medium">
                          {metric.title}
                        </p>
                        <p className="text-sm lg:text-lg font-bold text-gray-900">
                          {metric.value}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Filter and Search Section */}
            <div className="space-y-4">
              {/* Main Search and Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <SearchInput
                    value={searchTerm}
                    onChange={setSearchTerm}
                    placeholder="Search referral codes, amounts..."
                  />
                </div>
                {/* <div className="flex gap-2">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-2 rounded-lg bg-[#8257A9] border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div> */}
              </div>

              {/* Active Filters Display */}
              {(searchTerm || statusFilter) && (
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-white/60 text-sm">Active filters:</span>
                  {searchTerm && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm border border-purple-500/30">
                      Search: "{searchTerm}"
                      <button
                        onClick={() => setSearchTerm("")}
                        className="text-purple-300 hover:text-white"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {statusFilter && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm border border-blue-500/30">
                      Status: {statusFilter}
                      <button
                        onClick={() => setStatusFilter("")}
                        className="text-blue-300 hover:text-white"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  <button
                    onClick={clearFilters}
                    className="text-red-400 hover:text-red-300 text-sm underline"
                  >
                    Clear all
                  </button>
                </div>
              )}

              {/* Results count */}
              <div className="text-white/60 text-sm">
                Showing {filteredData.length} of {referralData.length} referral
                codes
              </div>
            </div>

            {/* Referral Table */}
            <div className="p-6 rounded-lg bg-[#8257A9] backdrop-blur-sm border border-white/20 shadow-lg">
              <div className="border-0 shadow-lg rounded-lg">
                <div className="">
                  <div className="overflow-x-auto">
                    <table className="w-full table-auto">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-2 lg:px-4 text-xs font-medium text-[#FFFFFF]">
                            No
                          </th>
                          <th className="text-left py-2 px-2 lg:px-4 text-xs font-medium text-[#FFFFFF]">
                            Code Referral
                          </th>
                          <th className="text-left py-2 px-2 lg:px-4 text-xs font-medium text-[#FFFFFF]">
                            Creation date
                          </th>
                          <th className="text-left py-2 px-2 lg:px-4 text-xs font-medium text-[#FFFFFF]">
                            Valid until
                          </th>
                          <th className="text-left py-2 px-2 lg:px-4 text-xs font-medium text-[#FFFFFF]">
                            Discount Percentage
                          </th>
                          {/* <th className="text-left py-2 px-2 lg:px-4 text-xs font-medium text-[#FFFFFF]">
                          Status
                        </th> */}
                          <th className="text-left py-2 px-2 lg:px-4 text-xs font-medium text-[#FFFFFF]">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredData.length > 0 ? (
                          filteredData.map((item, index) => (
                            <tr
                              key={index}
                              className="border-b border-gray-100"
                            >
                              <td className="py-2 lg:py-3 px-2 lg:px-4 text-xs text-[#FFFFFF]">
                                {item.no}
                              </td>
                              <td className="py-2 lg:py-3 px-2 lg:px-4 text-xs font-medium text-[#FFFFFF]">
                                {item.code}
                              </td>
                              <td className="py-2 lg:py-3 px-2 lg:px-4 text-xs text-[#FFFFFF]">
                                {item.creationDate}
                              </td>
                              <td className="py-2 lg:py-3 px-2 lg:px-4 text-xs text-[#FFFFFF]">
                                {item.validUntil}
                              </td>
                              <td className="py-2 lg:py-3 px-2 lg:px-4 text-xs text-[#FFFFFF]">
                                {item.discountAmount}%
                              </td>
                              {/* <td className="py-2 lg:py-3 px-2 lg:px-4">
                              <Switch
                                onChange={() => handleStatusChange(index)}
                                checked={item.status}
                                onColor="#86d3ff"
                                onHandleColor="#2693e6"
                                handleDiameter={20}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                height={14}
                                width={36}
                                className="react-switch"
                              />
                            </td> */}
                              <td className="py-2 lg:py-3 px-2 lg:px-4">
                                <div className="flex items-center space-x-1 lg:space-x-2">
                                  <button
                                    onClick={() =>
                                      navigateToEditReferral(index)
                                    }
                                    className="p-1 text-[#F3F314] hover:text-blue-600 transition-colors"
                                    title="Edit referral code"
                                  >
                                    <Edit className="w-3 h-3 lg:w-4 lg:h-4 cursor-pointer" />
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleDeleteReferral(item.id)
                                    }
                                    className="p-1 text-[#E11C48] hover:text-red-600 transition-colors"
                                    title="Delete referral code"
                                  >
                                    {isLoading ? (
                                      <LoadingSpinner />
                                    ) : (
                                      <Trash2 className="w-3 h-3 lg:w-4 lg:h-4 cursor-pointer" />
                                    )}
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="7" className="py-12 text-center">
                              <div className="text-white/60 text-lg mb-2">
                                {searchTerm || statusFilter
                                  ? "No referral codes found matching your filters"
                                  : "No referral codes found"}
                              </div>
                              <div className="text-white/40 text-sm mb-4">
                                {searchTerm || statusFilter
                                  ? "Try adjusting your filters or clearing them to see all referral codes"
                                  : "Create your first referral code to get started"}
                              </div>
                              {(searchTerm || statusFilter) && (
                                <button
                                  onClick={clearFilters}
                                  className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
                                >
                                  Clear Filters
                                </button>
                              )}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

// Enhanced Search input component
const SearchInput = ({
  value,
  onChange,
  placeholder = "Search referral codes...",
}) => (
  <div className="relative">
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
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
    {value && (
      <button
        onClick={() => onChange("")}
        className="absolute right-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    )}
  </div>
);

// Icon button component
const IconButton = ({ name, icon }) => (
  <button
    type="button"
    aria-label={name}
    title={name}
    className="rounded-full bg-white p-2 text-gray-700 hover:bg-gray-200 transition-colors"
  >
    {icon}
  </button>
);

export default ReferralCode;
