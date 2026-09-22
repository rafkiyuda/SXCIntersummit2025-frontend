import React, { useEffect, useState } from "react";
import {
	Menu,
	MapPin,
	Calendar,
	Clock,
	Users,
	CheckCircle,
	Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom"; // Add this import
import SidebarChambers from "../../../components/profile/Chambers/sidebarChambers";
import ContactChambers from "./ContactChambers";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { Toaster } from "react-hot-toast";
import useGetRegisteredPrograms from "@/hooks/User/useGetRegisteredPrograms";

const DaySelectionPage = () => {
	// cara coba di terminalnya
	// localStorage.setItem('day1Registration', 'completed')
	const navigate = useNavigate(); // Add navigation hook

	const { data } = useGetRegisteredPrograms();

	useEffect(() => {
		if (data?.some((a) => a.programId === 5)) {
			// navigate("/profile/home/chambers/fmcg-startup");
		}
	}, [data, navigate]);

	// You can implement this function to check registration status
	// This could be from localStorage, API call, or context/state management
	const checkRegistrationStatus = (dayNumber) => {
		if (data?.some((a) => a.programId === 5 && a.type === `DAY` + dayNumber)) {
			return true;
		}
	};

	const handleDayRegistration = (dayNumber) => {
		// const isRegistered = checkRegistrationStatus(dayNumber);
		// if (isRegistered) {
		//   // User is already registered, go to day page
		//   navigate(`/profile/home/chambers/${dayNumber === 1 ? 'banking-consulting' : 'fmcg-startup'}`);
		// } else {
		//   // User is not registered, go to registration form
		//   navigate(`/profile/home/chambers/${dayNumber === 1 ? 'banking-consulting' : 'fmcg-startup'}-form`);
		// }

		if (dayNumber === 2) {
			navigate("/profile/home/chambers/fmcg-startup-form");
		} else {
			navigate("/profile/home/chambers/banking-consulting-form");
		}
	};

	// Event data
	const events = [
		{
			id: 1,
			dayNumber: 1, // Add dayNumber for routing
			day: "",
			title: "Banking & Consulting",
			subTheme:
				"Driving Strategic Excellence: Harnessing Digital Transformation in Consulting and Financial Services",
			date: "18 October 2025",
			time: "10.00 - 15.05 WIB",
			venue: "University of Indonesia",
			address:
				"Jl. Lingkar, Pondok Cina, Kecamatan Beji, Kota Depok, Jawa Barat 16424",
			buttonText: "🚀 Register!",
			buttonColor: "bg-green-500 hover:bg-green-600",
			speakers: [
				{
					name: "Athira Putriandari",
					role: "Management Associate at OCBC",
					image: "/images/profile/Chambers/speakers/AthiraPutriandari.svg",
				},
				{
					name: "Gilang Pratama",
					role: "Senior Associate at EY Consulting",
					image: "/images/profile/Chambers/speakers/GilangPratama.svg",
				},
			],
			benefits: [
				"🎓 Preparation class with industry experts from Banking & Consulting sectors",
				"💡 Mini case study in teams",
				"🤝 Networking opportunities",
				"And many more...",
			],
		},
		{
			id: 2,
			dayNumber: 2, // Add dayNumber for routing
			day: "",
			title: "FMCG & StartUp",
			subTheme:
				"Innovating at Speed: Building Agile Brands and Disruptive Solutions in a Hyperconnected Market",
			date: "25 October 2025",
			time: "10.00 - 15.05 WIB",
			venue: "Shopee Indonesia - Gama Tower, 8th Floor",
			address:
				"Jl. H. R. Rasuna Said No. 2, Karet Kuningan, Setiabudi, Jakarta Selatan",
			buttonText: "🚀 Register!",
			buttonColor: "bg-green-500 hover:bg-green-600",
			speakers: [
				{
					name: "Monica Riany",
					role: "Manager HRBP & Talent Management at Shopee Indonesia",
					image: "/images/profile/Chambers/speakers/MonicaRiany.svg",
				},
				{
					name: "Giffary Ivan",
					role: "Product Supply Manager at P&G",
					image: "/images/profile/Chambers/speakers/GiffaryIvan.jpg",
				},
			],
			benefits: [
				"🎓 Preparation class with industry experts from FMCG & StartUp sectors",
				"💡 Mini case study in teams",
				"🤝 Networking opportunities",
				"And many more...",
			],
		},
	];

	const EventCard = ({ event }) => {
		// Check if user is already registered for this day
		const isRegistered = checkRegistrationStatus(event.dayNumber);

		return (
			<div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-lg">
				<div className="flex flex-col lg:flex-row gap-6">
					{/* Event Details */}
					<div className="flex-1">
						<div className="mb-4">
							<h3 className="text-2xl font-bold text-gray-800 mb-2">
								{event.day} {event.title}
							</h3>
							<div className="bg-orange-100 p-3 rounded-lg mb-4">
								<p className="text-sm font-medium text-orange-800">
									🎯 <span className="font-semibold">Sub Theme:</span>
								</p>
								<p className="text-sm text-orange-700 italic mt-1">
									{event.subTheme}
								</p>
							</div>
						</div>

						{/* Date, Time, Venue */}
						<div className="space-y-3 mb-4">
							<div className="flex items-center text-gray-600">
								<Calendar className="w-4 h-4 mr-2 text-purple-600" />
								<span className="font-medium text-purple-600">
									Date & Time:
								</span>
								<span className="ml-2">
									{event.date}, {event.time}
								</span>
							</div>

							<div className="flex items-start text-gray-600">
								<MapPin className="w-4 h-4 mr-2 text-purple-600 mt-0.5" />
								<div>
									<span className="font-medium text-purple-600">Venue:</span>
									<p className="ml-2 inline">{event.venue}</p>
									<p className="text-sm text-gray-500 ml-2">{event.address}</p>
								</div>
							</div>
						</div>

						{/* Registration Status */}
						{isRegistered && (
							<div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
								<div className="flex items-center text-green-800">
									<CheckCircle className="w-5 h-5 mr-2" />
									<span className="font-medium">
										You're already registered for this day!
									</span>
								</div>
							</div>
						)}

						{/* What You'll Get */}
						<div className="mb-6">
							<h4 className="font-semibold text-gray-800 mb-3">
								What You'll Get:
							</h4>
							<ul className="space-y-2">
								{event.benefits.map((benefit, index) => (
									<li
										key={index}
										className="text-sm text-gray-700 flex items-start"
									>
										{benefit.includes("💎") ? (
											<span>{benefit}</span>
										) : (
											<span className="ml-4">{benefit}</span>
										)}
									</li>
								))}
							</ul>
						</div>

						{/* Register Button */}
						{!isRegistered && (
							<button
								onClick={() => handleDayRegistration(event.dayNumber)}
								className={`w-full ${event.buttonColor} flex justify-center text-white py-3 px-6 cursor-pointer rounded-lg font-semibold text-lg transition-colors duration-200`}
							>
								{event.buttonText}
							</button>
						)}
					</div>

					{/* Speakers Section */}
					<div className="lg:w-80">
						<div className="bg-gray-50 rounded-xl p-4">
							<h4 className="font-semibold text-gray-800 mb-4 text-center">
								Speakers:
							</h4>
							<div className="space-y-4">
								{event.speakers.map((speaker, index) => (
									<div key={index} className="text-center">
										<div className="w-32 h-32 mx-auto bg-gray-200 mb-3 overflow-hidden">
											<img
												src={speaker.image}
												alt={speaker.name}
												className="w-full h-full object-cover"
											/>
										</div>
										<h5 className="font-semibold text-gray-800 text-sm">
											{speaker.name}
										</h5>
										<p className="text-xs text-gray-600 leading-tight">
											{speaker.role}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<>
			<Toaster />

			{/* Content Area */}
			<div className="p-4 lg:p-8">
				{/* Header Section */}
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
					<p className="text-white/90 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
						Select which day(s) you'd like to join and unlock tailored career
						preparation experiences.
					</p>
				</div>

				{/* Event Cards */}
				<div className="max-w-3xl mx-auto space-y-8">
					{events.map((event) => (
						<EventCard key={event.id} event={event} />
					))}
				</div>

				{/* Joining Both Days Section */}
				{/* <div className="max-w-3xl mx-auto mt-12">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text mb-2 flex items-center justify-center gap-2">
                <Star className="w-8 h-8 text-orange-400" />
                Joining Both Days?
              </h2>
            </div>

            {/* Event Cards */}
				{/* <div className="max-w-3xl mx-auto space-y-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div> */}

				{/* Joining Both Days Section */}
				<div className="max-w-3xl mx-auto mt-12">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text mb-2 flex items-center justify-center gap-2">
                  <Star className="w-8 h-8 text-orange-400" />
                  Joining Both Days?
                </h2>
              </div>

              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 border-2 border-orange-200">
                <div className="mb-4">
                  <p className="text-gray-800 font-medium mb-3">
                    If you wish to join Banking & Consulting and 
                    FMCG & StartUp,
                    <span className="font-bold text-orange-600">
                      {" "}
                      please make sure to:
                    </span>
                  </p>

                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Fill out both registration forms separately</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Join two different WhatsApp groups (one for each day) to
                        stay updated with all event information
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white/80 rounded-lg p-4 border-l-4 border-orange-400">
                  <p className="text-gray-800 font-medium">
                    This way, you'll get the full experience and won't miss any
                    important updates!
                  </p>
                </div>
              </div>
            </div>
			</div>
			        <ContactChambers />
		</>
	);
};

export default DaySelectionPage;
