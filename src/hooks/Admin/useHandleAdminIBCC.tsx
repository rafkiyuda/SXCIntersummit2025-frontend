// hooks/useAdminIBCC.ts
import { API } from "@/services/API";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

// ==============================
// GET ALL TEAMS
// ==============================
export const useGetIBCCTeams = () => {
  return useQuery({
    queryKey: ["ibccTeams"],
    queryFn: async () => {
      const res = await API.get("/admin/ibcc/teams");
      return res.data;
    },
  });
};

// ==============================
// UPDATE TEAM STATUS
// ==============================
export const useUpdateIBCCTeamStatus = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data: { teamIds: number[]; status: number }) => {
      const res = await API.patch("/admin/ibcc/teams/status", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ibccTeams"] });
      toast.success("Team status updated successfully");
    },
    onError: (err) => {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(
          err.response.data.message || "Failed to update team status"
        );
      } else {
        toast.error("Something went wrong");
      }
    },
  });

  return {
    updateTeamStatus: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};

// ==============================
// GET GENERAL TEAMS DATA
// ==============================
export const useGetIBCCGeneral = () => {
  return useQuery({
    queryKey: ["ibccGeneral"],
    queryFn: async () => {
      const res = await API.get("/admin/ibcc/teams/general");
      return res.data;
    },
  });
};

// ==============================
// GET PARTICIPANTS
// ==============================
export const useGetIBCCParticipants = () => {
  return useQuery({
    queryKey: ["ibccParticipants"],
    queryFn: async () => {
      const res = await API.get("/admin/ibcc/participants");
      return res.data;
    },
  });
};

// ==============================
// UPDATE PARTICIPANT STATUS
// ==============================
export const useUpdateIBCCParticipantStatus = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data: { participantId: string; status: string }) => {
      const res = await API.patch("/admin/ibcc/participants/status", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ibccParticipants"] });
      toast.success("Participant status updated successfully");
    },
    onError: (err) => {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(
          err.response.data.message || "Failed to update participant status"
        );
      } else {
        toast.error("Something went wrong");
      }
    },
  });

  return {
    updateParticipantStatus: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};

// ==============================
// SEND ANNOUNCEMENT TO TEAM MEMBERS
// ==============================
export const useSendIBCCAnnouncement = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data: {
      status: number;
      title: string;
      message: string;
    }) => {
      const res = await API.post(
        `/admin/ibcc/announcement/team/${data.status}`,
        {
          title: data.title,
          message: data.message,
        }
      );
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ibccAnnouncementsAdmin"] });
      toast.success("Announcement sent successfully");
    },
    onError: (err) => {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Failed to send announcement");
      } else {
        toast.error("Something went wrong");
      }
    },
  });

  return {
    sendAnnouncement: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};

export const useSendIBCCAnnouncementAll = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data: { title: string; message: string }) => {
      const res = await API.post("/admin/ibcc/announcement/all", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ibccAnnouncementAllAdmin"] });
      toast.success("Announcement sent successfully");
    },
    onError: (err) => {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Failed to send Announcement");
      } else {
        toast.error("Something went wrong");
      }
    },
  });

  return {
    sendAnnouncementToAll: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};

// ==============================
// SEND NOTIFICATION TO ALL USERS
// ==============================
export const useSendIBCCNotification = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data: { title: string; message: string }) => {
      const res = await API.post("/admin/ibcc/notification", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ibccNotificationsAdmin"] });
      toast.success("Notification sent successfully");
    },
    onError: (err) => {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Failed to send notification");
      } else {
        toast.error("Something went wrong");
      }
    },
  });

  return {
    sendNotification: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};

// ==============================
// SEARCH TEAM
// ==============================
export const useSearchIBCCTeam = (keyword: string) => {
  return useQuery({
    queryKey: ["ibccSearchTeams", keyword],
    queryFn: async () => {
      const res = await API.get(`/admin/ibcc/search?keyword=${keyword}`);
      return res.data;
    },
    enabled: !!keyword,
  });
};
