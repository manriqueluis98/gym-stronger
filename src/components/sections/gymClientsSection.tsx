"use client";

import {
  GymClientTestimonial,
  getTestimonials,
} from "@/utils/services/apiGymClientsTestimonials";

import "./gymClientsSection.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function GymClientsSection() {
  const [testimonials, setTestimonials] = useState<GymClientTestimonial[]>([]);
  const testimonialRefs = useRef<HTMLDivElement[]>([]);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const [testimonialSelected, setTestimonialSelected] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const data = await getTestimonials();

      setTestimonials(data);
    }

    fetchData();
  }, []);

  //UseEffect for Client Testimonial Slides, uses IntersectionObserver compared to the wrapper with a threshold of 0.5
  //It means when the a different slides intersects the viewport with at least 50% its gonna change the index
  //of the Slide Selected for the navigation squares. This combined with the snap-x snap mandatory makes the slides
  //feel interactive and related as touchscreen in PC and Mobile.
  useEffect(() => {
    function handleIntersection(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Get the index of the visible slide
          const index = parseInt(entry.target.id.split("-")[1], 10);
          setTestimonialSelected(index);
        }
      });
    }
    if (sliderContainerRef.current) {
      // Function to handle intersection changes

      // Create the Intersection Observer
      const observer = new IntersectionObserver(handleIntersection, {
        root: sliderContainerRef.current,
        threshold: 0.5, // Customize the threshold as per your requirement
      });

      // Observe each slide
      const slides = testimonialRefs.current;
      slides.forEach((slide) => {
        observer.observe(slide);
      });

      // Clean up: disconnect the observer when the component unmounts
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  function handleNavigationSlider(idx: any) {
    if (testimonialRefs.current[idx]) {
      testimonialRefs.current[idx].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setTestimonialSelected(idx);
  }

  return (
    <section
      id="section-clients"
      className="text-pr-black flex flex-col items-center justify-center"
    >
      <div className="slider-container px-4">
        <div
          className="slider-wrapper grid grid-flow-col auto-cols-[100%] scroll-smooth overflow-x-scroll snap-x snap-mandatory"
          ref={sliderContainerRef}
        >
          {testimonials.map((testimonial, idx) => {
            return (
              <div
                id={`testimonial-${idx}`}
                key={testimonial.id}
                className="testimonial snap-start"
                ref={(ref) =>
                  (testimonialRefs.current[idx] = ref as HTMLDivElement)
                }
              >
                <div className="testimonial-image my-4">
                  <img
                    src={testimonial.photoUrl}
                    alt="client photo"
                    width={"100px"}
                    className="min-w-[100px]"
                  />
                </div>
                <div className="testimonial-content flex flex-col">
                  <div className="testimonial-client my-4">
                    <p className="uppercase italic text-gray-500 tracking-wider">
                      {testimonial.feature}
                    </p>
                    <p className="uppercase font-bold tracking-wider text-lg">
                      {testimonial.name}
                    </p>
                  </div>

                  <p className="h[400px] italic text-pr-black font-sans font-semibold">
                    {testimonial.testimonial}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="slider-navigation flex flex-row px-6 my-8 w-full justify-start gap-4">
        {testimonials.map((item, idx) => {
          return (
            <Link
              onClick={(e) => {
                e.preventDefault();
                handleNavigationSlider(idx);
              }}
              key={idx}
              href={`#testimonial-${idx}`}
              className={`p-[2px] ${
                testimonialSelected === idx
                  ? "border border-pr-black"
                  : "border-none"
              }`}
              //   className="p-[2px] border border-pr-black"
            >
              <div
                className={`square w-[8px] h-[8px] ${
                  testimonialSelected === idx ? "bg-pr-black" : "bg-gray-600"
                }`}
              ></div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
