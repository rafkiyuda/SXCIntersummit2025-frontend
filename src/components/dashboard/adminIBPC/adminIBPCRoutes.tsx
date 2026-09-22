import AnnounceIBPC from "./announceIBPC";
import NotificationIBPC from "./notificationIBPC";
import ParticipantsIBPC from "./participantsIBPC";
import TeamIBPC from "./TeamIBPC";

const adminIBPCRoutes = [
  {
    index: true,
    element: <TeamIBPC />,
  },
  {
    path: "participants",
    element: <ParticipantsIBPC />,
  },
  {
    path: "announcement",
    element: <AnnounceIBPC />,
  },
  {
    path: "notifications",
    element: <NotificationIBPC />,
  },
];

export default adminIBPCRoutes;
