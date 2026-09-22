import React, { useEffect, useState } from "react";
import {
	Search,
	ChevronDown,
	Download,
	ChevronLeft,
	ChevronRight,
	Newspaper,
} from "lucide-react";
import SideBarSection from "../../../components/dashboard/adminIBCC/sidebarIBCC";
import {
	useGetIBCCTeams,
	useUpdateIBCCTeamStatus,
} from "@/hooks/Admin/useHandleAdminIBCC";
import type { Submission, TeamDataAdmin } from "@/types/types";
import { formatDateAnnouncement, formatTime } from "@/utils/utils";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { Toaster } from "react-hot-toast";

const getFileLink = (
	submission: Submission[] | null | undefined,
	submitType: string
) => {
	if (!Array.isArray(submission) || submission.length === 0) return null;
	const file = submission.find((f) => f.type === submitType);
	return file?.Files[0]?.filePath || null;
};

const getSubmittedAt = (
	submission: Submission[] | null | undefined,
	submitType: string
) => {
	if (!Array.isArray(submission) || submission.length === 0) return "Not Yet"; // ✅ Safe check
	const file = submission.find((f) => f.type === submitType);
	return file?.submittedAt
		? `${formatDateAnnouncement(new Date(file.submittedAt))} - ${formatTime(
				new Date(file.submittedAt)
		  )}`
		: "Not Yet";
};

const TeamIBCC = () => {
	const files = [
		{
			name: "Proof of Promotion",
			type: "PROMOTION",
		},
		{
			name: "Preliminary Deck",
			type: "TASK",
		},
	];

	const [searchTerm, setSearchTerm] = useState("");
	const [filterStatus, setFilterStatus] = useState(0);
	// const [currentPage, setCurrentPage] = useState(1);
	const [teams, setTeams] = useState<TeamDataAdmin[]>([]);

	// Hooks
	const { updateTeamStatus } = useUpdateIBCCTeamStatus();
	const [isChangingStatus, setIsChangingStatus] = useState<Set<number>>(
		new Set()
	);
	const { data } = useGetIBCCTeams();
	useEffect(() => {
		if (data) {
			setTeams(data);
		}
	}, [data]);
	// Sample team data

	// // // Inisialisasi status tim jika belum ada
	// if (Object.keys(teamStatuses).length === 0) {
	//   const initialStatuses = {};
	//   teams.forEach((team) => {
	//     initialStatuses[team.id] = team.statusCode;
	//   });
	//   setTeamStatuses(initialStatuses);
	// }

	const handleStatusChange = (teamId: number, newStatus: number) => {
		setIsChangingStatus((prev) => new Set(prev).add(teamId));

		updateTeamStatus({ teamIds: [teamId], status: newStatus }).finally(() => {
			setIsChangingStatus((prev) => {
				const newSet = new Set(prev);
				newSet.delete(teamId);
				return newSet;
			});
		});
	};

	const filteredTeams: TeamDataAdmin[] = teams.filter(
		(team: TeamDataAdmin) =>
			team.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
			(filterStatus === 0 || team.statusCode === filterStatus)
	);

	// const totalPages = Math.ceil(filteredTeams.length / 5);
	// const startIndex = (currentPage - 1) * 5;
	// const endIndex = startIndex + 5;

	const statusOptions = [
		{
			label: "Preliminary",
			value: 14,
		},
		{
			label: "Semifinal",
			value: 11,
		},
		{
			label: "Final",
			value: 13,
		},
		{
			label: "Tidak Lolos ke Semifinal",
			value: 10,
		},
		{
			label: "Tidak Lolos ke Final",
			value: 12,
		},
		{
			label: "Promotion Invalid",
			value: 4,
		},
		{
			label: "Payment Invalid",
			value: 8,
		},
		{
			label: "Team Invalid",
			value: 15,
		},
	];

	const getCurrentStatusLabel = (status: number) => {
		switch (status) {
			case 14:
				return "Preliminary";
			case 11:
				return "Semi Final";
			case 13:
				return "Final";
			case 10:
				return "Tidak Lolos ke Semifinal";
			case 12:
				return "Tidak Lolos ke Final";
			case 4:
				return "Promotion Invalid";
			case 8:
				return "Payment Invalid";
			case 15:
				return "Team Invalid";
			default:
				return "Preliminary";
		}
	};

	const getStatusColor = (status: number) => {
		switch (status) {
			case 14:
				return "bg-purple-600 text-white";
			case 11:
				return "bg-blue-600 text-white";
			case 13:
				return "bg-green-600 text-white";
			case 4:
				return "bg-red-600 text-white";
			case 8:
				return "bg-orange-600 text-white";
			case 15:
				return "bg-gray-600 text-white";
			case 10:
				return "bg-gray-600 text-white";
			case 12:
				return "bg-gray-600 text-white";
			default:
				return "bg-purple-600 text-white";
		}
	};

	const TeamCard = ({ team }: { team: TeamDataAdmin }) => {
		// const currentStatus = teamStatuses[team.id] || team.status;
		const [isDropdownOpen, setIsDropdownOpen] = useState(false);

		return (
			<div className="bg-[#8257A9] backdrop-blur-sm rounded-lg p-4 md:p-6 mb-6 ">
				<div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-2">
					<h3 className="text-white text-xl font-semibold">{team.name}</h3>
					<div className="flex items-center space-x-2">
						<span
							className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
								team.statusCode
							)}`}
						>
							{getCurrentStatusLabel(team.statusCode)}
						</span>
						<div className="relative">
							<button
								className="bg-white text-black px-3 py-1 rounded-lg text-sm flex items-center space-x-1"
								onClick={() => setIsDropdownOpen(!isDropdownOpen)}
							>
								{isChangingStatus.has(team.id) ? (
									<LoadingSpinner />
								) : (
									<>
										<span>Change Status</span>
										<ChevronDown className="w-4 h-4" />
									</>
								)}
							</button>

							{isDropdownOpen && (
								<div className="absolute right-0 mt-2 w-48 bg-gray-400 rounded-md shadow-lg z-10">
									<div className="py-1">
										{statusOptions.map((status) => (
											<button
												key={status.value}
												className={`block w-full text-left px-4 py-2 text-black text-sm hover:bg-black hover:transition-all hover:text-white ${
													team.statusCode === status.value
														? "bg-gray-100 font-medium"
														: ""
												}`}
												onClick={() => {
													handleStatusChange(team.id, status.value);
													setIsDropdownOpen(false);
												}}
											>
												{status.label}
											</button>
										))}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
					{/* Team Members */}
					<div>
						<h4 className="text-white font-medium mb-3">Team Members</h4>
						<div className="space-y-3">
							{team.teamMembers.map((member, index) => (
								<div key={index} className="bg-purple-800/50 rounded-lg p-3">
									<div className="flex flex-col sm:flex-row justify-between items-start gap-2">
										<div>
											<p className="text-white font-small">{member.name}</p>
											<p className="text-white/70 text-sm">{member.email}</p>
										</div>
										<span
											className={`px-2 py-1 rounded text-xs ${
												member.name === team.leader
													? "bg-[#592B82] text-white"
													: "bg-[#592B82] text-white"
											}`}
										>
											{member.name === team.leader ? "Leader" : "Member"}
										</span>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Submissions */}
					<div>
						<h4 className="text-white font-medium mb-3">Submissions</h4>
						<div className="space-y-3">
							{files.map((t) => (
								<div className="bg-purple-800/50 rounded-lg p-3">
									<div className="flex flex-col sm:flex-row justify-between items-center gap-2">
										<div>
											<p className="text-white font-medium">{t.name}</p>
											<p className="text-white/70 text-sm">
												submitted at{" "}
												{getSubmittedAt(team?.submissionTeam, t.type)}
											</p>
										</div>

										{getFileLink(team?.submissionTeam, t.type) && (
											<a
												href={getFileLink(team?.submissionTeam, t.type) || ""}
												className="bg-[#808080] hover:bg-blue-400 cursor-pointer text-white px-3 py-1 rounded text-xs flex items-center space-x-1"
												target="_blank"
												rel="noopener noreferrer"
											>
												<Download className="w-3 h-3" />
												<span>Download File</span>
											</a>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<>
			<Toaster />

			<div className="min-h-screen flex flex-col md:flex-row md:mt-20">
				{/* Sidebar */}
				<div className="max-md:w-0    w-64  md:py-15 md:px-20 p-0  md:block ">
					<SideBarSection />
				</div>

				{/* Main Content */}
				<div className="flex-1 p-4 md:p-6">
					{/* Header with Search and Filter */}
					<div className="mb-6">
						<div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
							{/* Search Bar */}
							<div className="relative w-full max-w-md">
								<input
									type="text"
									placeholder="Search Team..."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="w-full bg-white/90 backdrop-blur-sm border-0 rounded-lg pl-10 pr-4 py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
								/>
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
							</div>

							{/* Filter Dropdown */}
							<div className="relative w-full sm:w-auto">
								<select
									value={filterStatus}
									onChange={(e) => setFilterStatus(Number(e.target.value))}
									className="w-full bg-white/90 backdrop-blur-sm border-0 rounded-lg px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none cursor-pointer"
								>
									<option value="0">All</option>
									{statusOptions.map((status) => (
										<option key={status.value} value={status.value}>
											{status.label}
										</option>
									))}
								</select>
								<ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
							</div>
						</div>
					</div>

					{/* Team Cards */}
					<div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
						{filteredTeams.map((team) => (
							<TeamCard key={team.id} team={team} />
						))}
					</div>

					{/* Pagination */}
					{/* {totalPages > 1 && (
						<div className="flex justify-center items-center mt-8 space-x-2">
							<button
								onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
								disabled={currentPage === 1}
								className="p-2 text-white hover:bg-white/20 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
							>
								<ChevronLeft className="w-5 h-5" />
							</button>

							{[...Array(totalPages)].map((_, index) => {
								const page = index + 1;
								if (
									page <= 5 ||
									page === totalPages ||
									(page >= currentPage - 1 && page <= currentPage + 1)
								) {
									return (
										<button
											key={page}
											onClick={() => setCurrentPage(page)}
											className={`px-3 py-2 rounded-lg text-sm font-medium ${
												currentPage === page
													? "bg-white text-purple-700"
													: "text-white hover:bg-white/20"
											}`}
										>
											{page}
										</button>
									);
								} else if (page === 6 && totalPages > 7) {
									return (
										<span key={page} className="text-white px-2">
											...
										</span>
									);
								}
								return null;
							})}

							{totalPages > 7 && (
								<button
									onClick={() => setCurrentPage(totalPages)}
									className={`px-3 py-2 rounded-lg text-sm font-medium ${
										currentPage === totalPages
											? "bg-white text-purple-700"
											: "text-white hover:bg-white/20"
									}`}
								>
									{totalPages}
								</button>
							)}

							<button
								onClick={() =>
									setCurrentPage((prev) => Math.min(prev + 1, totalPages))
								}
								disabled={currentPage === totalPages}
								className="p-2 text-white hover:bg-white/20 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
							>
								<ChevronRight className="w-5 h-5" />
							</button>
						</div>
					)} */}
				</div>
			</div>
		</>
	);
};

export default TeamIBCC;
