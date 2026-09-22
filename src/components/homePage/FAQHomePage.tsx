import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const landingFAQ = [
  {
    q: "What is StudentsxCEOs Inter Summit 2025?",
    a: "StudentsxCEOs Inter Summit 2025 is a national conference that brings together top university students, young leaders, and professionals to explore key issues, develop leadership skills, and connect with industry through various impactful programs.",
  },
  {
    q: "Who can participate in SxC Inter Summit 2025?",
    a: "The summit is open to any high school or undergraduate students from any major and university across Indonesia who are passionate about leadership, business, and personal development.",
  },
  {
    q: "Is there a fee to participate?",
    a: "Participation fees and benefits will be announced soon on our official website and social media. ",
  },
  {
    q: "What activities are included in the summit?",
    a: "The event includes keynote speeches, panel discussions, networking sessions, business case competitions, and many more!",
  },
  {
    q: "When and where will the summit take place?",
    a: "StudentsxCEOs Inter Summit 2025 will be held in a hybrid format. The exact date and venue will be announced soon! Stay tuned via our website and social media!",
  },
  {
    q: "How can I register as a participant?",
    a: "Registration will be open via this website. Application details, deadlines, and requirements will be available in the registration section once it goes live.",
  },
  {
    q: "Can I join as a volunteer or organizing team?",
    a: "We’ve closed the committee registration for now, but there will be much more opportunities ahead!",
  },
  {
    q: "I’m a brand or media outlet — how can I collaborate?",
    a: "We’re still open for sponsorship and media partnership! Feel free to contact our designated representatives via WhatsApp which you can find at the About Page.",
  },
];

const FAQHomePage = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-10 mb-20 w-full max-w-[1000px] flex-1 mx-auto px-4 md:px-20 py-6">
      <h2
            className="text-2xl italic md:text-3xl font-extrabold mb-1 pt-3 flex bg-gradient-to-r from-[#60a5af] via-[#694a90] to-[#b295e6] bg-clip-text text-transparent text-center drop-shadow-lg"
            style={{
              WebkitTextStroke: "0.5px white",
              textShadow: "0 4px 16px rgba(0,0,0,0.15)",
            }}
          >
            Frequently Asked Questions
          </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full max-md:px-0 z-20 mt-6 flex-col flex"
        defaultValue="item-1"
      >
        <AccordionItem
          value="item-1"
          className="rounded-xl px-2 md:px-4 text-base md:text-xl mt-3 bg-white text-[#330084] max-md:text-lg max-md:mb-4"
        >
          <AccordionTrigger className="cursor-pointer flex items-center text-base md:text-xl max-md:text-sm">
            What is StudentsxCEOs Inter Summit 2025?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-xs md:text-base max-md:text-sm">
            <p>
              StudentsxCEOs Inter Summit 2025 is a national conference that
              brings together top university students, young leaders, and
              professionals to explore key issues, develop leadership skills,
              and connect with industry through various impactful programs.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="rounded-xl px-2 md:px-4 text-base md:text-xl mt-3 bg-white text-[#330084] max-md:text-lg max-md:mb-4"
        >
          <AccordionTrigger className="cursor-pointer flex items-center text-base md:text-xl max-md:text-sm">
            Who can participate in SxC Inter Summit 2025?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-xs md:text-base max-md:text-sm">
            <p>
              The summit is open to any high school or undergraduate students
              from any major and university across Indonesia who are passionate
              about leadership, business, and personal development.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="rounded-xl px-2 md:px-4 text-base md:text-xl mt-3 bg-white text-[#330084] max-md:text-lg max-md:mb-4"
        >
          <AccordionTrigger className="cursor-pointer flex items-center text-base md:text-xl max-md:text-sm">
            What activities are included in the summit?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-xs md:text-base max-md:text-sm">
            <p>
              The event includes keynote speeches, panel discussions, networking
              sessions, business case competitions, and many more!
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="rounded-xl px-2 md:px-4 text-base md:text-xl mt-3 bg-white text-[#330084] max-md:text-lg max-md:mb-4"
        >
          <AccordionTrigger className="cursor-pointer flex items-center text-base md:text-xl max-md:text-sm">
            How can I register as a participant?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-xs md:text-base max-md:text-sm">
            <p>
              Registration will be open via this website. Application details,
              deadlines, and requirements will be available in the registration
              section once it goes live.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-5"
          className="rounded-xl px-2 md:px-4 text-base md:text-xl mt-3 bg-white text-[#330084] max-md:text-lg max-md:mb-4"
        >
          <AccordionTrigger className="cursor-pointer flex items-center text-base md:text-xl max-md:text-sm">
            I’m a brand or media outlet — how can I collaborate?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-xs md:text-base max-md:text-sm">
            <p>
              We’re still open for sponsorship and media partnership! Feel free
              to contact our designated representatives via WhatsApp which you
              can find at the About Page.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQHomePage;
