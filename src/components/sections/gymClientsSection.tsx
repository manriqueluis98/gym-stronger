"use client";

import {
  GymClientTestimonial,
  getTestimonials,
} from "@/utils/services/apiGymClientsTestimonials";

import "./gymClientsSection.css";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { cn } from "@/lib/utils";
import useMeasure from "react-use-measure";

export default function GymClientsSection({
  testimonials,
}: {
  testimonials: GymClientTestimonial[];
}) {
  const [loading, setLoading] = useState(false);

  const [selectedIdx, setSelectedIdx] = useState(0);

  const [sectionRef, sectionBounds] = useMeasure();

  // useEffect(() => {
  //   const handleResize = () => {
  //     setItemWidth(bounds.width - 32);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  if (loading) return <h1>loading</h1>;

  function PaginationControls({ className }: { className: string }) {
    const swiper = useSwiper();

    return (
      <div className={cn(`controls flex gap-3 my-6`, className)}>
        {testimonials.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`control-wrapper p-[3px] cursor-pointer border transition-all duration-500 ${
                idx === selectedIdx
                  ? "border border-pr-black"
                  : "border-transparent"
              }`}
              onClick={() => {
                swiper.slideTo(idx);
                setSelectedIdx(idx);
              }}
            >
              <div
                className={`${
                  idx === selectedIdx ? "bg-pr-black" : "bg-gray-500"
                } w-2 h-2`}
              ></div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <section
      id="section-clients"
      className="text-pr-black px-2 md:px-4 py-24 2xl:py-12 bg-pr-gray-content"
      ref={sectionRef}
    >
      <Swiper
        style={{ width: `${Math.min(1024, sectionBounds.width - 32)}px` }}
        onSlideChange={(swiper) => {
          setSelectedIdx(swiper.activeIndex);
        }}
        centeredSlides={true}
        className="mySwiper"
      >
        {testimonials.map((testimonial, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div
                id={`testimonial-${idx}`}
                key={testimonial.id}
                style={{
                  width: `${Math.min(1024, sectionBounds.width - 32)}px`,
                }}
                className={`testimonial flex flex-col gap-4 md:flex-row md:gap-6`}
              >
                <div className="testimonial-image  ">
                  <img
                    src={testimonial.photoUrl}
                    alt="client photo"
                    width={"100px"}
                    className="min-w-[100px]"
                  />
                </div>
                <div className="testimonial-content flex flex-col gap-4">
                  <div className="testimonial-client">
                    <p className="uppercase italic text-gray-500 tracking-wider">
                      {testimonial.feature}
                    </p>
                    <p className="uppercase font-bold tracking-wider text-lg">
                      {testimonial.name}
                    </p>
                  </div>

                  <p
                    style={{
                      maxWidth: `${Math.min(1024, sectionBounds.width - 32)}px`,
                    }}
                    className=" italic text-pr-black font-sans font-semibold leading-loose tracking-wide"
                  >
                    {testimonial.testimonial}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <PaginationControls className="md:ml-[124px]" />
      </Swiper>
    </section>
  );
}
