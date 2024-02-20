const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

const ENDPOINT =
  "/api/gym-coaches?sort[0]=id:asc&populate[photo][fields][0]=url&fields[0]=name&fields[1]=position&fields[2]=socials&pagination[pageSize]=10&pagination[page]=1&publicationState=live&locale[0]=en";

export interface GymCoachResume {
  id: number;
  name: string;
  position: string;
  socials: { [key: string]: string };
  photoUrl: string;
}

export async function getGymCoachesResume() {
  const res = await fetch(API_URL + ENDPOINT, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    console.error("API FETCH failed in gym coaches resume");
    return [];
  }

  const rawData = await res.json().then((res) => res.data);

  const gymCoachesResumes: GymCoachResume[] = rawData.map((obj: any) => {
    return {
      ...obj.attributes,
      photoUrl: obj.attributes.photo.data.attributes.url,
      socials: obj.attributes.socials,
    };
  });

  return gymCoachesResumes;
}
