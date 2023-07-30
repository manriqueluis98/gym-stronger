"use client";

import { useState } from "react";
import { Button } from "../ui/button";

import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  AnimationHandler,
  AnimationHandlerResponse,
} from "react-responsive-carousel/lib/ts/components/Carousel/types";

export type Banner = {
  bannerImageUrl: string;
  bannerSloganText: string;
  bannerTitleUpper: string;
  bannerTitleDown: string;
  isEnabled: boolean;
  bannerButtonText: string;
  bannerButtonUrl: string;
};
interface CarouselNumberedProps {
  currentSlide?: number;
  autoPlay?: boolean;
  banners: Banner[];
  className?: string;
}

export function CarouselNumbered({
  currentSlide = 0,
  autoPlay = true,
  banners,
  className,
  ...props
}: CarouselNumberedProps) {
  const [currentIndex, setCurrentIndex] = useState(currentSlide);
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);

  const totalBanners = banners.length;

  function nextSlide() {
    setCurrentIndex((prev) => (prev === totalBanners - 1 ? 0 : ++prev));
  }

  function prevSlide() {
    setCurrentIndex((prev) => (prev === 0 ? totalBanners - 1 : --prev));
  }

  function changeCurrentSlide(index: number) {
    if (currentIndex !== index) {
      setCurrentIndex(index);
    }
  }

  //Function to generate a user visible index for the banners Ex. Banner[0] -> Indicator 01 for the user
  function generateNumberedIndex(index: number) {
    return index < 10 ? "0" + (index + 1).toString() : index + 1;
  }

  const fadeAnimationHandler: AnimationHandler = (
    props,
    state
  ): AnimationHandlerResponse => {
    const transitionTime = props.transitionTime + "ms";
    const transitionTimingFunction = "ease-in-out";

    let slideStyle: React.CSSProperties = {
      position: "absolute",
      display: "block",
      zIndex: -2,
      minHeight: "100%",
      opacity: 0,
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      scale: 2,
      transitionTimingFunction: transitionTimingFunction,
      msTransitionTimingFunction: transitionTimingFunction,
      MozTransitionTimingFunction: transitionTimingFunction,
      WebkitTransitionTimingFunction: transitionTimingFunction,
      OTransitionTimingFunction: transitionTimingFunction,
    };

    if (!state.swiping) {
      slideStyle = {
        ...slideStyle,
        scale: 1,
        WebkitTransitionDuration: transitionTime,
        MozTransitionDuration: transitionTime,
        OTransitionDuration: transitionTime,
        transitionDuration: transitionTime,
        msTransitionDuration: transitionTime,
      };
    }

    return {
      slideStyle,
      selectedStyle: { ...slideStyle, opacity: 1, position: "relative" },
      prevStyle: { ...slideStyle },
    };
  };

  return (
    <div className="relative flex flex-col justify-center items-center min-h-[650px]">
      <div className="carousel-content text-white font-serif uppercase italic max-w-[300px] flex flex-col items-center justify-center tracking-[0.15em] ">
        <p className="text-md text-center font-semibold tracking-[0.3em]">
          {banners[currentIndex].bannerSloganText}
        </p>
        <h3 className="text-4xl text-center font-black py-4">
          <span> {banners[currentIndex].bannerTitleUpper}</span>
          <br></br>
          <span>{banners[currentIndex].bannerTitleDown}</span>
        </h3>

        <div className="group button-container relative mt-8">
          <Button
            onClick={() => console.log("clicked")}
            variant={"primary"}
            className="font-serif font-semibold "
          >
            {banners[currentIndex].bannerButtonText}
          </Button>

          <div className="button-frame top-2 left-2 -z-10 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300 absolute w-full h-full border border-white"></div>
        </div>
      </div>
      <div className="carousel-controls divide-x-2 absolute bottom-12 flex flex-row items-center justify-center">
        {banners.map((banner, idx) => {
          return (
            <button
              onClick={() => {
                changeCurrentSlide(idx);
              }}
              key={idx}
              className={`${
                idx === currentIndex ? "" : "text-white/70 text-2xl"
              } carousel-number text-white text-3xl px-6 transition-all duration-200`}
            >
              {generateNumberedIndex(idx)}
            </button>
          );
        })}
      </div>
      <Carousel
        infiniteLoop
        interval={7000}
        transitionTime={2500}
        animationHandler={fadeAnimationHandler}
        swipeable={false}
        autoPlay={isAutoPlay}
        selectedItem={currentIndex}
        onChange={changeCurrentSlide}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        {...props}
        className="absolute top-0 -z-50"
      >
        {banners.map((banner: Banner, idx: number) => {
          return (
            <div key={idx}>
              <img
                className="min-h-[650px] object-cover"
                src={banner.bannerImageUrl}
                alt="Gym banner image"
              ></img>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default function BannersCarousel({ banners }: { banners: Banner[] }) {
  return <CarouselNumbered banners={banners}></CarouselNumbered>;
}
