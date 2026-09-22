import React from "react";
import Slider from "react-slick"; // Import Slider from react-slick
import "slick-carousel/slick/slick.css"; // Import slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick theme CSS
 {/*  npm install react-slick slick-carousel */}

export const AmbassadorsSection = () => {
  const ambassadorImages = [
    { id: 1, src: "/images/ellipse-232.png", alt: "Ambassador 1" },
    { id: 2, src: "/images/ellipse-232.png", alt: "Ambassador 2" },
    { id: 3, src: "/images/ellipse-232.png", alt: "Ambassador 3" },
    { id: 4, src: "/images/ellipse-232.png", alt: "Ambassador 4" },
    { id: 5, src: "/images/ellipse-232.png", alt: "Ambassador 5" },
    { id: 6, src: "/images/ellipse-232.png", alt: "Ambassador 6" },
    { id: 7, src: "/images/ellipse-232.png", alt: "Ambassador 7" },
    { id: 8, src: "/images/ellipse-232.png", alt: "Ambassador 8" },
    { id: 9, src: "/images/ellipse-232.png", alt: "Ambassador 9" },
  ];

  // Carousel settings
  const logoSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  };

  return (
    <div className="flex flex-col overflow-hidden items-center px-4 sm:px-8 md:px-16"> {/* Responsive padding */}
      <div className=" rounded-full p-3 mb-5">
           <img 
            src="/images/aboutpage/Ambassadors.png" // Ganti dengan gambar yang sesuai
            alt="Milestone Icon"
            className="max-md:h-[6vh] w-auto object-contain"
          />

              </div>

      {/* Carousel Wrapper */}
      <div className="w-full justify-center">
        <Slider {...logoSliderSettings}>
          {ambassadorImages.map((ambassador) => (
            <div key={ambassador.id} className="relative w-full flex justify-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"> {/* Adjusted sizes */}
                <img
                  className="w-full h-full object-cover rounded-full border-4 border-green-400"
                  alt={ambassador.alt}
                  src={ambassador.src}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
