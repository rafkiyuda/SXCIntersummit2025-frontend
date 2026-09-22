import React, { useState } from "react";
import { Link } from "react-router-dom";

import SideBarSection from "@/components/dashboard/adminBCL/sidebarBCL";
import { Toaster } from "react-hot-toast";
import { useSendBCLNotification } from "@/hooks/Admin/useHandleAdminBCL";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

const NotificationBCL = () => {
  const [formData, setFormData] = useState({
    subject: "",
    message: ``,
  });

  const { sendNotification, isLoading } = useSendBCLNotification();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendNotificationToAll = () => {
    sendNotification({ title: formData.subject, content: formData.message });
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
              Notification
            </h2>

            {/* Notification Form */}
            <div className="bg-gradient-to-br from-[#562780] to-[#8257A9] rounded-lg p-6 space-y-4">
              {/* Subject Field */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-white font-medium">
                  Subject <span className="text-red-400">*</span>
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

              {/* Action Button */}
              <div className="flex justify-end pt-4">
                <button
                  onClick={handleSendNotificationToAll}
                  className="px-6 py-3 bg-cyan-400 hover:bg-cyan-500 text-white font-medium rounded-lg transition-colors"
                >
                  {isLoading ? <LoadingSpinner /> : "Send Notification to All"}
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default NotificationBCL;
