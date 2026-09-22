import useGetUserData from "@/hooks/User/useGetUserData";
import { useRegisterBCL } from "@/hooks/User/useHandleBCL";
import { useUserStore } from "@/store/userStore";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
const RegisterProgram = () => {
	const { user } = useUserStore();
	const { programName } = useParams();
	const { data: userData } = useGetUserData();
	const { isLoading: isLoadingBCL, registerBCL } = useRegisterBCL();

	// ✅ Add state for registration type
	const [registrationType, setRegistrationType] = useState("individual");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (registrationType === "individual") {
			registerBCL();
		} else {
			registerBCL();
		}
	};

	return (
		<>
			{/* Register team */}
			<div className="text-left mb-4 flex justify-between items-center ">
				<h2 className="text-white text-3xl font-bold my-5">
					Register your team
				</h2>
				{userData?.birthdate === null ? (
					<p className="text-red-500">
						Please complete your profile before registering.
					</p>
				) : null}
			</div>
			<div className="container mx-auto px-4 py-6 bg-[#8257A9] rounded-3xl">
				<div className="flex items-start flex-col justify-start gap-3">
					{/* Content */}
					<h2 className="text-white  text-3xl font-bold my-2">
						Select Registration Type
					</h2>
					<form
						className="flex flex-col items-start space-y-4 w-full"
						onSubmit={handleSubmit}
					>
						<label className="flex items-center space-x-2">
							<input
								type="radio"
								name="registrationType"
								value="individual"
								className="form-radio"
								checked={registrationType === "individual"}
								onChange={(e) => setRegistrationType(e.target.value)}
								disabled={userData?.birthdate === null}
								style={{ width: "1.2em", height: "1.2em" }}
							/>
							<span className="text-white text-lg font-semibold">
								As Individual
							</span>
						</label>
						<label className="flex items-center space-x-2">
							<input
								type="radio"
								name="registrationType"
								value="group"
								className="form-radio"
								checked={registrationType === "group"}
								onChange={(e) => setRegistrationType(e.target.value)}
								disabled={userData?.birthdate === null}
								style={{ width: "1.2em", height: "1.2em" }}
							/>
							<span className="text-white text-lg font-semibold">
								As Group / Team
							</span>
						</label>

						<button
							type="submit"
							className={`font-bold text-white bg-[#5EC7ED] rounded-lg py-2 px-8 mt-4 hover:bg-[#6f4c8f] transition duration-200 ${
								userData?.birthdate === null
									? "opacity-50 cursor-not-allowed hover:bg-[#5EC7ED] "
									: "cursor-pointer"
							}`}
							disabled={userData?.birthdate === null}
						>
							Confirm Registration
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default RegisterProgram;
