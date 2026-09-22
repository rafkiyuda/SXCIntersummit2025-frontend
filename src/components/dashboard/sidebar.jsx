import useAuth from "@/hooks/Guest/useAuth";
import { useUserStore } from "@/store/userStore";
import { Home, Users, Activity, Settings, Gift, LogOut } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navigationItems = [
  { icon: Home, label: "Dashboard", path: "/dashboard/it" },
  { icon: Gift, label: "Referral Code", path: "/dashboard/referral" },
  { icon: Users, label: "Admin", path: "/dashboard/admins" },
  { icon: Activity, label: "Activity Log", path: "/dashboard/activitylog" },
  // { icon: Settings, label: "Setting", path: "/dashboard/settings" },
];

const programName = new Map([
  ["AdminIT", "SuperAdmin"],
  ["BCL_ADMIN", "BCL"],
]);

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { logout } = useAuth();

  const { user } = useUserStore();

  return (
    <div className="w-64 min-h-screen  flex flex-col">
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
      <div className="border-white/10">
        <div className="text-white/80 text-lg font-bold">Program Name</div>
        <div className="text-white/60 mb-2 text-xs">Managed by:</div>
        <div className="flex items-center bg-[#8257A9] rounded-2xl p-2 gap-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <Users className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-white text-sm font-medium">{user?.name}</div>
            <div className="text-white/60 text-xs">{user?.email}</div>
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
              className={`cursor-pointer w-full flex items-center gap-3 h-7 rounded-2xl p-2 text-white/80 hover:bg-white/10 hover:text-white transition duration-200 ease-in-out ${
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
          className="w-full cursor-pointer flex items-center h-7 rounded-xl p-4 bg-red-600 hover:bg-red-700 text-white"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
