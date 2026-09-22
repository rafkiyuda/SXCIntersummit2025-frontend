export const InfoCardSection = () => {
  const cardData = [
    {
      id: 1,
      backgroundImage: "/images/vector-1.svg",
      ellipseImage: "/images/ellipse-9.svg",
      logo: "/images/logo-sxc-putih-2-2.png",
      logoAlt: "Logo sxc putih",
      title: "StudentxCEOs Jakarta",
      description:
        "Founded in 2010, StudentsxCEOs Jakarta is a youth-led, student-run platform that accelerates leadership development for future business leaders in Indonesia. With four major chapters, over 150 core members, more than 1,000 top students from 30+ universities, and 100+ corporate partners, we bridge student leaders with industry through internships, CEO meetings, summits, and collaboration programs. We cultivate real-world leadership experience by simulating corporate structures and responsibilities within our internal operations.",
    },
    {
      id: 2,
      backgroundImage: "/images/vector-1.svg",
      ellipseImage: "/images/ellipse-9.svg",
      logo: "/images/logo-intersummit-5.png",
      logoAlt: "Logo intersummit",
      title: "SxC International Summit 2025",
      description:
        'StudentsxCEOs International Summit is a grand event organized by StudentsxCEOs Jakarta with the grand theme "Bridge the Future: Leveraging Technology to Accelerate Business Innovation and Growth". Its objective is to act as a catalyst for students worldwide, helping them prepare for the workforce, and differentiate themselves from their peers. The summit aspires to equip participants with essential skills for excelling in the professional realm by hosting impactful events and featuring insightful speakers.',
    },
  ];

  return (
    <section className="relative w-full px-4 py-10 md:px-4 md:py-20">
      <h1
        className="text-2xl md:text-6xl font-extrabold mb-2 flex justify-center bg-gradient-to-r from-[#7B5CB6] via-[#7BC6E2] to-[#B6E2A1] bg-clip-text text-transparent drop-shadow-lg"
        style={{
          WebkitTextStroke: "1px white",
          textShadow: "0 4px 16px rgba(0,0,0,0.15)",
        }}
      >
        Part of StudentsxCEOs Jakarta
      </h1>
      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 md:p-20">
        {cardData.map((card) => (
          <article
            key={card.id}
            className="relative w-full h-auto min-h-[400px] md:min-h-[500px] lg:h-[550px] bg-[#160F22] rounded-[20px] overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:z-20"
          >
            {/* Background Images */}
            <div
              className="w-full h-full absolute top-0 left-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${card.backgroundImage})` }}
            ></div>
            <div
              className="w-full h-full absolute top-0 left-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${card.ellipseImage})` }}
            ></div>

            {/* Logo */}
            <div className="absolute top-[20px] md:top-[30px] lg:top-[40px] left-0 right-0 flex justify-center z-10">
              <img
                className="w-[80px] md:w-[147px] lg:w-[209px] h-auto max-h-[50px] md:max-h-[100px] object-contain"
                alt={card.logoAlt}
                src={card.logo}
              />
            </div>

            {/* Content area */}
            <div className="absolute top-[80px] md:top-[140px] lg:top-[160px] left-0 right-0 bottom-4 p-3 md:p-6 lg:p-8 z-10 overflow-y-auto custom-scrollbar">
              <h3 className="font-bold text-white text-[16px] md:text-[24px] lg:text-[26px] mb-2 md:mb-4 text-center">
                {card.title}
              </h3>
              <p className="font-[Plus_Jakarta_Sans] text-white text-xs md:text-md lg:text-base text-justify leading-relaxed">
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
