import {
  ReasonUI,
  getGymChooseReasons,
} from "@/utils/services/apiGymChooseServices";
import { SectionTitleUi, SectionUnderlineUi } from "../ui/BrandUI";
import { GymStatUI, getGymStats } from "@/utils/services/apiGymStats";

function ReasonUI({ reason }: { reason: ReasonUI }) {
  return (
    <div className="reason flex flex-col justify-center items-center max-w-[350px] gap-4 2xl:max-w-[280px]">
      <img src={reason.iconUrl} alt="gym icon"></img>
      <p className="uppercase font-bold tracking-wider text-lg">
        {reason.title}
      </p>
      <p className="text-gray-300 text-sm tracking-wide font-sans ">
        {reason.description}
      </p>
    </div>
  );
}

export default async function GymChooseUsSection() {
  const reasons: ReasonUI[] = await getGymChooseReasons();

  const stats: GymStatUI[] = await getGymStats();

  const sectionData = {
    title: "WHY CHOOSE PEAKER",
    description:
      "After you decide to start training we will make sure you get the bestfitness program. Our sport experts and latest sports equipment are the winning combination.",
  };

  const bgUrl =
    "https://res.cloudinary.com/dhfpqbwa5/image/upload/v1690908619/about_3_b09d643bf5.avif";

  return (
    <section id="section-choose" className="relative xl:mb-32">
      <div
        style={{ backgroundImage: `url('${bgUrl}')` }}
        className="reasons-container  text-white text-center bg-center bg-cover mt-16"
      >
        <div className="bg-wrapper 2xl:pb-24  flex flex-col bg-black/70 justify-center items-center py-12 px-4">
          <div className="section-title my-12 flex flex-col justify-center items-center">
            <h3 className="text-3xl tracking-wider font-black py-2 md:text-5xl">
              {sectionData.title}
            </h3>
            <p className="text-sm text-gray-300 font-sans md:max-w-[80%]  md:text-base">
              {sectionData.description}
            </p>

            <SectionUnderlineUi variant="center" className="xl:max-w-[300px]" />
          </div>

          <div className="reasons-container space-y-12 md:grid md:grid-cols-2 md:place-items-start md:space-y-0 md:gap-12 md:py-8 2xl:grid-cols-4 2xl:gap-8">
            {reasons.map((reason, idx) => {
              return <ReasonUI reason={reason} key={idx} />;
            })}
          </div>
        </div>
      </div>

      <div className="stats-absolute xl:flex xl:flex-row xl:items-center xl:justify-center xl:w-full 2xl:absolute 2xl:-bottom-20 2xl:w-full 2xl:flex 2xl:flex-col 2xl:items-center 2xl:justify-center">
        <div className="stats-container max-w-[1024px] 2xl:py-8 2xl:px-20 2xl:shadow-lg bg-white flex flex-col items-center md:place-items-centerp text-center gap-8 py-12 md:grid md:grid-cols-2 xl:grid-cols-4 xl:gap-16">
          {stats.map((stat, idx) => {
            return (
              <div key={idx} className="stat-container 2xl:space-y-2">
                <p className="italic uppercase font-bold text-3xl md:text-4xl 2xl:text-5xl">
                  {stat.stat}
                </p>
                <p className="text-gray-500 font-medium tracking-wider">
                  {stat.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
