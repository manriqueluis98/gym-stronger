import { cn } from "@/lib/utils";
import React from "react";
import GymClientsSection from "./gymClientsSection";
import {
  GymClientTestimonial,
  getTestimonials,
} from "@/utils/services/apiGymClientsTestimonials";

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

export default async function FetcherGymClientsSection({
  className,
  ...props
}: Props) {
  const testimonials: GymClientTestimonial[] = await getTestimonials();
  console.log("🚀 ~ testimonials:", testimonials);

  return <GymClientsSection testimonials={testimonials}></GymClientsSection>;
}
