import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-[linear-gradient(180deg,rgba(86,39,128,1)_0%,rgba(100,61,135,1)_48%,rgba(130,87,169,1)_100%)] flex items-center justify-center min-h-screen flex-col">
      <div className=" bg-opacity-10 p-8 rounded-lg  flex flex-col items-center">
        <h1 className="text-white text-4xl font-bold mb-2">Oops!</h1>
        <h2 className="text-white text-xl mb-4">Something went wrong</h2>
        <p className="text-white mb-2 text-center">
          The page you are looking for encountered an error or does not exist.
        </p>
        <p className="text-white mb-4 text-center">
          Please try again later or return to the home page.
        </p>
        <Link
          to="/"
          className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
