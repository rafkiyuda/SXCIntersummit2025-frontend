import { FooterSection } from "@/components/aboutPage/FooterSection";
import Navbar from "@/components/ui/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "@/hooks/Guest/useAuth";

const AppLayout = () => {
  const { pathname } = useLocation();
  const { isAuthLoading } = useAuth();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen   text-white ">
      <div className="">
        <Navbar />
        <Outlet />
        <FooterSection />
      </div>
    </div>
  );
};

export default AppLayout;
