import { cn } from "@/lib/utils";
import React from "react";
import GymCoachesSection from "./gymCoachesSection";
import { getGymCoachesResume } from "@/utils/services/apiGymCoachesResume";

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

export default async function FetcherGymCoachesSection({
  className,
  ...props
}: Props) {
  const coachs = await getGymCoachesResume();
  return <GymCoachesSection coachs={coachs}></GymCoachesSection>;
}
