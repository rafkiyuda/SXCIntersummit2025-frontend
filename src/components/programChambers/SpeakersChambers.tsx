import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-white text-center">{title}</h2>
      {children}
    </div>
  );
};

const SpeakersChambers: React.FC = () => {
  return (
    <>
    
    <section className="py-12 p-5 md:py-20 bg-gradient-to-r from-[#79CCEA] to-[#8257A9]">
        <h1 
          className="text-xl lg:text-5xl mb-5 text-center font-bold text-transparent bg-gradient-to-r from-[#7B5CB6] via-[#7BC6E2] to-[#B6E2A1] bg-clip-text"
          style={{
            WebkitTextStroke: "1px white",
            textShadow: "0 4px 16px rgba(0,0,0,0.15)",
          }}
        >
          Our Speakers
        </h1>
      <Card title="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-2xl mb-4 overflow-hidden mx-auto">
              <img
                src="/images/profile/Chambers/speakers/MonicaRiany.svg"
                alt="Monica Riany"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h4 className="text-white font-bold text-lg">Monica Riany</h4>
            <p className="text-white/70">
              Manager HRBP & Talent<br />
              Management at Shopee<br />
              Indonesia
            </p>
          </div>
         
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-2xl mb-4 overflow-hidden mx-auto">
              <img
                src="/images/profile/Chambers/speakers/GiffaryIvan.jpg"
                alt="Giffary Ivan"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h4 className="text-white font-bold text-lg">
              Giffary Ivan
            </h4>
            <p className="text-white/70">
              Product Supply Manager<br />
              at P&G
            </p>
          </div>
        </div>
      </Card>
    </section>
    </>
  );
};

export default SpeakersChambers;