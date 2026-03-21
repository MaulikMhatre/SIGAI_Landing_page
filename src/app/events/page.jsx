"use client"

import events from '@/content/events'
import EventsCard from '@/components/EventsCard'
import { motion } from 'framer-motion'

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

// single card animation
const cardVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 240, damping: 18 },
  },
}

// year animation
const yearVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const Events = () => {
  const groupedEvents = events.reduce((acc, event) => {
    (acc[event.year] ||= []).push(event)
    return acc
  }, {})

  const years = Object.keys(groupedEvents)

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
    <div className="pr-4 sm:pr-8 py-12 grad-bg min-h-screen text-white relative pt-35">
        <AIBackground/>
      <motion.h1
        className="text-5xl font-extrabold primary-font text-center mb-12 text-[#67c6fe]"
        style={{ textShadow: '2px 2px 0px white' }}
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        EVENTS
      </motion.h1>

      {years.map((year, sectionIdx) => (
        <section key={year} className="mb-20 relative flex flex-col md:flex-row">
          
          <motion.div
            className="sticky pt-70 -translate-y-1/2  w-10 shrink-0 hidden md:flex pr-15"
            variants={yearVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl primary-font font-bold text-gray-400 transform -rotate-90 origin-center whitespace-nowrap leading-none pb-10">
              {year}
            </h2>
          </motion.div>

          <div className="flex-1">
            <motion.h2
              className="text-2xl font-bold text-gray-400 mb-6 md:hidden text-center"
              variants={yearVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {year}
            </motion.h2>

            <motion.div
              className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pl-4"
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: false }}
            >
              {groupedEvents[year].map((event, idx) => (
                <motion.div
                  key={event.id}
                  variants={cardVariants}
                  transition={{
                    type: "spring",
                    stiffness: 240,
                    damping: 18,
                    delay: idx * 0.05 + sectionIdx * 0.05,
                  }}
                  viewport={{ amount: 0.35, once: false }}
                  initial="hidden"
                  whileInView="visible"
                >
                  <EventsCard
                    key={event.id}
                    id={event.id}
                    image={event.image}
                    name={event.name}
                    description={event.description}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  )
}

export default Events
