"use client";
import React, {use} from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import events from "@/content/events";
import LightRays from "@/components/LightRays";
import MosaicGrid from "@/components/MosaicGrid";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EventDetail = ({ params }) => {
  const { id } = use(params);
  const event = events.find((e) => e.id.toString() === id);

  if (!event) {
    return (
      <div className="text-white h-screen flex items-center justify-center">
        <h2>Event not found</h2>
      </div>
    );
  }

  const images = [
    event.image1,
    event.image2,
    event.image3,
    event.image4,
    event.image5,
    event.image6,
  ].filter(Boolean);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="grad-bg min-h-screen text-white px-6 py-12 relative overflow-hidden">
      <div className="absolute inset-0 z-20 pointer-events-none mt-10">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.6}
          lightSpread={0.9}
          rayLength={1.5}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      <div className="relative z-10">
        <motion.h1
          className="text-4xl primary-font md:text-5xl font-extrabold text-center text-[#67C6FE] pt-15"
          style={{ textShadow: '2px 2px 0px white' }}
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {event.name}
        </motion.h1>

        {/* Carousel for Mobile */}
        <motion.div
          className="block md:hidden mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Slider {...sliderSettings}>
            {images.map((img, idx) => (
              <div key={idx}>
                <img
                  src={img}
                  alt={`Event ${id} - Slide ${idx + 1}`}
                  className="rounded-lg w-full max-h-[400px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Mosaic Grid for Desktop */}
        <motion.div
          className="hidden md:block mt-10 px-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <MosaicGrid images={images} />
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto text-center mt-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-lg text-gray-300 mb-6 font-mono">{event.description}</p>
          <p className="text-gray-400">Year: {event.year}</p>
        </motion.div>

        {/* Back Link */}
        <Link
          href="/events"
          className="text-[#67C6FE] mt-10 block text-center font-bold sec-font"
        >
          ← Back to Events
        </Link>
      </div>
    </div>
  );
};

export default EventDetail;
