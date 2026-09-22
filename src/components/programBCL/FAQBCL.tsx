import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQBMC = () => {
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
                        Do I need prior experience in business competitions?
                    </AccordionTrigger>
                    <AccordionContent className="text-black">
                        <p>
                            This even is beginner-friendly and designed to help you gain your first exposure to business competitions.
                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    value="item-2"
                    className="border border-white/20 rounded-xl px-4 text-lg bg-white text-black"
                >
                    <AccordionTrigger className="cursor-pointer text-left hover:no-underline">
                        Who is eligible to participate?
                    </AccordionTrigger>
                    <AccordionContent className="text-black">
                        <p>
                            All high school and undergraduate students across any major or academic background are welcome to join.
                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    value="item-3"
                    className="border border-white/20 rounded-xl px-4 text-lg bg-white text-black"
                >
                    <AccordionTrigger className="cursor-pointer text-left hover:no-underline">
                        Will I have to present my ideas during the practical session?
                    </AccordionTrigger>
                    <AccordionContent className="text-black">
                        <p>Presentation is voluntary. Selected participants who wish to receive live feedback may present their work during the practical session.</p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    value="item-4"
                    className="border border-white/20 rounded-xl px-4 text-lg bg-white text-black"
                >
                    <AccordionTrigger className="cursor-pointer text-left hover:no-underline">
                        Is there any registration fee?
                    </AccordionTrigger>
                    <AccordionContent className="text-black">
                        <p>
                            No, the event is completely free for all registered participats.
                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    value="item-5"
                    className="border border-white/20 rounded-xl px-4 text-lg bg-white text-black"
                >
                    <AccordionTrigger className="cursor-pointer text-left hover:no-underline">
                        Will all participants get a certificate?
                    </AccordionTrigger>
                    <AccordionContent className="text-black">
                        <p>
                            Participants will receive an official certificate if they join the entire session and submit the required case study, either a business analysis or a business idea. The certificate is only given to those who complete both. Don't worry, the case study won't be as difficult as those in business competitions. It's designed to be manageable while still reflecting real business situations. You can also submit your work up to two days after the event (D+2).
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
  );
};

export default FAQBMC;