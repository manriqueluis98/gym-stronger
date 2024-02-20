import { cn } from "@/lib/utils";
import FaqTabs from "../reusable/faqTabs";
import { SectionTitleUi } from "../ui/BrandUI";
import { getGymFAQs } from "@/utils/services/apiGymFAQs";

export default async function GymFaqSection({
  className,
}: {
  className?: string;
}) {
  const title = "FAQS";
  const description =
    "Goldstone Gym & Fitness is one of the biggest gyms in Ireland, offering state of the art equipment and facilities";

  const faqs = await getGymFAQs();
  return (
    <section id="section-faq" className={cn("bg-white", className)}>
      <SectionTitleUi title={title} description={description}></SectionTitleUi>
      <FaqTabs gymFAQs={faqs} />
    </section>
  );
}
