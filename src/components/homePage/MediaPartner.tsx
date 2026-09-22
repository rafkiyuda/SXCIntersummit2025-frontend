import { cn } from "@/lib/utils";
import React from "react";
const DATA_ITEMS1 = 10;
const direction1 = "left";
const direction2 = "right";

const logos = [
	"/images/mediapartner/AIESEC in UNJ.png",
	"/images/mediapartner/Generation Girl.png",
	"/images/mediapartner/Kejar Mimpi Jakarta.jpg",
	"/images/mediapartner/Logo Become More.png",
	"/images/mediapartner/Logo Brand UI.png",
	"/images/mediapartner/Logo CBSA UI_.png",
	"/images/mediapartner/Logo Growth Skill.png",
	"/images/mediapartner/LOGO Ink & Talk.jpg",
	"/images/mediapartner/LOGO Inside Insight UI.png",
	"/images/mediapartner/LOGO KM-Bandung.png",
	"/images/mediapartner/LOGO KMB.jpg",
	"/images/mediapartner/LOGO KMT.jpeg",
	"/images/mediapartner/LOGO PUSAT KARIEE UIN JAKARTA.JPG",
	"/images/mediapartner/Logo Rumah Belajar UI 20.png",
	"/images/mediapartner/LOGO shARE UNJ.png",
	"/images/mediapartner/Logo Taxplore UI.png",
	"/images/mediapartner/Logo TemanAmbiss .png",
	"/images/mediapartner/LOGO UISS_25.png",
	"/images/mediapartner/Veteran Consulting Club.png",
	"/images/mediapartner/(Size L) ShARE UI - DWDG Future Leaders Logo.png",
	"/images/mediapartner/AIESEC UI.png",
	"/images/mediapartner/AIESEC IN UIN Jakarta.png",
	"/images/mediapartner/Anuva Study- Platinum.png",
	"/images/mediapartner/FFI primary logo black 2.png",
	"/images/mediapartner/AYOLOGO NEW HiRes.png",
	"/images/mediapartner/FPCI Chapter.png",
	"/images/mediapartner/Gandeng (Logogram + Logotype) V2_TUSCANY.png",
	"/images/mediapartner/ISAFIS 2.png",
	"/images/mediapartner/Logo Ambisbareng.png",
	"/images/mediapartner/LOGO BBIC .png",
	"/images/mediapartner/logo cak youth.png",
	"/images/mediapartner/Logo Century-3.png",
	"/images/mediapartner/Logo Chemistry Fair UI.png",
	"/images/mediapartner/Logo EcosySTEM.jpg",
	"/images/mediapartner/Logo Enterns UI 2025.png",
	"/images/mediapartner/LOGO GDGOC UG.png",
	"/images/mediapartner/Logo Girl Up UI.JPG",
	"/images/mediapartner/Logo Gritty.png",
	"/images/mediapartner/Logo Growth Hub.png",
	"/images/mediapartner/Logo HIMAPSI UB.png",
	"/images/mediapartner/Logo Himme Binus.png",
	"/images/mediapartner/Logo HMVOKHUM UI.png",
	"/images/mediapartner/Logo IBEC FEB UI.png",
	"/images/mediapartner/logo imperatif.png",
	"/images/mediapartner/Logo IMTI FTUI.png",
	"/images/mediapartner/LOGO ITP.png",
	"/images/mediapartner/Logo Kanopi FEB UI.png",
	"/images/mediapartner/Logo KSPM FEB UI.png",
	"/images/mediapartner/Logo MIST FEB UI.png",
	"/images/mediapartner/logo muda-mudahan biru.png",
	"/images/mediapartner/Logo Ousean.png",
	"/images/mediapartner/Logo Pathseeker UB.png",
	"/images/mediapartner/Logo Peta Career.png",
	"/images/mediapartner/Logo Preneur Academy Hitam.png",
	"/images/mediapartner/Logo Produktifkuy.png",
];

const MediaPartner = () => {
	return (
		<>
			<img
				className="w-1/2 md:w-1/4 mx-auto"
				src="/images/homepage/mediaPartner.png"
				alt="Media Partner"
			/>

			{/* Going Right */}
			<div className="w-full py-15 z-50 flex items-center justify-center">
				{/* Carousel */}
				<div
					style={{
						maskImage:
							"linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
						WebkitMaskImage:
							"linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
					}}
					className="wrapper relative mx-3 h-[160px] w-[95%] max-w-full overflow-hidden"
				>
					{logos.map((logo, index) => {
						return (
							<div
								key={index}
								className={cn(
									"absolute item flex items-center justify-center mr-4 md:mr-8 bg-[#ade67f25] rounded-xl",
									direction1 === "left"
										? "animate-scrollLeft"
										: "animate-scrollRight"
								)}
								style={{
									[direction1 === "left" ? "left" : "right"]:
										direction1 === "left"
											? `max(calc(200px * ${logos.length}), 100%)`
											: "-350px",
									animationDelay: `calc(60s / ${logos.length} * (${
										logos.length
									} - ${index + 1}) * -1)`,
								}}
							>
								{/* Wrapper seragam */}
								<div className="min-w-[120px] h-[120px] flex items-center justify-center p-4">
									<img
										className="max-h-[80px] max-w-[100px] object-contain"
										src={logo}
										alt={`Media Partner ${index + 1}`}
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			{/* Going Left */}
		</>
	);
};

export default MediaPartner;
