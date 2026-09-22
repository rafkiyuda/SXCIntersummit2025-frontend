import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQIBCC = () => {
  return (
    <div className="w-full py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
            <div className="flex flex-col items-start w-full mb-12">
                <img
                    src="/images/programpage/bmc/FAQ.svg"
                    className="h-12 md:h-16 object-contain"
                    alt="Frequently Asked Questions Title"
                />
            </div>

            <Accordion
                type="single"
                collapsible
                defaultValue="item-1"
                className="w-full space-y-4"
            >
                <AccordionItem
                    value="item-1"
                    className="border border-white/20 rounded-xl px-4 text-lg bg-white text-black"
                >
                    <AccordionTrigger className="cursor-pointer text-left hover:no-underline">
                        Will I get mentoring on any particular stage?
                    </AccordionTrigger>
                    <AccordionContent className="text-black">
                        <p>
                            Yes, teams that reach the final stage will receive a tailored mentoring from expoerts to aid their preparation for crack-the-case competition.
                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    value="item-2"
                    className="border border-white/20 rounded-xl px-4 text-lg bg-white text-black"
                >
                    <AccordionTrigger className="cursor-pointer text-left hover:no-underline">
                        Do I have to use English for the competition?
                    </AccordionTrigger>
                    <AccordionContent className="text-black">
                        <p>
                            Yes, participants are highly encouraged to use English for all stages of the competition.
                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    value="item-3"
                    className="border border-white/20 rounded-xl px-4 text-lg bg-white text-black"
                >
                    <AccordionTrigger className="cursor-pointer text-left hover:no-underline">
                        Can you elaborate about crack-the-case format
                    </AccordionTrigger>
                    <AccordionContent className="text-black">
                        <p>Participants will be given 24 hours from the initial case release to solve and make a pitch deck based on their solutions. After the period ends, participants will come to the final venue to present their ideas.</p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    value="item-4"
                    className="border border-white/20 rounded-xl px-4 text-lg bg-white text-black"
                >
                    <AccordionTrigger className="cursor-pointer text-left hover:no-underline">
                        If I still have questions, who should I contact?
                    </AccordionTrigger>
                    <AccordionContent className="text-black">
                        <p>
                            You can contact +6285771730530 (Suhailah Salma) or +6281808084043 ( Kirana Intan) via Whatsapp.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
  );
};

export default FAQIBCC;