import React from 'react';

const dotData = [
  { position: '2%', type: 'small-white' },
  { position: '10%', type: 'white-ring' },
  { position: '25%', type: 'blue' },
  { position: '40%', type: 'blue' },
  { position: '55%', type: 'blue' },
  { position: '70%', type: 'blue' },
  { position: '83%', type: 'blue' },
  { position: '91%', type: 'blue' },
  { position: '98%', type: 'small-white' },
];

const labelData = [
  { text: 'Open Registration', position: '10%', placement: 'above', style: 'title' },
  { text: '15th - 25th August', position: '10%', placement: 'below', style: 'date' },
  { text: '25th August', position: '25%', placement: 'above', style: 'date' },
  { text: 'Individual Registration', position: '25%', placement: 'below', style: 'title' },
  { text: '30th August', position: '40%', placement: 'above', style: 'date' },
  { text: <>Submission<br/>Deadline</>, position: '40%', placement: 'below', style: 'title' },
  { text: 'Finalist Announcement', position: '55%', placement: 'above', style: 'title' },
  { text: '2nd September', position: '55%', placement: 'below', style: 'date' },
  { text: '5th September', position: '70%', placement: 'above', style: 'date' },
  { text: 'Technical Meeting', position: '70%', placement: 'below', style: 'title' },
  { text: 'Grand Final', position: '83%', placement: 'above', style: 'title' },
  { text: '7th September', position: '83%', placement: 'below', style: 'date' },
  { text: '8th September', position: '91%', placement: 'above', style: 'date' },
  { text: <>Winner<br/>Announcement</>, position: '91%', placement: 'below', style: 'title' },
];

const Timeline: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-24 md:mb-32">
          Timeline & Stages
        </h2>
        
        <div className="w-full overflow-x-auto pb-12">
          <div className="relative w-full min-w-[2000px] h-32">
            <div className="absolute inset-y-0 left-[68%] right-0 bg-black -z-10"></div>
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/50 rounded-full transform -translate-y-1/2"></div>
            
            {dotData.map((dot, index) => {
              let dotClass = '';
              switch(dot.type) {
                case 'small-white':
                  dotClass = 'w-4 h-4 bg-white';
                  break;
                case 'white-ring':
                  dotClass = 'w-6 h-6 bg-[#3283F6] border-[3px] border-white';
                  break;
                case 'blue':
                default:
                  dotClass = 'w-6 h-6 bg-[#3283F6] border-[3px] border-[#3283F6]/50';
                  break;
              }
              return (
                <div
                  key={`dot-${index}`}
                  className={`absolute top-1/2 rounded-full transform -translate-y-1/2 -translate-x-1/2 ${dotClass}`}
                  style={{ left: dot.position }}
                ></div>
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
        <p className="text-center text-white/60 mt-4 text-sm">
          Scroll horizontally to see the full timeline
        </p>
      </div>
    </section>
  );
};

export default Timeline;