import React, { useEffect } from "react";
import SideBarSection from "@/components/profile/SideBarSection";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useUserStore } from "@/store/userStore";
import useAuth from "@/hooks/Guest/useAuth";

const Profile = () => {
  const location = useLocation();
  const { user } = useUserStore();
  const navigate = useNavigate();
  // Daftar rute yang ingin disembunyikan sidebar-nya
  // hide sidebar
  const hideSidebarRoutes = [
    "/profile/home/bmc/team",
    "/profile/home/bmc/individual",
    "/profile/home/bmc/register",
    "/profile/home/bmc/jointeam",
    "/profile/home/bcl/",
    // "/profile/home/ibcc",
    // "/profile/home/ibcc/join",
    // "/profile/home/ibcc/register",
    // "/profile/home/ibcc/create",
  ];

  const { isAuthLoading } = useAuth();

  useEffect(() => {
    if (
      !isAuthLoading &&
      user === null &&
      location.pathname.includes("/profile")
    ) {
      navigate("/unauthorized");
    }
  }, [user, navigate, location.pathname, isAuthLoading]);

  // Cek apakah path saat ini termasuk dalam daftar rute yang ingin disembunyikan sidebar-nya
  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);

  return (
    <div className="bg-transparent flex w-full min-h-screen overflow-hidden">
      <div className="bg-[linear-gradient(180deg,rgba(86,39,128,1)_0%,rgba(100,61,135,1)_48%,rgba(130,87,169,1)_100%)] w-full flex pt-20 ">
        {/* Sidebar hanya ditampilkan jika path tidak termasuk dalam daftar hideSidebarRoutes */}
        {!shouldHideSidebar && (
          <div className="max-md:w-0    w-64  md:py-15 md:px-20 p-0  md:block ">
            <SideBarSection />
          </div>
        )}

        {/* Konten utama (outlet) */}
        <div className="bg-transparent px-6 pb-6 pt-2 md:pt-0 flex-1 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;
