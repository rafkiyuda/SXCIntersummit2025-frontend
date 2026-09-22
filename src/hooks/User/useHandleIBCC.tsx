// hooks/useUserIBCC.ts
import { API } from "@/services/API";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// ==============================
// CREATE TEAM
// ==============================
export const useCreateIBCCteam = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const createTeamData = useMutation({
    mutationFn: async (data: { name: string }) => {
      const res = await API.post("/users/ibcc/team/create", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ibccTeamMembers"] });
      toast.success("IBCC team created successfully");
      navigate("/profile/home/ibcc/preliminary");
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
    createIBCCteam: createTeamData.mutateAsync,
    isLoading: createTeamData.isPending,
  };
};

// ==============================
// JOIN TEAM
// ==============================
export const useJoinIBCCteam = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const joinTeamData = useMutation({
    mutationFn: async (data: { code: string }) => {
      const res = await API.post("/users/ibcc/team/join", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ibccTeamMembers"] });
      toast.success("Joined IBCC team successfully");
      navigate("/profile/home/ibcc/preliminary");
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
    joinIBCCteam: joinTeamData.mutateAsync,
    isLoading: joinTeamData.isPending,
  };
};

// ==============================
// GET TEAM MEMBERS
// ==============================
export const useGetIBCCteamMembers = () => {
  return useQuery({
    queryKey: ["ibccTeamMembers"],
    queryFn: async () => {
      const res = await API.get("/users/ibcc/team/member");
      return res.data;
    },
  });
};
export const useGetIBCCTeamDetails = () => {
  return useQuery({
    queryKey: ["ibccTeamDetails"],
    queryFn: async () => {
      const res = await API.get("/users/ibcc/team");
      return res.data;
    },
  });
};

// ==============================
// EXIT TEAM
// ==============================
export const useExitIBCCteam = () => {
  const queryClient = useQueryClient();
  const exitTeamData = useMutation({
    mutationFn: async () => {
      const res = await API.post("/users/ibcc/team/exit"); // adjust if DELETE
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ibccTeamMembers"] });
      toast.success("Successfully left IBCC team");
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
    exitIBCCteam: exitTeamData.mutateAsync,
    isLoading: exitTeamData.isPending,
  };
};

// ==============================
// DELETE TEAM (Leader only)
// ==============================
export const useDeleteIBCCteam = () => {
  const queryClient = useQueryClient();
  const deleteTeamData = useMutation({
    mutationFn: async () => {
      const res = await API.delete("/users/ibcc/delete");
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ibccTeamMembers"] });
      toast.success("IBCC team deleted successfully");
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
    deleteIBCCteam: deleteTeamData.mutateAsync,
    isLoading: deleteTeamData.isPending,
  };
};

// ==============================
// GET ANNOUNCEMENTS
// ==============================
export const useGetIBCCannouncements = () => {
  return useQuery({
    queryKey: ["ibccAnnouncements"],
    queryFn: async () => {
      const res = await API.get("/users/ibcc/announcement");
      return res.data;
    },
  });
};

// ==============================
// MARK ANNOUNCEMENT AS READ
// ==============================
export const useReadIBCCnotif = () => {
  const queryClient = useQueryClient();
  const readNotifData = useMutation({
    mutationFn: async (id: string | number) => {
      const res = await API.patch(`/users/ibcc/announcement/read/${id}`);
      return res.data;
    },
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["ibccAnnouncements"] });
      const prevData = queryClient.getQueryData<any[]>(["ibccAnnouncements"]);
      queryClient.setQueryData<any[]>(
        ["ibccAnnouncements"],
        (old) => old?.map((a) => (a.id === id ? { ...a, read: true } : a)) || []
      );
      return { prevData };
    },
    onError: (err, _vars, context) => {
      if (context?.prevData) {
        queryClient.setQueryData(["ibccAnnouncements"], context.prevData);
      }
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Failed to mark as read");
      } else {
        toast.error("Something went wrong");
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["ibccAnnouncements"] });
    },
  });

  return {
    readIBCCnotif: readNotifData.mutateAsync,
    isLoading: readNotifData.isPending,
  };
};
