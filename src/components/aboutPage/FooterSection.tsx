import React from "react";

export const FooterSection = () => {
  const usefulLinks = [
    { name: "Business Competition Launchpad (BCL)", href: "../program/bcl" },
    { name: "Chambers", href: "../program/placeholder" },
    { name: "Company Visit", href: "../program/placeholder" },
    { name: "International Conference", href: "../program/placeholder" },
  ];

  const helpLinks = [
    { name: "Business Model Canvas (BMC)", href: "../program/bmc" },
    {
      name: "International Business Case Competition (IBCC)",
      href: "../program/ibcc",
    },
    {
      name: "International Business Plan Competition (IBPC)",
      href: "../program/ibpc",
    },
  ];

  const contactInfo = [
    { label: "Lorem", value: "Lorem" },
    { label: "Phone", value: "+62" },
    { label: "Email", value: "lorem@mail.com" },
  ];

  if (["/login", "/register"].includes(location.pathname)) {
    return null;
  }

  return (
    <div>
      <div
        className="relative min-h-[50vh] backdrop-blur-4xl px-8 md:px-10 py-2 md:py-8 max-w-full border-t-2 border-white"
        style={{
          background:
            "linear-gradient(to top, #A8CA85 10%, #A6CEE7 38%, #8563AF 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto mt-10 relative z-20">
          {/* Top Section with Logos and Info */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between items-start">
            <div className="flex flex-col gap-6 w-full lg:w-1/3">
              <img
                className="w-[203px] h-[97px] object-contain"
                alt="Intersummit logo"
                src="/images/logo-intersummit-3.png"
              />
              <p className="text-white text-base leading-6">
                StudentxCEOs Intersummit brings students together worldwide to
                learn, collaborate, and get inspired
              </p>

              {/* Social Media Icons */}
              <div className="flex gap-6 mt-4 z-10">
                <a
                  href="https://www.instagram.com/sxcintersummit/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-8 h-8 cursor-pointer object-contain"
                    alt="Instagram"
                    src="/images/socialmedia/instagram.svg"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/studentsxceos-summit/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-8 h-8 cursor-pointer object-contain"
                    alt="LinkedIn"
                    src="/images/socialmedia/linkedin.svg"
                  />
                </a>
              </div>
            </div>

            {/* Useful Links */}
            <nav className=" flex-col gap-4 w-full lg:w-1/4 hidden md:flex">
              <h3 className="font-semibold white text-lg">Events</h3>
              {usefulLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white font-bold hover:text-purple-200 transition duration-200 cursor-pointer opacity-70"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Competition Section */}
            <nav className=" flex-col gap-4 w-full lg:w-1/4 hidden md:flex">
              <h3 className="font-semibold text-white text-lg">Competition</h3>

              {helpLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="self-stretch font-bold text-white hover:text-purple-200 transition-colors duration-200 cursor-pointer opacity-70"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Contact Info
            <div className="flex flex-col p-4 gap-4 w-full lg:w-1/4">
              <h3 className="text-semi-bold text-white text-lg">
                Contact Us
              </h3>
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="text-white/80 text-sm cursor-pointer opacity-70"
                >
                  {info.label}: {info.value}
                </div>
              ))}
            </div> */}
          </div>
        </div>
        <img
          src="/images/homepage/footerAssets.svg"
          className="absolute w-full bottom-0 left-0 object-cover z-10 pointer-events-none"
          alt=""
        />
      </div>
    </div>
  );
};
