import React, { useState } from "react";
import { Search, ChevronDown, Camera } from "lucide-react";
import SideBarSection from "@/components/dashboard/sidebar";

const tabs = [
	{ id: "edit-profile", name: "Edit Profile" },
	{ id: "preferences", name: "Preferences" },
	{ id: "security", name: "Security" },
];

// Generate years, months, and days for the date picker
const generateYears = () => {
	const currentYear = new Date().getFullYear();
	const years = [];
	for (let year = currentYear; year >= 1950; year--) {
		years.push(year);
	}
	return years;
};

const months = [
	{ value: "01", label: "January" },
	{ value: "02", label: "February" },
	{ value: "03", label: "March" },
	{ value: "04", label: "April" },
	{ value: "05", label: "May" },
	{ value: "06", label: "June" },
	{ value: "07", label: "July" },
	{ value: "08", label: "August" },
	{ value: "09", label: "September" },
	{ value: "10", label: "October" },
	{ value: "11", label: "November" },
	{ value: "12", label: "December" },
];

const generateDays = (month, year) => {
	const daysInMonth = new Date(year, month, 0).getDate();
	const days = [];
	for (let day = 1; day <= daysInMonth; day++) {
		days.push(day.toString().padStart(2, "0"));
	}
	return days;
};

const SettingSection = () => {
	const [activeTab, setActiveTab] = useState("edit-profile");
	const [formData, setFormData] = useState({
		name: "",
		division: "",
		email: "",
		username: "",
		day: "",
		month: "",
		year: "",
		password: "",
	});

	const [emailNotifications, setEmailNotifications] = useState(true);
	const [darkMode, setDarkMode] = useState(true);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const dateOfBirth =
			formData.day && formData.month && formData.year
				? `${formData.day}/${formData.month}/${formData.year}`
				: "";

		const submitData = {
			...formData,
			dateOfBirth,
		};
	};

	const availableDays = generateDays(
		parseInt(formData.month) || 1,
		parseInt(formData.year) || 2024
	);

	return (
		<div
			className="flex min-h-screen w-full p-10"
			style={{
				background:
					"linear-gradient(180deg, #562780 0%, #643D87 48.08%, #8257A9 100%)",
			}}
		>
			{/* Sidebar */}
			<div className="w-1/4 ml-7">
				<SideBarSection />
			</div>

			{/* Main Content */}
			<div className="flex-1 p-5 mt-3 overflow-auto">
				<main className="flex-1 p-6 space-y-6 overflow-auto">
					{/* Header Bar */}
					<header className="flex justify-between items-center mb-6">
						<h1 className="font-semibold text-xl text-white select-none">
							Settings
						</h1>
						<div className="flex items-center space-x-4">
							<IconButton
								name="Settings"
								icon={
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										stroke="currentColor"
										strokeWidth="1.5"
										viewBox="0 0 24 24"
										className="w-5 h-5 text-gray-700"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
								}
							/>
							<IconButton
								name="Notifications"
								icon={
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										stroke="#ff4d4d"
										strokeWidth="1.5"
										viewBox="0 0 24 24"
										className="w-5 h-5"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
										/>
									</svg>
								}
							/>
							<div className="w-8 h-8 bg-gray-300 rounded-full"></div>
						</div>
					</header>

					{/* Tab Navigation */}
					<div className="flex space-x-4 lg:space-x-8 mb-6 lg:mb-8 border-b border-white/20 overflow-x-auto">
						{tabs.map((tab) => (
							<button
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={`pb-4 px-2 text-sm lg:text-lg font-medium transition-colors whitespace-nowrap ${
									activeTab === tab.id
										? "text-white border-b-2 border-white"
										: "text-white/70 hover:text-white"
								}`}
							>
								{tab.name}
							</button>
						))}
					</div>

					{/* Tab Content */}
					{activeTab === "edit-profile" && (
						<div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8">
							<div className="space-y-6">
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
									{/* Profile Picture */}
									<div className="lg:col-span-2 flex items-center space-x-6">
										<div className="relative">
											<div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center">
												<span className="text-white/60 text-2xl">👤</span>
											</div>
											<button
												type="button"
												className="absolute -bottom-1 -right-1 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
											>
												<Camera className="w-4 h-4 text-white" />
											</button>
										</div>
									</div>

									{/* Form Fields */}
									<div>
										<label className="block text-white text-sm font-medium mb-2">
											Your Name
										</label>
										<input
											type="text"
											name="name"
											value={formData.name}
											onChange={handleInputChange}
											placeholder="Enter your name"
											className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-500"
										/>
									</div>

									<div>
										<label className="block text-white text-sm font-medium mb-2">
											Division
										</label>
										<input
											type="text"
											name="division"
											value={formData.division}
											onChange={handleInputChange}
											placeholder="Enter your Division"
											className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-500"
										/>
									</div>

									<div>
										<label className="block text-white text-sm font-medium mb-2">
											Email
										</label>
										<input
											type="email"
											name="email"
											value={formData.email}
											onChange={handleInputChange}
											placeholder="Enter your email"
											className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-500"
										/>
									</div>

									<div>
										<label className="block text-white text-sm font-medium mb-2">
											Username
										</label>
										<input
											type="text"
											name="username"
											value={formData.username}
											onChange={handleInputChange}
											placeholder="Enter your username"
											className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-500"
										/>
									</div>

									{/* Date of Birth - Split into 3 dropdowns */}
									<div className="lg:col-span-2">
										<label className="block text-white text-sm font-medium mb-2">
											Date of Birth
										</label>
										<div className="grid grid-cols-3 gap-4">
											{/* Day */}
											<div className="relative">
												<select
													name="day"
													value={formData.day}
													onChange={handleInputChange}
													className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 appearance-none cursor-pointer"
												>
													<option value="" className="bg-gray-800 text-white">
														Day
													</option>
													{availableDays.map((day) => (
														<option
															key={day}
															value={day}
															className="bg-gray-800 text-white"
														>
															{day}
														</option>
													))}
												</select>
												<ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60 pointer-events-none" />
											</div>

											{/* Month */}
											<div className="relative">
												<select
													name="month"
													value={formData.month}
													onChange={handleInputChange}
													className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 appearance-none cursor-pointer"
												>
													<option value="" className="bg-gray-800 text-white">
														Month
													</option>
													{months.map((month) => (
														<option
															key={month.value}
															value={month.value}
															className="bg-gray-800 text-white"
														>
															{month.label}
														</option>
													))}
												</select>
												<ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60 pointer-events-none" />
											</div>

											{/* Year */}
											<div className="relative">
												<select
													name="year"
													value={formData.year}
													onChange={handleInputChange}
													className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 appearance-none cursor-pointer"
												>
													<option value="" className="bg-gray-800 text-white">
														Year
													</option>
													{generateYears().map((year) => (
														<option
															key={year}
															value={year}
															className="bg-gray-800 text-white"
														>
															{year}
														</option>
													))}
												</select>
												<ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60 pointer-events-none" />
											</div>
										</div>
									</div>

									<div>
										<label className="block text-white text-sm font-medium mb-2">
											Password
										</label>
										<input
											type="password"
											name="password"
											value={formData.password}
											onChange={handleInputChange}
											placeholder="Enter your password"
											className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-500"
										/>
									</div>
								</div>

								{/* Save Button */}
								<div className="flex justify-end pt-4">
									<button
										onClick={handleSubmit}
										className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
									>
										Save
									</button>
								</div>
							</div>
						</div>
					)}

					{/* Preferences Tab */}
					{activeTab === "preferences" && (
						<div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8">
							<h3 className="text-lg lg:text-xl font-medium mb-6 text-white">
								Preferences
							</h3>
						</div>
					)}

					{/* Security Tab */}
					{activeTab === "security" && (
						<div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8">
							<h3 className="text-lg lg:text-xl font-medium mb-6 text-white">
								Security
							</h3>
							<div className="space-y-6">
								<div>
									<h4 className="text-white font-medium mb-4">
										Change Password
									</h4>
									<div className="space-y-4">
										<input
											type="password"
											placeholder="Current Password"
											className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-500"
										/>
										<input
											type="password"
											placeholder="New Password"
											className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-500"
										/>
										<input
											type="password"
											placeholder="Confirm New Password"
											className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-500"
										/>
										<button className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors">
											Update Password
										</button>
									</div>
								</div>
							</div>
						</div>
					)}
				</main>
			</div>
		</div>
	);
};

// Icon button component
const IconButton = ({ name, icon }) => (
	<button
		type="button"
		aria-label={name}
		title={name}
		className="rounded-full bg-white p-2 text-gray-700 hover:bg-gray-200 transition-colors"
	>
		{icon}
	</button>
);

export default SettingSection;
