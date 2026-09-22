import React, { useState } from "react";

const Announcement: React.FC = () => {
	const [to, setTo] = useState("");
	const [subject, setSubject] = useState("Grand Finalist Announcement!");
	const [message, setMessage] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle send logic here
		alert("Announcement sent!");
	};

	return (
    <div className="flex-1 flex flex-col items-center justify-start p-8 mt-16">
        <div className="bg-[#8257A9] bg-opacity-70 rounded-2xl p-8 w-full max-w-4xl shadow-lg">
        <h2 className="text-white text-2xl font-bold mb-6">Announce</h2>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
                <label className="text-white font-semibold mb-2 block">To <span className="text-red-400">*</span></label>
                <input
                    type="text"
                    className="w-full rounded-lg px-4 py-2 bg-white text-gray-800 focus:outline-none"
                    value={to}
                    onChange={e => setTo(e.target.value)}
                    required
                />
            </div>
            <div>
                <label className="text-white font-semibold mb-2 block">Subject <span className="text-red-400">*</span></label>
                <input
                    type="text"
                    className="w-full rounded-lg px-4 py-2 bg-white text-gray-800 focus:outline-none"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    required
                />
            </div>
            <div>
                <label className="text-white font-semibold mb-2 block">Message <span className="text-red-400">*</span></label>
                <textarea
                    className="w-full rounded-lg px-4 py-2 bg-white text-gray-800 focus:outline-none resize-none"
                    rows={5}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                />
            </div>
            <div className="flex justify-end">
                <button
                    type="submit"
                    className="bg-[#4fd1ff] text-white font-bold px-8 py-2 rounded-lg shadow-md hover:bg-[#38b2ac] transition"
                >
                    Send Announcement
                </button>
            </div>
            </form>
        </div>
    </div>
	);
};

export default Announcement;
