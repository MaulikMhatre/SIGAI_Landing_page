'use client'
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";


export const TeamGradientCard = ({ name, img, onClick, className }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      // Calculate mouse position relative to center of the card
      const x = (e.clientX || e.touches?.[0]?.clientX) - rect.left - rect.width / 2;
      const y = (e.clientY || e.touches?.[0]?.clientY) - rect.top - rect.height / 2;
      // Calculate rotation
      const rotateX = -(y / rect.height) * 10;
      const rotateY = (x / rect.width) * 10;

      setRotation({ x: rotateX, y: rotateY });
    }
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };
  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      className={`relative rounded-[2rem] overflow-hidden cursor-pointer w-full aspect-[16/9] bg-black group ${className || ""}`}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseLeave}
    >
      <div 
        className="absolute inset-0 z-0 transition-transform duration-700 ease-out"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <div className={`absolute inset-0 bg-black/50 transition-colors duration-500 ${isHovered ? 'bg-black/20' : 'bg-black/50'}`} />
      </div>
      {/* Noise Texture Layer */}
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay z-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Dynamic Glow (Moves with mouse) */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, rgba(103, 198, 254, 0.3) 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
        animate={{
          x: rotation.y * 10,
          y: -rotation.x * 10,
        }}
      />
      {/* Interactive Border Light */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] z-30 bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
      {/* Text Content with "Floating" Effect */}
      <div className="relative flex items-center justify-center h-full z-40 p-6 pointer-events-none">
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-7xl font-black text-white text-center tracking-tighter italic"
          style={{ 
            textShadow: "0 20px 40px rgba(0,0,0,0.6)",
            // translateZ makes the text literally pop out of the card
            transform: isMounted ? "translateZ(80px)" : "none" 
          }}
        >
          {name}
        </motion.h2>
      </div>
    </motion.div>
  );
};