import React from 'react';

const knowledgeIcon = '/images/programpage/bcl/Knowledge.png';
const certificateIcon = '/images/programpage/bcl/Lamp.png';
const studiesIcon = '/images/programpage/bcl/Studies.png';
const relationIcon = '/images/programpage/bcl/Relation.png';
const entryIcon = '/images/programpage/bcl/Entry.png';

const benefitsData = [
  {
    iconSrc: certificateIcon,
    title: "Comprehensive Preparation Class",
    description: "A comprehensive preparation class designed to get you ready for both Business Case and Business Plan Competitions.",
  },
  {
    iconSrc: knowledgeIcon,
    title: "Expert Insights & Guidance",
    description: "Insights and practical guidance from individuals with proven expertise in business competitions.",
  },
  {
    iconSrc: studiesIcon,
    title: "Hands-on Case Studies",
    description: "Hands-on case study practice in a real-competition setting.",
  },
  {
    iconSrc: relationIcon,
    title: "Interactive Q&A Sessions",
    description: "Interactive Q&A sessions to enhance your understanding and critical thinking abilities.",
  },
  {
    iconSrc: entryIcon,
    title: "Comprehensive Learning Materials",
    description: "Learning materials to support your learning journey beyond the class and ensure long-term success.",
  },
];

const Benefits: React.FC = () => {
  return (
    <section className="py-16 md:py-24 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 uppercase tracking-wider">
          What You&apos;ll Get
        </h2>
        
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center gap-8">
            {benefitsData.slice(0, 3).map((benefit, index) => (
              <div
                key={index}
                className="w-full sm:w-[363px] h-auto sm:h-[338px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 flex flex-col items-start text-left"
              >
                <img
                  src={benefit.iconSrc}
                  alt={`${benefit.title} icon`}
                  className="w-12 h-12 mb-6 object-contain"
                />
                <h3 className="text-xl font-bold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {benefitsData.slice(3, 5).map((benefit, index) => (
              <div
                key={index}
                className="w-full sm:w-[363px] h-auto sm:h-[338px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 flex flex-col items-start text-left"
              >
                <img
                  src={benefit.iconSrc}
                  alt={`${benefit.title} icon`}
                  className="w-12 h-12 mb-6 object-contain"
                />
                <h3 className="text-xl font-bold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;