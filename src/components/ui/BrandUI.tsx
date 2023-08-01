import { cn } from "@/lib/utils";

//UI Line which is under the section title (gray and yellow)
export function SectionUnderlineUi({
  variant = "left",
}: {
  variant?: "left" | "center" | "right";
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
    <div className="section-underline relative w-[50%] my-4">
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
      <h3 className="text-3xl uppercase font-extrabold tracking-wide">
        {title}
      </h3>
      <p className="text-gray-600  font-light py-2">{description}</p>

      {isUnderline && <SectionUnderlineUi variant={underlinePosition} />}
    </div>
  );
}
