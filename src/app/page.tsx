import BenefitsSection from "@/components/sections/benefitsSection";
import GymSkillsSection from "@/components/sections/gymSkillsSection";
import GymClasses from "@/components/sections/gymclasses";
import Hero from "@/components/sections/hero";
import MissionSection from "@/components/sections/missionSection";

export default function Home() {
  return (
    <main className="">
      <Hero></Hero>
      <GymClasses />
      <MissionSection />
      <BenefitsSection />
      <GymSkillsSection />
    </main>
  );
}
