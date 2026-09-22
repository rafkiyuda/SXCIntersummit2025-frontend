import { MessageSquare } from "lucide-react";

export const CallingOut = () => {
  return (
    <div className="flex flex-col items-center pb-16 px-4 sm:px-8 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg text-center">
        <span className="bg-gradient-to-r from-green-300 via-white to-purple-400 bg-clip-text text-transparent">
          We are still calling for Sponsors & Media Partners!
        </span>
      </h2>
      <p className="text-white text-sm md:text-xl font-[Plus_Jakarta_Sans] text-center max-w-2xl mb-10">
        We're looking for{" "}
        <span className="font-bold">
          passionate sponsors and media partners
        </span>{" "}
        to support and grow this initiative together. Whether you're a brand,
        organization, or community, join us in making a greater impact.
      </p>

      <p className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
        Want to collaborate with us? Let's talk!
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full">
        {/* Sponsorship */}
        <div className="flex flex-col items-center w-full md:w-1/2">
          <p className="text-lg md:text-xl font-semibold text-white mb-3 text-center">
            Sponsorship Inquiries
          </p>
          <a
            href="https://wa.me/6285929850167"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-[#8257A9] to-[#6c399c] text-white font-bold rounded-full px-8 py-4 text-base md:text-lg shadow-lg hover:scale-105 transition-all"
          >
            <MessageSquare size={24} />
            Contact Us!
          </a>
        </div>
        {/* Media Partner */}
        <div className="flex flex-col items-center w-full md:w-1/2">
          <p className="text-lg md:text-xl font-semibold text-white mb-3 text-center">
            Media Partnership Inquiries
          </p>
          <a
            href="https://wa.me/6285217753601"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-[#8257A9] to-[#6c399c] text-white font-bold rounded-full px-8 py-4 text-base md:text-lg shadow-lg hover:scale-105 transition-all"
          >
            <MessageSquare size={24} />
            Contact Us!
          </a>
        </div>
      </div>
    </div>
  );
};
