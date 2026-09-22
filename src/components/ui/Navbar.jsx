import Dashboard from "@/pages/main/Dashboard";
import { useUserStore } from "@/store/userStore";
import { LayoutDashboard, User } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const roleRoutes = new Map([
  ["USER", "/profile/home/all"],
  ["ADMIN", "/dashboard/it"], //Super Admin
  ["BCL_ADMIN", "/dashboard/bcl"],
  ["IBCC_ADMIN", "/dashboard/ibcc"],
  ["IBPC_ADMIN", "/dashboard/ibpc"],
  ["guest", "/login"],
]);

function getRouteByRole(role) {
  return roleRoutes.get(role) || "/not-found";
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const { user } = useUserStore();
  const toggleMenu = () => setIsOpen((o) => !o);

  const hiddenRoutes = [
    "/login",
    "/register",
    "/dashboard/it",
    "/dashboard/referral",
    "/dashboard/referral/addreferral",
    "/dashboard/admins",
    "/dashboard/admins/add-admin",
    "/dashboard/activitylog",
    "/dashboard/settings",
    "/dashboard/project-officer",
    "/dashboard/referral/editreferral",
    "/dashboard/project-officer/bcl",
    "/dashboard/project-officer/bmc",
    "/dashboard/project-officer/ibcc",
    "/dashboard/project-officer/ibpc",
    "/dashboard/project-officer/ic",
    "/dashboard/project-officer/chambers",
    "/dashboard/project-officer/company-visit",
    "/dashboard/project-officer/international-conference",
    "/dashboard/admins/edit-admin",
    "/dashboard/adminBCL/announce",
    "/dashboard/adminBCL/notifications",
    "/dashboard/adminBCL/participants",
  ];

  const shouldHideNavbar = hiddenRoutes.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > lastScrollY && y > 50) setIsVisible(false);
      else if (y < lastScrollY) setIsVisible(true);
      setLastScrollY(y);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  if (shouldHideNavbar) return null;
  return (
    <nav
      className={`grid grid-cols-3 px-3 py-2 bg-gradient-to-r from-[#C6FF894D] bg-opacity-30 border border-[#abdc57] rounded-full shadow-[0_0_8px_#abdc57] w-full max-w-[90%] mx-auto mt-3 fixed left-1/2 transform -translate-x-1/2 z-99 backdrop-blur-md transition-all duration-300 ${
        isVisible ? "top-3" : "-top-20"
      }`}
    >
      <Link to={"/"}>
        <div className="flex items-center">
          <img
            src="/images/logo-intersummit-3.png"
            alt="Logo"
            className="w-15 h-10"
          />
        </div>
      </Link>

      <div className="hidden md:flex justify-center items-center space-x-4">
        <Link
          to="/"
          className="text-white hover:text-[#495730] text-xs font-medium transition-all duration-500 ease-out"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-white hover:text-[#495730] text-xs font-medium transition-all duration-500 ease-out"
        >
          About
        </Link>

        <div className="relative group">
          <Link
            to="/program"
            className="text-white hover:text-[#495730] text-xs font-medium flex items-center py-2 transition-all duration-500 ease-out"
          >
            Program <span className="ml-1 text-xs">▾</span>
          </Link>
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 bg-gradient-to-b from-[#83b8d3] to-[#78d99b] rounded-lg shadow-lg w-50 z-50 
              opacity-0 invisible group-hover:opacity-100 group-hover:visible 
              transition-opacity duration-500 ease-out"
          >
            <div className="py-1">
              <Link
                to="/program/bmc"
                className="block px-4 py-2 text-sm text-white hover:bg-[#42582b] transition-colors duration-500 ease-out"
              >
                Business Model Canvas
              </Link>
              <Link
                to="/program/bcl"
                className="block px-4 py-2 text-sm text-white hover:bg-[#42582b] transition-colors duration-500 ease-out"
              >
                Business Competition Launchpad
              </Link>
              <Link
                to="/program/ibcc"
                className="block px-4 py-2 text-sm text-white hover:bg-[#42582b] transition-colors duration-500 ease-out"
              >
                International Business Case Competition
              </Link>
              <Link
                to="/program/ibpc"
                className="block px-4 py-2 text-sm text-white hover:bg-[#42582b] transition-colors duration-500 ease-out"
              >
                International Business Plan Competition
              </Link>
              <Link
                to="/program/chambers"
                className="block px-4 py-2 text-sm text-white hover:bg-[#42582b] transition-colors duration-500 ease-out"
              >
                Chambers
              </Link>
              <Link
                to="/program/placeholder"
                className="block px-4 py-2 text-sm text-white hover:bg-[#42582b] transition-colors duration-500 ease-out"
              >
                Company Visit
              </Link>
              <Link
                to="/program/placeholder"
                className="block px-4 py-2 text-sm text-white hover:bg-[#42582b] transition-colors duration-500 ease-out"
              >
                International Conference
              </Link>
            </div>
          </div>
        </div>
        <Link
          to="/merchandise"
          className="text-white hover:text-[#495730] text-xs font-medium transition-colors duration-500 ease-out"
        >
          Merchandise
        </Link>
      </div>

      <div className="hidden md:flex items-center justify-end space-x-2">
        {/* Login & Signup buttons hidden */}
        {!user ? (
          <>
            <Link to="/login">
              <button className="cursor-pointer text-xs px-3 py-1  border border-[#AEE67F] font-bold text-[#f9fff4] rounded-lg hover:bg-[#42582b] transition-colors duration-500 ease-out">
                Log in
              </button>
            </Link>
            <Link to="/register">
              <button className="cursor-pointer text-xs px-3 py-1 bg-[#AEE67F] font-semibold text-black rounded-lg hover:opacity-90">
                Sign up
              </button>
            </Link>{" "}
          </>
        ) : (
          <Link to={getRouteByRole(user.role)}>
            <div className="cursor-pointer flex items-center space-x-2 text-white">
              {user.role === "USER" ? (
                <>
                  <User />
                  <p>{user?.name}</p>
                </>
              ) : (
                <>
                  <LayoutDashboard />
                  <p>Dashboard</p>
                </>
              )}
            </div>
          </Link>
        )}
      </div>

      <button
        className="md:hidden absolute right-6 top-1/2 -translate-y-1/2 text-white flex items-center justify-center"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col md:hidden bg-[#a669bef7] rounded-2xl bg-opacity-95">
          <div className="flex justify-end p-2">
            <button onClick={toggleMenu} className="text-white pt-1 pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1">
            <div className="bg-[#a669bef7] bg-opacity-100 rounded-b-2xl px-8 py-8 shadow-lg flex flex-col items-center space-y-5 w-[85vw] max-w-xs">
              <Link
                to="/"
                onClick={toggleMenu}
                className="text-white hover:text-[#495730] text-base font-medium transition-colors duration-500 ease-out"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={toggleMenu}
                className="text-white hover:text-[#495730] text-base font-medium transition-colors duration-500 ease-out"
              >
                About
              </Link>
              <Link
                to="/program"
                onClick={toggleMenu}
                className="text-white hover:text-[#495730] text-base font-medium transition-colors duration-500 ease-out"
              >
                Program
              </Link>
              <Link
                to="/merchandise"
                className="text-white hover:text-[#495730] text-base font-medium transition-colors duration-500 ease-out"
              >
                Merchandise
              </Link>
              <div className="flex flex-col items-center space-y-2 mt-4 w-full">
                {!user ? (
                  <>
                    <Link to="/login" onClick={toggleMenu} className="w-full">
                      <button className="w-full text-sm py-2 bg-[#60bcb4] text-white rounded-lg transition-all duration-300 hover:bg-[#31635f] hover:scale-[1.03]">
                        Log in
                      </button>
                    </Link>
                    <Link
                      to="/register"
                      onClick={toggleMenu}
                      className="w-full"
                    >
                      <button className="w-full text-sm py-2 bg-[#6071bc] text-white rounded-lg transition-all duration-300 hover:bg-[#313b63] hover:scale-[1.03]">
                        Sign up
                      </button>
                    </Link>
                  </>
                ) : (
                  <Link to="/profile" onClick={toggleMenu} className="w-full">
                    <div className="w-full text-sm py-2 bg-[#abdc57] text-black rounded-lg flex items-center justify-center space-x-2 hover:opacity-90">
                      <User />
                      <p>{user?.name}</p>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
