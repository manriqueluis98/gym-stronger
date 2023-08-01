import FaqTabs from "../reusable/faqTabs";
import { SectionTitleUi } from "../ui/BrandUI";

export default function GymSkillsSection() {
  const title = "Our Skill";
  const description =
    "Diet when exercising for weight loss, scientific for women If you choose to exercise to lose weight, you need to pay special";
  return (
    <div id="section-skills" className="bg-white">
      <SectionTitleUi title={title} description={description} position="left" />

      <FaqTabs />
    </div>
  );
}
