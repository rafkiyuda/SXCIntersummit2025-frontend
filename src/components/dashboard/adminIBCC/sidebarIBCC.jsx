import useAuth from "@/hooks/Guest/useAuth";
import {
  Home,
  Users,
  CheckCircle,
  Megaphone,
  Bell,
  LogOut,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navigationItems = [
  { icon: Users, label: "Participants", path: "/dashboard/ibcc/participants" },
  {
    icon: CheckCircle,
    label: "Teams",
    path: "/dashboard/ibcc",
  },
  // {
  //   icon: CheckCircle,
  //   label: "Verification",
  //   path: "/dashboard/ibcc/verification",
  // },
  { icon: Megaphone, label: "Announce", path: "/dashboard/ibcc/announcement" },
  { icon: Bell, label: "Notifications", path: "/dashboard/ibcc/notifications" },

  // { icon: Megaphone, label: "Announce", path: "/adminIBCC/announce" },
];

const sidebarIBCC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { logout } = useAuth();

  return (
    <>
      {/* Mobile Sidebar - Top Horizontal Layout */}
      <div className="md:hidden w-full bg-gradient-to-r from-[#562780] via-[#643D87] to-[#8257A9] p-4 space-y-4">
        {/* User Profile Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
            <Users className="w-6 h-6 text-[#562780]" />
          </div>
          <div className="text-white font-semibold">ADMIN IBCC</div>
          <div className="text-white/80 text-sm">MoP@gmail.com</div>
        </div>

        {/* Main Menu Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
          <div className="text-white font-semibold text-lg mb-4 text-center">
            Main Menu
          </div>

          {/* Navigation Grid - 2x2 layout for 4 items */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-xl transition duration-200 ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <item.icon className="w-6 h-6" />
                  <span className="cursor-pointer text-xs text-center leading-tight">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={() => logout()}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition duration-200 cursor-pointer"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>

      {/* Desktop Sidebar - Original Vertical Layout */}
      <div className="hidden md:flex w-64 min-h-screen flex-col">
        {/* Logo */}
        <div className="p-3">
          <div className="flex items-center gap-3">
            <h2 className="flex justify-start items-center">
              <img
                src="/images/logo-intersummit-3.png"
                alt="logo"
                className="w-[100px] h-[100px] object-contain"
              />
            </h2>
          </div>
        </div>

        {/* Program Info */}
        <div className="border-white/10 px-3">
          <div className="text-white/80 text-lg font-bold">Program Name</div>
          <div className="text-white/60 mb-2 text-xs">Managed by:</div>
          <div className="flex items-center bg-[#8257A9] rounded-2xl p-2 gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-white text-sm font-medium">
                Manager of Program
              </div>
              <div className="text-white/60 text-xs">MoP@gmail.com</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6 bg-[#8257A9] mt-4 rounded-2xl space-y-2">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 h-7 rounded-2xl p-2 text-white/80 cursor-pointer hover:bg-white/10 hover:text-white transition duration-200 ease-in-out ${
                  isActive ? "bg-white/20 text-white" : ""
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="p-4">
          <button
            onClick={() => logout()}
            className="w-full flex items-center h-7 rounded-xl p-3 bg-red-600 hover:bg-red-700 text-white cursor-pointer"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default sidebarIBCC;
