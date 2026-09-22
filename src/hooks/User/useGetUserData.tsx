import { API } from "@/services/API";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import type { User } from "@/types/types";
const useGetUserData = () => {
  return useQuery<User>({
    queryKey: ["userProfile"],
    queryFn: async () => {
      const res = await API.get("/users/profile/");
      return res.data;
    },
  });
};

export default useGetUserData;
