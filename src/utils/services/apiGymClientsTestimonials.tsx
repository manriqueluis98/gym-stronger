const ENDPOINT =
  "/api/gym-clients-testimonials?filters[isEnabled][$eq]=true&populate[photo][fields][0]=url&fields[0]=name&fields[1]=feature&fields[2]=testimonial&publicationState=live&locale[0]=en";

const API_URL = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL;

export interface GymClientTestimonial {
  name: string;
  testimonial: string;
  id: number;
  feature: string;
  photoUrl: string;
}

export async function getTestimonials() {
  const res = await fetch(API_URL + ENDPOINT, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    console.error("API ERROR fetching client testimonials");
    return [];
  }

  const rawData = await res.json().then((res) => res.data);

  const testimonials: GymClientTestimonial[] = rawData.map((obj: any) => {
    return {
      ...obj.attributes,
      id: obj.id,
      photoUrl: obj.attributes.photo.data.attributes.url,
    };
  });

  return testimonials;
}
