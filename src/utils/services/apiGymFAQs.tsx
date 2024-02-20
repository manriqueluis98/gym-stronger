const END_POINT =
  "/api/gym-faqs?filters[isEnabled][$eq]=true&fields[0]=question&fields[1]=answer&publicationState=live&locale[0]=en";

const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

export async function getGymFAQs() {
  const res = await fetch(API_URL + END_POINT, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    console.error("The gym FAQs api fetch failed");
  }

  const rawData = await res.json().then((res) => res.data);

  const gymFAQs = rawData.map((obj: any) => {
    return {
      id: obj.id,
      question: obj.attributes.question,
      answer: obj.attributes.answer,
    };
  });
  console.log("🚀 ~ file: apiGymFAQs.tsx:22 ~ gymFAQs ~ gymFAQs:", gymFAQs);

  return gymFAQs;
}
