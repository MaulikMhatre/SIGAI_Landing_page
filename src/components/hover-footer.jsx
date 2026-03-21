"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TextHoverEffect = ({ text, duration, className }) => {
  const svgRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (svgRef.current && cursor.x !== 0 && cursor.y !== 0) {
      const svgRect = svgRef.current.getBoundingClientRect();
      
      if (svgRect.width > 0 && svgRect.height > 0) {
        const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
        const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;

        // Strict NaN check before updating state
        if (!isNaN(cxPercentage) && !isNaN(cyPercentage)) {
          setMaskPosition({
            cx: `${cxPercentage}%`,
            cy: `${cyPercentage}%`,
          });
        }
      }
    }
  }, [cursor]);

  const handleMove = (e) => {
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    
    if (clientX && clientY) {
      setCursor({ x: clientX, y: clientY });
    }
  };

  const textClasses = "fill-transparent font-bold text-5xl md:text-7xl transition-all duration-300";

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 500 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMove}
      onTouchStart={() => setHovered(true)}
      onTouchMove={handleMove}
      onTouchEnd={() => setHovered(false)}
      className={`select-none uppercase cursor-pointer ${className || ""}`}
    >
      <defs>
        <linearGradient id="textGradient" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#eab308" />
          <stop offset="25%" stopColor="#ef4444" />
          <stop offset="50%" stopColor="#80eeb4" />
          <stop offset="75%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          key="revealMask" // Added key for stable re-renders
          gradientUnits="userSpaceOnUse"
          r="20%"
          // Logic Fix: Use a static object if maskPosition isn't ready or hovered is false
          animate={isMounted && hovered && maskPosition.cx !== "50%" ? maskPosition : {
            cx: ["10%", "90%", "50%", "10%"],
            cy: ["50%", "20%", "80%", "50%"],
          }}
          transition={{ 
            duration: hovered ? (duration ?? 0.1) : 6, 
            ease: hovered ? "easeOut" : "easeInOut",
            repeat: hovered ? 0 : Infinity 
          }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        
        <mask id="textMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
        </mask>
      </defs>

      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" strokeWidth="0.3" className={`${textClasses} stroke-neutral-800`} style={{ opacity: hovered ? 0.4 : 0.2 }}>
        {text}
      </text>

      <motion.text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" strokeWidth="0.3" className={`${textClasses} stroke-[#3ca2fa]`} initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }} animate={{ strokeDashoffset: 0 }} transition={{ duration: 4, ease: "easeInOut" }}>
        {text}
      </motion.text>

      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" stroke="url(#textGradient)" strokeWidth="0.5" mask="url(#textMask)" className={textClasses}>
        {text}
      </text>
    </svg>
  );
};

export const FooterBackgroundGradient = () => (
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #000000 50%, #3ca2fa11 100%)",
    }}
  />
);