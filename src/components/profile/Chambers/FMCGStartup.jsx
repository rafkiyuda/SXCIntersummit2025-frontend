import React from "react";
import {
	Trophy,
	Users,
	Eye,
	Briefcase,
	MessageCircle,
	Phone,
} from "lucide-react";
import useGetRegisteredPrograms from "@/hooks/User/useGetRegisteredPrograms";
import { useNavigate } from "react-router-dom";

const EventInfo = ({ icon, label, children }) => (
	<div className="flex items-start space-x-3">
		<div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mt-1">
			<span className="text-white text-sm">{icon}</span>
		</div>
		<div>
			<div className="text-white font-medium">{label}</div>
			<div className="text-white/70">{children}</div>
		</div>
	</div>
);

const Card = ({ title, children, className = "" }) => (
	<div
		className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 ${className}`}
	>
		<h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
		{children}
	</div>
);

const Dashboard = () => {
	const handleWhatsappGroup = () => {
		window.open(
			"https://chat.whatsapp.com/DqYFa3t6i5D5WELn42D1E9?mode=ems_copy_t",
			"_blank"
		);
	};

	const { data } = useGetRegisteredPrograms();
	const day1Joined = data?.some((a) => a.programId === 5 && a.type === "DAY1");
	const navigate = useNavigate();
	return (
		<div className="min-h-screen p-6">
			<div className="max-w-3xl mx-auto">
				{/* Header */}
				<header className="mb-8">
					<div className="flex justify-between items-end max-md:flex-col max-md:items-start">
						<h1
							className="text-4xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-[#7B5CB6] via-[#7BC6E2] to-[#B6E2A1] bg-clip-text mb-4"
							style={{
								WebkitTextStroke: "1px white",
								textShadow: "0 4px 16px rgba(0,0,0,0.15)",
							}}
						>
							FMCG & StartUp Industry
						</h1>
						{day1Joined && (
							<p
								onClick={() =>
									navigate("/profile/home/chambers/banking-consulting")
								}
								className="underline cursor-pointer"
							>
								Bank & Consulting
							</p>
						)}
					</div>
					
				</header>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Main Content */}
					<div className="lg:col-span-2 space-y-8">
						{/* Event Information */}
						<Card title="Event Information">
							<div className="space-y-4">
								<EventInfo icon="📅" label="Date">
									25th October 2025
								</EventInfo>
								<EventInfo icon="📍" label="Where">
									Shopee Indonesia - Gama Tower,
									<br />
									8th Floor
									<br />
									Jl. H. R. Rasuna Said No.2, Karet
									<br />
									Kuningan, Setiabudi, Jakarta
									<br />
									Selatan
								</EventInfo>
								<EventInfo icon="⏰" label="Time">
									10:00 AM - 15:05 PM
								</EventInfo>
								<EventInfo icon="🎯" label="Theme">
									<span className="italic">
										Innovating at Speed: Building
										<br />
										Agile Brands and Disruptive
										<br />
										Solutions in a Hyperconnected
										<br />
										Market
									</span>
								</EventInfo>
							</div>
						</Card>

						{/* Speakers */}
						<Card title="Speakers Lineup">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
								<div className="text-center">
									<div className="w-32 h-32 bg-gray-300 rounded-2xl mb-4 overflow-hidden mx-auto">
										<img
											src="/images/profile/Chambers/speakers/MonicaRiany.svg"
											alt="Monica Riany"
											className="w-full h-full object-cover object-center"
										/>
									</div>
									<h4 className="text-white font-bold text-lg">Monica Riany</h4>
									<p className="text-white/70">
										Manager HRBP & Talent
										<br />
										Management at Shopee
										<br />
										Indonesia
									</p>
								</div>

								<div className="text-center">
									<div className="w-32 h-32 bg-gray-300 rounded-2xl mb-4 overflow-hidden mx-auto">
										<img
											src="/images/profile/Chambers/speakers/GiffaryIvan.jpg"
											alt="Giffary Ivan"
											className="w-full h-full object-cover object-center"
										/>
									</div>
									<h4 className="text-white font-bold text-lg">Giffary Ivan</h4>
									<p className="text-white/70">
										Product Supply Manager
										<br />
										at P&G
									</p>
								</div>
							</div>
						</Card>

						{/* Timeline */}
						<Card title="Event Timeline" className="text-center">
							<div className="relative">
								<div className="flex justify-between items-center mb-4">
									<div className="text-center">
										<div className="w-4 h-4 bg-cyan-400 rounded-full mx-auto mb-2"></div>
										<div className="text-white font-medium">Registration</div>
									</div>
									<div className="text-center">
										<div className="w-4 h-4 bg-cyan-400 rounded-full mx-auto mb-2"></div>
										<div className="text-white font-medium">D-Day</div>
									</div>
								</div>

								<div className="flex justify-between text-white/70 text-xs">
									<div>
										20th September
										<br />
										until
										<br />
										24th October
									</div>
									<div>25th October</div>
								</div>

								<div className="absolute top-2 left-0 right-0 h-0.5 bg-cyan-400">
									<div className="absolute left-0 w-3/4 h-full bg-cyan-400"></div>
								</div>
							</div>
						</Card>
					</div>

					{/* Sidebar */}
					<aside className="space-y-6">
						{/* Contact */}
						<Card title="">
							<h3 className="text-white font-bold text-lg mb-4">
								Need help or have any questions? Reach us!
							</h3>

							<div className="flex items-center space-x-3 mb-6">
								<div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
									<Phone className="w-5 h-5 text-white" />
								</div>
								<div>
									<div className="text-white font-medium">Rendy</div>
									<div className="text-white/70 text-sm">085368263352 (WA)</div>
								</div>
							</div>

							<div>
								<h4 className="text-white font-bold mb-3">
									Join Chamber's Official WhatsApp Group!
								</h4>
								<button
									onClick={handleWhatsappGroup}
									className="w-full bg-green-500 hover:bg-green-600 cursor-pointer text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-colors"
								>
									<MessageCircle className="w-5 h-5" />
									<span>Click Me!</span>
								</button>
							</div>
						</Card>
					</aside>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
