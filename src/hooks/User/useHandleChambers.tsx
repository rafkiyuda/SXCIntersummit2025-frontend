import { API } from "@/services/API";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useGetChambersAnnouncements = () => {
	return useQuery({
		queryKey: ["chambersAnnouncements"],
		queryFn: async () => {
			const res = await API.get("/users/chambers/announcement");
			return res.data;
		},
	});
};

// ==============================
// MARK ANNOUNCEMENT AS READ
// ==============================
export const useReadChambersNotif = () => {
	const queryClient = useQueryClient();
	const readNotifData = useMutation({
		mutationFn: async (id: string | number) => {
			const res = await API.patch(`/users/chambers/announcement/read/${id}`);
			return res.data;
		},
		onMutate: async (id) => {
			await queryClient.cancelQueries({ queryKey: ["chambersAnnouncements"] });
			const prevData = queryClient.getQueryData<any[]>([
				"chambersAnnouncements",
			]);
			queryClient.setQueryData<any[]>(
				["chambersAnnouncements"],
				(old) => old?.map((a) => (a.id === id ? { ...a, read: true } : a)) || []
			);
			return { prevData };
		},
		onError: (err, _vars, context) => {
			if (context?.prevData) {
				queryClient.setQueryData(["chambersAnnouncements"], context.prevData);
			}
			if (axios.isAxiosError(err) && err.response) {
				toast.error(err.response.data.message || "Failed to mark as read");
			} else {
				toast.error("Something went wrong");
			}
		},
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ["chambersAnnouncements"] });
		},
	});

	return {
		readChambersnotif: readNotifData.mutateAsync,
		isLoading: readNotifData.isPending,
	};
};

export const usePostSubmitForm = () => {
	const queryClient = useQueryClient();
	const submitForm = useMutation({
		mutationFn: async ({
			formData,
			day,
		}: {
			formData: unknown;
			day: string;
		}) => {
			const res = await API.post(`/users/chambers/form/${day}`, formData);
			return res.data;
		},
		onError: (err, _vars, context) => {
			if (axios.isAxiosError(err) && err.response) {
				toast.error(err.response.data.message || "Failed to mark as read");
			} else {
				toast.error("Something went wrong");
			}
		},
	});

	return {
		submitForm: submitForm.mutateAsync,
		isLoading: submitForm.isPending,
	};
};
export const useRegisterChambers = () => {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const registerChambers = useMutation({
		mutationFn: async (day: string) => {
			const res = await API.post(`/users/chambers/register/${day}`);
			return { res: res.data, day };
		},
		onError: (err, _vars, context) => {
			if (axios.isAxiosError(err) && err.response) {
				toast.error(err.response.data.message || "Failed to Register");
			} else {
				toast.error("Something went wrong");
			}
		},
		onSuccess: ({ res, day }) => {
			toast.success("Register Successfully");
			if (day === "DAY2") {
				navigate("/profile/home/chambers/fmcg-startup");
			} else {
				navigate("/profile/home/chambers/banking-consult");
			}
		},
	});

	return {
		registerChambers: registerChambers.mutateAsync,
		isLoading: registerChambers.isPending,
	};
};
export const useCancelRegisterChambers = () => {
	const queryClient = useQueryClient();
	const cancelRegister = useMutation({
		mutationFn: async (day: string) => {
			const res = await API.delete(`/users/chambers/register/${day}`);
			return res.data;
		},
		onError: (err, _vars, context) => {
			if (axios.isAxiosError(err) && err.response) {
				toast.error(err.response.data.message || "Failed to Cancel Register");
			} else {
				toast.error("Something went wrong");
			}
		},
		onSuccess: () => {
			toast.success("Register Successfully");
		},
	});

	return {
		registerChambers: cancelRegister.mutateAsync,
		isLoading: cancelRegister.isPending,
	};
};
