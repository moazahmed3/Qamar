import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./NewArrivals.css";


import flag0 from "../../assets/Flagsimg/flags0.jpeg";
import flag1 from "../../assets/Flagsimg/flags1.jpeg";
import flag2 from "../../assets/Flagsimg/flags2.jpeg";
import flag3 from "../../assets/Flagsimg/flags3.jpeg";
import flag4 from "../../assets/Flagsimg/flags4.jpeg";
import flag5 from "../../assets/Flagsimg/flags5.jpeg";
import flag6 from "../../assets/Flagsimg/flags6.jpeg";
import flag7 from "../../assets/Flagsimg/flags7.jpeg";
import flag8 from "../../assets/Flagsimg/flags8.jpeg";
import flag9 from "../../assets/Flagsimg/flags9.jpeg";
import flag10 from "../../assets/Flagsimg/flags10.jpeg";

export default function NewArrivals() {
  const [hasScrolled, setHasScrolled] = useState(false);


  const countries = [
    { id: 1, name: "Kenya", src: flag0 },
    { id: 2, name: "Sudan", src: flag1 },
    { id: 3, name: "Algeria", src: flag2 },
    { id: 4, name: "Mauritania", src: flag3 },
    { id: 5, name: "Chad", src: flag4 },
    { id: 6, name: "Somalia", src: flag5 },
    { id: 7, name: "UAE", src: flag6 },
    { id: 8, name: "Kenya", src: flag7 },
    { id: 9, name: "Libya", src: flag8 },
    { id: 10, name: "Guinea", src: flag9 },
    { id: 11, name: "Egypt", src: flag10 }, 
  ];

  return (
    <section className="new-arrivals py-5">
      <div className="container position-relative">
        <h2 className="text-center mb-5 fw-bold display-6">
          Export Destinations
        </h2>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          dir={document.documentElement.dir === "rtl" ? "rtl" : "ltr"}
          spaceBetween={10}
          slidesPerView={1.2}
          centeredSlides={false}
          loop={false}
          speed={800}
          onSlideChange={(swiper) => setHasScrolled(swiper.activeIndex > 0)}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
            1536: { slidesPerView: 5 },
          }}
          className="new-arrivals-swiper"
        >
          {countries.map((country) => (
            <SwiperSlide key={country.id}>
              <div className="image-wrapper">
                <img
                  src={country.src}
                  alt={`Flag of ${country.name}`}
                  className="new-arrival-img"
                />
                <div className="image-overlay">
                  <span>{country.name}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}

         
          <div className={`custom-prev ${hasScrolled ? "visible" : ""}`}>
            <svg viewBox="0 0 24 24">
              <path
                d="M15 18L9 12L15 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="custom-next">
            <svg viewBox="0 0 24 24">
              <path
                d="M9 18L15 12L9 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Swiper>
      </div>
    </section>
  );
}