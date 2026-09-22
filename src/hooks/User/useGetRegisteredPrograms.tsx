import { API } from "@/services/API";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const useGetRegisteredPrograms = () => {
  return useQuery({
    queryKey: ["registeredPrograms"],
    queryFn: async () => {
      const res = await API.get("/users/registered/");
      return [...res.data.seminar, ...res.data.compeProgram];
    },
  });
};

export default useGetRegisteredPrograms;
