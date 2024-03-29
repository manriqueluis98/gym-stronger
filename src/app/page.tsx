import FetcherGymClientsSection from "@/components/sections/FetcherGymClientsSection";
import FetcherGymCoachesSection from "@/components/sections/FetcherGymCoachesSection";
import FetcherGymMissionsSection from "@/components/sections/FetcherGymMissionsSection";
import BenefitsSection from "@/components/sections/benefitsSection";
import GymFaqSection from "@/components/sections/faqSection";
import GymStrongBannerSection from "@/components/sections/gymBannerStrong";
import GymChooseUsSection from "@/components/sections/gymChooseUsSection";
import GymClientsSection from "@/components/sections/gymClientsSection";
import GymCoachesSection from "@/components/sections/gymCoachesSection";
import GymSkillsSection from "@/components/sections/gymSkillsSection";
import GymClasses from "@/components/sections/gymclasses";
import Hero from "@/components/sections/hero";
import MissionSection from "@/components/sections/missionSection";

export default function Home() {
  return (
    <main className="">
      <Hero></Hero>
      <div className="bg-wrapper bg-pr-black">
        <GymClasses />
      </div>
      <FetcherGymMissionsSection></FetcherGymMissionsSection>
      <BenefitsSection />

      <div className="gym-features 2xl:grid 2xl:grid-cols-2 3xl:px-24 bg-white">
        <GymSkillsSection className="py-4 2xl:px-12 " />
        <GymFaqSection className="py-4 2xl:px-12 " />
      </div>

      <GymChooseUsSection />

      <FetcherGymClientsSection />

      <FetcherGymCoachesSection />

      <GymStrongBannerSection />
    </main>
  );
}
