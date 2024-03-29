import { getApiRouteFromStrapi } from "../apiRouteParser";
import { GymClassCategory } from "../types/GymClassCategory";

const COLLECTION_ENDPOINT = "/api/gym-class-categories?";
const attributesRequired = [
  "categoryName",
  "categoryDescription",
  "isEnabled",
  "id",
];
const nestedAttributesRequired = [
  {
    collectionName: "categoryIcon",
    attributes: ["url"],
  },
];

export async function getGymClasses() {
  const route = getApiRouteFromStrapi(
    attributesRequired,
    nestedAttributesRequired,
    process.env.API_URL + COLLECTION_ENDPOINT
  );

  const res = await fetch(route, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    next: { revalidate: 1 },
  });

  if (!res.ok) {
    console.error("Fetching data had an error with API fetch");
    return [];
  }

  const resData = await res.json().then((res) => res.data);

  const gymClasses: GymClassCategory[] = resData.map((obj: any) => {
    return {
      id: obj.id,
      ...obj.attributes,
      categoryImageUrl: obj.attributes.categoryIcon.data.attributes.url,
    };
  });

  return gymClasses;
}
