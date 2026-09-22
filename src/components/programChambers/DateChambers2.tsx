import React from "react";

interface EventInfoProps {
  icon: string;
  label: string;
  children: React.ReactNode;
}

const EventInfo: React.FC<EventInfoProps> = ({ icon, label, children }) => {
  return (
    <div className="flex items-start gap-3">
      <span className="text-xl">{icon}</span>
      <div>
        <div className="font-semibold text-gray-700 mb-1">{label}</div>
        <div className="text-gray-600">{children}</div>
      </div>
    </div>
  );
};

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{title}</h2>
      {children}
    </div>
  );
};

const ChambersDate: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center py-12 bg-gradient-to-r from-[#79CCEA] to-[#8257A9] px-6 md:px-4">
        <h1
          className="text-3xl md:text-4xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-[#7B5CB6] via-[#7BC6E2] to-[#B6E2A1] bg-clip-text mb-4"
          style={{
            WebkitTextStroke: "1px white",
            textShadow: "0 4px 16px rgba(0,0,0,0.15)",
          }}
        >
          Bank & Consulting
        </h1>
      </div>
      
      <div className="px-6 md:px-4 py-8">
        <Card title="Event Information">
          <div className="space-y-4">
            <EventInfo icon="📅" label="Date">
              1st November 2025
            </EventInfo>
            <EventInfo icon="📍" label="Where">
              TBA (Offline) Jakarta
            </EventInfo>
            <EventInfo icon="⏰" label="Time">
              10:00 AM - 15:05 PM
            </EventInfo>
            <EventInfo icon="🎯" label="Theme">
              <span className="italic">
                Driving Strategic Excellence: Harnessing Digital Transformation in Consulting and Financial Services
              </span>
            </EventInfo>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ChambersDate;