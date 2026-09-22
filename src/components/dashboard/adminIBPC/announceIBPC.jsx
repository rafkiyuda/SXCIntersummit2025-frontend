import React, { useState } from "react";
import { Link } from "react-router-dom";

import SideBarSection from "@/components/dashboard/adminIBPC/sidebarIBPC";
import {
  useSendIBPCAnnouncement,
  useSendIBPCAnnouncementAll,
} from "@/hooks/Admin/useHandleAdminIBPC";
import toast, { Toaster } from "react-hot-toast";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const AnnounceIBPC = () => {
  const [formData, setFormData] = useState({
    to: "",
    subject: "Grand Finalist Announcement!",
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  });
  const { isLoading, sendAnnouncement } = useSendIBPCAnnouncement();
  const { isLoading: isLoadingAll, sendAnnouncementToAll } =
    useSendIBPCAnnouncementAll();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAnnounceToAll = () => {
    sendAnnouncementToAll({
      title: formData.subject,
      message: formData.message,
    });
    setFormData({ to: "", statusCode: 0, subject: "", message: "" });
  };

  const handleSendAnnouncement = () => {
    if (formData.to === "") {
      toast.error("Please select a recipient group.");
      return;
    }

    if (formData.message.trim() === "") {
      toast.error("Message cannot be empty.");
      return;
    }

    if (formData.subject.trim() === "") {
      toast.error("Subject cannot be empty.");
      return;
    }

    let code = null;

    if (formData.to === "specific" && formData.statusCode) {
      code = formData.statusCode;
    } else if (formData.to === "finalists") {
      code = 13;
    } else if (formData.to === "all") {
      code = 14;
    }
    sendAnnouncement({
      title: formData.subject,
      message: formData.message,
      status: code,
    });
    setFormData({ to: "", statusCode: 0, subject: "", message: "" });
  };

  return (
    <>
      <Toaster />
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Panggil sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <SideBarSection />
        </div>

        {/* Main content */}
        <div className="flex-1 p-4">
          {/* Main content */}
          <main className="flex-1 p-6 space-y-6 overflow-auto">
            {/* Header Bar */}
            <header className="flex justify-between items-center mb-6">
              <h1 className="font-semibold text-xl select-none"></h1>
              <div className="flex items-center space-x-4"></div>
            </header>

            {/* Dashboard Title */}
            <h2 className="text-xl sm:text-2xl font-bold select-none text-white">
              Announce
            </h2>

            {/* Announce Form */}
            <div className="bg-gradient-to-br from-[#562780] to-[#8257A9] rounded-lg p-6 space-y-4">
              {/* To Field */}
              <div className="space-y-2">
                <label htmlFor="to" className="text-white font-medium">
                  To <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <select
                    id="to"
                    name="to"
                    value={formData.to}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-200 text-gray-700 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/30 appearance-none"
                  >
                    <option value="">Select recipient...</option>
                    <option value="all">All Participants</option>
                    <option value="finalists">Finalists Only</option>
                    <option value="specific">Specific Group</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-white font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-200 text-gray-700 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>

              {formData.to === "specific" && (
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-white font-medium">
                    Input Status Code
                  </label>
                  <input
                    type="number"
                    id="statusCode"
                    name="statusCode"
                    value={formData.statusCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-200 text-gray-700 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/30"
                  />
                </div>
              )}

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-white font-medium">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-200 text-gray-700 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={handleAnnounceToAll}
                  className="px-6 py-3 bg-cyan-400 hover:bg-cyan-500 text-white font-medium rounded-lg transition-colors"
                >
                  {isLoading ? <LoadingSpinner /> : "Announce to All"}
                </button>
                <button
                  onClick={handleSendAnnouncement}
                  className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors"
                >
                  {isLoadingAll ? <LoadingSpinner /> : "Send Announcement"}
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AnnounceIBPC;
