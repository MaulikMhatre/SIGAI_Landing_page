"use client"
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Core2023_24 = () => {
  const faculty = [
    { name: "Dr. Aruna Gawade", role: "Faculty Coordinator", img: "/team/2024-25/aruna_gawade.png",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com", },
    { name: "Komal Patil", role: "Faculty Coordinator", img: "/team/2023-24/komal-patil.jpg",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com", },
    { name: "Nilesh Rathod", role: "Faculty Coordinator", img: "/team/2023-24/nilesh-rathod.jpg",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com", },
  ];

  const core = [
    { name: "Krish", role: "Chairperson", img: "/team/2023-24/Krish.png",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com", },
    { name: "Mahir", role: "Co-Chairperson", img: "/team/2023-24/mahir.jpg",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com", },
    { name: "Vividha", role: "Admin", img: "/team/2023-24/vividha.jpg",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",},
    { name: "Neel", role: "Secretary", img: "/team/2023-24/neel.jpg",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",},
    { name: "Naman", role: "Treasurer", img: "/team/2023-24/naman.jpg",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",},
    { name: "Vallavi", role: "VCP Creatives", img: "/team/2023-24/vallavi.jpg",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com", },
    { name: "Ammar", role: "VCP Marketing", img: "/team/2023-24/ammar.jpg",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com", },
    { name: "Darshil", role: "VCP Infotech Web/App", img: "/team/2023-24/Darshil.jpg",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",},
    { name: "Devansh", role: "VCP Technical", img: "/team/2023-24/Devansh.jpg",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",},
    { name: "Shruti", role: "VCP Publicity", img: "/team/2023-24/Shruti.jpg",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",},
    { name: "Abhay", role: "VCP Editorial", img: "/team/2023-24/abhay.jpeg",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com", },
    { name: "Parth", role: "VCP Logistics", img: "/team/2023-24/parth.jpg",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com", },
    { name: "Shrenik", role: "VCP Logistics", img: "/team/2023-24/shrenik.jpeg",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",},
    { name: "Jahaan", role: "VCP Editorial", img: "/team/2023-24/jahaan.jpg",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",},
    { name: "Lazeen", role: "VCP Events", img: "/team/2023-24/Lazeen.jpg",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",},
    { name: "Vedant", role: "VCP Creatives", img: "/team/2023-24/Vedant.jpg",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",},
  ];

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
        <circle cx={node.cx} cy={node.cy} r={node.r} fill="none"
          stroke="#64c3fa" strokeWidth="1" opacity="0.7" />
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
      { text: "NEURAL NET", x: "2%", y: "8%" },
      { text: "DEEP LEARNING", x: "76%", y: "6%" },
      { text: "∑ W·X + b", x: "2%", y: "45%" },
      { text: "BACKPROP", x: "80%", y: "42%" },
      { text: "TRANSFORMER", x: "3%", y: "88%" },
      { text: "∂L/∂W", x: "83%", y: "86%" },
    ].map((item, i) => (
      <span key={i} className="absolute font-mono text-[10px] text-[#3a8fff] opacity-40 tracking-widest uppercase"
        style={{ left: item.x, top: item.y }}>
        {item.text}
      </span>
    ))}

    {/* Binary strips */}
    <div className="absolute left-[1%] top-[20%] flex flex-col gap-1 opacity-25">
      {["01101", "10010", "11001", "00110", "10101"].map((b, i) => (
        <span key={i} className="font-mono text-[9px] text-[#64c3fa] tracking-widest">{b}</span>
      ))}
    </div>
    <div className="absolute right-[1%] top-[55%] flex flex-col gap-1 opacity-25">
      {["11010", "00101", "10011", "01100", "11100"].map((b, i) => (
        <span key={i} className="font-mono text-[9px] text-[#64c3fa] tracking-widest">{b}</span>
      ))}
    </div>

    {/* Corner brackets */}
    <svg className="absolute top-4 left-4 w-10 h-10 opacity-40">
      <path d="M10 0 L0 0 L0 10" fill="none" stroke="#64c3fa" strokeWidth="1.5" />
    </svg>
    <svg className="absolute top-4 right-4 w-10 h-10 opacity-40">
      <path d="M0 0 L10 0 L10 10" fill="none" stroke="#64c3fa" strokeWidth="1.5" />
    </svg>
    <svg className="absolute bottom-4 left-4 w-10 h-10 opacity-40">
      <path d="M0 0 L0 10 L10 10" fill="none" stroke="#64c3fa" strokeWidth="1.5" />
    </svg>
    <svg className="absolute bottom-4 right-4 w-10 h-10 opacity-40">
      <path d="M10 0 L10 10 L0 10" fill="none" stroke="#64c3fa" strokeWidth="1.5" />
    </svg>
  </div>
)

  return (
    
        <div className="grad-bg min-h-screen text-white flex flex-col items-center pt-24 pb-12">
          <AIBackground/>
          {/* Faculty Sec */}
          <h2 className="text-4xl text-center primary-font font-bold mb-8 w-full">Faculty Coordinators</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {faculty.map((person, index) => (
              <motion.div
                key={index}
                className="bg-[#0D1B2A] p-4 rounded-2xl shadow-lg text-center inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
              <div className="relative group">
                <Image
                  src={person.img}
                  alt={person.name}
                  height={256}
                  width={256}
                  className="w-64 h-72 object-cover rounded-xl"
                />


                <div className="absolute bottom-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={person.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-3xl"
                  >
                    <FontAwesomeIcon
                      className="hover:text-[#ff4f84] transition-colors duration-200"
                      icon={faInstagram}
                    />
                  </a>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-3xl"
                  >
                    <FontAwesomeIcon
                      className="hover:text-[#4fa1ff] transition-colors duration-200"
                      icon={faLinkedin}
                    />
                  </a>
                </div>
              </div>
              <h2 className="text-lg primary-font font-semibold">{person.name}</h2>
              <p className="text-white-600 sec-font">{person.role}</p>
            </motion.div>
    
            ))}
          </div>
    
          {/* core sec */}
          <h2 className="text-4xl font-bold mb-8 primary-font">Core Committee</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {core.map((person, index) => (
              <motion.div
                key={index}
                className="bg-[#0D1B2A] p-4 rounded-2xl shadow-lg text-center inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="relative group">
                  <Image
                    src={person.img}
                    alt={person.name}
                    height={256}
                    width={256}
                    className="w-64 h-72 object-cover rounded-xl"
                  />
    

                  <div className="absolute bottom-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={person.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-3xl"
                    >
                      <FontAwesomeIcon
                        className="hover:text-[#ff4f84] transition-colors duration-200"
                        icon={faInstagram}
                      />
                    </a>
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-3xl"
                    >
                      <FontAwesomeIcon
                        className="hover:text-[#4fa1ff] transition-colors duration-200"
                        icon={faLinkedin}
                      />
                    </a>
                  </div>
                </div>
                <h2 className="text-lg font-semibold primary-font">{person.name}</h2>
                <p className="text-white-600 sec-font">{person.role}</p>
              </motion.div>
    
            ))}
          </div>
        </div>
      
  );
};

export default Core2023_24;
