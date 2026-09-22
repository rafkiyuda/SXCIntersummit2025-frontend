import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import SideBarSection from "@/components/dashboard/sidebar";

const EditAdmin = () => {
	const navigate = useNavigate();
	const location = useLocation();

	// Get staff data from navigation state
	const staffData = location.state?.staffData;

	// Form state
	const [formData, setFormData] = useState({
		staffName: "",
		role: "",
		staffEmail: "",
		division: "",
		password: "",
	});

	// Populate form with existing data when component mounts
	useEffect(() => {
		if (staffData) {
			setFormData({
				staffName: staffData.staffName || "",
				role: staffData.role || "",
				staffEmail: staffData.staffEmail || "",
				division: staffData.division || "",
				password: "", // Don't populate password for security
			});
		} else {
			// If no data passed, redirect back to admin list
			navigate("/dashboard/admins");
		}
	}, [staffData, navigate]);

	// Handle input changes
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	// Handle form submission
	const handleSave = (e) => {
		e.preventDefault();

		// Here you would typically make an API call to update the admin
		// Show success message (you can replace this with a proper toast/notification)
		alert("Admin updated successfully!");

		// Navigate back to admin list
		navigate("/dashboard/admins");
	};

	// Handle cancel - go back to admin list
	const handleCancel = () => {
		navigate("/dashboard/admins");
	};

	return (
		<div className="min-h-screen flex flex-col md:flex-row">
			{/* Sidebar */}
			<div className="w-full md:w-64 flex-shrink-0">
				<SideBarSection />
			</div>

			{/* Main content */}
			<div className="flex-1 p-4">
				<main className="flex-1 p-6 space-y-6 overflow-auto">
					{/* Header Bar */}
					<header className="flex justify-between items-center mb-6">
						<h1 className="font-semibold text-xl select-none"></h1>
						<div className="flex items-center space-x-4"></div>
					</header>

					{/* Dashboard Title */}
					<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
						<div className="space-y-1">
							<h1 className="text-xl lg:text-2xl font-bold text-white">
								Edit Admin
							</h1>
							<p className="text-white/60 text-sm">
								Update admin information for{" "}
								{staffData?.staffName || "selected admin"}
							</p>
						</div>
					</div>

					{/* Admin Section */}
					<div className="space-y-6">
						{/* Tab Navigation */}
						<div className="border-b border-purple-600/20">
							<div className="flex space-x-8">
								<Link
									to="/dashboard/admins"
									className="pb-3 px-1 border-b-2 border-transparent text-purple-200 hover:text-white hover:border-purple-300 transition-colors"
								>
									Admin
								</Link>
								<button className="pb-3 px-1 border-b-2 border-white text-white font-medium">
									Edit Admin
								</button>
							</div>
						</div>

						{/* Form */}
						<div className="bg-[#8257A9] backdrop-blur-sm rounded-lg border border-purple-600/20 p-8">
							<form className="space-y-6" onSubmit={handleSave}>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{/* Admin Name */}
									<div className="space-y-2">
										<label className="text-white font-medium">Admin Name</label>
										<input
											type="text"
											name="staffName"
											value={formData.staffName}
											onChange={handleInputChange}
											placeholder="Enter admin name"
											className="bg-[#FFFFFF] border-purple-600/30 text-black placeholder-[#718EBF] focus:border-purple-400 p-2 rounded-md w-full"
											required
										/>
									</div>

									{/* Role Admin */}
									<div className="space-y-2">
										<label className="text-white font-medium">Role Admin</label>
										<select
											name="role"
											value={formData.role}
											onChange={handleInputChange}
											className="bg-[#FFFFFF] border-purple-600/30 text-black focus:border-purple-400 p-2 rounded-md w-full"
											required
										>
											<option value="" disabled>
												Select role
											</option>
											<option value="Super Admin">Super Admin</option>
											<option value="Admin BMC">Admin BMC</option>
											<option value="Admin BCL">Admin BCL</option>
											<option value="Admin IBCC">Admin IBCC</option>
											<option value="Admin IBPC">Admin IBPC</option>
											<option value="Admin Chambers">Admin Chambers</option>
											<option value="Admin Company Visit">
												Admin Company Visit
											</option>
											<option value="Admin International Conference">
												Admin International Conference
											</option>
										</select>
									</div>

									{/* Admin Email */}
									<div className="space-y-2">
										<label className="text-white font-medium">
											Admin Email
										</label>
										<input
											type="email"
											name="staffEmail"
											value={formData.staffEmail}
											onChange={handleInputChange}
											placeholder="Enter admin email"
											className="bg-[#FFFFFF] border-purple-600/30 text-black placeholder-[#718EBF] focus:border-purple-400 p-2 rounded-md w-full"
											required
										/>
									</div>

									{/* Division Admin */}
									<div className="space-y-2">
										<label className="text-white font-medium">
											Admin Division
										</label>
										<select
											name="division"
											value={formData.division}
											onChange={handleInputChange}
											className="bg-[#FFFFFF] border-purple-600/30 text-black focus:border-purple-400 p-2 rounded-md w-full"
											required
										>
											<option value="" disabled>
												Select division
											</option>
											<option value="Project Officer">Project Officer</option>
											<option value="IT">IT</option>
											<option value="BMC">BMC</option>
											<option value="BCL">BCL</option>
											<option value="IBCC">IBCC</option>
											<option value="IBPC">IBPC</option>
											<option value="Chambers">Chambers</option>
											<option value="Company Visit">Company Visit</option>
											<option value="International Conference">
												International Conference
											</option>
										</select>
									</div>

									{/* Password */}
									<div className="space-y-2">
										<label className="text-white font-medium">
											New Password
										</label>
										<input
											type="password"
											name="password"
											value={formData.password}
											onChange={handleInputChange}
											placeholder="Leave blank to keep current password"
											className="bg-[#FFFFFF] border-purple-600/30 text-black placeholder-[#718EBF] focus:border-purple-400 p-2 rounded-md w-full"
										/>
										<p className="text-white/60 text-xs">
											Leave empty if you don't want to change the password
										</p>
									</div>
								</div>

								{/* Action Buttons */}
								<div className="flex justify-end space-x-4 pt-4">
									<button
										type="button"
										onClick={handleCancel}
										className="bg-gray-500 hover:bg-gray-600 text-white font-medium px-8 py-2 rounded-lg transition-colors duration-200"
									>
										Cancel
									</button>
									<button
										type="submit"
										className="bg-cyan-400 hover:bg-cyan-500 text-white font-medium px-8 py-2 rounded-lg transition-colors duration-200"
									>
										Update Admin
									</button>
								</div>
							</form>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default EditAdmin;
