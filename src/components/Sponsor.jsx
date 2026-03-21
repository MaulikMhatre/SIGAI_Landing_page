"use client";

import React from 'react'
import { motion } from "framer-motion";
import { useState } from "react";

const sponsors = [
  { name: "Google", logo: "/sponsors/google.png" },
  { name: "Microsoft", logo: "/sponsors/microsoft.png" },
  { name: "OpenAI", logo: "/sponsors/openai.png" },
  { name: "Amazon", logo: "/sponsors/amazon.png" },
  { name: "Tesla", logo: "/sponsors/tesla.png" },
];

const Sponsor = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section className="w-full pb-16 bg-black text-center relative overflow-hidden mb-20">
      <h2 className="text-3xl md:text-4xl primary-font font-bold text-white mb-20 neon-text">
        Our Sponsors
      </h2>

      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          className="flex gap-16 w-max"
          animate={{
            x: paused ? 0 : ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {[...sponsors, ...sponsors].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2 }}
              className="flex flex-col items-center cursor-pointer"
            >
              <img
                src={s.logo}
                alt={s.name}
                className="h-16 md:h-20 px-10 object-contain"
              />
              <p className="text-gray-300 mt-2">{s.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Sponsor