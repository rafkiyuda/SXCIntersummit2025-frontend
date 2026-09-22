import { API } from "@/services/API";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useHadleUserReadAnnouncement = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const readAnnouncement = useMutation({
    mutationFn: async ({ event, id }: { event: string; id: number }) => {
      const res = await API.post(`/users/${event}/announcement/read/${id}`);
      return res.data;
    },

    onSuccess: () => {},
    onError: (err) => {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Failed to read announcement");
      } else {
        toast.error("Something went wrong");
      }
    },
  });
  return {
    readAnnouncement: readAnnouncement.mutateAsync,
    isLoading: readAnnouncement.isPending,
  };
};

export default useHadleUserReadAnnouncement;
