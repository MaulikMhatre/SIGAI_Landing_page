"use client"
import React, { Suspense } from 'react'
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation'
import {Canvas} from '@react-three/fiber'
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import VantaBackground from '@/components/VantaBackground'

// function Model({ url }) {
//   const { scene } = useGLTF(url);
//   return <primitive object={scene} scale={1.3} />;
// }
function Model({ url }) {
  const { scene } = useGLTF(url)
  const ref = useRef()
  const direction = useRef(1)
  const angle = useRef(0)

  useFrame((_, delta) => {
    angle.current += delta * 0.5 * direction.current
    if (angle.current > Math.PI * 0.5) direction.current = -1
    if (angle.current < -Math.PI * 0.5) direction.current = 1
    ref.current.rotation.y = angle.current
  })

  return <primitive ref={ref} object={scene} scale={1.3} />
}

const AIBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Neural network nodes */}
    {[
      { cx: "8%", cy: "15%", r: 4 }, { cx: "18%", cy: "40%", r: 3 },
      { cx: "5%", cy: "65%", r: 5 }, { cx: "22%", cy: "80%", r: 3 },
      { cx: "88%", cy: "20%", r: 4 }, { cx: "92%", cy: "55%", r: 3 },
      { cx: "78%", cy: "75%", r: 5 }, { cx: "85%", cy: "90%", r: 3 },
    ].map((node, i) => (
      <svg key={i} className="absolute inset-0 w-full h-full">
        <circle cx={node.cx} cy={node.cy} r={node.r} fill="none"
          stroke="#64c3fa" strokeWidth="1" opacity="0.7" />
        <circle cx={node.cx} cy={node.cy} r={node.r - 1} fill="#64c3fa" opacity="0.2" />
      </svg>
    ))}

    {/* Connecting lines between nodes */}
    <svg className="absolute inset-0 w-full h-full">
      <line x1="8%" y1="15%" x2="18%" y2="40%" stroke="#3a8fff" strokeWidth="0.5" opacity="0.25" />
      <line x1="18%" y1="40%" x2="5%" y2="65%" stroke="#3a8fff" strokeWidth="0.5" opacity="0.25" />
      <line x1="5%" y1="65%" x2="22%" y2="80%" stroke="#3a8fff" strokeWidth="0.5" opacity="0.25" />
      <line x1="88%" y1="20%" x2="92%" y2="55%" stroke="#3a8fff" strokeWidth="0.5" opacity="0.25" />
      <line x1="92%" y1="55%" x2="78%" y2="75%" stroke="#3a8fff" strokeWidth="0.5" opacity="0.25" />
      <line x1="78%" y1="75%" x2="85%" y2="90%" stroke="#3a8fff" strokeWidth="0.5" opacity="0.25" />
      <line x1="8%" y1="15%" x2="88%" y2="20%" stroke="#64c3fa" strokeWidth="0.3" opacity="0.12" />
      <line x1="5%" y1="65%" x2="78%" y2="75%" stroke="#64c3fa" strokeWidth="0.3" opacity="0.12" />
    </svg>

    {/* Floating AI keywords */}
    {[
      { text: "NEURAL NET", x: "3%", y: "10%", size: "10px" },
      { text: "DEEP LEARNING", x: "75%", y: "8%", size: "10px" },
      { text: "∑ W·X + b", x: "2%", y: "48%", size: "11px" },
      { text: "BACKPROP", x: "80%", y: "45%", size: "10px" },
      { text: "TRANSFORMER", x: "4%", y: "88%", size: "10px" },
      { text: "∂L/∂W", x: "82%", y: "85%", size: "11px" },
    ].map((item, i) => (
      <span key={i} className="absolute font-mono text-[#3a8fff] opacity-40 tracking-widest uppercase"
        style={{ left: item.x, top: item.y, fontSize: item.size }}>
        {item.text}
      </span>
    ))}

    {/* Binary / hex strips */}
    <div className="absolute left-[1%] top-[20%] flex flex-col gap-1 opacity-20">
      {["01101", "10010", "11001", "00110", "10101"].map((b, i) => (
        <span key={i} className="font-mono text-[9px] text-[#64c3fa] tracking-widest">{b}</span>
      ))}
    </div>
    <div className="absolute right-[1%] top-[55%] flex flex-col gap-1 opacity-20">
      {["11010", "00101", "10011", "01100", "11100"].map((b, i) => (
        <span key={i} className="font-mono text-[9px] text-[#64c3fa] tracking-widest">{b}</span>
      ))}
    </div>

    {/* Corner bracket accents */}
    <svg className="absolute top-4 left-4 w-10 h-10 opacity-40">
      <path d="M10 0 L0 0 L0 10" fill="none" stroke="#ffffff" strokeWidth="1.5" />
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

const Home = () => {
  
  return (
    <div
      className="w-full min-h-screen overflow-x-hidden bg-black text-white"
    >
      
      <section className="relative w-full min-h-screen overflow-hidden">
  <VantaBackground dotHex={0x3a5ff} lineHex={0x3a5ff}>
    {/* Flex container to align text left and image right */}
        <div className="relative flex flex-col md:flex-row items-center justify-between min-h-screen max-w-6xl mx-auto px-6 py-16 md:py-0 gap-8 md:gap-0">
      
      {/* Left: Text */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 text-left z-10 mt-12 md:mt-0"
      >
        {/* <p className="mb-5 neon-text mt-30 text-4xl sm:text-5xl md:text-5xl font-bold text-white">
          DJSCE&apos;s Official Student Chapter
        </p> */}
              <p
                className="mb-4 neon-text text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                DJSCE&apos;s Official<br className="hidden sm:block" /> Student Chapter
              </p>
        {/* <p className="text-[#64c3fa] font-light font-sans text-3xl sm:text-4xl text-outline2 mb-8">
          ACM Special Interest Group On Artificial Intelligence (SIGAI)
        </p> */}
              <p
                className="text-[#64c3fa] font-light text-xl sm:text-2xl md:text-3xl text-outline2 mb-8 leading-snug"
                style={{ fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.03em' }}
              >
                ACM Special Interest Group On<br className="hidden sm:block" /> Artificial Intelligence (SIGAI)
              </p>

        <div className="text-2xl sm:text-3xl font-mono text-[#64c3fa] text-outline">
          <TypeAnimation
            sequence={[
              "IF YOUR MIND CAN THINK, SO CAN MINE!",
              1500,
              "",
              500,
            ]}
            wrapper="span"
            speed={20}
            repeat={Infinity}
            className="text-secondary"
          />
        </div>
      </motion.div>

      {/* Right: Image */}
      {/* <motion.img
        src="/layer2.png"  
        alt="AI Robot"
        className="w-[40%] md:w-[35%] object-contain"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      /> */}

       {/* Right: 3D Model */}
          <motion.div
              className="relative w-full md:w-[55%] h-[420px] sm:h-[500px] md:h-[700px] flex items-center justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
          {/* Glow layers */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none z-0"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(100, 195, 250, 0.55) 0%, rgba(58, 95, 255, 0.35) 40%, transparent 70%)',
                  filter: 'blur(24px)',
                  transform: 'scale(1.1)',
                }}
              />
              <div
                className="absolute inset-0 rounded-full pointer-events-none z-0"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(100, 195, 250, 0.30) 0%, rgba(58, 95, 255, 0.20) 50%, transparent 70%)',
                  filter: 'blur(48px)',
                  animation: 'pulse-glow 3s ease-in-out infinite',
                }}
              />

            {/* <Canvas>
              <ambientLight intensity={0.8} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <Suspense fallback={null}>
                <Model url="/bot2.glb" />
              </Suspense>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.0} />
            </Canvas>
          </motion.div> */}
          {/* Canvas */}
              <div className="relative w-full h-full z-10">
                <Canvas camera={{ position: [0, 0, 2.2], fov: 55 }}>
                  <ambientLight intensity={1.5} />
                  <directionalLight position={[5, 5, 5]} intensity={2} />
                  {/* Blue tinted point light to match glow */}
                    <pointLight position={[0, 0, 2]} intensity={3} color="#64c3fa" />
                    <pointLight position={[0, 2, 1]} intensity={2} color="#3a8fff" />
                    <pointLight position={[-2, -1, 1]} intensity={1.5} color="#64c3fa" />                  
                    <Suspense fallback={null}>
                    <Model url="/bot2.glb" />
                  </Suspense>
                  <OrbitControls enableZoom={false} autoRotate={false} />
                </Canvas>
              </div>
            </motion.div>
    </div>
  </VantaBackground>
</section>

      
      <div className='relative isolate bg-gradient-to-b from-black via-[#011a28]/80 to-black'>
        <AIBackground/>
        {/* abt n vision sec */}
      <motion.section
        className="relative w-full pb-20 mt-10"
        >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-5 items-center">
          <motion.h2
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.4 }}
            className="text-4xl md:text-5xl primary-font font-bold neon-text"
          >
            About Us
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ amount: 0.4 }}
            className="relative p-6 md:p-8 bg-white/5 backdrop-blur-md border border-white/10"
          >
            <p className="text-base sec-font md:text-lg leading-relaxed text-gray-200 text-justify">
              DJS ACM SIGAI (Special Interest Group on Artificial Intelligence) is a new student chapter founded by Dwarkadas J. Sanghvi College of Engineering students in the Artificial Intelligence and Machine Learning (AI&ML) department. SIGAI is affiliated with the Association for Computing Machinery (ACM), a U.S.-based non-profit dedicated to education in the computing field. Our student chapter's mission is to promote and support the development and application of AI principles and techniques throughout the computing industry.
            </p>
          </motion.div>
        </div>
      </motion.section>

      

      <motion.section
className="relative w-full pb-20 mt-10"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-5 items-center">
          
          <motion.h2
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.4 }}
            className="text-4xl md:text-5xl primary-font font-bold neon-text text-right 
                      order-1 md:order-2"  
          >
            Our Vision
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.4 }}
            className="relative p-6  md:p-8 bg-white/5 backdrop-blur-md border border-white/10 
                      order-2 md:order-1"   
          >
            <p className="text-base sec-font md:text-lg leading-relaxed text-gray-200 text-justify" >
              We strive to enable students to gain knowledge, skills and develop as a community by introducing them to the rapidly expanding and increasingly interdisciplinary field of Artificial Intelligence, Machine Learning and Deep Learning through a series of seminars, skill-building workshops, and other events spread out over the course of the year.
            </p>
          </motion.div>
        </div>
      </motion.section>
      </div>
      {/* <Sponsor/> */}

      {/* Pulse glow animation keyframe */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600&family=Share+Tech+Mono&display=swap');

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
}

export default Home
