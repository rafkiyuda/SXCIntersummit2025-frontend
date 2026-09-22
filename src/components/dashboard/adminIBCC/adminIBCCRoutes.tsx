import AnnounceIBCC from "./announceIBCC";
import NotificationIBCC from "./notificationIBCC";
import ParticipantsIBCC from "./participantsIBCC";
import TeamIBCC from "./TeamIBCC";

const adminIBCCRoutes = [
  {
    index: true,
    element: <TeamIBCC />,
  },
  {
    path: "participants",
    element: <ParticipantsIBCC />,
  },
  {
    path: "announcement",
    element: <AnnounceIBCC />,
  },
  {
    path: "notifications",
    element: <NotificationIBCC />,
  },
];

export default adminIBCCRoutes;
