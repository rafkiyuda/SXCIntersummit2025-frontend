// TestimonialsSection.jsx
import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mike Drake",
      title: "Executive Engineer",
      image: "/images/aboutpage/testimonials/mike.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      id: 2,
      name: "Ravi Arman",
      title: "Executive Engineer",
      image: "/images/aboutpage/testimonials/rick.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      id: 3,
      name: "Devon Miles",
      title: "Executive Engineer",
      image: "/images/aboutpage/testimonials/devon.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      id: 4,
      name: "Dev",
      title: "Executive Engineer",
      image: "/images/aboutpage/testimonials/devon.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      id: 5,
      name: "Devon Miliyuiyis",
      title: "Executive Engineer",
      image: "/images/aboutpage/testimonials/devon.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  };

  return (
    <section className="py-5 px-10 bg-gradient-purple min-h-screen flex items-center mb-5">
      <div className="container mx-auto max-w-6xl">
        <h2 className="flex justify-center items-center mb-10">
        <img
          src="/images/aboutpage/Testimonials.png"
          alt="Focus Icon"
          className="max-md:h-[7vh] w-auto object-contain"
        />
      </h2>
        <div className="px-4 md:px-0">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-2"> {/* Padding untuk spacing */}
                <div className="bg-glass-card backdrop-blur-sm bg-gray bg-transparent border border-glass-border rounded-3xl p-8 h-full flex flex-col">
                  {/* Profile Image */}
                  <div className="flex justify-center mb-6">
                    <div className="w-25 h-25 rounded-full overflow-hidden border-1 border-gray/30">
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name} profile`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-black text-sm leading-relaxed mb-8 text-justify flex-grow">
                    {testimonial.text}
                  </p>
                  
                  {/* Name and Title */}
                  <div className="text-center">
                    <h3 className="text-black font-bold text-lg mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-black/80 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;