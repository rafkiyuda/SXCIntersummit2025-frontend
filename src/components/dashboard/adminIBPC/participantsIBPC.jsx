import React, { useState, useMemo, useEffect } from "react";
import {
  Users,
  Eye,
  Search,
  X,
  Menu,
  Bell,
  Megaphone,
  UserCheck,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import useAuth from "@/hooks/Guest/useAuth";
import { formatDate } from "@/utils/utils";
import {
  useGetIBPCParticipants,
  useSearchIBPCTeam,
} from "@/hooks/Admin/useHandleAdminIBPC";

function getFilePathByType(data, type) {
  if (!data) return null;
  const entry = data.find((item) => item.type === type);
  return entry?.Files?.[0]?.filePath ?? null;
}

const ParticipantsIBPC = () => {
  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();
  const {
    data: participants,
    isLoading,
    isError,
    error,
  } = useSearchIBPCTeam(keyword);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: allParticipants } = useGetIBPCParticipants();
  const { logout } = useAuth();

  const [participantData, setParticipantData] = useState([]);
  useEffect(() => {
    if (allParticipants) {
      setParticipantData(allParticipants);
    }
  }, [allParticipants]);

  const clearSearch = () => {
    setKeyword("");
    setCurrentPage(1);
  };

  const filteredData = useMemo(() => {
    if (keyword) {
      const participants = participantData.filter((p) =>
        p.user.name.toLowerCase().includes(keyword.toLowerCase())
      );
      return participants;
    }
    return allParticipants;
  }, [keyword, allParticipants, participantData]);

  // Pagination calculations
  const totalPages = Math.ceil((filteredData?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData?.slice(startIndex, endIndex) || [];

  // Reset to page 1 when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [keyword]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePreview = (participant) => {
    const filePath = getFilePathByType(participant.user.Submission, "IDCARD");
    if (filePath) {
      window.open(filePath, "_blank");
    } else {
      alert("File tidak ditemukan untuk peserta ini.");
    }
  };

  const handleAnnounceClick = () => {
    navigate("/dashboard/ibpc/announcement");
  };

  const handleNotificationClick = () => {
    navigate("/dashboard/ibpc/notifications");
  };

  const handleParticipantsClick = () => {
    navigate("/dashboard/ibpc/participants");
  };

  const handleTeamVerificationClick = () => {
    navigate("/dashboard/ibpc");
  };

  const handleGeneralVerificationClick = () => {
    navigate("/dashboard/ibpc/general-verification");
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Pagination component
  const Pagination = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex items-center justify-between px-4 py-3 bg-white/10 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <span className="text-white text-sm">
            Showing {startIndex + 1} to {Math.min(endIndex, filteredData?.length || 0)} of {filteredData?.length || 0} entries
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded-lg ${
              currentPage === 1
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-purple-600 text-white hover:bg-purple-700'
            } transition-colors`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          {startPage > 1 && (
            <>
              <button
                onClick={() => handlePageChange(1)}
                className="px-3 py-1 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors text-sm"
              >
                1
              </button>
              {startPage > 2 && <span className="text-white">...</span>}
            </>
          )}
          
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                currentPage === number
                  ? 'bg-purple-800 text-white font-bold'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
            >
              {number}
            </button>
          ))}
          
          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && <span className="text-white">...</span>}
              <button
                onClick={() => handlePageChange(totalPages)}
                className="px-3 py-1 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors text-sm"
              >
                {totalPages}
              </button>
            </>
          )}
          
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-lg ${
              currentPage === totalPages
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-purple-600 text-white hover:bg-purple-700'
            } transition-colors`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#8257a9]">
      {/* Header */}
      <header className="relative px-4 sm:px-6 py-4">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
          {/* Top Row - Logo and Mobile Menu */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="/images/logo-intersummit-5.png"
                  alt="International Summit Logo"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-white hover:bg-purple-600 rounded-lg"
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-80 lg:mx-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Name.."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-full pl-10 pr-10 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
              />
              {keyword && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Main Menu and Logout */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <h3 className="text-white font-medium mb-3">Main Menu</h3>
              {/* Top Row - 3 items */}
              <div className="flex items-center space-x-2 mb-2">
                <button
                  onClick={handleAnnounceClick}
                  className="flex items-center space-x-2 text-white hover:bg-white/20 px-3 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  <Megaphone className="w-4 h-4" />
                  <span>Announce</span>
                </button>
                <button
                  onClick={handleNotificationClick}
                  className="flex items-center space-x-2 text-white hover:bg-white/20 px-3 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  <Bell className="w-4 h-4" />
                  <span>Notification</span>
                </button>
                <button
                  onClick={handleParticipantsClick}
                  className="flex items-center space-x-2 bg-purple-800 text-white px-3 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  <Users className="w-4 h-4" />
                  <span>Participants</span>
                </button>
              </div>
              {/* Bottom Row - 2 items */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleTeamVerificationClick}
                  className="flex items-center space-x-2 text-white hover:bg-white/20 px-3 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Teams</span>
                </button>
                {/* <button
                  onClick={handleGeneralVerificationClick}
                  className="flex items-center space-x-2 text-white hover:bg-white/20 px-3 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  <CheckSquare className="w-4 h-4" />
                  <span>General Verification</span>
                </button> */}
              </div>
            </div>

            <button
              onClick={() => logout()}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 text-sm transition-colors cursor-pointer"
            >
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu (shown when toggled) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h3 className="text-white font-medium mb-2">Main Menu</h3>
            <div className="grid grid-cols-1 gap-2">
              <button
                onClick={handleAnnounceClick}
                className="flex items-center space-x-2 text-white hover:bg-white/20 px-3 py-2 rounded-lg transition-colors cursor-pointer"
              >
                <Megaphone className="w-4 h-4" />
                <span>Announce</span>
              </button>
              <button
                onClick={handleNotificationClick}
                className="flex items-center space-x-2 text-white hover:bg-white/20 px-3 py-2 rounded-lg transition-colors cursor-pointer"
              >
                <Bell className="w-4 h-4" />
                <span>Notification</span>
              </button>
              <button
                onClick={handleParticipantsClick}
                className="flex items-center space-x-2 bg-purple-800 text-white px-3 py-2 rounded-lg transition-colors cursor-pointer"
              >
                <Users className="w-4 h-4" />
                <span>Participants</span>
              </button>
              <button
                onClick={handleTeamVerificationClick}
                className="flex items-center space-x-2 text-white hover:bg-white/20 px-3 py-2 rounded-lg transition-colors cursor-pointer"
              >
                <UserCheck className="w-4 h-4" />
                <span>Teams</span>
              </button>
              {/* <button
                onClick={handleGeneralVerificationClick}
                className="flex items-center space-x-2 text-white hover:bg-white/20 px-3 py-2 rounded-lg transition-colors cursor-pointer"
              >
                <CheckSquare className="w-4 h-4" />
                <span>General Verification</span>
              </button> */}
              <button
                onClick={() => logout()}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg flex items-center space-x-2 justify-center transition-colors cursor-pointer"
              >
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Search Results Info */}
      {keyword && (
        <div className="px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-sm">
          <p className="text-white/90 text-sm">
            Showing {currentData?.length} of {filteredData?.length} participants
            {keyword && ` for "${keyword}"`}
          </p>
        </div>
      )}

      {/* Main Content */}
      <main className="p-4 sm:p-6">
        <div className="bg-[#8257A9] rounded-lg overflow-hidden shadow-lg">
          {/* Mobile Card View */}
          <div className="lg:hidden">
            {currentData?.length > 0 ? (
              <div className="divide-y divide-gray-200">
                {currentData.map((participant, index) => (
                  <div key={participant.id} className="p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="bg-purple-800 text-white px-2 py-0.5 rounded text-xs font-semibold">
                            #{startIndex + index + 1}
                          </span>
                          <h3 className="text-white font-semibold text-lg">
                            {participant.user.name}
                          </h3>
                        </div>
                        <p className="text-white text-sm mt-1">
                          {participant.user.email}
                        </p>
                      </div>
                      <span className="text-white text-sm">
                        ID: {participant.userId}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-white block">Birth:</span>
                        <span className="text-white">
                          {formatDate(participant.user.birthdate)}
                        </span>
                      </div>
                      <div>
                        <span className="text-white block">Location:</span>
                        <span className="text-white">
                          {participant.user.domicile}
                        </span>
                      </div>
                      <div>
                        <span className="text-white block">Education:</span>
                        <span className="text-white">
                          {participant.user.institution}
                        </span>
                      </div>
                      <div>
                        <span className="text-white block">Institution:</span>
                        <span className="text-white">
                          {participant.user.institution_name}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                      <div className="flex space-x-4 text-xs text-white">
                        <span>WA: {participant.user.wa_number}</span>
                        <span>Line: {participant.user.line_id}</span>
                      </div>
                      <button
                        onClick={() => handlePreview(participant)}
                        className="flex items-center space-x-1 bg-purple-600 hover:bg-purple-700 px-3 py-1.5 rounded text-white text-sm transition-colors"
                      >
                        <Eye className="w-3 h-3" />
                        <span>Preview</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center">
                <div className="text-white text-lg mb-2">
                  No participants found
                </div>
                <div className="text-white/70 text-sm mb-4">
                  {keyword
                    ? `No results for "${keyword}"`
                    : "No participants available"}
                </div>
                {keyword && (
                  <button
                    onClick={clearSearch}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm"
                  >
                    Clear Search
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Desktop Table View - Responsive dengan horizontal scroll */}
          <div className="hidden lg:block overflow-x-auto">
            <div className="min-w-[1100px]">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#8257a9]">
                    <th className="text-left py-3 px-4 text-white font-medium text-sm whitespace-nowrap">
                      No
                    </th>
                    <th className="text-left py-3 px-4 text-white font-medium text-sm whitespace-nowrap">
                      UserID
                    </th>
                    <th className="text-left py-3 px-4 text-white font-medium text-sm whitespace-nowrap">
                      Name
                    </th>
                    <th className="text-left py-3 px-4 text-white font-medium text-sm whitespace-nowrap">
                      Email
                    </th>
                    <th className="text-left py-3 px-4 text-white font-medium text-sm whitespace-nowrap">
                      Birthdate
                    </th>
                    <th className="text-left py-3 px-4 text-white font-medium text-sm whitespace-nowrap">
                      Domicile
                    </th>
                    <th className="text-left py-3 px-4 text-white font-medium text-sm whitespace-nowrap">
                      Education
                    </th>
                    <th className="text-left py-3 px-4 text-white font-medium text-sm whitespace-nowrap">
                      Institution
                    </th>
                    <th className="text-left py-3 px-4 text-white font-medium text-sm whitespace-nowrap">
                      ID Card
                    </th>
                    <th className="text-left py-3 px-4 text-white font-medium text-sm whitespace-nowrap">
                      WhatsApp
                    </th>
                    <th className="text-left py-3 px-4 text-white font-medium text-sm whitespace-nowrap">
                      Line ID
                    </th>
                    <th className="text-left py-3 px-4 text-white font-medium text-sm whitespace-nowrap">
                      Instagram
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentData?.length > 0 ? (
                    currentData.map((participant, index) => (
                      <tr
                        key={participant.id}
                        className={
                          index % 2 === 0 ? "bg-[#8247a9]" : "bg-[#8257a9]"
                        }
                      >
                        <td className="py-3 px-4 text-white text-sm font-semibold whitespace-nowrap">
                          {startIndex + index + 1}
                        </td>
                        <td className="py-3 px-4 text-white text-sm whitespace-nowrap">
                          {participant.userId}
                        </td>
                        <td className="py-3 px-4 text-white text-sm font-medium whitespace-nowrap">
                          {participant.user.name}
                        </td>
                        <td className="py-3 px-4 text-white text-sm whitespace-nowrap">
                          {participant.user.email}
                        </td>
                        <td className="py-3 px-4 text-white text-sm whitespace-nowrap">
                          {formatDate(participant.user.birthdate)}
                        </td>
                        <td className="py-3 px-4 text-white text-sm whitespace-nowrap">
                          {participant.user.domicile}
                        </td>
                        <td className="py-3 px-4 text-white text-sm whitespace-nowrap">
                          {participant.user.institution}
                        </td>
                        <td className="py-3 px-4 text-white text-sm whitespace-nowrap">
                          {participant.user.institution_name}
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <button
                            onClick={() => handlePreview(participant)}
                            className="flex items-center space-x-1 bg-purple-600 hover:bg-purple-700 px-2 py-1 rounded text-white text-sm transition-colors cursor-pointer"
                          >
                            <Eye className="w-3 h-3" />
                            <span>Preview</span>
                          </button>
                        </td>
                        <td className="py-3 px-4 text-white text-sm whitespace-nowrap">
                          {participant.user.wa_number}
                        </td>
                        <td className="py-3 px-4 text-white text-sm whitespace-nowrap">
                          {participant.user.line_id}
                        </td>
                        <td className="py-3 px-4 text-white text-sm whitespace-nowrap">
                          {participant.user.insta_acc}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="12" className="py-12 text-center">
                        <div className="text-white text-lg mb-2">
                          No participants found
                        </div>
                        <div className="text-white/70 text-sm mb-4">
                          {keyword
                            ? `No results for "${keyword}"`
                            : "No participants available"}
                        </div>
                        {keyword && (
                          <button
                            onClick={clearSearch}
                            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                          >
                            Clear Search
                          </button>
                        )}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          {filteredData?.length > 0 && <Pagination />}
        </div>
      </main>
    </div>
  );
};

export default ParticipantsIBPC;