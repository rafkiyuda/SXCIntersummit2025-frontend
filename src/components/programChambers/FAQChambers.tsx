import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
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
                        Is the event free of charge?
                    </AccordionTrigger>
                    <AccordionContent className="text-black">
                        <p>
                            Yes, Chambers is a completely free event. There is no registration or participation fee required.
                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    value="item-2"
                    className="border border-white/20 rounded-xl px-4 text-lg bg-white text-black"
                >
                    <AccordionTrigger className="cursor-pointer text-left hover:no-underline">
                        How are participants grouped for the mini case study session?
                    </AccordionTrigger>
                    <AccordionContent className="text-black">
                        <p>
                            Participants will be divided into teams: 5 teams of 9 people and 3 teams of 10 people. Team formation will be handled by our committee.                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    value="item-3"
                    className="border border-white/20 rounded-xl px-4 text-lg bg-white text-black"
                >
                    <AccordionTrigger className="cursor-pointer text-left hover:no-underline">
                        What if I don’t have a LinkedIn profile or CV? Can I still join?
                    </AccordionTrigger>
                    <AccordionContent className="text-black">
                        <p>
                            Absolutely! Submitting a LinkedIn profile and CV is optional. You can still participate in all event sessions without them.
                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    value="item-4"
                    className="border border-white/20 rounded-xl px-4 text-lg bg-white text-black"
                >
                    <AccordionTrigger className="cursor-pointer text-left hover:no-underline">
                        Where will the event take place?
                    </AccordionTrigger>
                    <AccordionContent className="text-black">
                        <p>
                            The event will be held offline around Jakarta and Depok area. The exact venue will be announced later.                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    value="item-5"
                    className="border border-white/20 rounded-xl px-4 text-lg bg-white text-black"
                >
                    <AccordionTrigger className="cursor-pointer text-left hover:no-underline">
                        How will I receive updates or reminders about the event?
                    </AccordionTrigger>
                    <AccordionContent className="text-black">
                        <p>
                            All important information, updates, and reminders will be sent via WhatsApp groups that you have to join after submitting the registration form.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
  );
};

export default FAQ;