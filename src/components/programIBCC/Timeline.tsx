import React from 'react';

const dotData = [
  { position: '2%',  type: 'small-white' },
  { position: '5%', type: 'white-ring' },
  { position: '13%', type: 'blue' },
  { position: '20%', type: 'blue' },
  { position: '27%', type: 'blue' },
  { position: '35%', type: 'blue' },
  { position: '43%', type: 'blue' },
  { position: '51%', type: 'blue' },
  { position: '59%', type: 'blue' },
  { position: '67%', type: 'blue' },
  { position: '75%', type: 'blue' },
  { position: '83%', type: 'blue' },
  { position: '91%', type: 'blue' },
  { position: '98%',  type: 'small-white' },
];


const labelData = [
  { text: <>Preliminaries Open<br/>Registration</>,            position: '5%', placement: 'above', style: 'title' },
  { text: '8th September - 17th October',                      position: '5%', placement: 'below', style: 'date' },

  { text: '28th September',                                    position: '13%', placement: 'above', style: 'date' },
  { text: '1st Case Release',                                  position: '13%', placement: 'below', style: 'title' },

  { text: <>Preliminaries<br/>Deck Scoring</>,                 position: '20%', placement: 'above', style: 'title' },
  { text: '20th October',                                      position: '20%', placement: 'below', style: 'date' },

  { text: '2nd November',                                      position: '27%', placement: 'above', style: 'date' },
  { text: <>Semifinal Announcement<br/>& 2nd Case Release</>,  position: '27%', placement: 'below', style: 'title' },

  { text: '17th November',                                     position: '35%', placement: 'below', style: 'date' },
  { text: <>Semifinal<br/>Deck Scoring</>,                     position: '35%', placement: 'above', style: 'title' },

  { text: 'Finalist Announcement',                             position: '43%', placement: 'below', style: 'title' },
  { text: '23rd November',                                     position: '43%', placement: 'above', style: 'date' },

  { text: 'Technical Meeting',                                 position: '51%', placement: 'above', style: 'title' },
  { text: '25th November',                                     position: '51%', placement: 'below', style: 'date' },

  { text: <>Crack-the-case<br/>Mentorship</>,                  position: '59%', placement: 'below', style: 'title' },
  { text: '26th November',                                     position: '59%', placement: 'above', style: 'date' },

  { text: <>Final Case<br/>Release</>,                         position: '67%', placement: 'above', style: 'title' },
  { text: '27th November',                                     position: '67%', placement: 'below', style: 'date' },

  { text: 'Final Submission',                                  position: '75%', placement: 'below', style: 'title' },
  { text: '28th November',                                     position: '75%', placement: 'above', style: 'date' },

  { text: 'Final D-Day',                                       position: '83%', placement: 'above', style: 'title' },
  { text: '29th November',                                     position: '83%', placement: 'below', style: 'date' },

  { text: 'Awarding Day',                                      position: '91%', placement: 'below', style: 'title' },
  { text: '30th November',                                     position: '91%', placement: 'above', style: 'date' },
];


const Timeline: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-24 md:mb-32">
          Timeline & Stages
        </h2>
        <div className="w-full overflow-x-auto pb-12">
          <div className="relative w-full min-w-[2000px] h-48">
            <div className="absolute inset-y-0 left-[68%] right-0 bg-black -z-10"></div>
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/50 rounded-full transform -translate-y-1/2" />
            {dotData.map((dot, index) => {
              let dotClass = '';
              switch (dot.type) {
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
                  key={index}
                  className={`absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full ${dotClass}`}
                  style={{ left: dot.position }}
                />
              );
            })}
            {labelData.map((label, index) => {
              const placementClass = label.placement === 'above' ? 'bottom-1/2 mb-12' : 'top-1/2 mt-12';
              const titleClass = 'text-white font-medium text-sm';
              const dateClass = 'text-white/80 font-normal text-sm';
              return (
                <div
                  key={index}
                  className={`absolute text-center whitespace-nowrap transform -translate-x-1/2 ${placementClass} ${label.style === 'title' ? titleClass : dateClass}`}
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
