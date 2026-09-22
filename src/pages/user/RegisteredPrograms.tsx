import { useGetActivityLog } from "@/hooks/Admin/useHandleAdminIT";
import useGetRegisteredPrograms from "@/hooks/User/useGetRegisteredPrograms";
import { getDateLabel } from "@/utils/utils";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
type Program = {
	programId: number;
	programcode: {
		name: string;
		type: string;
	};
	type?: string;
};
const routes = [
	{
		name: "IBCC",
		route: "/profile/home/ibcc/preliminary",
	},
	{
		name: "IBPC",
		route: "/profile/home/ibpc/preliminary",
	},
	{
		name: "CHAMBERS",
		type: "DAY2",
		route: "/profile/home/chambers/fmcg-startup",
	},
	{
		name: "CHAMBERS",
		type: "DAY1",
		route: "/profile/home/chambers/banking-consulting",
	},
];
const findRoute = (p: Program) => {
	if (p.programcode.name === "CHAMBERS") {
		return routes.find(
			(r) => r.name === p.programcode?.name && r.type === p.type
		)?.route;
	}
	return routes.find((r) => r.name === p.programcode?.name)?.route;
};
const RegisteredPrograms = () => {
	const navigate = useNavigate();
	const { data } = useGetRegisteredPrograms();
	const [allPrograms, setAllPrograms] = React.useState<any[]>([]);

	useEffect(() => {
		if (data) {
			setAllPrograms(data);
			console.log(data);
		}
	}, [data]);
	return (
		<>
			{/* Registered Programs */}
			<div className="text-left mb-4 flex justify-between items-center">
				<h2 className="text-white text-3xl font-bold my-5">
					Registered Programs
				</h2>
			</div>
			<div className="px-2 md:px-4 py-1 md:py-6 bg-[#8257A9] rounded-3xl w-full">
				<div className="flex flex-col items-center justify-center gap-6">
					{/* Content */}
					{allPrograms.length === 0 ? (
						<>
							<p className="font-semibold text-xl md:text-3xl text-center">
								You haven't joined any programs yet.
							</p>
							<p className="text-base md:text-lg max-w-[600px] text-center">
								Get started by exploring our available programs and join one to
								unlock your tasks, track your progress, and make the most of
								your experience!
							</p>
							<button
								type="submit"
								onClick={() => {
									navigate("/program");
								}}
								className="font-bold max-w-fit text-white bg-[#5EC7ED] rounded-lg py-2 px-8 mt-4 hover:bg-[#6f4c8f] disabled:opacity-70 cursor-pointer flex flex-col justify-center text-base md:text-lg"
							>
								Explore Now
							</button>
						</>
					) : (
						<div className="w-full flex flex-col gap-6">
							{allPrograms.map((p, idx) => (
								<div key={idx} className="w-full flex justify-center">
									<div className="w-full max-w-xs md:max-w-2xl bg-[#7B5CB6] rounded-2xl p-1 flex flex-col items-center shadow-lg">
										<div className="text-lg md:text-2xl font-bold text-center text-white mb-2">
											{p.programcode?.name || ""}
										</div>
										<p className="text-gray-300 text-center text-xs md:text-md font-thin mb-2">
											{p.programcode?.type || ""}
										</p>

										{p.programcode?.name === "CHAMBERS" && (
											<p className="text-gray-300 text-center text-xs md:text-md font-thin mb-2">
												{p.type || ""}
											</p>
										)}
										{/* <div className="flex flex-col items-center mb-4">
                      <p className="text-gray-400 text-xs md:text-base">
                        Program Period:
                      </p>
                      <p className="text-gray-400 text-xs md:text-base font-semibold">
                        {getDateLabel(p?.programId || 0)}
                      </p>
                    </div> */}
										<button
											type="submit"
											onClick={() => {
												navigate(findRoute(p) || "/profile");
											}}
											className="font-bold text-xs md:text-lg max-w-fit text-white bg-[#5EC7ED] rounded-lg py-2 px-1 md:px-8  hover:bg-[#6f4c8f] disabled:opacity-70 cursor-pointer flex flex-col justify-center"
										>
											View Details
										</button>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default RegisteredPrograms;
