import Prelim from "./BMC/prelim";
import AnnouncementPage from "./BMC/announcement";
import ParticipantsVerif from "./BMC/participantsVerif";
import ProtectedRoute from "../role/ProtectedRoute";

const adminRouter = [
  {
    path: "bmc/prelim", // Path relatif terhadap parent: /admin/bmc/prelim
    element: (
      <ProtectedRoute allowedRoles={["BMC_ADMIN"]}>
        <Prelim />
      </ProtectedRoute>
    ),
  },
  {
    path: "bmc/announcement",
    element: (
      <ProtectedRoute allowedRoles={["BMC_ADMIN"]}>
        <AnnouncementPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "bmc/participantsVerif",
    element: (
      <ProtectedRoute allowedRoles={["BMC_ADMIN"]}>
        <ParticipantsVerif />
      </ProtectedRoute>
    ),
  },
];

export default adminRouter;
