import { cn } from "@/lib/utils";
import React from "react";
import MissionSection from "./missionSection";
import { getGymMissions } from "@/utils/services/apiGymMissions";

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

export default async function FetcherGymMissionsSection({
  className,
  ...props
}: Props) {
  const missions = await getGymMissions();
  return <MissionSection missions={missions}></MissionSection>;
}
