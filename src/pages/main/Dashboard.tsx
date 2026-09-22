import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserStore } from "@/store/userStore";
import useAuth from "@/hooks/Guest/useAuth";

const Dashboard = () => {
  const { user } = useUserStore();
  const navigate = useNavigate();
  useAuth();

  return (
    <div className="bg-transparent flex w-full min-h-screen overflow-hidden ">
      <div className=" bg-[linear-gradient(180deg,rgba(86,39,128,1)_0%,rgba(100,61,135,1)_48%,rgba(130,87,169,1)_100%)] w-full ">
        <div className="bg-transparent p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
