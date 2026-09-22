// client/src/components/admin/bmc/RoleChanger.tsx

import React from 'react';

const RoleChanger: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 mt-8 w-64 mx-auto text-center">
      <div className="space-y-2">
        <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#6c2eb7] focus:ring-[#6c2eb7]">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <button className="w-full px-4 py-2 mt-4 bg-gray-500 text-white rounded-xl shadow-md hover:bg-gray-600 transition-colors duration-200">
          Change Roles
        </button>
      </div>
    </div>
  );
};

export default RoleChanger;