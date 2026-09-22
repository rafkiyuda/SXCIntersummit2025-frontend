// hooks/useAdminBCL.ts
import { API } from "@/services/API";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// ==============================
// GET PARTICIPANTS
// ==============================
export const useGetBCLParticipants = () => {
  return useQuery({
    queryKey: ["bclParticipants"],
    queryFn: async () => {
      const res = await API.get("/admin/bcl/participants");
      return res.data;
    },
  });
};

// ==============================
// GET EVENT DATA (Feedback)
// ==============================
export const useGetBCLEventData = () => {
  return useQuery({
    queryKey: ["bclEventData"],
    queryFn: async () => {
      const res = await API.get("/admin/bcl/dataevent");
      return res.data;
    },
  });
};

// ==============================
// SEND ANNOUNCEMENT TO PARTICIPANTS
// ==============================
export const useSendBCLAnnouncement = () => {
  const queryClient = useQueryClient();
  const announcementData = useMutation({
    mutationFn: async (data: { title: string; content: string }) => {
      const res = await API.post("/admin/bcl/announcement", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bclAnnouncementsAdmin"] });
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
    sendAnnouncement: announcementData.mutateAsync,
    isLoading: announcementData.isPending,
  };
};

// ==============================
// SEND NOTIFICATION TO ALL USERS
// ==============================
export const useSendBCLNotification = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const notificationData = useMutation({
    mutationFn: async (data: { title: string; content: string }) => {
      const res = await API.post("/admin/bcl/notification", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bclNotificationsAdmin"] });
      toast.success("Notification sent successfully");
      navigate("/dashboard/bcl");
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
    sendNotification: notificationData.mutateAsync,
    isLoading: notificationData.isPending,
  };
};

// ==============================
// SEARCH PARTICIPANT
// ==============================
export const useSearchBCLParticipant = (keyword: string) => {
  return useQuery({
    queryKey: ["bclSearchParticipants", keyword],
    queryFn: async () => {
      const res = await API.get(`/admin/bcl/search?keyword=${keyword}`);
      return res.data;
    },
    enabled: !!keyword, // jangan jalankan jika keyword kosong
  });
};
