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

  const res = await fetch(route, { next: { revalidate: 10 } });

  const resData = await res.json().then((res) => res.data);

  const gymMissions: GymMission[] = resData.map((obj: any) => {
    return {
      id: obj.id,
      ...obj.attributes,
    };
  });

  return gymMissions;
}
