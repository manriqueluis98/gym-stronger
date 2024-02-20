"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";

import { Carousel } from "react-responsive-carousel";

import { motion } from "framer-motion";

import "react-responsive-carousel/lib/styles/carousel.min.css";

//TODO: Make this banner from scratch without Carousel Library

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

  function changeCurrentSlide(index: number) {
    if (currentIndex !== index) {
      setCurrentIndex(index);
    }
  }

  //Function to generate a user visible index for the banners Ex. Banner[0] -> Indicator 01 for the user
  function generateNumberedIndex(index: number) {
    return index < 10 ? "0" + (index + 1).toString() : index + 1;
  }

  if (!banners[currentIndex]) return null;

  return (
    <div className="relative flex flex-col justify-center items-center min-h-[650px] md:min-h-[720px]">
      <motion.div
        key={currentIndex}
        className="carousel-content xl:mb-28  text-white font-serif uppercase italic max-w-[300px] md:max-w-[90%] flex flex-col items-center justify-center tracking-[0.15em] "
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-md xl:my-2 2xl:text-lg  text-center font-semibold tracking-[0.3em]"
        >
          {banners[currentIndex].bannerSloganText}
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-4xl text-center font-black py-4 md:text-6xl xl:text-6xl 2xl:text-7xl"
        >
          <span> {banners[currentIndex].bannerTitleUpper}</span>
          <br></br>
          <span>{banners[currentIndex].bannerTitleDown}</span>
        </motion.h3>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="group button-container relative mt-8"
        >
          <Button
            onClick={() => console.log("clicked")}
            variant={"primary"}
            className="font-serif font-semibold hover:bg-white transition-all duration-500 tracking-widest md:font-bold md:py-3 md:px-8"
          >
            {banners[currentIndex].bannerButtonText}
          </Button>

          <div className="button-frame top-2 left-2 -z-10 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300 absolute w-full h-full border border-white"></div>
        </motion.div>
      </motion.div>
      <div className="carousel-controls divide-x-2 absolute bottom-12 flex flex-row items-center justify-center">
        {banners.map((banner, idx) => {
          return (
            <button
              onClick={() => {
                changeCurrentSlide(idx);
              }}
              key={idx}
              className={`${
                idx === currentIndex ? "" : "text-white/70 text-xl"
              } carousel-number text-white font-semibold text-3xl px-6 transition-all duration-200`}
            >
              {generateNumberedIndex(idx)}
            </button>
          );
        })}
      </div>
      <Carousel
        infiniteLoop
        interval={7000}
        transitionTime={0}
        swipeable={false}
        autoPlay={isAutoPlay}
        selectedItem={currentIndex}
        onChange={changeCurrentSlide}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        {...props}
        className="absolute top-0 -z-50 flex flex-col items-center justify-center overflow-clip bg-black"
      >
        {banners.map((banner: Banner, idx: number) => {
          return (
            <div
              key={idx}
              className={`${idx === currentIndex ? "block" : "hidden"}`}
            >
              <motion.img
                initial={{
                  scale: idx === currentIndex ? 1 : 1.1,
                  opacity: idx === currentIndex ? 0.3 : 0.8,
                }}
                animate={{
                  scale: idx === currentIndex ? 1.1 : 1,
                  opacity: idx === currentIndex ? 0.8 : 0.3,
                }}
                transition={{
                  opacity: { duration: 0.5 },
                  scale: {
                    delay: 1,
                    duration: 10,
                  },
                }}
                className={`min-h-[650px] md:min-h-[720px] w-screen  object-cover bg-no-repeat ${
                  idx === currentIndex ? "block" : "hidden"
                }`}
                src={banner.bannerImageUrl}
                alt="Gym banner image"
              ></motion.img>
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
