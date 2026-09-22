import AnnounceBCL from "@/components/dashboard/adminBCL/announceBCL";
import NotificationBCL from "@/components/dashboard/adminBCL/notificationBCL";
import ParticipantsBCL from "@/components/dashboard/adminBCL/participansBCL";
import BCLData from "@/components/dashboard/projectOfficer/BCLData";

const adminBCLRoutes = [
  {
    index: true,
    element: <ParticipantsBCL />,
  },
  {
    path: "skaksa", //project officer
    element: <BCLData />,
  },
  {
    path: "announce",
    element: <AnnounceBCL />,
  },
  {
    path: "notifications",
    element: <NotificationBCL />,
  },
];

export default adminBCLRoutes;
