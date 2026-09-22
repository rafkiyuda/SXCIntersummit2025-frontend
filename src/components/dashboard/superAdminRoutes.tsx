import ActivityLog from "./ActivityLog";
import AddAdmin from "./AddAdmin";
import AddReferral from "./AddReferral";
import DashboardIT from "./DashboardIT";
import EditReferral from "./EditRefferal";
import ProjectOfficer from "./ProjectOfficer";
import ReferralCode from "./ReferralCode";
import SettingSection from "./SettingSection";
import StaffSection from "./StaffSection";

const superAdminRouter = [
  {
    path: "it",
    element: <DashboardIT />,
  },
  {
    path: "referral",
    element: <ReferralCode />,
  },
  {
    path: "referral/addreferral",
    element: <AddReferral />,
  },
  {
    path: "referral/editreferral",
    element: <EditReferral />,
  },
  {
    path: "admins",
    element: <StaffSection />,
  },
  {
    path: "admins/add-admin",
    element: <AddAdmin />,
  },
  {
    path: "activitylog",
    element: <ActivityLog />,
  },
  {
    path: "settings",
    element: <SettingSection />,
  },
  {
    path: "project-officer",
    element: <ProjectOfficer />,
  },
];

export default superAdminRouter;
