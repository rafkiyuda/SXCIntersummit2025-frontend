import React, { useRef } from "react";
import clsx from "clsx";

const dotData = [
	{ position: "2%", type: "blue" },
	{ position: "10%", type: "blue" },
	{ position: "23%", type: "blue" },
	{ position: "37%", type: "blue" },
	{ position: "51%", type: "blue" },
	{ position: "67%", type: "blue" },
	{ position: "80%", type: "blue" },
	{ position: "92%", type: "blue" },
	{ position: "98%", type: "small-white" },
];

const labelData = [
	{
		text: "BMC Open Registration",
		position: "10%",
		placement: "above",
		style: "title",
	},
	{
		text: "15th - 25th August",
		position: "10%",
		placement: "below",
		style: "date",
	},
	{
		text: "31st August  - 19th September",
		position: "23%",
		placement: "above",
		style: "date",
	},
	{
		text: "BCL Open Registration",
		position: "23%",
		placement: "below",
		style: "title",
	},
	{
		text: "IBCC Open Registration",
		position: "37%",
		placement: "above",
		style: "title",
	},
	{
		text: "8th September  - 17th October",
		position: "37%",
		placement: "below",
		style: "date",
	},
	{
		text: "8th September - 5th October",
		position: "51%",
		placement: "above",
		style: "date",
	},
	{
		text: "IBPC Open Registration",
		position: "51%",
		placement: "below",
		style: "title",
	},
	{
		text: "Chambers Open Registration",
		position: "67%",
		placement: "above",
		style: "title",
	},
	{
		text: "18th September  - 17th October",
		position: "67%",
		placement: "below",
		style: "date",
	},
	{
		text: "10th October - 1st November",
		position: "80%",
		placement: "above",
		style: "date",
	},
	{
		text: (
			<>
				Company Visit
				<br />
				Open Registration
			</>
		),
		position: "80%",
		placement: "below",
		style: "title",
	},
	{
		text: "International Conference",
		position: "92%",
		placement: "above",
		style: "title",
	},
	{
		text: "2nd November - 29th November ",
		position: "92%",
		placement: "below",
		style: "date",
	},
];

const LandingPageTimeline: React.FC = () => {
	const scrollRef = useRef<HTMLDivElement>(null);
	let isDown = false;
	let startX = 0;
	let scrollLeft = 0;

	// Mouse events for drag scroll
	const handleMouseDown = (e: React.MouseEvent) => {
		isDown = true;
		startX = e.pageX - (scrollRef.current?.offsetLeft || 0);
		scrollLeft = scrollRef.current?.scrollLeft || 0;
		document.body.style.cursor = "grabbing";
	};

	const handleMouseLeave = () => {
		isDown = false;
		document.body.style.cursor = "default";
	};

	const handleMouseUp = () => {
		isDown = false;
		document.body.style.cursor = "default";
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
		const walk = (x - startX) * 1.5; // scroll speed
		if (scrollRef.current) {
			scrollRef.current.scrollLeft = scrollLeft - walk;
		}
	};

	return (
		<section className="py-16 md:py-24 relative z-50">
			<div className="container mx-auto max-w-7xl px-4 ">
				<h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-10 md:mb-16">
					Timeline
				</h2>

				<div
					ref={scrollRef}
					className="max-w-screen overflow-x-auto pb-8 custom-scrollbar cursor-grab pl-5 md:pl-0"
					onMouseDown={handleMouseDown}
					onMouseLeave={handleMouseLeave}
					onMouseUp={handleMouseUp}
					onMouseMove={handleMouseMove}
				>
					<div className=" relative w-full min-w-[1300px] md:min-w-[2000px] h-32">
						<div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#8257A9] rounded-full transform -translate-y-1/2"></div>

						{dotData.map((dot, index) => {
							let dotClass = "";
							switch (dot.type) {
								case "small-white":
									dotClass = "w-5 h-5 bg-white";
									break;
								case "white-ring":
									dotClass =
										"w-2 md:w-8 h-2 md:h-8 bg-[#8257A9] border-[4px] border-white";
									break;
								case "blue":
								default:
									dotClass =
										"w-4 md:w-8 h-4 md:h-8 bg-[#8257A9] border-[4px] border-[#8257A9]/50";
									break;
							}
							return (
								<div
									key={`dot-${index}`}
									className={clsx(
										`absolute top-1/2 rounded-full transform -translate-y-1/2 -translate-x-1/2 transition-all duration-300`,
										dotClass,
										"hover:scale-150 hover:shadow-lg hover:shadow-[#8257A9]/50"
									)}
									style={{ left: dot.position, zIndex: 2 }}
								></div>
							);
						})}

						{labelData.map((label, index) => {
							const placementClass =
								label.placement === "above"
									? "bottom-1/2 mb-8"
									: "top-1/2 mt-8";
							let styleClass = "";
							switch (label.style) {
								case "title":
									styleClass = "text-white font-medium text-xs md:text-lg";
									break;
								case "date":
								default:
									styleClass = "text-white/80 font-normal text-xs md:text-base";
									break;
							}
							return (
								<div
									key={`label-${index}`}
									className={`absolute text-center whitespace-nowrap transform -translate-x-1/2 ${placementClass} ${styleClass} transition-all duration-300 hover:scale-110 hover:text-[#8257A9]`}
									style={{ left: label.position, zIndex: 3 }}
								>
									{label.text}
								</div>
							);
						})}
					</div>
				</div>
				<p className="text-center text-[#ece7f0] mt-4 text-sm">
					Scroll horizontally to see the full timeline
				</p>
			</div>
		</section>
	);
};

export default LandingPageTimeline;
