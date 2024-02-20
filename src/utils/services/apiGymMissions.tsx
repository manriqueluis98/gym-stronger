import { getApiRouteFromStrapi } from "../apiRouteParser";
import { GymClassCategory } from "../types/GymClassCategory";
import { GymMission } from "../types/GymMission";

const COLLECTION_ENDPOINT = "/api/gym-missions?";
const attributesRequired = ["title", "description", "id", "isEnabled"];

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getGymMissions() {
  const route = getApiRouteFromStrapi(
    attributesRequired,
    [],
    API_URL + COLLECTION_ENDPOINT
  );

  const res = await fetch(route, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    next: { revalidate: 10 },
  });
  console.log("🚀 ~ getGymMissions ~ route:", route);

  const resData = await res.json().then((res) => res.data);
  console.log("🚀 ~ getGymMissions ~ resData:", resData);

  const gymMissions: GymMission[] = resData.map((obj: any) => {
    return {
      id: obj.id,
      ...obj.attributes,
    };
  });

  return gymMissions;
}
