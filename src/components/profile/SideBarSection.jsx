import useAuth from "@/hooks/Guest/useAuth";
import { useUserStore } from "@/store/userStore";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Sidebar({ isOpen = false, className = "" }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(isOpen);
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  const { user } = useUserStore();

  // Navigation functions
  const goToHomePage = () => navigate("/");
  const goToFAQPage = () => navigate("/profile/faq");
  const goToProfilePage = () => navigate("/profile/home/all");
  const goToEditProfilePage = () => navigate("/profile/");
  // const goToEventsPage = () => navigate("/profile/events");

  // Toggle for mobile sidebar
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Mobile Top Bar (hidden on desktop) */}
      <div className="lg:hidden absolute mt-23 top-3 right-3 transform -translate-x-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full w-[30%] mx-auto py-2 px-4 z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-purple-300/80 rounded-full flex items-center justify-center">
              <img
                src="/images/profile/profile-icon.svg"
                alt="Profile"
                className="w-3 h-3"
              />
            </div>
            <span className="text-white text-sm truncate max-w-[120px]">
              Menu
            </span>
          </div>
          <button
            onClick={toggleSidebar}
            className="p-1 text-white focus:outline-none"
          >
            {isSidebarOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Dropdown */}
      <div
        className={`lg:hidden fixed w-[85%] bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 p-4 max-h-[65vh] overflow-y-auto transition-all duration-300 ${
          isSidebarOpen
            ? "top-20 opacity-100 visible"
            : "top-0 opacity-0 invisible"
        } left-1/2 transform -translate-x-1/2 z-40`}
        style={{ maxWidth: "320px" }}
      >
        {/* Mobile sidebar content - same as desktop but adjusted for mobile */}
        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-300/80 rounded-full flex items-center justify-center">
              <img
                src="/images/profile/profile-icon.svg"
                alt="Profile"
                className="w-4 h-4"
              />
            </div>
            <div className="min-w-0">
              <h3 className="text-white text-sm font-medium truncate">
                {user?.name || ""}
              </h3>
              <p className="text-white/60 text-[10px]">{user?.email || ""}</p>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-white/60 text-xs font-medium mb-2 tracking-wider">
            Main Menu
          </h4>
          <nav className="space-y-1">
            {[
              { icon: "home-icon.svg", label: "Home", action: goToProfilePage },
              {
                icon: "mini-profile.svg",
                label: "Profile",
                action: goToEditProfilePage,
              },
              // {
              //   icon: "bell-icon.svg",
              //   label: "Notifications",
              //   action: () => navigate("/profile/notifications"),
              // },
              // {
              //   icon: "event-icon.svg",
              //   label: "Events",
              //   action: goToEventsPage,
              // },
              { icon: "question-icon.svg", label: "FAQs", action: goToFAQPage },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  item.action();
                  setIsSidebarOpen(false);
                }}
                className="w-full flex items-center text-sm text-white hover:bg-white/10 p-2 rounded transition-colors"
              >
                <img
                  src={`/images/profile/${item.icon}`}
                  alt={item.label}
                  className="w-4 h-4 mr-2"
                />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="space-y-2">
          <button
            onClick={() => {
              goToHomePage();
              setIsSidebarOpen(false);
            }}
            className="w-full bg-green-500/90 hover:bg-green-500 text-white py-2 px-3 text-sm rounded flex items-center justify-center transition-colors"
          >
            <img
              src="/images/profile/home-icon.svg"
              alt="Home"
              className="w-4 h-4 mr-2"
            />
            Back to Home
          </button>
          <button
            onClick={() => {
              logout();
              setIsSidebarOpen(false);
            }}
            className="w-full bg-red-500/80 hover:bg-red-500 text-white py-2 px-3 text-sm rounded flex items-center justify-center transition-colors"
          >
            <img
              src="/images/profile/logout-icon.svg"
              alt="Logout"
              className="w-4 h-4 mr-2"
            />
            Logout
          </button>
        </div>
      </div>

      {/* Desktop Sidebar: only show on >=1024px (lg) */}
      <div className="hidden lg:block">
        <div
          className={`w-56 bg-[#8257A9] rounded-xl backdrop-blur-sm border-r border-white/20 p-4 min-h-[50vh] my-4 ml-4 transition-all duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 ${className}`}
        >
          {/* User Profile */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center space-x-2 max-w-full">
              <div className="w-8 h-8 bg-purpe-300/80 rounded-full flex items-center justify-center">
                <img
                  src="/images/profile/profile-icon.svg"
                  alt="Profile"
                  className="w-4 h-4"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-white text-sm font-medium truncate">
                  {user?.name || ""}
                </h3>
                <p className="text-white/60 text-[10px]">{user?.email || ""}</p>
              </div>
            </div>
          </div>

          {/* Main Menu */}
          <div className="mb-4">
            <h4 className="text-white/60 text-xs font-medium mb-2 tracking-wider">
              Main Menu
            </h4>
            <nav className="space-y-1">
              {[
                {
                  icon: "home-icon.svg",
                  label: "Home",
                  action: goToProfilePage,
                },
                {
                  icon: "mini-profile.svg",
                  label: "Profile",
                  action: goToEditProfilePage,
                },
                // {
                //   icon: "bell-icon.svg",
                //   label: "Notifications",
                //   action: () => navigate("/profile/notifications"),
                // },
                // {
                //   icon: "event-icon.svg",
                //   label: "Events",
                //   action: goToEventsPage,
                // },
                {
                  icon: "question-icon.svg",
                  label: "FAQs",
                  action: goToFAQPage,
                },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className={`cursor-pointer w-full flex items-center text-sm text-white hover:bg-white/10 p-1.5 rounded ${
                    location.pathname.includes(item.label.toLowerCase())
                      ? ""
                      : ""
                  }`}
                >
                  <img
                    src={`/images/profile/${item.icon}`}
                    alt={item.label}
                    className="w-3.5 h-3.5 mr-2"
                  />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Action Buttons */}
          <div className="space-y-1.5 mt-6">
            <button
              onClick={goToHomePage}
              className="cursor-pointer w-full bg-green-500/90 hover:bg-green-500 text-white py-1.5 text-sm rounded flex items-center justify-center"
            >
              <img
                src="/images/profile/home-icon.svg"
                alt="Home"
                className="w-4 h-4 mr-1.5"
              />
              Back to Home
            </button>
            <button
              onClick={logout}
              className="cursor-pointer w-full bg-red-500/80 hover:bg-red-500 text-white py-1.5 text-sm rounded flex items-center justify-center"
            >
              <img
                src="/images/profile/logout-icon.svg"
                alt="Logout"
                className="w-4 h-4 mr-1.5"
              />
              Logout
            </button>
          </div>
        </div>

        {/* BMC Timeline Section (unchanged) */}
        {(location.pathname === "/profile/home/bmc/team" ||
          location.pathname === "/profile/home/bmc/individual" ||
          location.pathname === "/profile/home/bmc/register") && (
          <>
            <h2 className="text-white text-xl font-semibold mt-6 ml-10">
              Need help or have any questions? <br /> Reach us!
            </h2>
            <div className="w-56 p-4 border border-white/20 rounded-[19.6px] bg-[#8257A9] text-white mx-auto ml-10">
              <div className="flex flex-col items-center justify-center">
                <img
                  src="/images/profile/BMC/profile.png"
                  alt="BMC Icon"
                  className="w-5 h-5 mb-2"
                />
                <p className="text-sm font-medium">Annisa Fauziyah</p>
                <p className="text-sm mt-2">087845099825 (WA)</p>
              </div>
            </div>
            <h2 className="flex mt-2 justify-center items-center">
              <img
                src="/images/profile/BMC/wa-group.png"
                alt="Icon"
                className="w-40 h-40 object-contain"
              />
            </h2>
            <h2 className="flex justify-center items-center">
              <img
                src="/images/profile/BMC/bmc-timeline.png"
                alt="Icon"
                className="w-150 h-150 object-contain"
              />
            </h2>
          </>
        )}
      </div>
    </>
  );
}

export default Sidebar;
