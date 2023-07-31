"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

import { Variants, motion } from "framer-motion";

const sectionData = {
  title: "WE PROVIDE YOU WITH BEST SERVICE OF HEALTHY",
  description:
    "We want to help you live a fit and healthy lifestyle! We do this by helping you find the most suitable equipment for your home gym, studio or commercial gym, keeping your budget, lifestyle and fitness goals in mind. We stock a wide range of gym equipment, with strength equipment, cardio, cross training and so much more. We believe that no investment is more valuable than one’s own. When investing properly in exercise, the benefits that customers get are not only aesthetic.",
  buttonText: "View All Classes",
};

const missionTabs = [
  {
    title: "Our Mission",
    description:
      "Training knowledge and nutrition are the foundation of a successful training process. Swequity Coach team is trained according to international standard program, rich in knowledge.",
  },
  {
    title: "Our Vision",
    description:
      "Training knowledge and nutrition are the foundation of a successful training process. Swequity Coach team is trained according to international standard program, rich in knowledge.",
  },
];

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
  return (
    <motion.div
      animate={false}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.5 }}
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
          className="bg-black text-white tracking-wide md:tracking-widest py-3 px-8 group-hover:bg-white group-hover:text-pr-black group-hover:border-pr-black group-hover:border transition-all duration-300"
          variant={"primary"}
        >
          {sectionData.buttonText}
        </Button>
        <ButtonFrame className="border-pr-black"></ButtonFrame>
      </motion.div>
    </motion.div>
  );
}
