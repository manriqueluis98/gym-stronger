import { cn } from "@/lib/utils";
import FaqTabs from "../reusable/faqTabs";
import { GymProgressBarUI, SectionTitleUi } from "../ui/BrandUI";

function GymSkillsBars() {
  const skills = [
    {
      skillName: "HAPPY CUSTOMER",
      percentage: 90,
    },
    {
      skillName: "Service Quality",
      percentage: 85,
    },
    {
      skillName: "Quality of the Gym",
      percentage: 95,
    },
    {
      skillName: "Customer Motivation",
      percentage: 88,
    },
  ];
  return (
    <div className="bars-container space-y-4">
      {skills.map((item, idx) => {
        return (
          <GymProgressBarUI
            key={idx}
            percentage={item.percentage}
            skillName={item.skillName}
          />
        );
      })}
    </div>
  );
}

export default function GymSkillsSection({
  className,
}: {
  className?: string;
}) {
  const title = "Our Skill";
  const description =
    "Diet when exercising for weight loss, scientific for women If you choose to exercise to lose weight, you need to pay special";
  return (
    <section id="section-skills" className={cn("bg-white", className)}>
      <SectionTitleUi title={title} description={description} position="left" />
      <GymSkillsBars />
    </section>
  );
}
