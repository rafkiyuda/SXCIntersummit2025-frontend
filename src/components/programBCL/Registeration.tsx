import React, { useState, useEffect } from "react";
import BCLCompetition from "/images/programpage/bcl/BCLCompetition.png";
// import RegisterationClosing from "/images/programpage/bcl/RegisterationClosing.png";
import RegistrationOpening from "/images/programpage/bcl/registrationOpening.png";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "@/store/userStore";
import { useRegisterBCL } from "@/hooks/User/useHandleBCL";
import ScrollDown from "../ui/ScrollDown";

const formatTime = (time: number): string =>
  time < 10 ? `0${time}` : String(time);

interface TimeLeft {
  [unit: string]: number;
}

const Registration: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();
  const targetDate = new Date("September 19, 2025 00:00:00");

  const calculateTimeLeft = (): TimeLeft => {
    const diff = +targetDate - +new Date();
    if (diff <= 0) return {};
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const { registerBCL } = useRegisterBCL();

  const handleRegister = () => {
    if (!user) {
      navigate("/login");
    } else {
      window.open(
        "https://docs.google.com/forms/d/1L2ixJuaIAkEfvv2q2l7ZzqYsi_wyZrxv0Bc6AX1LC6c/viewform?pli=1&pli=1&edit_requested=true"
      );
      // registerBCL();
      // navigate("/profile/home/bcl");
    }
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timerComponents: React.ReactElement[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    const value = timeLeft[interval];
    if (value == null) return;
    timerComponents.push(
      <div
        key={interval}
        className="flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg"
      >
        <span className="text-4xl md:text-5xl font-bold text-white">
          {formatTime(value)}
        </span>
        <span className="text-sm text-white/80 uppercase tracking-widest">
          {interval}
        </span>
      </div>
    );
  });

  return (
    <section className="min-h-200 w-full flex items-center justify-center p-4 font-rubik">
      <div className="flex flex-col items-center justify-center text-center">
        <h2
          className="text-3xl md:text-5xl font-extrabold mb-2 flex bg-gradient-to-r from-[#7B5CB6] via-[#7BC6E2] to-[#B6E2A1] bg-clip-text text-transparent drop-shadow-lg"
          style={{
            WebkitTextStroke: "2px white",
            textShadow: "0 4px 16px rgba(0,0,0,0.15)",
          }}
        >
          Business Competition Launchpad
        </h2>

        <h2
          className="text-3xl md:text-5xl pb-5 font-extrabold mb-2 flex bg-gradient-to-r from-[#5cb0b6] via-[#7BC6E2] to-[#B6E2A1] bg-clip-text text-transparent drop-shadow-lg"
          style={{
            WebkitTextStroke: "2px white",
            textShadow: "0 4px 16px rgba(0,0,0,0.15)",
          }}
        >
          Registration Closes In
        </h2>

        <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-10">
          {timerComponents.length ? (
            timerComponents
          ) : (
            <span className="text-2xl font-bold">Registration has closed!</span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => handleRegister()}
            className="px-8 py-3 cursor-pointer rounded-xl bg-[#5EC7ED] text-white font-bold text-lg shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#5EC7ED]/50 "
          >
            Register Now
          </button>
          {/* <button className="px-8 py-3 rounded-xl bg-[#98D532] text-white font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#98D532]/50">
            <img
              src={"images/programpage/bcl/BookletIcon.png"}
              alt="Booklet Icon"
              className="w-6 h-6"
            />
            View Booklet
          </button> */}
        </div>
      </div>
      <ScrollDown />
    </section>
  );
};

export default Registration;
