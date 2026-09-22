import { userDataSchema } from "@/types/schema";

import { Pencil, FileText, X, Upload } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";
import { updateSMAStudentData } from "@/assets/updateProfileData";
import useGetUserData from "@/hooks/User/useGetUserData";
import type { User } from "@/types/types";
import useUpdateProfile from "@/hooks/User/useUpdateProfile";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { set, type z } from "zod";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import cities from "@/assets/cities";
import { useCreateSubmission } from "@/hooks/feature/useSubmission";
export type FormFields = z.infer<typeof userDataSchema>;
function getUserValue(user: User | undefined, key: keyof User) {
	return user ? user[key] : "";
}
const UserProfilePage = () => {
	const [isEditing, setIsEditing] = useState(false);
	const [user, setUser] = useState<User | undefined>(undefined);
	const [studentFile, setStudentFile] = useState<File | undefined | null>(
		undefined
	);
	const [studentURL, setStudentURL] = useState<string | undefined | null>(null);
	const {
		handleSubmit,
		register,
		watch,
		setValue,
		control,
		reset,
		formState: { errors },
	} = useForm<FormFields>({
		resolver: zodResolver(userDataSchema),
		defaultValues: {
			name: "",
			email: "",
			birthdate: new Date(),
			domicile: "",
			wa_number: "",
			line_id: "",
			insta_acc: "",
			schoolName: "",
			univName: "",
			majorName: "",
			educationStatus: "highschool",
			institution: "",
			studentID: undefined,
		},
	});
	const { updateProfile, isLoading } = useUpdateProfile();
	const userData = useGetUserData();
	useEffect(() => {
		if (userData.data) {
			reset({
				name: userData.data.name || "",
				email: userData.data.email || "",
				birthdate: userData.data.birthdate
					? new Date(userData.data.birthdate)
					: new Date(),
				domicile: userData.data.domicile || "",
				wa_number: userData.data.wa_number || "",
				line_id: userData.data.line_id || "",
				insta_acc: userData.data.insta_acc || "",
				schoolName:
					userData.data.institution === "HSC"
						? userData.data.institution_name
						: "",
				univName:
					userData.data.institution === "UNIV"
						? userData.data.institution_name
						: "",
				majorName:
					userData.data.institution === "UNIV" ? userData.data.major : "",
				educationStatus:
					userData.data.institution === "HSC"
						? "highschool"
						: userData.data.institution === "UNIV"
						? "university"
						: undefined,
				institution: userData.data.institution || "",
				studentID: undefined,
			});
			setUser(userData.data);

			// File handling
			const url =
				userData.data.Submission?.[0]?.Files?.[0]?.filePath || undefined;
			setStudentURL(url);
			setStudentFile(null); // clear new upload state
			setUser(userData.data);
		}
	}, [userData.data, reset, user]);

	const { createSubmission, isLoading: isLoadingSubmission } =
		useCreateSubmission();

	const educationStatus = watch("educationStatus");

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0] || undefined;
		setStudentFile(file);
		setStudentURL(null); // new file replaces old link
		setValue("studentID", file, { shouldValidate: true });
	};

	const removeFile = () => {
		setStudentFile(null);
		setStudentURL(null); // user removed both, must re-upload
		setValue("studentID", undefined, { shouldValidate: true });
	};
	const handleUpdateData: SubmitHandler<FormFields> = async (data) => {
		if (!studentFile && !studentURL) {
			toast.error("Please upload your Student ID");
			return;
		}
		try {
			let fileSubmission;
			// if (data.studentID instanceof File) {
			//   const formData = new FormData();
			//   formData.append("file", data.studentID);
			//   fileSubmission = formData;
			// } else if (typeof data.studentID === "string") {
			//   fileSubmission = null;
			// }
			if (studentFile) {
				const formData = new FormData();
				formData.append("file", studentFile);
				fileSubmission = formData;
			}

			const tasks = [];
			if (data.educationStatus === "highschool") {
				tasks.push(
					updateProfile({
						name: data.name,
						email: data.email,
						birthdate: data.birthdate
							? new Date(data.birthdate).toISOString().slice(0, 10)
							: "",
						domicile: data.domicile,
						institution: "HSC",
						institution_name: data.schoolName || "",
						major: "",
						wa_number: data.wa_number,
						line_id: data.line_id,
						insta_acc: data.insta_acc,
					})
				);
			} else {
				tasks.push(
					updateProfile({
						name: data.name,
						email: data.email,
						birthdate: data.birthdate
							? new Date(data.birthdate).toISOString().slice(0, 10)
							: "",
						domicile: data.domicile,
						institution: "UNIV",
						institution_name: data.univName || "",
						major: data.majorName || "",
						wa_number: data.wa_number,
						line_id: data.line_id,
						insta_acc: data.insta_acc,
					})
				);
			}

			if (fileSubmission) {
				tasks.push(
					createSubmission({
						programId: null,
						stage: "REGISTRATION",
						type: "IDCARD",
						data: fileSubmission,
					})
				);
			}

			await Promise.all(tasks);
			toast.success("Profile saved!");
			setIsEditing(false);
		} catch (err) {
			console.error("Error updating profile:", err);
			toast.error("Failed to save profile.");
		}
	};
	return (
		<>
			<Toaster />
			<div className="flex-1 mx-auto px-20 py-6 mt-5 min-h-[130vh]">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-white text-[25px] font-semibold">My Profile</h2>
					<div
						className="flex items-center bg-[#D9D9D9] gap-2 text-black font-bold cursor-pointer px-4 rounded-lg py-1"
						onClick={() => setIsEditing(!isEditing)}
					>
						{isLoading ? (
							<LoadingSpinner />
						) : (
							<>
								<Pencil size={20} />
								<p>Edit Profile</p>
							</>
						)}
					</div>
				</div>

				{user?.status === 1 && (
					<p className="text-red-500 mb-2">Please fill your credentials!</p>
				)}

				<form
					onSubmit={handleSubmit(handleUpdateData)}
					className="flex flex-col gap-3 bg-[#8257A9] p-6 rounded-3xl"
				>
					{updateSMAStudentData.map((i) => (
						<div key={i.schemaName}>
							<label className="text-md font-medium text-white pl-4">
								{i.columnName}
							</label>

							{i.type === "domicile" ? (
								<Controller
									name="domicile"
									control={control}
									render={({ field }) => {
										return (
											<Select
												onValueChange={(val) => field.onChange(val)}
												value={field.value} // controlled by RHF
												disabled={!isEditing || isLoading}
											>
												<SelectTrigger
													className={`mt-1 block w-full rounded-full border border-gray-300 text-black font-bold bg-gray-100 py-2 px-4 focus:border-[#8257A9] focus:ring-[#8257A9] outline-none ${
														!isEditing
															? "cursor-not-allowed opacity-70"
															: "cursor-pointer"
													}`}
												>
													<SelectValue
														placeholder={
															field.value ? field.value : "Select City"
														}
													/>
												</SelectTrigger>

												<SelectContent
													align="start"
													position="popper"
													side="bottom"
													avoidCollisions={false}
												>
													<SelectGroup>
														<SelectLabel>City</SelectLabel>
														{cities.map((c) => (
															<SelectItem key={c} value={c}>
																{c}
															</SelectItem>
														))}
													</SelectGroup>
												</SelectContent>
											</Select>
										);
									}}
								/>
							) : i.type === "file" ? (
								<>
									{/* Case 1: Existing URL from backend */}
									{!studentFile && studentURL && (
										<div
											className={`flex items-center justify-between p-3 rounded-xl border ${
												isEditing
													? "bg-gray-100"
													: "bg-gray-200 opacity-70 cursor-not-allowed"
											}`}
										>
											<a
												href={studentURL}
												target="_blank"
												rel="noopener noreferrer"
												className={`text-sm underline truncate max-w-[200px] ${
													isEditing
														? "text-blue-600"
														: "text-gray-500 pointer-events-none"
												}`}
											>
												View Uploaded Student ID
											</a>
											{isEditing && (
												<button
													type="button"
													onClick={removeFile} // user chooses to replace
													className="text-red-500 font-bold"
												>
													❌
												</button>
											)}
										</div>
									)}

									{/* Case 2: No file yet */}
									{!studentFile &&
										!studentURL &&
										(isEditing ? (
											<label className="flex p-4 rounded-xl border-2 border-dashed bg-purple-200/40 hover:bg-purple-200/60 transition cursor-pointer items-center gap-3">
												<Upload size={30} color="#000000" />
												<div className="flex flex-col">
													<span className="font-bold text-black">
														Upload your Student ID / KTP
													</span>
													<span className="text-xs text-gray-600 mt-1">
														Accepted: .jpg / .png / .pdf | Max size: 2MB
													</span>
												</div>
												<input
													type="file"
													accept="image/*,application/pdf"
													onChange={handleFileChange}
													className="hidden"
												/>
											</label>
										) : (
											<div className="flex flex-col p-4 rounded-xl border-2 border-dashed bg-gray-200 opacity-70 cursor-not-allowed">
												<span className="font-bold text-gray-500">
													Upload your Student ID / KTP
												</span>
												<span className="text-xs text-gray-400 mt-1">
													Accepted: .jpg / .png / .pdf | Max size: 2MB
												</span>
											</div>
										))}

									{/* Case 3: New File selected */}
									{studentFile && (
										<div
											className={`flex items-center justify-between p-3 rounded-xl border ${
												isEditing
													? "bg-gray-100"
													: "bg-gray-200 opacity-70 cursor-not-allowed"
											}`}
										>
											<a
												href={URL.createObjectURL(studentFile)}
												target="_blank"
												rel="noopener noreferrer"
												className={`text-sm underline truncate max-w-[200px] ${
													isEditing
														? "text-blue-600"
														: "text-gray-500 pointer-events-none"
												}`}
											>
												{studentFile.name}
											</a>
											{isEditing && (
												<button
													type="button"
													onClick={removeFile}
													className="text-red-500 font-bold"
												>
													❌
												</button>
											)}
										</div>
									)}
								</>
							) : (
								// @ts-ignore
								<input
									type={i.type}
									{...register(String(i.schemaName) as keyof FormFields)}
									disabled={!isEditing || isLoading}
									className={`mt-1 block w-full rounded-full border border-gray-300 text-black font-bold bg-gray-100 py-2 px-4 focus:border-[#8257A9] focus:ring-[#8257A9] outline-none ${
										!isEditing
											? "cursor-not-allowed opacity-70"
											: "cursor-pointer"
									}`}
									value={(() => {
										const val = watch(i.schemaName as keyof FormFields);
										if (val instanceof Date)
											return val.toISOString().slice(0, 10);
										if (val instanceof File) return val.name;
										return val ?? "";
									})()}
									placeholder={i.placeHolder}
								/>
							)}

							{errors[i.schemaName as keyof FormFields] && (
								<p className="text-red-500 pl-2 text-sm">
									{errors[
										i.schemaName as keyof FormFields
									]?.message?.toString()}
								</p>
							)}
						</div>
					))}

					{/* education status */}
					<label className="text-md font-medium text-white pl-2">
						Education Status
					</label>
					<div
						className={`mt-1 flex flex-col  w-full rounded-xl border border-gray-300 text-black font-bold bg-gray-100 py-2 pl-4  focus:border-[#8257A9] focus:ring-[#8257A9] outline-none ${
							!isEditing ? "cursor-not-allowed opacity-70" : "cursor-pointer"
						}`}
					>
						<label className="flex items-center gap-2">
							<input
								type="radio"
								value="highschool"
								{...register("educationStatus")}
								disabled={!isEditing || isLoading}
								className="form-radio cursor-pointer"
								style={{ width: "1.2em", height: "1.2em" }}
								// checked={
								//   watch("educationStatus") === "highschool" ||
								//   user?.institution === "HSC"
								// }
								// onChange={() => setValue("educationStatus", "highschool")}
							/>
							High School Student
						</label>
						<label className="flex items-center gap-2">
							<input
								type="radio"
								value="university"
								{...register("educationStatus")}
								disabled={!isEditing || isLoading}
								className="form-radio cursor-pointer"
								style={{ width: "1.2em", height: "1.2em" }}
								// checked={
								//   watch("educationStatus") === "university" ||
								//   user?.institution === "UNIV"
								// }
								// onChange={() => setValue("educationStatus", "university")}
							/>
							University Student
						</label>
					</div>
					{errors.educationStatus && (
						<p className="text-red-500 pl-2 text-sm">
							{errors.educationStatus.message}
						</p>
					)}

					{/* institution */}
					<label className="text-md font-medium text-white pl-2">
						Current Year
					</label>
					<div
						className={`mt-1 flex flex-col  w-full rounded-xl border border-gray-300 text-black font-bold bg-gray-100 py-2 pl-4  focus:border-[#8257A9] focus:ring-[#8257A9] outline-none ${
							!isEditing ? "cursor-not-allowed opacity-70" : "cursor-pointer"
						}`}
					>
						{educationStatus === "highschool" ? (
							<>
								<label>
									<input
										type="radio"
										value="10"
										{...register("institution")}
										disabled={!isEditing || isLoading}
										className="form-radio cursor-pointer"
										style={{ width: "1.2em", height: "1.2em" }}
									/>{" "}
									Year 10
								</label>
								<label>
									<input
										type="radio"
										value="11"
										{...register("institution")}
										disabled={!isEditing || isLoading}
										className="form-radio cursor-pointer"
										style={{ width: "1.2em", height: "1.2em" }}
									/>{" "}
									Year 11
								</label>
								<label>
									<input
										type="radio"
										value="12"
										{...register("institution")}
										disabled={!isEditing || isLoading}
										className="form-radio cursor-pointer"
										style={{ width: "1.2em", height: "1.2em" }}
									/>{" "}
									Year 12
								</label>
							</>
						) : (
							<>
								<label>
									<input
										type="radio"
										value="1st year"
										{...register("institution")}
										disabled={!isEditing || isLoading}
										className="form-radio cursor-pointer"
										style={{ width: "1.2em", height: "1.2em" }}
									/>{" "}
									1st Year
								</label>
								<label>
									<input
										type="radio"
										value="2nd year"
										{...register("institution")}
										disabled={!isEditing || isLoading}
										className="form-radio cursor-pointer"
										style={{ width: "1.2em", height: "1.2em" }}
									/>{" "}
									2nd Year
								</label>
								<label>
									<input
										type="radio"
										value="3rd year"
										{...register("institution")}
										disabled={!isEditing || isLoading}
										className="form-radio cursor-pointer "
										style={{ width: "1.2em", height: "1.2em" }}
									/>{" "}
									3rd Year
								</label>
								<label>
									<input
										type="radio"
										value="4th year"
										{...register("institution")}
										disabled={!isEditing || isLoading}
										className="form-radio cursor-pointer"
										style={{ width: "1.2em", height: "1.2em" }}
									/>{" "}
									4th Year
								</label>
							</>
						)}
					</div>
					{errors.institution && (
						<p className="text-red-500 pl-2 text-sm">
							{errors.institution.message}
						</p>
					)}

					{/* conditional fields */}
					{educationStatus === "highschool" && (
						<div>
							<label className="text-md font-medium text-white pl-4">
								School Name
							</label>
							<input
								type="text"
								{...register("schoolName")}
								disabled={!isEditing || isLoading}
								placeholder="Enter your school name"
								className={`mt-1 block w-full rounded-full border border-gray-300 text-black font-bold bg-gray-100 py-2 px-4  focus:border-[#8257A9] focus:ring-[#8257A9] outline-none ${
									!isEditing
										? "cursor-not-allowed opacity-70"
										: "cursor-pointer"
								}`}
							/>
							{errors.schoolName && (
								<p className="text-red-500 pl-2 text-sm">
									{errors.schoolName.message}
								</p>
							)}
						</div>
					)}
					{educationStatus === "university" && (
						<>
							<div>
								<label className="text-md font-medium text-white pl-4">
									University Name
								</label>
								<input
									type="text"
									{...register("univName")}
									disabled={!isEditing || isLoading}
									placeholder="Enter your university name"
									className={`mt-1 block w-full rounded-full border border-gray-300 text-black font-bold bg-gray-100 py-2 px-4  focus:border-[#8257A9] focus:ring-[#8257A9] outline-none ${
										!isEditing
											? "cursor-not-allowed opacity-70"
											: "cursor-pointer"
									}`}
								/>
							</div>
							<div>
								<label className="text-md font-medium text-white pl-2">
									Major / Study Program
								</label>
								<input
									type="text"
									{...register("majorName")}
									disabled={!isEditing || isLoading}
									placeholder="Enter your major"
									className={`mt-1 block w-full rounded-full border border-gray-300 text-black font-bold bg-gray-100 py-2 px-4  focus:border-[#8257A9] focus:ring-[#8257A9] outline-none ${
										!isEditing
											? "cursor-not-allowed opacity-70"
											: "cursor-pointer"
									}`}
								/>
							</div>
						</>
					)}

					<button
						type="submit"
						disabled={!isEditing || isLoading}
						className="font-bold max-w-fit text-white bg-[#5EC7ED] rounded-lg py-2 px-8 mt-4 hover:bg-[#6f4c8f] disabled:opacity-70 cursor-pointer flex flex-col justify-center"
					>
						{isLoadingSubmission ? <LoadingSpinner /> : "Save Changes"}
					</button>
				</form>
			</div>
		</>
	);
};

export default UserProfilePage;
