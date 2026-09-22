import { API } from "@/services/API";
import { useQuery } from "@tanstack/react-query";

export const useGetUserAnnouncements = (link: string | null) => {
  return useQuery({
    queryKey: [link],
    queryFn: async () => {
      if (!link) return null;
      const res = await API.get(link);
      return res.data;
    },
  });
};
