import React, { useState } from "react";
import SideBarBCL from "@/components/profile/BCL/sidebarBCL";
import toast, { Toaster } from "react-hot-toast";

const RegisterBCL = () => {
	const [showCongrats, setShowCongrats] = useState(false);
	const [showPopup, setShowPopup] = useState(true);
	const [showUploadModal, setShowUploadModal] = useState(false);
	const [uploadedFiles, setUploadedFiles] = useState([]);
	const [formData, setFormData] = useState({
		feedback: "",
		expectations: [],
		hearAbout: "",
	});
	const [errors, setErrors] = useState({});

	// Example data for team members and tasks
	const teamMembers = [
		{
			id: 1,
			name: "John Doe",
			role: "Leader",
			status: "verified",
			isLeader: true,
			avatar: "",
		},
	];

	const tasks = [
		{
			id: 1,
			title: "Proof of Promotion",
			dueDate: "2025-08-05, 9.00 PM",
			description:
				"Upload proof of following IG accounts @sxcintersummit and @studentsxceojkt, sharing the event poster on IGS, tagging a friend in the feed, promotion of event merchandise",
			acceptedTypes: ".png, .jpeg",
			status: "submitted",
			hasOverdue: false,
		},
	];

	const expectationOptions = [
		"On Time",
		"Well Organized",
		"Practical Insights",
		"Interactive Session",
		"Other",
	];

	const hearAboutOptions = [
		"Friends",
		"Instagram",
		"Website",
		"Tiktok",
		"Other",
	];

	// Handle file upload
	const handleFileUpload = (e) => {
		const files = Array.from(e.target.files);
		const validFiles = files.filter((file) => {
			const validTypes = ["image/jpeg", "image/jpg", "image/png"];
			return validTypes.includes(file.type);
		});

		if (validFiles.length !== files.length) {
			toast.error("Please upload only JPEG, JPG, or PNG files");
			return;
		}
		setUploadedFiles((prev) => [...prev, ...validFiles]);
	};

	// Remove uploaded file
	const removeFile = (index) => {
		setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
	};

	// Submit files
	const handleFileSubmit = () => {
		if (uploadedFiles.length === 0) {
			toast.error("Please upload at least one file");
			return;
		}

		// Here you would typically upload files to your backend
		// Close upload modal first, then show congratulations
		setShowUploadModal(false);

		// Small delay to ensure modal closes before showing congrats
		setTimeout(() => {
			setShowCongrats(true);
		}, 100);
	};

	// Handle checkbox changes for expectations
	const handleExpectationChange = (option) => {
		setFormData((prev) => ({
			...prev,
			expectations: prev.expectations.includes(option)
				? prev.expectations.filter((item) => item !== option)
				: [...prev.expectations, option],
		}));
	};

	// Validate form
	const validateForm = () => {
		const newErrors = {};
		// Feedback validation removed
		if (formData.expectations.length === 0) {
			newErrors.expectations = "Please select at least one expectation";
		}
		if (!formData.hearAbout) {
			newErrors.hearAbout = "Please select how you heard about this event";
		}
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();

		if (validateForm()) {
			setShowPopup(false);
			// Here you can also send the data to your backend
		}
	};

	// Icons as components
	const Download = () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
			<polyline points="7 10 12 15 17 10" />
			<line x1="12" y1="15" x2="12" y2="3" />
		</svg>
	);

	const Upload = () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
			<polyline points="17 8 12 3 7 8" />
			<line x1="12" y1="3" x2="12" y2="15" />
		</svg>
	);

	// WhatsApp icon for popup
	const WhatsAppIcon = () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 32 32"
			fill="none"
		>
			<path
				d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.13 2.484 7.23L4.07 28.07a1 1 0 0 0 1.2 1.2l5.84-2.414A12.96 12.96 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-2.13 0-4.21-.66-5.97-1.89a1 1 0 0 0-.93-.09l-4.13 1.71 1.71-4.13a1 1 0 0 0-.09-.93A9.97 9.97 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm4.29-6.71c-.23-.12-1.36-.67-1.57-.75-.21-.08-.36-.12-.51.12-.15.23-.58.75-.71.9-.13.15-.26.17-.49.06-.23-.12-.97-.36-1.85-1.13-.68-.6-1.13-1.34-1.26-1.57-.13-.23-.01-.36.11-.48.11-.11.23-.29.35-.44.12-.15.16-.26.24-.43.08-.17.04-.32-.02-.44-.06-.12-.51-1.23-.7-1.68-.18-.44-.37-.38-.51-.39-.13-.01-.28-.01-.43-.01-.15 0-.39.06-.6.28-.21.22-.8.78-.8 1.9s.82 2.21.93 2.37c.11.15 1.62 2.48 3.93 3.38.55.19.98.3 1.31.39.55.14 1.05.12 1.45.07.44-.07 1.36-.56 1.55-1.1.19-.54.19-1 .13-1.1-.06-.1-.21-.16-.44-.28z"
				fill="#fff"
			/>
		</svg>
	);

	return (
		<>
			<Toaster />
			<div className="w-full mx-auto p-1 md:mt-15">
				<div className="min-h-screen flex flex-col md:flex-row m-10">
					{/* Panggil sidebar */}
					<div className="w-full md:w-64 flex-shrink-0">
						<SideBarBCL />
					</div>
					{/* Main content */}
					<div className="flex-1 p-4">
						<h2 className="flex justify-start items-center">
							<img
								src="images/profile/BCL/BCL.svg"
								alt="BCL Icon"
								className="max-md:h-[5vh] w-auto object-contain"
							/>
						</h2>

						{/* Event Details - Only show when task status is submitted */}
						{tasks.some((task) => task.status === "submitted") && (
							<div className="rounded-xl p-6 mt-4 text-white">
								<h3 className="text-xl font-bold mb-4">Event Details</h3>

								<div className="space-y-3 mb-6">
									<div className="flex items-center space-x-3">
										<div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center">
											<svg
												className="w-3 h-3"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fillRule="evenodd"
													d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
										<div>
											<p className="text-sm text-white/70">Date</p>
											<p className="text-sm font-medium">
												Saturday, 20th September 2025
											</p>
										</div>
									</div>

									<div className="flex items-center space-x-3">
										<div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center">
											<svg
												className="w-3 h-3"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fillRule="evenodd"
													d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
										<div>
											<p className="text-sm text-white/70">Where</p>
											<p className="text-sm font-medium">
												Online, Zoom Meeting
											</p>
										</div>
									</div>

									<div className="flex items-center space-x-3">
										<div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center">
											<svg
												className="w-3 h-3"
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
													clipRule="evenodd"
												/>
											</svg>
										</div>
										<div>
											<p className="text-sm text-white/70">Time</p>
											<p className="text-sm font-medium">10:00 AM - 01:00 PM</p>
										</div>
									</div>
								</div>

								<div className="mt-6">
									<h4 className="text-lg font-bold mb-3">Guidelines</h4>

									<div className="mb-4">
										<div className="flex items-center space-x-2 mb-2">
											<div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
												<svg
													className="w-2.5 h-2.5 text-white"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path
														fillRule="evenodd"
														d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
														clipRule="evenodd"
													/>
												</svg>
											</div>
											<span className="text-sm font-medium text-green-400">
												Do's (Things You Should Do)
											</span>
										</div>
										<ul className="space-y-1 text-xs text-white/80 ml-6">
											<li>✅Join the session on time</li>
											<li>
												✅Use your real full name when entering the Zoom Meeting
											</li>
											<li>
												✅Turn on your camera during breakout or interactive
												sessions (if possible)
											</li>
											<li>✅Mute your mic when not speaking</li>
											<li>
												✅Be active and respectful in the chatbox or Q&A session
											</li>
											<li>
												✅Submit your case study on time (D+2) for certification
											</li>
										</ul>
									</div>

									<div>
										<div className="flex items-center space-x-2 mb-2">
											<div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
												<svg
													className="w-2.5 h-2.5 text-white"
													fill="currentColor"
													viewBox="0 0 20 20"
												>
													<path
														fillRule="evenodd"
														d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
														clipRule="evenodd"
													/>
												</svg>
											</div>
											<span className="text-sm font-medium text-red-400">
												Don'ts (Things to Avoid)
											</span>
										</div>
										<ul className="space-y-1 text-xs text-white/80 ml-6">
											<li>❌Join late without prior notice</li>
											<li>❌Rename yourself with inappropriate names</li>
											<li>❌Interrupt the speaker or other participants</li>
											<li>
												❌Leave the session halfway unless there's an emergency
											</li>
											<li>
												❌Forget to check your audio and internet connection
												beforehand
											</li>
										</ul>
									</div>
								</div>
							</div>
						)}

						<div className="rounded-[19.6px] bg-[#8257A9] mt-3 p-6 text-white text-center">
							<div className="flex items-center justify-center space-x-3">
								<img
									src="/images/profile/BMC/speaker.png"
									alt="BMC Icon"
									className="w-5 h-5"
								/>
								<p className="text-[12px]">
									You currently have no announcements.
								</p>
							</div>
						</div>
						{/* Tasks Section */}
						<h2 className="text-white text-xl font-semibold">Tasks</h2>
						<div className="rounded-lg overflow-hidden">
							<div className="space-y-4">
								{tasks.map((task, index) => (
									<div
										key={index}
										className="p-6 bg-white/10 rounded-lg border border-white/20"
									>
										<div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
											<h3 className="text-[20px] font-semibold text-white">
												{task.title}
											</h3>
											<p className="text-sm text-white/70 ml-auto">
												{task.dueDate}
											</p>
										</div>
										<p className="text-white/80 text-[13px] mb-2">
											{task.description}
										</p>
										<div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
											<div className="space-y-2">
												<p className="text-[13px] text-white/70">
													Accepted File Types:
												</p>
												<p className="text-[13px] text-white">
													{task.acceptedTypes}
												</p>
												<div className="flex items-center text-[10px] space-x-3">
													<p>Status: </p>
													<span
														className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] ${
															task.status === "submitted"
																? "bg-[#99E857]"
																: "bg-yellow-500"
														} text-white`}
													>
														{task.status}
													</span>
													{task.hasOverdue && (
														<span className="inline-flex items-center bg-red-500 text-white px-3 py-1 rounded-full text-[10px]">
															<span className="ml-1">Overdue</span>
														</span>
													)}
												</div>
											</div>
											<div className="flex flex-col space-y-2">
												{/* Only for Proof of Promotion task, show the button that triggers the upload modal */}
												{task.title === "Proof of Promotion" ? (
													<button
														className="inline-flex items-center bg-[#5EC7ED] cursor-pointer hover:bg-blue-600 text-white px-3 py-1 rounded-md text-xs"
														onClick={() => setShowUploadModal(true)}
													>
														<Upload />
														<span className="ml-2">Submit Here</span>
													</button>
												) : (
													<button
														className="inline-flex items-center bg-[#5EC7ED] hover:bg-blue-600 text-white px-3 py-1 rounded-md text-xs"
														onClick={() => setShowUploadModal(true)}
													>
														<Upload />
														<span className="ml-2">Submit Here</span>
													</button>
												)}
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* File Upload Modal */}
			{showUploadModal && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
					<div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>
					<div className="relative bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
						<div className="p-6">
							<div className="flex items-center justify-between mb-4">
								<h3 className="text-lg font-semibold text-gray-900">
									Upload Proof of Promotion
								</h3>
								<button
									className="text-gray-400 hover:text-gray-600"
									onClick={() => setShowUploadModal(false)}
								>
									<svg
										className="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>

							<div className="mb-4">
								<p className="text-sm text-gray-600 mb-3">
									Upload proof of following IG accounts @sxcintersummit and
									@studentsxceojkt, sharing the event poster on IGS, tagging a
									friend in the feed, promotion of event merchandise
								</p>
								<p className="text-xs text-gray-500">
									Accepted formats: JPEG, JPG, PNG
								</p>
							</div>

							{/* File Upload Area */}
							<div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-4">
								<input
									type="file"
									id="fileUpload"
									multiple
									accept=".jpeg,.jpg,.png,image/jpeg,image/jpg,image/png"
									onChange={handleFileUpload}
									className="hidden"
								/>
								<label htmlFor="fileUpload" className="cursor-pointer">
									<div className="flex flex-col items-center">
										<svg
											className="w-12 h-12 text-gray-400 mb-2"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
											/>
										</svg>
										<p className="text-gray-600 font-medium">
											Click to upload files
										</p>
										<p className="text-gray-500 text-sm">or drag and drop</p>
										<p className="text-gray-400 text-xs mt-1">
											JPEG, JPG, PNG (Max 10MB each)
										</p>
									</div>
								</label>
							</div>

							{/* Uploaded Files List */}
							{uploadedFiles.length > 0 && (
								<div className="mb-4">
									<h4 className="text-sm font-medium text-gray-900 mb-2">
										Uploaded Files:
									</h4>
									<div className="space-y-2">
										{uploadedFiles.map((file, index) => (
											<div
												key={index}
												className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
											>
												<div className="flex items-center space-x-3">
													<svg
														className="w-5 h-5 text-blue-500"
														fill="currentColor"
														viewBox="0 0 20 20"
													>
														<path
															fillRule="evenodd"
															d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
															clipRule="evenodd"
														/>
													</svg>
													<div>
														<p className="text-sm font-medium text-gray-900">
															{file.name}
														</p>
														<p className="text-xs text-gray-500">
															{(file.size / 1024 / 1024).toFixed(2)} MB
														</p>
													</div>
												</div>
												<button
													onClick={() => removeFile(index)}
													className="text-red-500 hover:text-red-700"
												>
													<svg
														className="w-4 h-4"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
														/>
													</svg>
												</button>
											</div>
										))}
									</div>
								</div>
							)}

							{/* Submit Button */}
							<div className="flex space-x-3">
								<button
									onClick={() => setShowUploadModal(false)}
									className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-md text-sm font-medium transition-colors"
								>
									Cancel
								</button>
								<button
									onClick={handleFileSubmit}
									className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors"
								>
									Submit Files
								</button>
							</div>
						</div>
					</div>
				</div>
			)}

			{showPopup && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
					{/* Blur overlay */}
					<div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>
					<div className="relative bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
						<form
							onSubmit={handleSubmit}
							className="p-3 md:p-6 text-black space-y-6"
						>
							{/* Event Feedback Section */}
							<div>
								<label className="block text-sm font-medium text-gray-900 mb-2">
									Event Feedback <span className="text-red-500">*</span>
								</label>
								<p className="text-sm text-gray-600 mb-3">
									Help us improve your experience by sharing your expectations
									and feedback.
								</p>
							</div>
							{/* Event Expectations Section */}
							<div>
								<label className="block text-sm font-medium text-gray-900 mb-2">
									Event Expectations <span className="text-red-500">*</span>
								</label>
								<p className="text-sm text-gray-600 mb-3">
									What do you expect from this event? (Select all that apply)
								</p>
								<div className="space-y-2">
									{expectationOptions.map((option) => (
										<label
											key={option}
											className="flex items-center space-x-2 cursor-pointer"
										>
											<input
												type="checkbox"
												className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
												checked={formData.expectations.includes(option)}
												onChange={() => handleExpectationChange(option)}
											/>
											<span className="text-sm text-gray-700">{option}</span>
										</label>
									))}
								</div>
								{errors.expectations && (
									<p className="text-red-500 text-xs mt-1">
										{errors.expectations}
									</p>
								)}
							</div>
							{/* How did you hear about this event Section */}
							<div>
								<label className="block text-sm font-medium text-gray-900 mb-2">
									How did you hear about this event?{" "}
									<span className="text-red-500">*</span>
								</label>
								<select
									className={`w-full px-3 py-2 border rounded-md text-sm ${
										errors.hearAbout ? "border-red-500" : "border-gray-300"
									} focus:outline-none focus:ring-2 focus:ring-blue-500`}
									value={formData.hearAbout}
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											hearAbout: e.target.value,
										}))
									}
								>
									<option value="">Select an option</option>
									{hearAboutOptions.map((option) => (
										<option key={option} value={option}>
											{option}
										</option>
									))}
								</select>
								{errors.hearAbout && (
									<p className="text-red-500 text-xs mt-1">
										{errors.hearAbout}
									</p>
								)}
							</div>
							{/* Submit Button */}
							<button
								type="submit"
								className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white py-2 px-4 rounded-md text-sm font-medium transition-colors"
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			)}
			{showCongrats && (
				<div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
					<div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>
					<div className="relative bg-white rounded-xl max-w-md w-full p-8 flex flex-col items-center text-center shadow-lg">
						<button
							className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl"
							onClick={() => setShowCongrats(false)}
							aria-label="Close"
						>
							&times;
						</button>
						<h2 className="text-2xl font-bold mb-2 text-[#232a2f]">
							Congratulations!
						</h2>
						<p className="mb-6 text-gray-700">
							You have been registered as a Participant of Business Competition
							Launchpad!
						</p>
						<a
							href="https://wa.me/yourgroupid" // replace with your WhatsApp group link
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center bg-[#57d96c] hover:bg-[#3ec85c] text-white px-6 py-2 rounded-lg text-base font-semibold"
						>
							<WhatsAppIcon />
							<span className="ml-2">Click Me!</span>
						</a>
					</div>
				</div>
			)}
		</>
	);
};

export default RegisterBCL;
