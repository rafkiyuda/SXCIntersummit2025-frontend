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
                        What is Business Model Canvas?
                    </AccordionTrigger>
                    <AccordionContent className="text-black">
                        <p>
                            Business Model Canvas is a strategic tool used to visualize,
                            design, and analyze how a business creates, delivers, and captures
                            value. It consists of nine key components that outline the core
                            aspects of a business model.
                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    value="item-2"
                    className="border border-white/20 rounded-xl px-4 text-lg bg-white text-black"
                >
                    <AccordionTrigger className="cursor-pointer text-left hover:no-underline">
                        Can university students join this competition?
                    </AccordionTrigger>
                    <AccordionContent className="text-black">
                        <p>
                            No, the BMC competition is only open to high school students.
                            (SMA/SMK/Sederajat)
                        </p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem
                    value="item-3"
                    className="border border-white/20 rounded-xl px-4 text-lg bg-white text-black"
                >
                    <AccordionTrigger className="cursor-pointer text-left hover:no-underline">
                        Will the competition be held fully online?
                    </AccordionTrigger>
                    <AccordionContent className="text-black">
                        <p>Yes! The BMC competition will be conducted 100% online.</p>
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
                            You can contact 087845099825 (Annisa Fauziyah) via Whatsapp.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
  );
};

export default FAQBMC;