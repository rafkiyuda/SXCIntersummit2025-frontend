import { Users, Target } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Participants = () => {
  // Organization logos data
  const organizationLogos = [
    { name: "Organization 1", src: "/images/aboutpage/logouniv/itb.png" },
    { name: "Organization 2", src: "/images/aboutpage/logouniv/ipb.png" },
    { name: "Organization 3", src: "/images/aboutpage/logouniv/upi.png" },
    { name: "Organization 4", src: "/images/aboutpage/logouniv/ui.png" },
    { name: "Organization 5", src: "/images/aboutpage/logouniv/ugm.png" },
    { name: "Organization 6", src: "/images/aboutpage/logouniv/itb.png" },
    { name: "Organization 7", src: "/images/aboutpage/logouniv/ipb.png" },
    { name: "Organization 8", src: "/images/aboutpage/logouniv/upi.png" },
    { name: "Organization 9", src: "/images/aboutpage/logouniv/ui.png" },
    { name: "Organization 10", src: "/images/aboutpage/logouniv/ugm.png" },
  ];

  // Carousel settings
  const logoSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className="min-h-screen p-2 md:p-12 flex flex-col items-center justify-center relative">
      <h2
        className="text-3xl italic md:text-4xl font-extrabold mb-2 pt-3 flex bg-gradient-to-r from-[#5cb0b6] via-[#694a90] to-[#b295e6] bg-clip-text text-transparent drop-shadow-lg"
        style={{
          WebkitTextStroke: "0.5px white",
          textShadow: "0 4px 16px rgba(0,0,0,0.15)",
        }}
      >
        Our Milestones
      </h2>

      {/* Main Container */}
      <div className="w-full mx-auto rounded-3xl relative md-10 z-10 p-5">
        <div className="rounded-3xl p-5 mb-10 shadow-2xl z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Future Leaders */}
            <div className="flex items-center gap-4 p-3 rounded-lg shadow-lg bg-[rgba(89,43,130,0.13)] border-[2.776px] border-solid border-[rgba(255,255,255,0.77)] backdrop-blur-[9.254px] transition-transform duration-300 hover:scale-105 hover:z-20">
              <div className=" rounded-full p-3">
                <img
                  src="/images/aboutpage/milestone/work.png" // Ganti dengan gambar yang sesuai
                  alt="Milestone Icon"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-bold">
                  <h2 className="flex justify-center items-center">
                    <img
                      src="/images/aboutpage/milestone/2000.png" // Ganti dengan gambar yang sesuai
                      alt="Focus Icon"
                      className="max-md:h-[5vh] w-auto object-contain"
                    />
                  </h2>
                </div>
                <div className="text-ms opacity-80">Future Leaders</div>
              </div>
            </div>

            {/* Lorem 1 */}
            <div className="flex items-center gap-4 p-3 rounded-lg shadow-lg bg-[rgba(89,43,130,0.13)] border-[2.776px] border-solid border-[rgba(255,255,255,0.77)] backdrop-blur-[9.254px] transition-transform duration-300 hover:scale-105 hover:z-20">
              <div className=" rounded-full p-3">
                <img
                  src="/images/aboutpage/milestone/work.png" // Ganti dengan gambar yang sesuai
                  alt="Milestone Icon"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-bold">
                  <img
                    src="/images/aboutpage/milestone/87_.png" // Ganti dengan gambar yang sesuai
                    alt="Focus Icon"
                    className="max-md:h-[4vh] w-auto object-contain"
                  />
                </div>
                <div className="text-ms opacity-80">University Students</div>
              </div>
            </div>

            {/* Lorem 2 */}
            <div className="flex items-center gap-4 p-3 rounded-lg shadow-lg bg-[rgba(89,43,130,0.13)] border-[2.776px] border-solid border-[rgba(255,255,255,0.77)] backdrop-blur-[9.254px] transition-transform duration-300 hover:scale-105 hover:z-20">
              <div className=" rounded-full p-3">
                <img
                  src="/images/aboutpage/milestone/work.png" // Ganti dengan gambar yang sesuai
                  alt="Milestone Icon"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-bold">
                  <img
                    src="/images/aboutpage/milestone/13_.png" // Ganti dengan gambar yang sesuai
                    alt="Focus Icon"
                    className="max-md:h-[4vh] w-auto object-contain"
                  />
                </div>
                <div className="text-ms opacity-80">High School Students</div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="flex justify-center items-center mt-10 mb-10">
          <img
            src="/images/aboutpage/Universitas.png"
            alt="Focus Icon"
            className="max-md:h-[4vh] w-auto object-contain"
          />
        </h2>
        {/* Organization Logos Carousel */}
        <div className="px-4">
          <Slider {...logoSliderSettings}>
            {organizationLogos.map((org, index) => (
              <div key={index} className="px-2">
                <div className="w-15 h-15 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-50 md:duration-300 mx-auto">
                  <img
                    src={org.src}
                    alt={org.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            ))}
          </Slider>
          <div>
            <p className="text-lg sm:text-xl md:text-2xl [Plus_Jakarta_Sans] text-center font-bold text-white mt-10 md-10">
              And Many More....
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Participants;
