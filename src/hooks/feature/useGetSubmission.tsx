import { API } from "@/services/API";
import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";

const useGetSubmission = ({ event }: { event: string }) => {
	return useQuery({
		queryKey: ["eventSubmissions"],
		queryFn: async () => {
			const res = await API.get(`/submission/event/${event}`);
			return res.data;
		},
	});
};

export default useGetSubmission;
