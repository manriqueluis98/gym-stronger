import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GymMission } from "@/utils/types/GymMission";
import { useState } from "react";

export default function MissionTabs({ missions }: { missions: GymMission[] }) {
  const [idxSelected, setIdxSelected] = useState("0");

  return (
    <div className="tabs-container bg-pr-black py-8 px-6 mx-4">
      <Tabs
        defaultValue="0"
        className=" text-white"
        onValueChange={(val) => setIdxSelected(val)}
      >
        {missions.map((item, idx) => {
          return (
            <TabsContent
              key={idx.toString()}
              value={idx.toString()}
              className="text-white "
            >
              <div className="title-container flex flex-row justify-start items-center gap-2">
                <div className="bg-pr-primary h-[6px] w-[6px]"></div>
                <h4 className="text-lg font-serif uppercase font-bold tracking-wide">
                  {item.title}
                </h4>
              </div>

              <p className="text-pr-gray-text md:min-h-[120px] xl:min-h-fit py-4">
                {item.description}
              </p>
            </TabsContent>
          );
        })}

        <TabsList className="p-0 m-0 space-x-4">
          {missions.map((item, idx) => {
            return (
              <TabsTrigger
                key={idx.toString()}
                value={idx.toString()}
                className="text-white p-0 m-0"
              >
                <div
                  className={`h-[4px] bg-white w-[30px] transition-all duration-300 ${
                    idx.toString() === idxSelected
                      ? "w-[30px] bg-white"
                      : "w-[15px] bg-gray-500"
                  }`}
                ></div>
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>
    </div>
  );
}
