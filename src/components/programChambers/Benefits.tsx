import React from 'react';

const benefitCards = [
  { src: '/images/programpage/chambers/benefits/1.svg', alt: 'Enchanced Skills & Insight' },
  { src: '/images/programpage/chambers/benefits/2.svg', alt: 'Expert Perspectives' },
  { src: '/images/programpage/chambers/benefits/3.svg', alt: 'Interactive Experience' },
  { src: '/images/programpage/chambers/benefits/4.svg', alt: 'Networking Opportunities' },
  { src: '/images/programpage/chambers/benefits/5.svg', alt: 'Career Opportunities' },
  { src: '/images/programpage/chambers/benefits/6.svg', alt: 'And many more...' }
];

const Benefits: React.FC = () => {
  const topCards = benefitCards.slice(0, 3);
  const bottomCards = benefitCards.slice(3);

  return (
    <section className="py-10 md:py-24">
      <div className="container mx-auto max-w-7xl px-2 md:px-4">
        <div className="flex justify-center mb-8 md:mb-16">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-2 flex bg-gradient-to-r from-[#7B5CB6] via-[#7BC6E2] to-[#B6E2A1] bg-clip-text text-transparent drop-shadow-lg"
            style={{
              WebkitTextStroke: "1px white",
              textShadow: "0 4px 16px rgba(0,0,0,0.15)",
            }}
          >
            Benefits
          </h2>
        </div>

        <div className="flex flex-col gap-6 md:gap-12">
          {/* Top Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 justify-center items-center">
            {topCards.map((card, idx) => (
              <img
                key={idx}
                src={card.src}
                alt={card.alt}
                className="transition-transform duration-300 hover:scale-105 w-full max-w-[200px] md:max-w-[320px] h-auto mx-auto"
                width={320}
                height={265}
              />
            ))}
          </div>
          {/* Bottom Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 justify-center items-center">
            {bottomCards.map((card, idx) => (
              <img
                key={idx}
                src={card.src}
                alt={card.alt}
                className="transition-transform duration-300 hover:scale-105 w-full max-w-[200px] md:max-w-[320px] h-auto mx-auto"
                width={320}
                height={265}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
