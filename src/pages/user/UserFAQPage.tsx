import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const placeHolderQNA = [
  {
    question: "Will I get mentoring on any particular stage?",
    answer:
      "Yes, teams that reach the final stage will receive a tailored mentoring from expoerts to aid their preparation for crack-the-case competition.",
  },
  {
    question: "Do I have to use English for the competition?",
    answer:
      "Yes, participants are highly encouraged to use English for all stages of the competition.",
  },
  {
    question: "Can you elaborate about crack-the-case format?",
    answer:
      "Participants will be given 24 hours from the initial case release to solve and make a pitch deck based on their solutions. After the period ends, participants will come to the final venue to present their ideas.",
  },
  {
    question: "If I still have questions, who should I contact?",
    answer:
      "You can contact +6285771730530 (Suhailah Salma) or +6281808084043 ( Kirana Intan) via Whatsapp.",
  },
];

const UserFAQPage = () => {
  return (
    <div className="flex-1 mx-auto md:px-20 py-6 mt-5">
      {" "}
      {/* FAQ */}
      <div className="text-left mb-2 flex justify-between items-center ">
        <h2 className="text-white text-[25px] font-bold max-md:text-center">
          Frequently Asked Questions
        </h2>{" "}
      </div>
      <div className="  px-4 py-6 bg-[#8257A9] rounded-3xl">
        <Accordion
          type="single"
          collapsible
          className="w-full max-md:px-5 z-20   flex-col  flex "
          defaultValue="item-1"
        >
          {placeHolderQNA.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 2}`}
              className="rounded-xl px-4 text-xl mt-3 bg-white text-[#330084]"
            >
              <AccordionTrigger className="text-2xl cursor-pointer ">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default UserFAQPage;
