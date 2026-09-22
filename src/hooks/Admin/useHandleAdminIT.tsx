// @ts-nocheck
import { API } from "@/services/API";
import type { Staff } from "@/types/types";
import { getDivisionLabel } from "@/utils/utils";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

// ==============================
// STAFF QUERIES
// ==============================
export const useGetAllStaff = () => {
  return useQuery({
    queryKey: ["staff"],
    queryFn: async () => {
      const res = await API.get("/admin/it/staff");

      return res.data.map(
        (s: any): Staff => ({
          id: s.id,
          division: getDivisionLabel(s.divisionId),
          staffName: s.name,
          staffEmail: s.email,
          role: s.role,
        })
      );
    },
  });
};

export const useCreateStaff = () => {
  const queryClient = useQueryClient();
  const createStaffData = useMutation({
    mutationFn: async (data: any) => {
      const res = await API.post("/admin/it/staff", {
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role,
        division: data.divisionId,
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["staff"] });
      toast.success("Staff created successfully");
    },
    onError: (err) => {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Failed to create staff");
      } else {
        toast.error("Something went wrong");
      }
    },
  });

  return {
    createStaff: createStaffData.mutateAsync,
    isLoading: createStaffData.isPending,
  };
};

export const useUpdateStaff = () => {
  const queryClient = useQueryClient();
  const updateStaffData = useMutation({
    mutationFn: async ({ id, ...data }: { id: string; [key: string]: any }) => {
      const res = await API.patch(`/staff/${id}`, data);
      return res.data;
    },
    onMutate: async (updatedStaff) => {
      await queryClient.cancelQueries({ queryKey: ["staff"] });
      const prevStaff = queryClient.getQueryData<any[]>(["staff"]);
      queryClient.setQueryData<any[]>(
        ["staff"],
        (old) =>
          old?.map((s) =>
            s.id === updatedStaff.id ? { ...s, ...updatedStaff } : s
          ) || []
      );
      return { prevStaff };
    },
    onError: (err, _vars, context) => {
      if (context?.prevStaff) {
        queryClient.setQueryData(["staff"], context.prevStaff);
      }
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Update failed");
      } else {
        toast.error("Something went wrong");
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["staff"] });
    },
  });

  return {
    updateStaff: updateStaffData.mutateAsync,
    isLoading: updateStaffData.isPending,
  };
};

export const useDeleteStaff = () => {
  const queryClient = useQueryClient();
  const deleteStaffData = useMutation({
    mutationFn: async (id: string) => {
      const res = await API.delete(`/admin/it/staff/${id}`);
      return res.data;
    },
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["staff"] });
      const prevStaff = queryClient.getQueryData<any[]>(["staff"]);
      queryClient.setQueryData<any[]>(
        ["staff"],
        (old) => old?.filter((s) => s.id !== id) || []
      );
      return { prevStaff };
    },
    onSuccess: () => {
      toast.success("Staff deleted successfully");
    },
    onError: (err, _vars, context) => {
      if (context?.prevStaff) {
        queryClient.setQueryData(["staff"], context.prevStaff);
      }
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Delete failed");
      } else {
        toast.error("Something went wrong");
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["staff"] });
    },
  });

  return {
    deleteStaff: deleteStaffData.mutateAsync,
    isLoading: deleteStaffData.isPending,
  };
};

// ==============================
// REFERRAL QUERIES
// ==============================
export const useGetAllReferral = () => {
  return useQuery({
    queryKey: ["referral"],
    queryFn: async () => {
      const res = await API.get("/admin/it/referral");

      return res.data
        .filter((r: any) => new Date() <= new Date(r.validUntil))
        .map((r: any, index) => ({
          id: r.id,
          no: index + 1,
          code: r.code,
          creationDate: new Date(r.createdAt).toLocaleDateString("en-GB"),
          validUntil: new Date(r.validUntil).toLocaleDateString("en-GB"),
          discountAmount: String(r.discount),
          status: true,
        }));
    },
  });
};

export const useCreateReferral = () => {
  const queryClient = useQueryClient();
  const createReferralData = useMutation({
    mutationFn: async (data: any) => {
      const res = await API.post("/admin/it/referral", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["referral"] });
      toast.success("Referral created successfully");
    },
    onError: (err) => {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Failed to create referral");
      } else {
        toast.error("Something went wrong");
      }
    },
  });

  return {
    createReferral: createReferralData.mutateAsync,
    isLoading: createReferralData.isPending,
  };
};

export const useUpdateReferral = () => {
  const queryClient = useQueryClient();
  const updateReferralData = useMutation({
    mutationFn: async ({ id, ...data }: { id: string; [key: string]: any }) => {
      const res = await API.patch(`/referral/${id}`, data);
      return res.data;
    },
    onMutate: async (updatedReferral) => {
      await queryClient.cancelQueries({ queryKey: ["referral"] });
      const prevReferral = queryClient.getQueryData<any[]>(["referral"]);
      queryClient.setQueryData<any[]>(
        ["referral"],
        (old) =>
          old?.map((r) =>
            r.id === updatedReferral.id ? { ...r, ...updatedReferral } : r
          ) || []
      );
      return { prevReferral };
    },
    onError: (err, _vars, context) => {
      if (context?.prevReferral) {
        queryClient.setQueryData(["referral"], context.prevReferral);
      }
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Update failed");
      } else {
        toast.error("Something went wrong");
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["referral"] });
    },
  });

  return {
    updateReferral: updateReferralData.mutateAsync,
    isLoading: updateReferralData.isPending,
  };
};

export const useDeleteReferral = () => {
  const queryClient = useQueryClient();
  const deleteReferralData = useMutation({
    mutationFn: async (id: string) => {
      const res = await API.delete(`/admin/it/referral/${id}`);
      return res.data;
    },
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["referral"] });
      const prevReferral = queryClient.getQueryData<any[]>(["referral"]);
      queryClient.setQueryData<any[]>(
        ["referral"],
        (old) => old?.filter((r) => r.id !== id) || []
      );
      return { prevReferral };
    },
    onError: (err, _vars, context) => {
      if (context?.prevReferral) {
        queryClient.setQueryData(["referral"], context.prevReferral);
      }
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Delete failed");
      } else {
        toast.error("Something went wrong");
      }
    },
    onSuccess: () => {
      toast.success("Referral deleted successfully");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["referral"] });
    },
  });

  return {
    deleteReferral: deleteReferralData.mutateAsync,
    isLoading: deleteReferralData.isPending,
  };
};

export const useGetReferralTotal = () => {
  return useQuery({
    queryKey: ["referralTotal"],
    queryFn: async () => {
      const res = await API.get("/admin/it/referral/total");
      return res.data;
    },
  });
};

// ==============================
// ACTIVITY LOG
// ==============================
export const useGetActivityLog = () => {
  return useQuery({
    queryKey: ["activityLog"],
    queryFn: async () => {
      const res = await API.get("/admin/it/activity");
      return res.data;
    },
  });
};
