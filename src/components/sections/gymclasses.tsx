import { getGymClasses } from "@/utils/services/gymClasses";
import { GymClassCategory } from "@/utils/types/GymClassCategory";
import Link from "next/link";

export default async function GymClassesSection() {
  const gymClasses: GymClassCategory[] = await getGymClasses().then((array) =>
    array.filter((gymClass) => (gymClass.isEnabled ? true : false))
  );

  return (
    <div
      id="section-gym-classes"
      className="space-y-8 py-4 my-12 md:grid 
      md:grid-cols-2 md:space-y-0  md:place-items-center md:gap-4 md:mx-4 
      lg:mx-12 2xl:grid-cols-4 2xl:place-items-start 2xl:divide-x 
      2xl:space-x-0 2xl:space-y-0 2xl:gap-0
      3xl:my-36"
    >
      {gymClasses.map((gymClass) => {
        return (
          <div
            key={gymClass.id}
            className="gym-class flex flex-col justify-start text-white py-2 px-4 space-y-4 2xl:px-8  "
          >
            <div className="icon-container">
              <img
                src={gymClass.categoryImageUrl}
                alt="gym class icon"
                className="w-auto h-[48px]"
              ></img>
            </div>
            <h3 className="text-xl uppercase font-bold">
              {gymClass.categoryName}
            </h3>
            <p className="text-sm text-pr-gray-text leading-relaxed">
              {gymClass.categoryDescription}
            </p>

            <Link
              href={"/contact"}
              className="font-semibold underline tracking-widest text-sm underline-offset-4"
            >
              READ MORE
            </Link>
          </div>
        );
      })}
    </div>
  );
}
