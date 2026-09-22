// hooks/useUserIBPC.ts
import { API } from "@/services/API";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// ==============================
// CREATE TEAM
// ==============================
export const useCreateIBPCteam = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const createTeamData = useMutation({
    mutationFn: async (data: { name: string }) => {
      const res = await API.post("/users/IBPC/team/create", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["IBPCTeamMembers"] });
      toast.success("IBPC team created successfully");
      navigate("/profile/home/ibpc/preliminary");
    },
    onError: (err) => {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Failed to create team");
      } else {
        toast.error("Something went wrong");
      }
    },
  });

  return {
    createIBPCteam: createTeamData.mutateAsync,
    isLoading: createTeamData.isPending,
  };
};

// ==============================
// JOIN TEAM
// ==============================
export const useJoinIBPCteam = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const joinTeamData = useMutation({
    mutationFn: async (data: { code: string }) => {
      const res = await API.post("/users/IBPC/team/join", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["IBPCTeamMembers"] });
      toast.success("Joined IBPC team successfully");
      navigate("/profile/home/ibpc/preliminary");
    },
    onError: (err) => {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Failed to join team");
      } else {
        toast.error("Something went wrong");
      }
    },
  });

  return {
    joinIBPCteam: joinTeamData.mutateAsync,
    isLoading: joinTeamData.isPending,
  };
};

// ==============================
// GET TEAM MEMBERS
// ==============================
export const useGetIBPCteamMembers = () => {
  return useQuery({
    queryKey: ["IBPCTeamMembers"],
    queryFn: async () => {
      const res = await API.get("/users/IBPC/team/member");
      return res.data;
    },
  });
};

// ==============================
// EXIT TEAM
// ==============================
export const useExitIBPCteam = () => {
  const queryClient = useQueryClient();
  const exitTeamData = useMutation({
    mutationFn: async () => {
      const res = await API.post("/users/IBPC/team/exit"); // adjust if DELETE
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["IBPCTeamMembers"] });
      toast.success("Successfully left IBPC team");
    },
    onError: (err) => {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Failed to exit team");
      } else {
        toast.error("Something went wrong");
      }
    },
  });

  return {
    exitIBPCteam: exitTeamData.mutateAsync,
    isLoading: exitTeamData.isPending,
  };
};

// ==============================
// DELETE TEAM (Leader only)
// ==============================
export const useDeleteIBPCteam = () => {
  const queryClient = useQueryClient();
  const deleteTeamData = useMutation({
    mutationFn: async () => {
      const res = await API.delete("/users/IBPC/delete");
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["IBPCTeamMembers"] });
      toast.success("IBPC team deleted successfully");
    },
    onError: (err) => {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Failed to delete team");
      } else {
        toast.error("Something went wrong");
      }
    },
  });

  return {
    deleteIBPCteam: deleteTeamData.mutateAsync,
    isLoading: deleteTeamData.isPending,
  };
};

// ==============================
// GET ANNOUNCEMENTS
// ==============================
export const useGetIBPCannouncements = () => {
  return useQuery({
    queryKey: ["IBPCAnnouncements"],
    queryFn: async () => {
      const res = await API.get("/users/IBPC/announcement");
      return res.data;
    },
  });
};

// ==============================
// MARK ANNOUNCEMENT AS READ
// ==============================
export const useReadIBPCnotif = () => {
  const queryClient = useQueryClient();
  const readNotifData = useMutation({
    mutationFn: async (id: string | number) => {
      const res = await API.patch(`/users/IBPC/announcement/read/${id}`);
      return res.data;
    },
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["IBPCAnnouncements"] });
      const prevData = queryClient.getQueryData<any[]>(["IBPCAnnouncements"]);
      queryClient.setQueryData<any[]>(
        ["IBPCAnnouncements"],
        (old) => old?.map((a) => (a.id === id ? { ...a, read: true } : a)) || []
      );
      return { prevData };
    },
    onError: (err, _vars, context) => {
      if (context?.prevData) {
        queryClient.setQueryData(["IBPCAnnouncements"], context.prevData);
      }
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Failed to mark as read");
      } else {
        toast.error("Something went wrong");
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["IBPCAnnouncements"] });
    },
  });

  return {
    readIBPCnotif: readNotifData.mutateAsync,
    isLoading: readNotifData.isPending,
  };
};

export const useGetIBPCTeamDetails = () => {
  return useQuery({
    queryKey: ["ibpcTeamDetails"],
    queryFn: async () => {
      const res = await API.get("/users/ibpc/team");
      return res.data;
    },
  });
};
