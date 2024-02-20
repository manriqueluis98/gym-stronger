"use client";

import React, { useEffect, useState } from "react";
import { SectionTitleUi } from "../ui/BrandUI";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import {
  GymCoachResume,
  getGymCoachesResume,
} from "@/utils/services/apiGymCoachesResume";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaTwitter,
  FaShareAlt,
} from "react-icons/fa";

import { cn } from "@/lib/utils";
import Link from "next/link";

import useMeasure from "react-use-measure";

interface GymCoachesSectionProps {}

const GymCoachesSection = ({ coachs }: { coachs: GymCoachResume[] }) => {
  const description =
    "Transform Your Fitness Journey: Join Our Expert Coaching Section at Stronger Gym. Reach Your Goals, Maximize Potential, and Elevate Your Performance!";
  const title = "Team of Expert Coaches";

  const [selectedIdx, setSelectedIdx] = useState(0);

  function SocialIcon({
    social,
    className,
  }: {
    social: string;
    className?: string;
  }) {
    const variant = cn("text-white", className);
    switch (social) {
      case "facebook":
        return <FaFacebook className={variant} />;
        break;
      case "twitter":
        return <FaTwitter className={variant} />;
      case "linkedin":
        return <FaLinkedin className={variant} />;
      case "instagram":
        return <FaInstagram className={variant} />;
      case "email":
        return <FaMailBulk className={variant} />;
      default:
        return <FaShareAlt className={variant} />;
        break;
    }
  }

  function SwiperNavigation() {
    const swiper = useSwiper();

    return (
      <div className="navigation-wrapper flex justify-center gap-4 py-4 2xl:py-8 ">
        {coachs.map((coach, idx) => {
          // if (window) {
          //   if (window.innerWidth >= 800 && idx >= coachs.length - 1) return;
          //   if (window.innerWidth >= 1200 && idx === coachs.length - 2) return;
          // }

          return (
            <div
              onClick={() => {
                swiper.slideTo(idx);
              }}
              key={idx}
              className={`control-wrapper p-1 border cursor-pointer ${
                selectedIdx === idx ? "border-pr-black" : "border-transparent"
              }`}
            >
              <div
                className={`control w-2 h-2 ${
                  selectedIdx === idx ? "bg-pr-black" : "bg-gray-400"
                }`}
              ></div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <section id="section-coaches" className="px-2 lg:px-48 2xl:px-64 3xl:px-80">
      <SectionTitleUi
        title={title}
        description={description}
        position="center"
        underlinePosition="center"
        className="text-center"
      ></SectionTitleUi>

      <Swiper
        onBreakpoint={(swiper, swiperOptions) => {
          console.log(swiper);
        }}
        breakpoints={{
          800: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={32}
        slidesPerView={1}
        onSlideChange={(swiper) => {
          setSelectedIdx(swiper.activeIndex);
        }}
      >
        {coachs.map((gymCoach, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className="positioner flex flex-col items-center">
                <div className="coach-wrapper relative flex flex-col items-center pb-10 w-fit">
                  <div className="image-wrapper">
                    <img
                      src={gymCoach.photoUrl}
                      alt="gym coach image"
                      className="w-full"
                    />
                  </div>

                  <div className="coach-content text-white bg-pr-black text-center absolute bottom-0 py-4 px-12 space-y-1">
                    <p className="uppercase tracking-wider text-pr-gray-text">
                      {gymCoach.position}
                    </p>
                    <p className="text-2xl font-serif uppercase tracking-wider font-bold">
                      {gymCoach.name}
                    </p>
                  </div>

                  <div className="coach-socials absolute top-4 right-8 group ">
                    <div className="social-button bg-pr-black p-2 mb-2">
                      <SocialIcon social="default" />
                    </div>
                    <div
                      className={`socials-expanded hidden opacity-0 group-hover:block group-hover:opacity-100 transition-opacity duration-300`}
                    >
                      {Object.keys(gymCoach.socials).map((social, idx) => {
                        return (
                          <Link
                            key={idx}
                            href={gymCoach.socials[social]}
                            target="_blank"
                          >
                            <div className="social-wrapper bg-pr-black p-2 group/icon hover:bg-pr-primary hover:text-pr-black">
                              <SocialIcon
                                social={social}
                                className="group-hover/icon:text-pr-black"
                              />
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <SwiperNavigation />
      </Swiper>
    </section>
  );
};

export default GymCoachesSection;
