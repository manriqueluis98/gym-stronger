import { getGymBenefits } from "@/utils/services/apiGymBenefits";
import { GymBenefit } from "@/utils/types/GymBenefits";
import { Button } from "../ui/button";

function BenefitUi({ benefit }: { benefit: GymBenefit }) {
  return (
    <div className="benefit  bg-pr-black text-white relative text-center py-16 mx-4 max-w-[450px] md:max-w-[380px]">
      <div className="positioner absolute w-full h-full flex flex-col justify-start items-center -top-4">
        <div className="wrapper ">
          {/* TODO: Rotate background */}
          <div className="icon-wrapper bg-pr-primary -skew-x-12 w-fit p-4">
            <img
              src={benefit.iconUrl}
              alt="gym icon"
              width={"52px"}
              className="w-[52px] skew-x-12"
            ></img>
          </div>
        </div>
      </div>

      <div className="positioner absolute w-full h-full flex flex-col justify-end -bottom-6">
        <div className="wrapper">
          <Button
            variant={"primary"}
            className="text-pr-black py-4 px-8 tracking-widest font-bold"
          >
            Read More
          </Button>
        </div>
      </div>

      <div className="content px-8 pt-8">
        <h4 className="text-white font-bold tracking-widest text-xl uppercase py-2">
          {benefit.title}
        </h4>
        <p className="text-pr-gray-text text-sm tracking-wide font-light pt-2">
          {benefit.description}
        </p>
      </div>
    </div>
  );
}

export default async function BenefitsSection() {
  const benefits = await getGymBenefits();
  console.log(
    "🚀 ~ file: benefitsSection.tsx:5 ~ BenefitsSection ~ benefits:",
    benefits
  );

  return (
    <div id="section-benefits" className="bg-white py-12 ">
      <div className="benefits-wrapper flex flex-col gap-24 items-center md:flex-row md:gap-20 2xl:gap-14 3xl:gap-0 4xl:gap-12 md:items-start md:flex-wrap justify-center">
        {benefits?.map((item, idx) => <BenefitUi key={idx} benefit={item} />)}
      </div>
    </div>
  );
}
