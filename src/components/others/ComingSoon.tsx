import React from "react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <>
      <div className="min-h-screen text-white bg-gradient-to-r from-[#79CCEA] to-[#8257A9] flex items-center justify-center flex-col">
        <img src="/images/others/comingsoon.png" alt="" />
        <p className="text-3xl my-4 max-w-[1200px] text-center">
          This program page is currently under development. Stay tuned to
          discover the activities, opportunities, and experiences we’re
          preparing for you.
        </p>

        <Link to={"/programs"}>
          <button className="rounded-lg shadow-2xl cursor-pointer bg-[#98D532] px-4 py-2">
            View Other Programs
          </button>
        </Link>
      </div>
    </>
  );
};

export default ComingSoon;
