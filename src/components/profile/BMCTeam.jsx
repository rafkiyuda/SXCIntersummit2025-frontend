import React, { useState } from "react";
import SideBarSection from "@/components/profile/SideBarSection"; 

const BMCTeam = () => {
  // Example data for team members
  const teamMembers = [
    { id: 1, name: "John Doe", role: "Leader", status: "verified", isLeader: true, avatar: "" },
    { id: 2, name: "Jane Smith", role: "Member", status: "verified", isLeader: false, avatar: "" },
    { id: 3, name: "Michael Johnson", role: "Member", status: "verified", isLeader: false, avatar: "" },
  ];

  // Function to determine the team status based on the members' statuses
  const getTeamStatus = (members) => {
    const allVerified = members.every((member) => member.status === "verified");
    const someVerifying = members.some((member) => member.status === "verifying");
    const anyIncomplete = members.some((member) => member.status === "incomplete");

    if (allVerified) {
      return "verified";
    } else if (someVerifying) {
      return "verifying";
    } else if (anyIncomplete) {
      return "incomplete";
    }
    return "verified"; // Default to verified if no other conditions match
  };

  const teamStatus = getTeamStatus(teamMembers); // Get the current team status

  const tasks = [
    {
      id: 1,
      title: "Selection Task",
      dueDate: "2025-08-05, 9.00 PM",
      description: "For further information, please check your email for the given task.",
      acceptedTypes: "PDF, DOCX",
      status: "submitted",
      hasOverdue: false,
    },
    {
      id: 2,
      title: "Proof of Payment",
      dueDate: "2025-08-06, 9.00 PM",
      description: "For further information, please check your email for the given task.",
      acceptedTypes: "PNG, JPG",
      status: "pending",
      hasOverdue: true,
    },
    {
      id: 3,
      title: "Proof of Promotion",
      dueDate: "2025-08-07, 9.00 PM",
      description: "For further information, please check your email for the given task.",
      acceptedTypes: "png, jpg",
      status: "submitted",
      hasOverdue: false,
    },
  ];

  // Icons for download and upload buttons
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

  // Team status component
  const TeamStatus = ({ status }) => {
    let statusClass = "";
    let statusText = "";
    let icon = "";
    let bgColor = "";

    if (status === "verified") {
      statusClass = "bg-[#60D394]"; // Green
      icon = "/images/profile/BMC/verified.png";
      statusText = "All team members have been verified. You’re good to go!";
    } else if (status === "verifying") {
      statusClass = "bg-[#FFB74D]"; // Yellow
      icon = "/images/profile/BMC/verifying.png";
      statusText = "Some team members are still being verified.";
    } else if (status === "incomplete") {
      statusClass = "bg-[#F44336]"; // Red
      icon = "/images/profile/BMC/incomplete.png";
      statusText = "One or more members failed verification. Please check.";
    }

    return (
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div>
          <p className="text-white font-medium">Team name: gatau</p>
          <p className="text-white font-medium">Team Code: JwKj2006</p>
        </div>

        {/* Conditional Status */}
        <div className={`flex items-center ${statusClass} border border-[#777] rounded-[10px] text-white text-sm p-2 w-auto mt-2 lg:mt-0`}>
          <img
            src={icon}
            alt="BMC Icon"
            className="w-5 h-5"
          />
          <div className="ml-1 text-[12px]">
            <p className="text-left">Team Status: {status.charAt(0).toUpperCase() + status.slice(1)}</p>
            <p className="text-left">{statusText}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full mx-auto md:p-5 space-y-4 md:space-y-6 mt-4 md:mt-15">
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

          <h2 className="text-white text-xl font-semibold mt-4">Team Information</h2>
          <div className="bg-[#8257A9] backdrop-blur-sm border mt-2 border-white/20 rounded-lg overflow-hidden">
            <div className="p-6">
              {/* Team Code */}
              <TeamStatus status={teamStatus} /> {/* Display the correct team status */}

              {/* Team Members */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 mt-3 gap-4">
                    {teamMembers.map((member, index) => (
                      <div key={index} className="flex items-center p-3 bg-white/10 rounded-lg">
                        {member.isLeader && <span className="text-yellow-400"></span>}
                        <div className="flex items-center justify-center h-5 w-5 rounded-full text-white text-ms mr-2">
                          <img
                            src={member.isLeader ? "/images/profile/BMC/crown.png" : "/images/profile/profile-icon.svg"}
                            alt=""
                            className="w-5 h-5 object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-[12px] font-medium text-white">{member.name}</p>
                          <p className="text-[10px] text-white/70">{member.role}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          {member.status === "verified" ? (
                            <span className="text-green-400">
                              <img
                                src="/images/profile/BMC/verified.png"
                                alt="BMC Icon"
                                className="w-5 h-5"
                              />
                            </span>
                          ) : (
                            <span className="text-yellow-400">
                              <img
                                src="/images/profile/BMC/Vector.png"
                                alt="BMC Icon"
                                className="w-5 h-5"
                              />
                            </span>
                          )}
                          <span className="text-xs text-white/70">
                            {member.status === "verified" ? "verified" : "verifying"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tasks Section */}
          <h2 className="text-white text-xl font-semibold mt-4">Tasks</h2>
          <div className="space-y-4">
            {tasks.map((task, index) => (
              <div key={index} className="p-6 bg-[#8257A9] mt-2 rounded-lg border border-white/20">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                  <h3 className="text-[20px] font-semibold text-white">{task.title}</h3>
                  <p className="text-sm text-white/70 ml-auto">{task.dueDate}</p>
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
                    {/*<button className="inline-flex items-center bg-white/10 border border-white/20 text-white hover:bg-white/20 px-3 py-1 rounded-md text-xs">
                      <Download /> 
                      <span className="ml-2">Download File</span>
                    </button>*/}
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
  );
};

export default BMCTeam;
