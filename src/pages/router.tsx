// routes.tsx or router.tsx
import { createBrowserRouter } from "react-router-dom";

import roleRoutes from "./role/roleRouter"; // <== Modularized
import ErrorPage from "./ErrorPage";
import Login from "./main/Login";
import Landing from "./main/Landing";
import AppLayout from "@/layout/AppLayout";
import { SignupPage } from "./main/SignUpPage";
import UserProfilePage from "./user/UserProfilePage";
import { AboutSection } from "./main/AboutSection";
import Profile from "./main/Profile";
import NotificationCard from "@/components/profile/NotificationCard";
import Unauthorized from "./main/Unauthorized";
import ProgramLayout from "@/layout/ProgramLayout";
import programRouter from "./program/programRouter";
import UserFAQPage from "./user/UserFAQPage";
import UserEventsPage from "./user/UserEventsPage";
import BMCTeam from "@/components/profile/BMCTeam";
import BMCIndividual from "@/components/profile/BMCIndividual";
import BMCRegister from "@/components/profile/BMCRegister";
import AllPrograms from "./program/Program";
import BMCJoinTeam from "@/components/profile/BMCJoinTeam";
import Dashboard from "./main/Dashboard";
import ComingSoon from "@/components/others/ComingSoon";
import GoogleSuccess from "./user/GoogleSuccess";
import adminRouter from "./admin/adminRouter";
import Merchandise from "./merchandise/Merchandise";

import RegisterBCL from "@/components/profile/BCL/RegisterBCL";
import RegisterIBCC from "@/components/profile/IBCC/registerIBCC";
import CreateIBCC from "@/components/profile/IBCC/CreateIBCC";
import JoinIBCC from "@/components/profile/IBCC/JoinIBCC";
import RegisterIBPC from "@/components/profile/IBPC/registerIBPC";
import CreateIBPC from "@/components/profile/IBPC/CreateIBPC";
import JoinIBPC from "@/components/profile/IBPC/JoinIBPC";

import NotificationDetails from "./user/NotificationDetails";
import userRouter from "./user/userHomeEventRouter";
import ProtectedRoute from "./role/ProtectedRoute";
import superAdminRouter from "@/components/dashboard/superAdminRoutes";
import adminBCLRoutes from "./admin/BCL/adminBCLRoutes";
import PreliminaryIBCC from "@/components/profile/IBCC/PreliminaryIBCC";
import PreliminaryIBPC from "@/components/profile/IBPC/PreliminaryIBPC";
import DaySelectionPage from "@/components/profile/Chambers/DaySelectionPage";
import FormDayOne from "@/components/profile/Chambers/FormDayOne";
import FormFMCGStartup from "@/components/profile/Chambers/FormFMCGStartup";
import DayOne from "@/components/profile/Chambers/DayOne";
import FMCGStartup from "@/components/profile/Chambers/FMCGStartup";
import adminIBCCRoutes from "@/components/dashboard/adminIBCC/adminIBCCRoutes";
import adminIBPCRoutes from "@/components/dashboard/adminIBPC/adminIBPCRoutes";

export const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <SignupPage /> },
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      // Guest
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "about",
        element: <AboutSection />,
      },
      {
        path: "programs",
        element: <AllPrograms />,
      },
      {
        path: "merchandise",
        element: <Merchandise />,
      },
      {
        path: "comingsoon",
        element: <ComingSoon />,
      },

      // User Handle
      {
        path: "profile",
        element: <Profile />,
        children: [
          ...userRouter,
          {
            index: true,
            element: <UserProfilePage />,
          },
          {
            path: "notifications",
            element: <NotificationCard />,
          },
          {
            path: "notifications/:id",
            element: <NotificationDetails />,
          },
          {
            path: "faq",
            element: <UserFAQPage />, // <== Halaman Notifications
          },
          {
            path: "events",
            element: <UserEventsPage />, // <== Halaman Notifications
          },
          {
            path: "home/bmc/team",
            element: <BMCTeam />,
          },
          {
            path: "home/bmc/individual",
            element: <BMCIndividual />, // <== Halaman detail BMC, bisa di
          },
          {
            path: "home/bmc/register",
            element: <BMCRegister />, // <== Halaman untuk memilih individu BMC
          },
          {
            path: "home/bmc/jointeam",
            element: <BMCJoinTeam />,
          },
          {
            path: "home/bcl",
            element: <RegisterBCL />,
          },
          {
            path: "home/ibcc/register",
            element: <RegisterIBCC />,
          },
          {
            path: "home/ibcc/create",
            element: <CreateIBCC />,
          },
          {
            path: "home/ibcc/join",
            element: <JoinIBCC />,
          },
          {
            path: "home/ibcc/preliminary",
            element: <PreliminaryIBCC />,
          },
          {
            path: "home/ibpc/register",
            element: <RegisterIBPC />,
          },
          {
            path: "home/ibpc/create",
            element: <CreateIBPC />,
          },
          {
            path: "home/ibpc/join",
            element: <JoinIBPC />,
          },
          {
            path: "home/ibpc/preliminary",
            element: <PreliminaryIBPC />,
          },
          {
            path: "home/chambers/day-selection",
            element: <DaySelectionPage />,
          },
          {
            path: "home/chambers/banking-consulting-form",
            element: <FormDayOne />,
          },
          {
            path: "home/chambers/fmcg-startup-form",
            element: <FormFMCGStartup />,
          },
          {
            path: "home/chambers/banking-consulting",
            element: <DayOne />,
          },
          {
            path: "home/chambers/fmcg-startup",
            element: <FMCGStartup />,
          },
        ],
      },

      // Super Admin
      {
        path: "dashboard",
        element: (
          <ProtectedRoute allowedRoles={["ADMIN", "IBCC_ADMIN", "USER"]}>
            <Dashboard />
          </ProtectedRoute>
        ),
        children: superAdminRouter,
      },
      {
        path: "dashboard/bcl",
        element: (
          <ProtectedRoute allowedRoles={["BCL_ADMIN"]}>
            <Dashboard />
          </ProtectedRoute>
        ),
        children: adminBCLRoutes,
      },
      {
        path: "dashboard/ibcc",
        element: (
          <ProtectedRoute allowedRoles={["IBCC_ADMIN"]}>
            <Dashboard />
          </ProtectedRoute>
        ),
        children: adminIBCCRoutes,
      },
      {
        path: "dashboard/ibpc",
        element: (
          <ProtectedRoute allowedRoles={["IBPC_ADMIN"]}>
            <Dashboard />
          </ProtectedRoute>
        ),
        children: adminIBPCRoutes,
      },

      // Program User Guest
      {
        path: "program",
        element: <ProgramLayout />,
        children: programRouter, // <== Nested program routes
      },
    ],
  },
  {
    path: "admin",
    children: adminRouter, // <== Nest admin routes
  },

  // Misc
  {
    path: "unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "googlesuccess",
    element: <GoogleSuccess />,
  },
]);
