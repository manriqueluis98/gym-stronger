const ENDPOINT =
  "/api/gym-service-reasons?filters[isEnabled][$eq]=true&populate[icon][fields][0]=url&fields[0]=title&fields[1]=description&publicationState=live&locale[0]=en";

const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

export interface ReasonUI {
  iconUrl: string;
  title: string;
  description: string;
}

export async function getGymChooseReasons() {
  const res = await fetch(API_URL + ENDPOINT, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    next: { revalidate: 10 },
  });

  const rawData = await res.json().then((res) => res.data);

  if (!res.ok) {
    console.error("API error from Gym Services Choose");
    return [];
  }

  console.log("🚀 ~ getGymChooseReasons ~ rawData:", rawData);

  const reasons: ReasonUI[] = rawData.map((obj: any) => {
    return {
      ...obj.attributes,
      iconUrl: obj.attributes.icon.data.attributes.url,
    };
  });

  return reasons;
}
