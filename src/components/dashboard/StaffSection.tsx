// @ts-nocheck
import React, { useState, useMemo, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Edit, Trash2 } from "lucide-react";
import SideBarSection from "@/components/dashboard/sidebar";
import Switch from "react-switch"; // npm install react-switch
import { useDeleteStaff, useGetAllStaff } from "@/hooks/Admin/useHandleAdminIT";
import type { Staff } from "@/types/types";
import { Toaster } from "react-hot-toast";
import LoadingSpinner from "../ui/LoadingSpinner";

const staffData = [
  {
    id: 1,
    no: "01",
    staffName: "John Doe",
    staffEmail: "john.doe@company.com",
    division: "IT",
    role: "Admin BMC",
  },
  {
    id: 2,
    no: "02",
    staffName: "Jane Smith",
    staffEmail: "jane.smith@gmail.com",
    division: "HR",
    role: "Admin BCL",
  },
  {
    id: 3,
    no: "03",
    staffName: "Mike Johnson",
    staffEmail: "mike.johnson@gmail.com",
    division: "Finance",
    role: "Admin Chambers",
  },
];

const StaffSection = () => {
  const navigate = useNavigate();

  // State for filters
  const [searchTerm, setSearchTerm] = useState("");
  const [divisionFilter, setDivisionFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [staffList, setStaffList] = useState<Staff[]>([]);

  const { data } = useGetAllStaff();
  const { deleteStaff, isLoading } = useDeleteStaff();

  useEffect(() => {
    if (data) {
      setStaffList(data);
    }
  }, [data]);

  // Filtered data using useMemo for performance
  const filteredData = useMemo(() => {
    return staffList.filter((staff) => {
      const matchesSearch =
        searchTerm === "" ||
        staff.staffName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        staff.staffEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
        staff.division.toLowerCase().includes(searchTerm.toLowerCase()) ||
        staff.role.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDivision =
        divisionFilter === "" ||
        staff.division.toLowerCase() === divisionFilter.toLowerCase();

      const matchesRole =
        roleFilter === "" ||
        staff.role.toLowerCase() === roleFilter.toLowerCase();

      return matchesSearch && matchesDivision && matchesRole;
    });
  }, [staffList, searchTerm, divisionFilter, roleFilter]);

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setDivisionFilter("");
    setRoleFilter("");
  };

  // Navigate to edit staff
  const navigateToEditStaff = (staff) => {
    navigate("/dashboard/admins/edit-admin", {
      state: { staffData: staff },
    });
  };

  // Handle delete staff
  const handleDeleteStaff = (staffId) => {
    // if (window.confirm("Are you sure you want to delete this admin?")) {
    //   const updatedStaff = staffList.filter((staff) => staff.id !== staffId);
    //   setStaffList(updatedStaff);
    // }
    deleteStaff(staffId);
  };

  const getRoleColor = (role) => {
    switch (role.toLowerCase()) {
      case "admin":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      case "manager":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "supervisor":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "staff":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <>
      <Toaster />
      <div className="min-h-screen flex flex-col md:flex-row w-full p-10">
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
                  Admin Management
                </h1>
              </div>
              <button
                onClick={() => navigate("/dashboard/admins/add-admin")}
                className="bg-[#5CE7ED] hover:bg-accent/90 text-accent-foreground px-4 lg:px-6 py-2 rounded-lg font-medium self-start sm:self-auto"
              >
                Add New Admin
              </button>
            </div>

            {/* Filter and Search Section */}
            <div className="space-y-4">
              {/* Main Search and Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <SearchInput
                    value={searchTerm}
                    onChange={setSearchTerm}
                    placeholder="Search staff by name, email, division, or role..."
                  />
                </div>
                <div className="flex gap-2">
                  <select
                    value={divisionFilter}
                    onChange={(e) => setDivisionFilter(e.target.value)}
                    className="px-4 py-2 rounded-lg bg-[#8257A9] border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">All Divisions</option>
                    <option value="po">Project Officer</option>
                    <option value="it">IT</option>
                    <option value="bmc">BMC</option>
                    <option value="bcl">BCL</option>
                    <option value="ibcc">IBCC</option>
                    <option value="ibpc">IBPC</option>
                    <option value="chambers">Chambers</option>
                    <option value="company_visit">Company Visit</option>
                    <option value="international_conference">
                      International Conference
                    </option>
                  </select>
                  <select
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                    className="px-4 py-2 rounded-lg bg-[#8257A9] border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">All Roles</option>
                    <option value="ADMIN">Super Admin</option>
                    <option value="BMC_ADMIN">Admin BMC</option>
                    <option value="BCL_ADMIN">Admin BCL</option>
                    <option value="IBCC_ADMIN">Admin IBCC</option>
                    <option value="IBPC_ADMIN">Admin IBPC</option>
                    <option value="CHAMBERS_ADMIN">Admin Chambers</option>
                    <option value="COMPANY_VISIT_ADMIN">
                      Admin Company Visit
                    </option>
                    <option value="IC_ADMIN">
                      Admin International Conference
                    </option>
                    <option value="PO">Admin PO</option>
                  </select>
                </div>
              </div>

              {/* Active Filters Display */}
              {(searchTerm || divisionFilter || roleFilter) && (
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
                  {divisionFilter && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm border border-blue-500/30">
                      Division: {divisionFilter}
                      <button
                        onClick={() => setDivisionFilter("")}
                        className="text-blue-300 hover:text-white"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {roleFilter && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm border border-green-500/30">
                      Role: {roleFilter}
                      <button
                        onClick={() => setRoleFilter("")}
                        className="text-green-300 hover:text-white"
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
                Showing {filteredData.length} of {staffList.length} staff
                members
              </div>
            </div>

            {/* Staff Table */}
            <div className="bg-[#8257A9] backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
              {/* Desktop Table */}
              <div className="hidden md:block">
                {/* Table Header */}
                <div className="bg-white/5 px-6 py-4 border-b border-white/10">
                  <div className="grid grid-cols-6 gap-4 text-sm font-semibold text-white">
                    <div>No</div>
                    <div>Admin Name</div>
                    <div>Admin Email</div>
                    <div>Program</div>
                    <div>Role</div>
                    <div>Action</div>
                  </div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-white/10">
                  {filteredData.map((staff, index) => (
                    <div
                      key={staff.id}
                      className="px-6 py-4 grid grid-cols-6 gap-4 text-sm text-white/90 hover:bg-white/5 transition-colors"
                    >
                      <div className="font-medium">{index + 1}</div>
                      <div className="font-medium">{staff.staffName}</div>
                      <div className="truncate">{staff.staffEmail}</div>
                      <div>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                          {staff.division}
                        </span>
                      </div>
                      <div>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getRoleColor(
                            staff.role
                          )}`}
                        >
                          {staff.role}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center space-x-1 lg:space-x-2">
                          <button
                            onClick={() => navigateToEditStaff(staff)}
                            className="p-1 text-[#F3F314] hover:text-blue-600 transition-colors"
                            title="Edit admin"
                          >
                            <Edit className="w-3 h-3 lg:w-4 lg:h-4 cursor-pointer" />
                          </button>
                          <button
                            onClick={() => handleDeleteStaff(staff.id)}
                            className="p-1 text-[#E11C48] hover:text-red-600 transition-colors"
                            title="Delete admin"
                          >
                            <Trash2 className="w-3 h-3 lg:w-4 lg:h-4 cursor-pointer" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden divide-y divide-white/10">
                {filteredData.map((staff, index) => (
                  <div key={staff.id} className="p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="text-sm font-medium text-white">
                        #{index + 1}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getRoleColor(
                            staff.role
                          )}`}
                        >
                          {staff.role}
                        </span>
                        <div className="flex items-center space-x-1">
                          <button
                            onClick={() => navigateToEditStaff(staff)}
                            className="p-1 text-[#F3F314] hover:text-blue-600 transition-colors"
                            title="Edit admin"
                          >
                            <Edit className="w-4 h-4 cursor-pointer" />
                          </button>
                          <button
                            onClick={() => handleDeleteStaff(staff.id)}
                            className="p-1 text-[#E11C48] hover:text-red-600 transition-colors"
                            title="Delete admin"
                          >
                            {isLoading ? (
                              <LoadingSpinner />
                            ) : (
                              <Trash2 className="w-4 h-4 cursor-pointer" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-white/80">
                      <div>
                        <span className="font-medium">Name:</span>{" "}
                        {staff.staffName}
                      </div>
                      <div>
                        <span className="font-medium">Email:</span>{" "}
                        {staff.staffEmail}
                      </div>
                      <div className="flex gap-2">
                        <span className="font-medium">Division:</span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                          {staff.division}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty State */}
              {filteredData.length === 0 && (
                <div className="p-12 text-center">
                  <div className="text-white/60 text-lg mb-2">
                    {searchTerm || divisionFilter || roleFilter
                      ? "No staff members found matching your filters"
                      : "No staff members found"}
                  </div>
                  <div className="text-white/40 text-sm">
                    {searchTerm || divisionFilter || roleFilter
                      ? "Try adjusting your filters or clearing them to see all staff members"
                      : "Add your first staff member to get started"}
                  </div>
                  {(searchTerm || divisionFilter || roleFilter) && (
                    <button
                      onClick={clearFilters}
                      className="mt-4 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
                    >
                      Clear Filters
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center">
              <div className="text-sm text-white/60">
                Showing 1 to {filteredData.length} of {filteredData.length}{" "}
                results
              </div>
              <div className="flex gap-2">
                <button
                  className="cursor-pointer px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 transition-colors disabled:opacity-50"
                  disabled
                >
                  Previous
                </button>
                <button className="cursor-pointer px-3 py-2 rounded-lg bg-purple-500 border border-purple-400 text-white text-sm hover:bg-purple-600 transition-colors">
                  1
                </button>
                <button
                  className="cursor-pointer px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 transition-colors disabled:opacity-50"
                  disabled
                >
                  Next
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

// Enhanced Search input component
const SearchInput = ({ value, onChange, placeholder = "Search staff..." }) => (
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

export default StaffSection;
