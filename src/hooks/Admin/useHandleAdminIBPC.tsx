// hooks/useAdminIBPC.ts
import { API } from "@/services/API";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

// ==============================
// GET ALL TEAMS
// ==============================
export const useGetIBPCTeams = () => {
  return useQuery({
    queryKey: ["ibpcTeams"],
    queryFn: async () => {
      const res = await API.get("/admin/ibpc/teams");
      return res.data;
    },
  });
};

// ==============================
// UPDATE TEAM STATUS
// ==============================
export const useUpdateIBPCTeamStatus = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data: { teamIds: number[]; status: number }) => {
      const res = await API.patch("/admin/ibpc/teams/status", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ibpcTeams"] });
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
export const useGetIBPCGeneral = () => {
  return useQuery({
    queryKey: ["ibpcGeneral"],
    queryFn: async () => {
      const res = await API.get("/admin/ibpc/teams/general");
      return res.data;
    },
  });
};

// ==============================
// GET PARTICIPANTS
// ==============================
export const useGetIBPCParticipants = () => {
  return useQuery({
    queryKey: ["ibpcParticipants"],
    queryFn: async () => {
      const res = await API.get("/admin/ibpc/participants");
      return res.data;
    },
  });
};

// ==============================
// UPDATE PARTICIPANT STATUS
// ==============================
export const useUpdateIBPCParticipantStatus = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data: { participantId: string; status: string }) => {
      const res = await API.patch("/admin/ibpc/participants/status", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ibpcParticipants"] });
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
export const useSendIBPCAnnouncement = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data: {
      status: number;
      title: string;
      message: string;
    }) => {
      const res = await API.post(
        `/admin/ibpc/announcement/team/${data.status}`,
        {
          title: data.title,
          message: data.message,
        }
      );
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ibpcAnnouncementsAdmin"] });
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

export const useSendIBPCAnnouncementAll = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data: { title: string; message: string }) => {
      const res = await API.post("/admin/ibpc/announcement/all", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ibpcAnnouncementAllAdmin"] });
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
export const useSendIBPCNotification = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data: { title: string; message: string }) => {
      const res = await API.post("/admin/ibpc/notification", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ibpcNotificationsAdmin"] });
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
export const useSearchIBPCTeam = (keyword: string) => {
  return useQuery({
    queryKey: ["ibpcSearchTeams", keyword],
    queryFn: async () => {
      const res = await API.get(`/admin/ibpc/search?keyword=${keyword}`);
      return res.data;
    },
    enabled: !!keyword,
  });
};
