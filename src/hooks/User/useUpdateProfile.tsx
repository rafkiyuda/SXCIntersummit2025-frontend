import { API } from "@/services/API";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type userData = {
  name: string;
  email: string;
  birthdate: string;
  domicile: string;
  institution: string;
  institution_name: string;
  major: string;
  wa_number: string;
  line_id: string;
  insta_acc: string;
};

const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const updateProfileData = useMutation({
    mutationFn: async (data: userData) => {
      // const formData = new FormData();
      // Object.entries(data).forEach(([key, value]) => {
      //   if (value === "studentID") {
      //     formData.append(key, value as unknown as File);
      //   } else {
      //     formData.append(key, String(value));
      //   }
      // });

      const response = await API.patch("/users/profile/update", data);

      return response.data;
    },
    onMutate: async (data: userData) => {
      await queryClient.cancelQueries({ queryKey: ["announcements"] });

      const previousData = queryClient.getQueryData<userData>(["userProfile"]);

      if (!previousData || !Array.isArray(previousData)) {
        return { previousData };
      }

      queryClient.setQueryData<userData>(["userProfile"], (old) =>
        old ? { ...old, ...data } : data
      );

      return { previousData };
    },
    onSuccess: () => {
      // window.location.reload();
    },
    onError: (err, _vars, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(["userProfile"], context.previousData);
      }

      if (axios.isAxiosError(err) && err.response) {
        const errorMessage =
          err.response.data.message || "Something went wrong";
        toast.error(errorMessage);
      } else {
        toast.error("Something went wrong, please try again later.");
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
  });
  return {
    updateProfile: updateProfileData.mutateAsync,
    isLoading: updateProfileData.isPending,
  };
};

export default useUpdateProfile;
