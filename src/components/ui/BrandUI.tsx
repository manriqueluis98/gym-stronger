"use client";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import useMeasure from "react-use-measure";

//UI Line which is under the section title (gray and yellow)
export function SectionUnderlineUi({
  variant = "left",
  className,
}: {
  variant?: "left" | "center" | "right";
  className?: string;
}) {
  const variantCn = {
    left: "",
    center: "left-[25%]",
    right: "right-0",
  };
  const defaultCn =
    "line-yellow h-[3px] w-[50%] bg-pr-primary absolute -top-[1px] -skew-x-[30deg] z-10";

  const yellowLineCn = cn(variantCn[variant], defaultCn);

  return (
    <div className={cn("section-underline relative w-[50%] my-4", className)}>
      <div className="line h-[1px] w-full bg-gray-300"></div>
      <div className={yellowLineCn}></div>
    </div>
  );
}

export function SectionTitleUi({
  title,
  description,
  isUnderline = true,
  position = "left",
  underlinePosition = "left",
  className,
}: {
  title: string;
  description: string;
  isUnderline?: boolean;
  position?: "left" | "center" | "right";
  underlinePosition?: "left" | "center" | "right";
  className?: string;
}) {
  return (
    <div
      className={cn(
        `section-title px-4 py-8 ${
          position === "center" ? "flex flex-col items-center" : ""
        }`,
        className
      )}
    >
      <h3 className="text-3xl uppercase font-extrabold tracking-wide md:text-4xl xl:text-4xl">
        {title}
      </h3>
      <p className="font-light py-2 md:max-w-[500px]">{description}</p>

      {isUnderline && <SectionUnderlineUi variant={underlinePosition} />}
    </div>
  );
}

export function GymProgressBarUI({
  skillName,
  percentage,
  className,
}: {
  skillName: string;
  percentage: number;
  className?: string;
}) {
  return (
    <div className="progress-bar relative mx-4">
      <div className="bar-title py-1">
        <p className="font-bold tracking-wider uppercase xl:text-lg">
          {skillName}
        </p>
      </div>
      <div className="bar-wrapper border rounded-sm w-full p-2">
        <div
          className={`bar-line h-[8px] xl:h-[10px] bg-pr-black w-[${percentage.toString()}%]`}
        ></div>
      </div>

      <div className="bar-percentage">
        <div className="bar-number">
          <p className="text-white font-roboto bg-pr-black py-1 px-2 w-fit absolute top-1 right-0 text-xs">
            {percentage}%
          </p>
        </div>
      </div>
    </div>
  );
}

export function GymButtonStroked({
  children,
  variant,
}: {
  children: string;
  variant?: "primary" | "dark";
}) {
  const [buttonRef, buttonBounds] = useMeasure();
  return (
    <div
      className="button-container relative group"
      style={{ width: buttonBounds.width, height: buttonBounds.height }}
    >
      <Button
        ref={buttonRef}
        variant={"primary"}
        className="font-semibold tracking-wider py-3 px-8 absolute z-20 whitespace-nowrap group-hover:bg-white border border-transparent transition-all duration-300"
      >
        {children}
      </Button>

      <div className="button-frame top-2 left-2 z-10 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300 absolute w-full h-full border border-white"></div>
    </div>
  );
}
