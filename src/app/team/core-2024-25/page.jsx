"use client";
import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";

const AIBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Neural network nodes */}
    {[
      { cx: "5%", cy: "10%", r: 4 }, { cx: "15%", cy: "35%", r: 3 },
      { cx: "8%", cy: "60%", r: 5 }, { cx: "20%", cy: "85%", r: 3 },
      { cx: "90%", cy: "15%", r: 4 }, { cx: "95%", cy: "50%", r: 3 },
      { cx: "82%", cy: "72%", r: 5 }, { cx: "88%", cy: "92%", r: 3 },
    ].map((node, i) => (
      <svg key={i} className="absolute inset-0 w-full h-full">
        <circle cx={node.cx} cy={node.cy} r={node.r} fill="none" stroke="#64c3fa" strokeWidth="1" opacity="0.7" />
        <circle cx={node.cx} cy={node.cy} r={node.r - 1} fill="#64c3fa" opacity="0.3" />
      </svg>
    ))}

    {/* Connecting lines */}
    <svg className="absolute inset-0 w-full h-full">
      <line x1="5%" y1="10%" x2="15%" y2="35%" stroke="#3a8fff" strokeWidth="0.5" opacity="0.25" />
      <line x1="15%" y1="35%" x2="8%" y2="60%" stroke="#3a8fff" strokeWidth="0.5" opacity="0.25" />
      <line x1="8%" y1="60%" x2="20%" y2="85%" stroke="#3a8fff" strokeWidth="0.5" opacity="0.25" />
      <line x1="90%" y1="15%" x2="95%" y2="50%" stroke="#3a8fff" strokeWidth="0.5" opacity="0.25" />
      <line x1="95%" y1="50%" x2="82%" y2="72%" stroke="#3a8fff" strokeWidth="0.5" opacity="0.25" />
      <line x1="82%" y1="72%" x2="88%" y2="92%" stroke="#3a8fff" strokeWidth="0.5" opacity="0.25" />
      <line x1="5%" y1="10%" x2="90%" y2="15%" stroke="#64c3fa" strokeWidth="0.3" opacity="0.12" />
      <line x1="8%" y1="60%" x2="82%" y2="72%" stroke="#64c3fa" strokeWidth="0.3" opacity="0.12" />
    </svg>

    {/* Floating AI keywords */}
    {[
      { text: "LEGACY_NODE", x: "2%", y: "8%" },
      { text: "RECURRENT NET", x: "76%", y: "6%" },
      { text: "VERSION_24.25", x: "2%", y: "45%" },
      { text: "OPTIMIZER", x: "80%", y: "42%" },
      { text: "ARCHITECTURE", x: "3%", y: "88%" },
      { text: "LOSS_MIN", x: "83%", y: "86%" },
    ].map((item, i) => (
      <span key={i} className="absolute font-mono text-[10px] text-[#3a8fff] opacity-40 tracking-widest uppercase"
        style={{ left: item.x, top: item.y }}>
        {item.text}
      </span>
    ))}
    {/* Binary strips */}
    <div className="absolute left-[1%] top-[20%] flex flex-col gap-1 opacity-25">
      {["11011", "00100", "10110", "01001", "11101"].map((b, i) => (
        <span key={i} className="font-mono text-[9px] text-[#64c3fa] tracking-widest">{b}</span>
      ))}
    </div>
    {/* Corner brackets */}
    <svg className="absolute top-4 left-4 w-10 h-10 opacity-40"><path d="M10 0 L0 0 L0 10" fill="none" stroke="#64c3fa" strokeWidth="1.5" /></svg>
    <svg className="absolute top-4 right-4 w-10 h-10 opacity-40"><path d="M0 0 L10 0 L10 10" fill="none" stroke="#64c3fa" strokeWidth="1.5" /></svg>
    <svg className="absolute bottom-4 left-4 w-10 h-10 opacity-40"><path d="M0 0 L0 10 L10 10" fill="none" stroke="#64c3fa" strokeWidth="1.5" /></svg>
    <svg className="absolute bottom-4 right-4 w-10 h-10 opacity-40"><path d="M10 0 L10 10 L0 10" fill="none" stroke="#64c3fa" strokeWidth="1.5" /></svg>
  </div>
);

const MemberCard = ({ person, delay = 0 }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const handleInteraction = (clientX, clientY) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = clientX - rect.left - rect.width / 2;
    const y = clientY - rect.top - rect.height / 2;
    setRotation({ x: -(y / rect.height) * 12, y: (x / rect.width) * 12 });
  };

  const stopInteraction = () => {
    setRotation({ x: 0, y: 0 });
    setIsActive(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={(e) => handleInteraction(e.clientX, e.clientY)}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={stopInteraction}
      onTouchStart={() => setIsActive(true)}
      onTouchMove={(e) => handleInteraction(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchEnd={stopInteraction}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      animate={{ 
        rotateX: isActive ? rotation.x : [0, 1.2, -1.2, 0],
        rotateY: isActive ? rotation.y : [0, -1.2, 1.2, 0],
        y: isActive ? -5 : [0, -10, 0], 
        scale: isActive ? 1.05 : 1 
      }}
      transition={{ 
        y: isActive ? { type: "spring", stiffness: 300, damping: 20 } : { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay * 0.2 },
        rotateX: isActive ? { type: "spring", stiffness: 300, damping: 20 } : { duration: 6, repeat: Infinity, ease: "easeInOut", delay: delay * 0.1 },
        rotateY: isActive ? { type: "spring", stiffness: 300, damping: 20 } : { duration: 6, repeat: Infinity, ease: "easeInOut", delay: delay * 0.3 },
        scale: { type: "spring", stiffness: 300, damping: 20 }
      }}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      className="relative bg-[#0D1B2A] p-4 rounded-2xl shadow-2xl w-64 h-[385px] group cursor-pointer border border-white/5 overflow-hidden"
    >
      <div className="relative h-full flex flex-col items-center justify-between" style={{ transform: "translateZ(30px)" }}>
        <div className="relative w-full h-64 overflow-hidden rounded-xl bg-black/20 shadow-inner">
          <Image src={person.img} alt={person.name} fill sizes="256px" className="object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="hidden md:flex absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center gap-6">
            <a href={person.instagram} target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-[#ff4f84] transition-transform hover:scale-125"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-[#4fa1ff] transition-transform hover:scale-125"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
        <div className="text-center w-full mt-3">
          <h3 className="text-white font-bold text-lg leading-tight truncate px-2">{person.name}</h3>
          <p className="text-[#64c3fa] text-[10px] font-bold uppercase tracking-widest mt-1 opacity-80">{person.role}</p>
          <div className="flex md:hidden items-center justify-center gap-6 mt-3 pt-2 border-t border-white/5">
            <a href={person.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 active:text-[#ff4f84] text-xl"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 active:text-[#4fa1ff] text-xl"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
      </div>
      <motion.div className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#64c3fa] to-transparent" animate={{ opacity: isActive ? 1 : 0.3 }} />
    </motion.div>
  );
};

const Core2024_25 = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const faculty = [
    { name: "Dr. Aruna Gawade", role: "Faculty Coordinator", img: "/team/2024-25/aruna_gawade.png", instagram: "#", linkedin: "#" },
    { name: "Prof. Ragini Mishra", role: "Faculty Coordinator", img: "/team/2024-25/ragini_mishra.png", instagram: "#", linkedin: "#" },
  ];

  const core = [
    { name: "Vinit Solanki", role: "Chairperson", img: "/team/2024-25/vinit_solanki.png", instagram: "#", linkedin: "#" },
    { name: "Meghansh Vora", role: "Joint Chairperson", img: "/team/2024-25/meghansh_vora.png", instagram: "#", linkedin: "#" },
    { name: "Aagam Ratadia", role: "Admin", img: "/team/2024-25/aagam_ratadia.png", instagram: "#", linkedin: "#" },
    { name: "Divya Viradiya", role: "Admin", img: "/team/2024-25/divya_viradiya.png", instagram: "#", linkedin: "#" },
    { name: "Rasika Adiseshan", role: "Secretary", img: "/team/2024-25/rasika_adiseshan.png", instagram: "#", linkedin: "#" },
    { name: "Krish Bhimani", role: "VCP Finance", img: "/team/2024-25/krish_bhimani.png", instagram: "#", linkedin: "#" },
    { name: "Yash Loriya", role: "VCP Technical", img: "/team/2024-25/yash_loriya.png", instagram: "#", linkedin: "#" },
    { name: "Yashvi Savla", role: "VCP Creatives", img: "/team/2024-25/yashvi_savla.png", instagram: "#", linkedin: "#" },
    { name: "Jinnal Raghwani", role: "VCP Creatives", img: "/team/2024-25/jinal_raghwani.png", instagram: "#", linkedin: "#" },
    { name: "Prassidhi Agarwal", role: "VCP Editorial", img: "/team/2024-25/prassidhi_agarwal.png", instagram: "#", linkedin: "#" },
    { name: "Rajvi Shah", role: "VCP Events", img: "/team/2024-25/rajvi_shah.png", instagram: "#", linkedin: "#" },
    { name: "Pradnesh Sawatkhedkar", role: "VCP Logistics", img: "/team/2024-25/pradnesh_sawatkhedkar.png", instagram: "#", linkedin: "#" },
    { name: "Priyansh Tank", role: "VCP Logistics", img: "/team/2024-25/priyansh_tank.png", instagram: "#", linkedin: "#" },
    { name: "Ammaar Khan", role: "VCP Marketing", img: "/team/2024-25/ammar_khan.png", instagram: "#", linkedin: "#" },
    { name: "Daksh Jain", role: "VCP Marketing", img: "/team/2024-25/daksh_jain.png", instagram: "#", linkedin: "#" },
    { name: "Binita Chanpura", role: "VCP Publicity", img: "/team/2024-25/binita_chanpura.png", instagram: "#", linkedin: "#" },
    { name: "Nitika Jain", role: "VCP Publicity", img: "/team/2024-25/nitika_jain.png", instagram: "#", linkedin: "#" },
  ];

  return (
    <div className="grad-bg min-h-screen text-white relative overflow-x-hidden">
      {showContent && <AIBackground />}

      <AnimatePresence>
        {!showContent && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }} className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050a10]">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
              <span className="text-white/30 font-mono block text-xs mb-2 tracking-[0.3em] uppercase italic">history_node_accessed</span>
              <h1 className="text-4xl md:text-6xl font-mono tracking-tight"><span className="text-white">RETRIEVING: </span><span className="text-[#64c3fa] drop-shadow-[0_0_15px_rgba(100,195,250,0.6)]">CORE_2024-25</span></h1>
              <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 0.4, duration: 0.8 }} className="h-[2px] bg-gradient-to-r from-transparent via-[#64c3fa] to-transparent mt-6" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {showContent && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="relative z-10 flex flex-col items-center pt-24 pb-20 px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl text-center primary-font font-extrabold mb-12 uppercase tracking-wide">
            Faculty <span className="text-[#64c3fa]">Coordinators</span>
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-10 mb-28">
            {faculty.map((p, i) => <MemberCard key={`fac-${i}`} person={p} delay={i * 0.2} />)}
          </div>

          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl text-center primary-font font-extrabold mb-12 uppercase tracking-wide">
            Core <span className="text-[#64c3fa]">Committee</span>
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-10 md:gap-16 mb-16">
            {core.slice(0, 2).map((p, i) => <MemberCard key={`top-${i}`} person={p} delay={i * 0.15} />)}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-12">
            {core.slice(2).map((p, i) => <MemberCard key={`core-${i}`} person={p} delay={(i % 4) * 0.1} />)}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Core2024_25;