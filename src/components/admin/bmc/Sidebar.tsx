import React from 'react';

export interface MenuItem {
  name: string;
  icon: string;
  count?: number;
  path?: string;
}

export interface UserProfile {
  name: string;
  email: string;
}

interface SidebarProps {
  user: UserProfile;
  className?: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Participants",
    icon: "/images/admin/bmc/participants.svg",
    path: "/admin/bmc/participantsVerif"
  },
  {
    name: "Team Verification",
    icon: "/images/admin/bmc/team_verif.svg"
  },
  {
    name: "General Verification",
    icon: "/images/admin/bmc/general_verif.svg",
    path: "/admin/bmc/prelim"
  },
  {
    name: "Announce",
    icon: "/images/admin/bmc/announce.svg",
    path: "/admin/bmc/announcement"
  },
  {
    name: "Notify",
    icon: "/images/admin/bmc/notify.svg"
  }
];

const Sidebar: React.FC<SidebarProps> = ({ user, className }) => (
  <div className={`min-h-screen p-4 flex flex-col items-center w-full md:w-56 ${className || ''}`}>
    {/* Logo */}
    <div>
      <img src="/images/logo.png" alt="SxC Logo" className="h-24 w-24"/>
    </div>
    {/* User Info Box */}
    <div className="bg-[#8257A9] rounded-xl w-full flex flex-col items-center py-4 mb-6">
      <div className="bg-white rounded-full p-2 mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#6c2eb7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      <div className="font-bold">{user.name}</div>
      <div className="text-sm">{user.email}</div>
    </div>
    {/* Main Menu Box */}
    <div className="bg-[#8257A9] rounded-xl w-full p-6 mb-8">
      <div className="font-bold text-lg mb-4">Main Menu</div>
      <ul className="space-y-6">
        {menuItems.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => {
              if (item.path) {
                window.location.href = item.path;
              }
            }}
          >
            <img src={item.icon} alt={item.name + " icon"} className="h-6 w-6" />
            <span
              className="relative transition-colors"
            >
              {item.name}
              <span
                className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded"
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
    {/* Logout Button */}
    <button className="bg-[#c0392b] hover:bg-[#a93226] text-white font-bold py-3 w-full rounded-xl flex items-center justify-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>
      Logout
    </button>
  </div>
);

export default Sidebar;