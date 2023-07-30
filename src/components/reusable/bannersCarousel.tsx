"use client";

import { useState } from "react";
import { Button } from "../ui/button";

export type Banner = {
  bannerImageUrl: string;
  bannerSloganText: string;
  bannerTitleUpper: string;
  bannerTitleDown: string;
  isEnabled: boolean;
  bannerButtonText: string;
  bannerButtonUrl: string;
};

function BannerUi({ banner }: { banner: Banner }) {
  return (
    <>
      <div
        className={`banner text-white bg-black/20  min-h-[600px] font-serif uppercase relative italic flex flex-col items-center justify-center `}
      >
        <div className="banner-content max-w-[300px] flex flex-col items-center justify-center tracking-[0.15em]">
          <p className="text-md text-center font-semibold tracking-[0.3em]">
            {banner.bannerSloganText}
          </p>
          <h3 className="text-4xl text-center font-black py-4">
            <span> {banner.bannerTitleUpper}</span>
            <br></br>
            <span>{banner.bannerTitleDown}</span>
          </h3>

          <div className="group button-container relative mt-8">
            <Button variant={"primary"} className="font-serif font-semibold ">
              {banner.bannerButtonText}
            </Button>

            <div className="button-frame top-2 left-2 -z-10 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300 absolute w-full h-full border border-white"></div>
          </div>
        </div>
        <div className="banner-background">
          <img
            src={banner.bannerImageUrl}
            alt="gym background image"
            height={"100%"}
            className="absolute -z-50 w-full h-full object-cover top-0 left-0"
          ></img>
        </div>
      </div>
    </>
  );
}

type Props = {
  banners: Banner[];
};

export default function BannersCarousel({ banners }: Props) {
  const [currentBanner, setCurrentBanner] = useState(0);

  function getPagination(index: number) {
    let ans = "";
    index++;
    if (index < 10 && index > 0) {
      ans = "0";
    }

    return ans + index.toString();
  }

  return (
    <div className="carousel-container relative">
      <BannerUi banner={banners[currentBanner]}></BannerUi>
      <div className="carousel-pagination absolute bottom-0">
        <button className="text-white font-serif text-4xl">
          {getPagination(currentBanner)}
        </button>
      </div>
    </div>
  );
}
