"use client";

import { motion } from "motion/react";
import { Users, Puzzle, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const pricingFeatures = [
  {
    Icon: Users,
    title: "Student-Based Pricing",
    desc: "Pricing scales with your student enrollment, ensuring you only pay for what you use as your institution grows.",
    step: "01",
    total: "03",
  },
  {
    Icon: Puzzle,
    title: "Modular Adoption",
    desc: "Start with the modules you need most and add more as you grow. No forced bundles or unnecessary features.",
    step: "02",
    total: "03",
  },
  {
    Icon: Building2,
    title: "Multi-Campus Support",
    desc: "Special pricing available for institutions managing multiple campuses or locations under one organization.",
    step: "03",
    total: "03",
  },
];

function PricingCard({
  Icon, title, desc, step, total, index,
}: (typeof pricingFeatures)[0] & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative h-full rounded-3xl p-6 lg:p-8 flex flex-col"
      style={{
        backgroundColor: "#F4F4F5",
        boxShadow: "0px -8px 0px 0px rgba(0, 0, 0, 0.05) inset, 0px 4px 0px 0px rgba(255, 255, 255, 0.6) inset, 0px 7.77px 16px 0px rgba(0, 0, 0, 0.06), 0px 3px 3px 0px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 md:w-20 md:h-20 rounded-md md:rounded-2xl flex items-center justify-center mb-2 lg:mb-6"
        style={{
          background: "linear-gradient(180deg, #000000 0%, #847978 100%)",
          boxShadow: `
            0px 3.44px 5.57px 0px rgba(0, 0, 0, 0.09), 0px 22.91px 37.08px 0px rgb(0 0 0 / 16%), 0px 76px 123px 0px rgb(0 0 0 / 5%), 0px 5.05px 8.18px 0px rgb(0 0 0 / 10%), 0px 16.98px 27.47px 0px rgba(255, 59, 0, 0.05), 0px 56px 83px 0px rgb(0 0 0 / 25%), 0px 14px 34px 0px rgb(0 0 0 / 25%), 0px 1px 2px 0px rgb(0 0 0 / 40%), 0px -3px 0px 0px rgba(0, 0, 0, 0.06) inset, 0px 1px 0px 0px rgba(255, 255, 255, 0.6) inset
          `,
        }}
      >
        <Icon className="w-7 h-7 md:w-9 md:h-9 text-white" strokeWidth={2} />
      </div>

      {/* Title */}
      <h3 className="text-xl lg:text-3xl font-medium font-interTight text-[#1a1a1c] mb-4 leading-tight mt-6 lg:mt-12">
        {title}
      </h3>
           <div
  style={{
    background:
      "linear-gradient(90deg, rgba(212,212,216,0) 0%, #D4D4D8 50%, rgba(212,212,216,0) 100%)",
      height:1,
  }}
/>

      {/* Description */}
      <p className="text-[15px] text-[#6b7a8d] leading-relaxed mb-auto mt-4">
        {desc}
      </p>

      {/* Step indicator */}
      <div className="flex justify-end mt-12 lg:mt-24">
        <div className="text-right leading-none">
          <span className="text-3xl lg:text-7xl font-black text-gray-200">
            {step}
          </span>
          <span className="text-2xl lg:text-4xl font-black text-gray-300">
            /{total}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function PricingModel() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-white lg:py-24 lg:px-20 px-4 py-12 overflow-hidden">
      <div className="">

        <div className="flex flex-col lg:flex-row gap:4 lg:gap-12 items-start">

          {/* ── LEFT — Heading & Navigation ── */}
          <div className="lg:w-[35%] lg:sticky lg:top-24">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2  bg-[#F4F4F5] border border-gray-200 px-4 py-2 rounded-full text-sm font-semibold text-[#000] mb-6 shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-[#000]" />
              Pricing
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl lg:text-5xl font-medium leading-[1.1] mb-3 font-interTight"
            >
              <span className="text-primary-bold font-interTight">Our </span>
              <span className="text-primary-bold font-interTight">Pricing Model</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base text-primary mb-10"
            >
              Simple, predictable, and built for educational institutions
            </motion.p>

            {/* Navigation arrows */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden md:flex items-center gap-3"
            >
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-14 h-14 rounded-full bg-[#F4F4F5] border border-gray-200 flex items-center justify-center hover:border--black hover:shadow-md hover:bg-black hover:color-white transition-all duration-200 group"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-white" strokeWidth={2.5} />
              </button>
            

               <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-14 h-14 rounded-full bg-[#F4F4F5] border border-gray-200 flex items-center justify-center hover:border--black hover:shadow-md hover:bg-black hover:color-white transition-all duration-200 group"
                aria-label="Previous slide"
              >
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white" strokeWidth={2.5} />
              </button>
            </motion.div>
          </div>

          {/* ── RIGHT — Swiper carousel ── */}
          <div className="lg:w-[65%] w-full overflow-hidden pl-2">
            <Swiper
              modules={[Navigation]}
              spaceBetween={40}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                1024: { slidesPerView: 1.8 },
              }}
              onSwiper={(swiper) => { swiperRef.current = swiper; }}
              className="!overflow-visible"
            >
              {pricingFeatures.map((feature, i) => (
                <SwiperSlide key={feature.title} style={{ height: "auto" }}>
                  <PricingCard {...feature} index={i} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>

      </div>
    </section>
  );
}