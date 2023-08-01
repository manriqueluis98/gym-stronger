import BenefitsSection from "@/components/sections/benefitsSection";
import GymFaqSection from "@/components/sections/faqSection";
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

      <div className="gym-features 2xl:grid 2xl:grid-cols-2 3xl:px-24 bg-white">
        <GymSkillsSection className="py-4 2xl:px-12 " />
        <GymFaqSection className="py-4 2xl:px-12 " />
      </div>
    </main>
  );
}
