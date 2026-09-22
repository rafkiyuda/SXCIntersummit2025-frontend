import React from "react";

const Tasks = () => {
  return (
    <>
      <div className="text-left mb-4 flex justify-between items-center ">
        <h2 className="text-white text-3xl font-bold my-5">Tasks</h2>{" "}
      </div>
      <div className="px-4 py-6 bg-[#8257A9] rounded-3xl">
        <div className="flex items-center justify-between ">
          <p className="text-xl font-bold">Proof of Promotion</p>
          <p className="text-xl font-bold">Due: 21th July 2025, 23:59 WIB</p>
        </div>

        <p className="text-xl font-semibold opacity-70 max-w-[400px] my-2">
          For further information please check your email for the given task.
        </p>
      </div>
    </>
  );
};

export default Tasks;
