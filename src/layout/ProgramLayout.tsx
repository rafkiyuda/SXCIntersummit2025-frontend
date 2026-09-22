import React from 'react';
import { Outlet } from 'react-router-dom';

const ProgramLayout = () => {
  return (
    <div className="min-h-screen text-white bg-gradient-to-r from-[#79CCEA] to-[#8257A9]">
      <Outlet />
    </div>
  );
};

export default ProgramLayout;
