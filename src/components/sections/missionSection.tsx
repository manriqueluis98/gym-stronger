"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

import { Variants, motion } from "framer-motion";
import MissionTabs from "../reusable/missionTabs";
import { getGymMissions } from "@/utils/services/apiGymMissions";
import { useEffect, useState } from "react";
import { GymMission } from "@/utils/types/GymMission";

import { FaPlay } from "react-icons/fa";

const sectionData = {
  title: "WE PROVIDE YOU WITH BEST SERVICE OF HEALTHY",
  description:
    "We want to help you live a fit and healthy lifestyle! We do this by helping you find the most suitable equipment for your home gym, studio or commercial gym, keeping your budget, lifestyle and fitness goals in mind. We stock a wide range of gym equipment, with strength equipment, cardio, cross training and so much more. We believe that no investment is more valuable than one’s own. When investing properly in exercise, the benefits that customers get are not only aesthetic.",
  buttonText: "View All Classes",
};

interface ButtonFrameProps {
  className?: string;
}

function ButtonFrame({ className, ...props }: ButtonFrameProps) {
  const defaultVariant =
    "button-framer w-full group-hover:-translate-x-1 group-hover:-translate-y-1 transition duration-300 h-full top-2 left-2 absolute border-black  border-[1px]";
  return <div className={cn(defaultVariant, className)}></div>;
}

const itemVariants: Variants = {
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  offscreen: {
    opacity: 0,
    x: -200,
  },
};

export default function MissionSection() {
  const [missions, setMissions] = useState<GymMission[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data: GymMission[] = await getGymMissions();

      setMissions(data);
    }

    fetchData();
  }, []);

  return (
    <div
      id="section-mission"
      className="bg-white 2xl:px-24 3xl:px-64 2xl:grid 2xl:grid-cols-2 xl:place-items-center "
    >
      <div className="mission-slogan">
        <motion.div
          animate={false}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          className="text-black bg-white px-4 py-12 md:py-24"
        >
          <motion.h3
            variants={itemVariants}
            className="font-extrabold text-3xl md:text-4xl tracking-wide my-6 md:max-w-[500px]"
          >
            {sectionData.title}
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-gray-950/70 md:leading-relaxed"
          >
            {sectionData.description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="group button-container relative w-fit mt-10"
          >
            <Button
              className="bg-black text-white tracking-wide md:tracking-widest py-3 px-8 group-hover:bg-white group-hover:text-pr-black group-hover:border-pr-black border transition-all duration-300"
              variant={"primary"}
            >
              {sectionData.buttonText}
            </Button>
            <ButtonFrame className="border-pr-black"></ButtonFrame>
          </motion.div>
        </motion.div>
      </div>

      <div className="mission-tabs bg-white">
        <MissionTabs missions={missions} />
      </div>

      <div className="mission-media 2xl:justify-between 2xl:w-full md:flex md:flex-row xl:col-span-2 flex flex-col justify-center items-center gap-8 px-4 py-8 2xl:my-0">
        <div className="media-1 ">
          <img
            src="https://res.cloudinary.com/dhfpqbwa5/image/upload/v1690825072/about_1_f34bba6cb0.avif"
            width={"600px"}
            alt="A girl lifting weight"
            className="h-[250px] xl:h-[400px] object-cover"
          ></img>
        </div>
        <div className="media-2 relative">
          <img
            src="https://res.cloudinary.com/dhfpqbwa5/image/upload/v1690825099/about2_9ad6f7d29a.avif"
            alt="gym video of a man exercising"
            width={"600px"}
            className="md:h-[250px] xl:h-[400px] aspect-video md:aspect-auto object-cover"
          ></img>

          <div className="media-controls absolute w-full h-full top-0 bg-gradient-to-t from-pr-black/40 to-transparent ">
            <div className="media-positioner w-full h-full flex justify-center items-center">
              <div className="icon-wrapper  bg-white w-fit text-pr-black p-6 rounded-full ">
                <FaPlay />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
