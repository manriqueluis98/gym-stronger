import { getApiRouteFromStrapi } from "../apiRouteParser";
import { GymBenefit } from "../types/GymBenefits";

const COLLECTION_ENDPOINT = "/api/gym-benefits?";
const attributesRequired = ["title", "description", "id", "isEnabled"];
const nestedAttributesRequired = [
  {
    collectionName: "icon",
    attributes: ["url"],
  },
];

const API_URL = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL;

export async function getGymBenefits() {
  const route = getApiRouteFromStrapi(
    attributesRequired,
    nestedAttributesRequired,
    API_URL + COLLECTION_ENDPOINT
  );

  const res = await fetch(route, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    next: { revalidate: 10 },
  });

  const resData = await res.json().then((res) => res.data);

  const gymBenefits: GymBenefit[] = resData.map((obj: any) => {
    return {
      id: obj.id,
      ...obj.attributes,
      iconUrl: obj.attributes.icon.data.attributes.url,
    };
  });

  return gymBenefits;
}
