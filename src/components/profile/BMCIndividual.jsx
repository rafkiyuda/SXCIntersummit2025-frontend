import React, { useState } from "react";
import SideBarSection from "@/components/profile/SideBarSection"; 

const BMCIndividual = () => {
  // Example data for team members and tasks
  const teamMembers = [
    { id: 1, name: "John Doe", role: "Leader", status: "verified", isLeader: true, avatar: "" },
  ];

  const tasks = [
    {
      id: 1,
      title: "Selection Task",
      dueDate: "2025-08-05, 9.00 PM",
      description: "For further information, please check your email for the given task.",
      acceptedTypes: "PDF, DOCX",
      status: "pending",
      hasOverdue: false,
    },

  ];

  // Icons as components (replace with actual icon imports if available)


  const Download = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );

  const Upload = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );


  return (
    <div className="ww-full mx-auto p-4 md:p-5 space-y-4 md:space-y-6 mt-4 md:mt-15">
      <div className="flex flex-col md:flex-row md:mr-5">
        {/* Sidebar */}
        <div className="w-1/4">
          <SideBarSection /> {/* Sidebar positioned on the left */}
        </div>

        {/* Main Content */}

        <div className="flex-1 p-10 overflow-auto">
                <h2 className="flex justify-start items-center">
        <img 
          src="/images/profile/BMC/businessmodel.png" // Ganti dengan gambar yang sesuai
          alt="BMC Icon"
          className="max-md:h-[5vh] w-auto object-contain"
        />
      </h2>
          <div className="rounded-[19.6px] bg-[#8257A9] mt-3 p-6 text-white text-center">
            <div className="flex items-center justify-center space-x-3">
              <img 
                src="/images/profile/BMC/speaker.png" 
                alt="BMC Icon"
                className="w-5 h-5"
              />
              <p className="text-[12px]">You currently have no announcements.</p>
            </div>
          </div>



          {/* Tasks Section */}
          <h2 className="text-white text-xl font-semibold">Tasks</h2>
          <div className="rounded-lg overflow-hidden">

              <div className="space-y-4">
                {tasks.map((task, index) => (
                  <div key={index} className="p-6 bg-white/10 rounded-lg border border-white/20">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                      <h3 className="text-[20px] font-semibold text-white">{task.title}</h3>
                      <p className="text-sm text-white/70 ml-auto">{task.dueDate}</p> {/* Menggunakan ml-auto untuk memindahkan ke kanan */}
                    </div>

                    <p className="text-white/80 text-[13px] mb-2">{task.description}</p>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
                      <div className="space-y-2">
                        <p className="text-[13px] text-white/70">Accepted File Types:</p>
                        <p className="text-[13px] text-white">{task.acceptedTypes}</p>
                        <div className="flex items-center text-[10px] space-x-3">
                      <p>Status: </p>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] ${task.status === "submitted" ? "bg-[#99E857]" : "bg-yellow-500"} text-white`}>
                        {task.status}
                      </span>
                      {task.hasOverdue && (
                        <span className="inline-flex items-center bg-red-500 text-white px-3 py-1 rounded-full text-[10px]">
                          <span className="ml-1">Overdue</span>
                        </span>
                      )}
                    </div> 
                      </div>
                      <div className="flex flex-col space-y-2">
                        <button className="inline-flex items-center bg-white/10 border border-white/20 text-white hover:bg-white/20 px-3 py-1 rounded-md text-xs">
                          <Download />
                          <span className="ml-2">Download File</span>
                        </button>
                        <button className="inline-flex items-center bg-[#5EC7ED] hover:bg-blue-600 text-white px-3 py-1 rounded-md text-xs">
                          <Upload />
                          <span className="ml-2">Submit Here</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default BMCIndividual;
