"use client";

import { getGymFAQs } from "@/utils/services/apiGymFAQs";
import { useEffect, useState } from "react";

import { GymFAQ } from "@/utils/types/GymFAQ";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqTabs({ gymFAQs }: { gymFAQs: GymFAQ[] }) {
  const [accordionValue, setAccordionValue] = useState("0");

  const selectedCns = "bg-pr-black text-white";

  return (
    <>
      <Accordion
        type="single"
        collapsible
        defaultValue={accordionValue}
        onValueChange={(val) => setAccordionValue(val)}
      >
        {gymFAQs.map((item, idx) => {
          return (
            <AccordionItem
              key={idx}
              value={idx.toString()}
              className="mx-4 border"
            >
              <AccordionTrigger
                className={`px-6 hover:no-underline ${
                  idx.toString() === accordionValue ? selectedCns : ""
                }`}
              >
                <div className="trigger-wrapper text-left">
                  <span className="tracking-wide font-semibold">
                    {item.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="p-6 text-gray-700 leading-relaxed">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
}
