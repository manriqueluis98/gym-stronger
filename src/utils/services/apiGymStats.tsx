const ENDPOINT =
  "/api/gym-stats?fields[0]=name&fields[1]=stat&publicationState=live&locale[0]=en";

const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

export interface GymStatUI {
  name: string;
  stat: string;
}

export async function getGymStats() {
  const res = await fetch(API_URL + ENDPOINT, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    console.error("API ERROR Gym Stats");
    return [];
  }

  const rawData = await res.json().then((res) => res.data);

  const gymStats: GymStatUI[] = rawData.map((obj: any) => {
    return {
      ...obj.attributes,
    };
  });

  return gymStats;
}
