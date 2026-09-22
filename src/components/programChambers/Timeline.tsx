import React from 'react';

const dotData = [
  { position: '5%', type: 'start-end' },
  { position: '45%', type: 'open-registration' },
  { position: '90%', type: 'd-day' },
];

const labelData = [
  { text: 'Open Registration', position: '45%', placement: 'above', style: 'title' },
  { text: '20th September - 24th October', position: '45%', placement: 'below', style: 'date' },
  { text: '25th October', position: '90%', placement: 'above', style: 'date' },
  { text: 'D-DAY', position: '90%', placement: 'below', style: 'title' },
];

const Timeline: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto max-w-4xl px-4">
        <h2
            className="text-4xl md:text-5xl text-center font-extrabold mb-5 bg-gradient-to-r from-[#7B5CB6] via-[#7BC6E2] to-[#B6E2A1] bg-clip-text text-transparent drop-shadow-lg"
            style={{
              WebkitTextStroke: "1px white",
              textShadow: "0 4px 16px rgba(0,0,0,0.15)",
            }}
          >
            Timeline
          </h2>
        
        <div className="w-full">
          <div className="relative w-full h-32">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/50 rounded-full transform -translate-y-1/2"></div>
            
            {dotData.map((dot, index) => {
              let dotClass = "";
              switch (dot.type) {
                case "start-end":
                  dotClass = "w-4 h-4 bg-white";
                  break;
                case "open-registration":
                  dotClass = "w-6 h-6 bg-white ring-4 ring-[#3283F6]";
                  break;
                case "d-day":
                  dotClass = "w-6 h-6 bg-[#3283F6] border border-white";
                  break;
                default:
                  dotClass = "w-6 h-6 bg-gray-500";
                  break;
              }
              return (
                <div
                  key={`dot-${index}`}
                  className={`absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full ${dotClass}`}
                  style={{ left: dot.position }}
                />
              );
            })}
            
            {labelData.map((label, index) => {
              const placementClass = label.placement === 'above' ? 'bottom-1/2 mb-8' : 'top-1/2 mt-8';
              let styleClass = '';
              switch(label.style) {
                case 'title':
                  styleClass = 'text-white font-medium text-lg';
                  break;
                case 'date':
                default:
                  styleClass = 'text-white/80 font-normal text-base';
                  break;
              }
              return (
                <div
                  key={`label-${index}`}
                  className={`absolute text-center whitespace-nowrap transform -translate-x-1/2 ${placementClass} ${styleClass}`}
                  style={{ left: label.position }}
                >
                  {label.text}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;