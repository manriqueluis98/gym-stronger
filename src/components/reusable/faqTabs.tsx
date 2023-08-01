"use client";

import { getGymFAQs } from "@/utils/services/apiGymFAQs";
import { useEffect, useState } from "react";

import { GymFAQ } from "@/utils/types/GymFAQ";

export default function FaqTabs() {
  const [gymFAQs, setGymFAQs] = useState<GymFAQ[]>([]);

  useEffect(() => {
    async function fetchData() {
      const FAQs = await getGymFAQs();
      setGymFAQs(FAQs);
    }

    fetchData();
  }, []);

  return (
    <>
      {gymFAQs.map((item, idx) => {
        return (
          <h1 key={idx} className="text-pr-black">
            {item.question}
          </h1>
        );
      })}
    </>
  );
}
