import useAuth from "@/hooks/Guest/useAuth";
import { useUserStore } from "@/store/userStore";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LogOut } from "lucide-react";
/* import ContactIBCC from "./ContactIBCC"; */
/* import WhatsappIBCC from "./WhatsappIBCC"; */

// Navigation items configuration
const navigationItems = [
  {
    icon: "home-icon.svg",
    label: "Home",
    action: (navigate) => navigate("/profile/home"),
  },
  {
    icon: "mini-profile.svg",
    label: "Profile",
    action: (navigate) => navigate("/profile/"),
  },
  {
    icon: "bell-icon.svg",
    label: "Notifications",
    action: (navigate) => navigate("/profile/notifications"),
  },
/*   {
    icon: "event-icon.svg",
    label: "Events",
    action: (navigate) => navigate("/profile/events"),
  }, */
  {
    icon: "question-icon.svg",
    label: "FAQs",
    action: (navigate) => navigate("/profile/faq"),
  },
];

function SidebarBCL({ isOpen = false, className = "" }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(isOpen);
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  const { user } = useUserStore();

  // Navigation functions
  const goToHomePage = () => navigate("/");

  // Toggle for mobile sidebar
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Mobile Sidebar - Inspired by first model */}
      <div className="lg:hidden w-full bg-gradient-to-r from-[#562780] via-[#643D87] to-[#8257A9] p-4 space-y-4">
        {/* User Profile Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <img
              src="/images/profile/profile-icon.svg"
              alt="Profile"
              className="w-6 h-6"
            />
          </div>
          <div className="text-white font-semibold truncate">
            {user?.name || "User"}
          </div>
          <div className="text-white/80 text-sm truncate">
            {user?.email || "user@email.com"}
          </div>
        </div>

        {/* Main Menu Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
          <div className="text-white font-semibold text-lg mb-4 text-center">
            Main Menu
          </div>

          {/* Navigation Grid - 3 columns for first row */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {navigationItems.slice(0, 3).map((item) => {
              // Fix: Check active state properly
              const isActive =
                (location.pathname === "/profile/home" &&
                  item.label === "Home") ||
                (location.pathname === "/profile/" &&
                  item.label === "Profile") ||
                (location.pathname === "/profile/notifications" &&
                  item.label === "Notifications");
              return (
                <button
                  key={item.label}
                  onClick={() => item.action(navigate)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-xl transition duration-200 ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <img
                    src={`/images/profile/${item.icon}`}
                    alt={item.label}
                    className="w-6 h-6"
                  />
                  <span className="text-xs text-center leading-tight">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Second Row - 2 columns centered */}
          {/* <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
            {navigationItems.slice(3).map((item) => {
              // Fix: Check active state properly
              const isActive =
                (location.pathname === "/profile/events" &&
                  item.label === "Events") ||
                (location.pathname === "/profile/faq" && item.label === "FAQs");
              return (
                <button
                  key={item.label}
                  onClick={() => item.action(navigate)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-xl transition duration-200 ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <img
                    src={`/images/profile/${item.icon}`}
                    alt={item.label}
                    className="w-6 h-6"
                  />
                  <span className="text-xs text-center leading-tight">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div> */}
        </div>

        {/* Contact Person Section
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mt-4">
          <div className="text-white font-semibold text-lg mb-2 text-center">Need help or have any questions? Reach us!</div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 bg-white/5 rounded-lg p-2">
              <img src="/images/profile/profile-icon.svg" alt="Khalishah" className="w-5 h-5" />
              <div>
                <div className="text-white font-medium text-sm">Khalishah</div>
                <div className="text-white/80 text-xs">085891811546 (WA)</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/5 rounded-lg p-2">
              <img src="/images/profile/profile-icon.svg" alt="Zalfa" className="w-5 h-5" />
              <div>
                <div className="text-white font-medium text-sm">Zalfa</div>
                <div className="text-white/80 text-xs">082210772649 (WA)</div>
              </div>
            </div>
          </div>
        </div> */}
        {/* WhatsApp Group Section */}
        {/* <div className="mt-4">
          <div className="text-white font-semibold text-lg mb-2 text-center">Join BCL's Official WhatsApp Group!</div>
          <a
            href="https://wa.me/yourgroupid" // replace with your WhatsApp group link
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#57d96c] hover:bg-[#3ec85c] text-white font-semibold py-3 rounded-xl transition duration-200"
          >
            <WhatsAppIcon />
            Click Me!
          </a>
        </div> */}
        {/* Action Buttons */}
        <div className="space-y-3 mt-4">
          {/* Back to Home Button */}
          <button
            onClick={goToHomePage}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition duration-200"
          >
            <img
              src="/images/profile/home-icon.svg"
              alt="Home"
              className="w-5 h-5"
            />
            Back to Home
          </button>

          {/* Logout Button */}
          <button
            onClick={logout}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition duration-200"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Desktop Sidebar - Enhanced version of original */}
      <div className="hidden lg:block">
        <div
          className={`w-56 bg-[#8257A9] rounded-xl backdrop-blur-sm border-r border-white/20 p-4 min-h-[50vh] my-4 ml-4 transition-all duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 ${className}`}
        >
          {/* User Profile */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center space-x-2 max-w-full">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
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
              {navigationItems.map((item) => {
                const isActive = location.pathname.includes(
                  item.label.toLowerCase()
                );
                return (
                  <button
                    key={item.label}
                    onClick={() => item.action(navigate)}
                    className={`w-full flex items-center text-sm text-white hover:bg-white/10 p-1.5 rounded transition duration-200 ${
                      isActive ? "bg-white/20" : ""
                    }`}
                  >
                    <img
                      src={`/images/profile/${item.icon}`}
                      alt={item.label}
                      className="w-3.5 h-3.5 mr-2"
                    />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>
          {/* Action Buttons */}
          <div className="space-y-1.5 mt-6">
            <button
              onClick={goToHomePage}
              className="w-full bg-green-500/90 hover:bg-green-500 text-white py-1.5 text-sm rounded flex items-center justify-center transition duration-200"
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
              className="w-full bg-red-500/80 hover:bg-red-500 text-white py-1.5 text-sm rounded flex items-center justify-center transition duration-200"
            >
              <LogOut className="w-4 h-4 mr-1.5" />
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
{/*       <ContactIBCC /> */}
      {/* <WhatsappIBCC /> */}
    </>
  );
}

export default SidebarBCL;
