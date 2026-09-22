// hooks/useUserBCL.ts
import { API } from "@/services/API";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

// ==============================
// REGISTER
// ==============================
export const useRegisterBCL = () => {
  const queryClient = useQueryClient();
  const registerData = useMutation({
    mutationFn: async () => {
      const res = await API.post("/users/bcl/register/");
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bclAnnouncements"] });
      toast.success("Successfully registered for BCL");
    },
    onError: (err) => {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Failed to register");
      } else {
        toast.error("Something went wrong");
      }
    },
  });

  return {
    registerBCL: registerData.mutateAsync,
    isLoading: registerData.isPending,
  };
};

// ==============================
// CANCEL REGISTRATION
// ==============================
export const useCancelBCL = () => {
  const queryClient = useQueryClient();
  const cancelData = useMutation({
    mutationFn: async () => {
      const res = await API.delete("/users/bcl/cancel");
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bclAnnouncements"] });
      toast.success("Registration cancelled");
    },
    onError: (err) => {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Failed to cancel");
      } else {
        toast.error("Something went wrong");
      }
    },
  });

  return {
    cancelBCL: cancelData.mutateAsync,
    isLoading: cancelData.isPending,
  };
};

// ==============================
// GET ANNOUNCEMENTS
// ==============================
export const useGetBCLAnnouncements = () => {
  return useQuery({
    queryKey: ["bclAnnouncements"],
    queryFn: async () => {
      const res = await API.get("/users/bcl/announcement");
      return res.data;
    },
  });
};

// ==============================
// MARK ANNOUNCEMENT AS READ
// ==============================
export const useMarkAnnouncementRead = () => {
  const queryClient = useQueryClient();
  const markReadData = useMutation({
    mutationFn: async (id: string) => {
      const res = await API.patch(`/users/bcl/announcement/read/${id}`);
      return res.data;
    },
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["bclAnnouncements"] });

      const prevData = queryClient.getQueryData<any[]>(["bclAnnouncements"]);

      queryClient.setQueryData<any[]>(
        ["bclAnnouncements"],
        (old) => old?.map((a) => (a.id === id ? { ...a, read: true } : a)) || []
      );

      return { prevData };
    },
    onError: (err, _vars, context) => {
      if (context?.prevData) {
        queryClient.setQueryData(["bclAnnouncements"], context.prevData);
      }
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Failed to mark as read");
      } else {
        toast.error("Something went wrong");
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["bclAnnouncements"] });
    },
  });

  return {
    markAnnouncementRead: markReadData.mutateAsync,
    isLoading: markReadData.isPending,
  };
};

// ==============================
// SUBMIT FORM
// ==============================
export const useSubmitBCLForm = () => {
  const queryClient = useQueryClient();
  const submitFormData = useMutation({
    mutationFn: async (data: Record<string, boolean | string>) => {
      const res = await API.post("/users/bcl/form", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bclForm"] });
      toast.success("Form submitted successfully");
    },
    onError: (err) => {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Failed to submit form");
      } else {
        toast.error("Something went wrong");
      }
    },
  });

  return {
    submitBCLForm: submitFormData.mutateAsync,
    isLoading: submitFormData.isPending,
  };
};
