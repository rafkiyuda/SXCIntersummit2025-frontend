import React from "react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="bg-[linear-gradient(180deg,rgba(86,39,128,1)_0%,rgba(100,61,135,1)_48%,rgba(130,87,169,1)_100%)] flex items-center justify-center min-h-screen flex-col">
      <h1 className="text-white text-2xl">Unauthorized Access</h1>
      <p className="text-white mt-2">
        You do not have permission to view this page.
      </p>
      <p className="text-white mt-2 text-center">
        Please log in or contact support if you believe this is an error.
      </p>
      <Link to="/" className="text-white mt-4 underline">
        Go to Home
      </Link>
    </div>
  );
};

export default Unauthorized;
