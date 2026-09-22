import axios from "axios";

export const API = axios.create({
	baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
	withCredentials: true,
});

API.interceptors.request.use(
	(request) => {
		// const token =
		//   sessionStorage.getItem("token") || localStorage.getItem("token") || null;
		// if (token) {
		//   request.headers.Authorization = `Bearer ${token}`;
		// }

		return request;
	},
	() => Promise.reject()
);
