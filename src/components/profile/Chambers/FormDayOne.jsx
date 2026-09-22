import React, { useState } from "react";
import { Menu, Upload, X, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCreateSubmission } from "@/hooks/feature/useSubmission";
import {
	usePostSubmitForm,
	useRegisterChambers,
} from "@/hooks/User/useHandleChambers";
import useGetRegisteredPrograms from "@/hooks/User/useGetRegisteredPrograms";
import { Toaster, toast } from "react-hot-toast";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const DayOne = () => {
	const navigate = useNavigate(); // Add navigation hook
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [showPopup, setShowPopup] = useState(false);
	const [formData, setFormData] = useState({
		linkedin: "",
		cv: null,
		concerns: "",
		question: "",
		specificMaterial: "",
		commitment: false,
		consent: false,
	});

	const { data } = useGetRegisteredPrograms();

	const handleRegister = () => {
		if (!user) {
			navigate("/login");
		} else {
			if (data?.some((a) => a.programId === 5 && a.type === "DAY1")) {
				navigate("/profile/home/chambers/banking-consulting");
			} else {
				navigate("/profile/home/chambers/day-selection");
			}
		}
	};

	const { isLoading, submitForm } = usePostSubmitForm();
	const { createSubmission, isLoading: isSubmitting } = useCreateSubmission();
	const { registerChambers } = useRegisterChambers();

	const handleInputChange = (field, value) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const handleFileUpload = (e) => {
		const file = e.target.files[0];
		setFormData((prev) => ({
			...prev,
			cv: file,
		}));
	};

	const handleSubmit = async () => {
		const file = new FormData();
		file.append("file", formData.cv);
		await Promise.all([
			submitForm({ formData: formData, day: "DAY1" }),

			createSubmission({
				type: "CV",
				programId: 5,
				stage: "SEMINAR",
				data: file,
			}),

			registerChambers("DAY1"),
		])
			.then(() => {
				toast.success("Form submitted successfully");
				setShowPopup(true);
			})
			.catch((err) => {
				console.error("Form Submission Error:", err);
				toast.error("Failed to submit the form. Please try again.");
			});
	};

	const handleClosePopup = () => {
		setShowPopup(false);
	};

	const handleJoinWhatsApp = () => {
		// Here you would normally redirect to the actual WhatsApp group link
		window.open(
			"https://chat.whatsapp.com/EY7r16jyOGb9Xn2IKBfC0x?mode=wwt",
			"_blank"
		);
		setShowPopup(false);
	};

	const handleContinue = () => {
		// Navigate to day-one dashboard
		navigate("/profile/home/chambers/banking-consulting");
	};

	// WhatsApp Popup Modal
	const WhatsAppPopup = () => (
		<div
			className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
				showPopup ? "block" : "hidden"
			}`}
		>
			{/* Backdrop */}
			<div
				className="fixed inset-0 bg-black/50 backdrop-blur-sm"
				onClick={handleClosePopup}
			></div>

			{/* Modal */}
			<div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
				{/* Close Button */}
				<button
					onClick={handleClosePopup}
					className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
				>
					<X className="w-5 h-5 text-gray-600" />
				</button>

				{/* Content */}
				<div className="p-6 pt-12">
					{/* Icon and Title */}
					<div className="flex items-start space-x-4 mb-6">
						<div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl p-3 flex-shrink-0">
							<MessageCircle className="w-8 h-8 text-white" />
						</div>
						<div className="flex-1">
							<h2 className="text-xl font-bold text-gray-900 mb-1">
								Join the WhatsApp Group 📱
							</h2>
						</div>
					</div>

					{/* Message */}
					<div className="mb-6">
						<p className="text-gray-600 mb-4">
							Thank you for registering for{" "}
							<span className="font-semibold text-gray-800">
								Banking & Consulting
							</span>{" "}
							of <span className="font-semibold text-gray-800">Chambers!</span>{" "}
							🎉
						</p>

						<p className="text-gray-600 mb-4">
							To stay updated with important announcements, reminders, and
							materials, please make sure to join our official WhatsApp group.
						</p>

						<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
							<button onClick={handleJoinWhatsApp}>
								<p className="text-yellow-800 font-medium cursor-pointer">
									👉 [Join WhatsApp Group for (click here)]
								</p>
							</button>
						</div>
					</div>

					{/* Continue Button */}
					<button
						onClick={handleContinue}
						className="w-full cursor-pointer bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-4 px-6 rounded-xl text-lg transition-all duration-200 shadow-lg"
					>
						Continue
					</button>
				</div>
			</div>
		</div>
	);

	return (
		<>
			<Toaster />
			<div className="min-h-screen flex flex-col lg:flex-row">
				{/* Main Content */}
				<div className="flex-1">
					{/* Mobile Header */}
					{/* <div className="lg:hidden bg-white/10 backdrop-blur-sm p-4 flex items-center justify-between">
          <h1 className="text-white font-semibold text-lg">Chambers Registration</h1>
          <button 
            onClick={() => setSidebarOpen(true)}
            className="text-white p-2 hover:bg-white/10 rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div> */}

					{/* Content Area */}
					<div className="p-4 lg:p-8">
						{/* Header */}
						<div className="text-center mb-8">
							<h1
								className="text-4xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-[#7B5CB6] via-[#7BC6E2] to-[#B6E2A1] bg-clip-text mb-4"
								style={{
									WebkitTextStroke: "1px white",
									textShadow: "0 4px 16px rgba(0,0,0,0.15)",
								}}
							>
								Chambers
							</h1>
						</div>

						{/* Registration Form */}
						<div className="max-w-2xl mx-auto">
							<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20">
								<h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">
									Banking & Consulting
								</h2>

								<div className="space-y-6">
									{/* LinkedIn URL */}
									<div>
										<label className="block text-white font-medium mb-3">
											Linkedin
										</label>
										<input
											type="url"
											placeholder="https://www.linkedin.com/in/... (optional)"
											value={formData.linkedin}
											onChange={(e) =>
												handleInputChange("linkedin", e.target.value)
											}
											className="w-full bg-white/90 backdrop-blur-sm border-0 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
										/>
									</div>

									{/* CV Upload */}
									<div>
										<label className="block text-white font-medium mb-3">
											CV
										</label>
										<div className="relative">
											<input
												type="file"
												accept=".pdf,.doc,.docx"
												onChange={handleFileUpload}
												className="hidden"
												id="cv-upload"
											/>
											<label
												htmlFor="cv-upload"
												className="w-full bg-white/90 backdrop-blur-sm border-0 rounded-lg px-4 py-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer flex items-center justify-between hover:bg-white/95 transition-colors"
											>
												<span>
													{formData.cv
														? formData.cv.name
														: "Upload your CV (optional)"}
												</span>
												<Upload className="w-4 h-4" />
											</label>
										</div>
									</div>

									{/* Concerns */}
									<div>
										<label className="block text-white font-medium mb-3">
											Do you have any concerns related to the career path of
											FMCG & Startup industry?{" "}
											<span className="text-red-400">*</span>
										</label>
										<textarea
											placeholder="Enter your concerns here..."
											value={formData.concerns}
											onChange={(e) =>
												handleInputChange("concerns", e.target.value)
											}
											rows={4}
											className="w-full bg-white/90 backdrop-blur-sm border-0 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 resize-vertical"
											required
										/>
									</div>

									{/* Questions */}
									<div>
										<label className="block text-white font-medium mb-3">
											Are there any questions that you want to ask about FMCG &
											Startup industry? <span className="text-red-400">*</span>
										</label>
										<textarea
											placeholder="Enter your questions here..."
											value={formData.question}
											onChange={(e) =>
												handleInputChange("question", e.target.value)
											}
											rows={4}
											className="w-full bg-white/90 backdrop-blur-sm border-0 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 resize-vertical"
											required
										/>
									</div>

									{/* Materials */}
									<div>
										<label className="block text-white font-medium mb-3">
											Are there any specific materials that you want to know
											more about FMCG & Startup industry?{" "}
											<span className="text-red-400">*</span>
										</label>
										<textarea
											placeholder="Enter your thoughts here..."
											value={formData.specificMaterial}
											onChange={(e) =>
												handleInputChange("specificMaterial", e.target.value)
											}
											rows={4}
											className="w-full bg-white/90 backdrop-blur-sm border-0 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 resize-vertical"
											required
										/>
									</div>

									{/* Checkboxes */}
									<div className="space-y-4">
										{/* Acknowledgment */}
										<div className="flex items-start space-x-3">
											<input
												type="checkbox"
												id="acknowledgment"
												checked={formData.commitment}
												onChange={(e) =>
													handleInputChange("commitment", e.target.checked)
												}
												className="mt-1 w-4 h-4 rounded border-white/30 bg-white/20 text-blue-600 focus:ring-blue-500 focus:ring-offset-0"
												required
											/>
											<label
												htmlFor="acknowledgment"
												className="text-white text-xs text-justify leading-relaxed"
											>
												I acknowledge that by registering for this offline
												Career Preparation Class, I am committing to attend and
												actively participate in the session. I understand that
												this class is designed to support my professional
												development, and I will make every effort to arrive on
												time and stay for the full duration.
											</label>
										</div>

										{/* Data Consent */}
										<div className="flex items-start space-x-3">
											<input
												type="checkbox"
												id="dataConsent"
												checked={formData.consent}
												onChange={(e) =>
													handleInputChange("consent", e.target.checked)
												}
												className="mt-1 w-4 h-4 rounded border-white/30 bg-white/20 text-blue-600 focus:ring-blue-500 focus:ring-offset-0"
												required
											/>
											<label
												htmlFor="dataConsent"
												className="text-white text-xs text-justify leading-relaxed"
											>
												I hereby consent and acknowledge that the personal data
												I submit may be collected, stored, and managed by the
												organizing committee and relevant partner companies for
												the purposes of event administration and communication.
											</label>
										</div>
									</div>

									{/* Submit Button */}
									<button
										onClick={handleSubmit}
										disabled={
											!formData.commitment ||
											!formData.consent ||
											!formData.concerns.trim() ||
											!formData.question.trim() ||
											!formData.specificMaterial.trim()
										}
										className="cursor-pointer flex items-center justify-center w-full bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-200 shadow-lg"
									>
										{isLoading ? <LoadingSpinner /> : "Register!"}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* WhatsApp Popup */}
				<WhatsAppPopup />
			</div>
		</>
	);
};

export default DayOne;
