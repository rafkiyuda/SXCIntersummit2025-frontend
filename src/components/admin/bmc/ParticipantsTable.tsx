import React from "react";

const participants = Array.from({ length: 8 }, (_, i) => ({
	no: i + 1,
	name: "Jonathan Raffael",
	email: "jonathanraffaelt@gmail.com",
	birthdate: "August 2006",
	domicile: "North Jakarta",
	education: "University",
	institution: "Bina Nusantara",
	idCard: "Preview",
	whatsapp: "087×xxxxxxxx",
	lineId: "jonathanraffaels",
	instagram: "@jonathanraffaell"
}));

const ParticipantsTable: React.FC = () => {
	return (
        <div className="bg-[#8d5fc4] bg-opacity-70 rounded-2xl p-6 w-full max-w-5xl shadow-lg mt-8">
            <div className="overflow-x-auto">
                <table className="w-[1000px] text-left text-white">
                    <thead>
                        <tr className="font-bold">
                            <th className="px-2 py-2">No</th>
                            <th className="px-2 py-2">Name</th>
                            <th className="px-2 py-2">Email</th>
                            <th className="px-2 py-2">Birthdate</th>
                            <th className="px-2 py-2">Domicile</th>
                            <th className="px-2 py-2">Education</th>
                            <th className="px-2 py-2">Institution</th>
                            <th className="px-2 py-2">ID Card</th>
                            <th className="px-2 py-2">WhatsApp</th>
                            <th className="px-2 py-2">Line ID</th>
                            <th className="px-2 py-2">Instagram</th>
                        </tr>
                    </thead>
                </table>
                <div className="overflow-y-auto max-h-64 w-[1000px]">
                    <table className="w-full text-left text-white">
                        <tbody>
                            {participants.map((p, idx) => (
                                <tr key={idx} className="border-b border-[#8d5fc4]">
                                    <td className="px-2 py-2 font-bold">{p.no}</td>
                                    <td className="px-2 py-2">{p.name}</td>
                                    <td className="px-2 py-2">{p.email}</td>
                                    <td className="px-2 py-2">{p.birthdate}</td>
                                    <td className="px-2 py-2">{p.domicile}</td>
                                    <td className="px-2 py-2">{p.education}</td>
                                    <td className="px-2 py-2">{p.institution}</td>
                                    <td className="px-2 py-2 flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <span className="underline cursor-pointer hover:text-[#4fd1ff] transition">{p.idCard}</span>
                                    </td>
                                    <td className="px-2 py-2">{p.whatsapp}</td>
                                    <td className="px-2 py-2">{p.lineId}</td>
                                    <td className="px-2 py-2">{p.instagram}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
	);
};

export default ParticipantsTable;
