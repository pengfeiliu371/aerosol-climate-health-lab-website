"use client";

import { useEffect, useState } from "react";
import { sitePath } from "../lib/sitePath";

const slides = [
  {
    src: "/images/home/lab-slide-aqi.jpg",
    alt: "Researchers working together at an aerosol measurement system in the laboratory",
    label: "Laboratory experiments",
  },
  {
    src: "/images/home/lab-slide-aqi-instrument.jpg",
    alt: "A laboratory member adjusting an aerosol measurement instrument",
    label: "Laboratory instrumentation",
  },
  {
    src: "/images/home/lab-slide-aqi-team.jpg",
    alt: "Liu Lab members gathered in the aerosol laboratory",
    label: "The laboratory team",
  },
  {
    src: "/images/home/lab-slide-south-dekalb-team.jpg",
    alt: "Liu Lab members conducting fieldwork at the South DeKalb monitoring site",
    label: "Fieldwork · South DeKalb",
  },
  {
    src: "/images/home/lab-slide-south-dekalb.jpg",
    alt: "Liu Lab members beside the Georgia Tech mobile laboratory at the South DeKalb monitoring site",
    label: "Mobile laboratory · South DeKalb",
  },
  {
    src: "/images/home/lab-slide-gwise-03.jpg",
    alt: "Liu Lab members participating in the G-WISE fire campaign",
    label: "Campaign experiments · G-WISE",
  },
  {
    src: "/images/home/lab-slide-boone.jpg",
    alt: "Researchers collaborating in an aerosol monitoring laboratory in Boone, North Carolina",
    label: "Collaborative measurements · Boone, NC",
  },
  {
    src: "/images/home/lab-slide-chattahoochee-outreach.jpg",
    alt: "Pengfei Liu with students and educators at a research presentation at Chattahoochee High School",
    label: "Research outreach · Chattahoochee High School",
  },
  {
    src: "/images/home/lab-slide-graduation-three-person.jpg",
    alt: "Liu Lab members celebrating Lifei Yin and Bingqing's graduation at Georgia Tech",
    label: "Group milestones · Georgia Tech",
  },
  {
    src: "/images/home/lab-slide-graduation-candid.jpg",
    alt: "Lifei Yin, Bingqing, and Pengfei Liu celebrating at the Georgia Tech graduation ceremony",
    label: "Graduation day · Georgia Tech",
  },
  {
    src: "/images/home/lab-slide-group-gathering.jpg",
    alt: "Liu Lab members gathered for a group dinner",
    label: "Lab life · Group gathering",
  },
];

export function LabSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 2000);
    return () => window.clearInterval(timer);
  }, []);

  const show = (index: number) => {
    setActive((index + slides.length) % slides.length);
  };

  return (
    <figure className="lab-slideshow">
      <div className="lab-slide-frame">
        {slides.map((slide, index) => (
          <img
            className={index === active ? "lab-slide-image active" : "lab-slide-image"}
            src={sitePath(slide.src)}
            alt={slide.alt}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            aria-hidden={index !== active}
            key={slide.src}
          />
        ))}
        <figcaption aria-live="polite">{slides[active].label}</figcaption>
      </div>
      <div className="lab-slide-controls">
        <button className="lab-slide-arrow" type="button" onClick={() => show(active - 1)} aria-label="Previous laboratory photograph">←</button>
        <div className="lab-slide-dots" aria-label="Choose a laboratory photograph">
          {slides.map((slide, index) => (
            <button
              className={index === active ? "active" : ""}
              type="button"
              onClick={() => show(index)}
              aria-label={`Show ${slide.label}`}
              aria-current={index === active ? "true" : undefined}
              key={slide.src}
            />
          ))}
        </div>
        <button className="lab-slide-arrow" type="button" onClick={() => show(active + 1)} aria-label="Next laboratory photograph">→</button>
      </div>
    </figure>
  );
}
