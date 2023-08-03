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

import { Grid } from "swiper/modules";

interface GymCoachesSectionProps {}

const GymCoachesSection: React.FC<GymCoachesSectionProps> = () => {
  const description =
    "Transform Your Fitness Journey: Join Our Expert Coaching Section at Stronger Gym. Reach Your Goals, Maximize Potential, and Elevate Your Performance!";
  const title = "Team of Expert Coaches";

  const [coachs, setCoachs] = useState<GymCoachResume[]>([]);

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

  useEffect(() => {
    async function fetchData() {
      const data = await getGymCoachesResume();

      setCoachs(data);
    }

    fetchData();
  }, []);

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
                          <div
                            key={idx}
                            className="social-wrapper bg-pr-black p-2 group/icon hover:bg-pr-primary hover:text-pr-black"
                          >
                            <SocialIcon
                              social={social}
                              className="group-hover/icon:text-pr-black"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default GymCoachesSection;
