"use client"
import { useRouter } from 'next/navigation'
const teamCards = [
  { id: "2025-26", href: "/team/core-2025-26", img: "/team/team3.jpg", name: "CORE 2025-26" },
  { id: "2024-25", href: "/team/core-2024-25", img: "/team/team2.jpg", name: "CORE 2024-25" },
  { id: "2023-24", href: "/team/core-2023-24", img: "/team/team1.jpg", name: "CORE 2023-24" },
]
const Team = () => {
  const router = useRouter()
  const handleCardClick = (card) => {
    router.push(card.href)
  }
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
    <div className='grad-bg h-full text-white flex flex-col items-center pt-36 relative'>
      <AIBackground />
      <h1 className='text-5xl text-[#67C6FE] primary-font font-extrabold' style={{ textShadow: '2px 2px 0px white' }}>OUR TEAM</h1>
      <div className='text-5xl font-extrabold text-outline mt-5 w-[60%]'>
        {teamCards.map((card)=>(
          <div
            key={card.id}
            onClick={()=>handleCardClick(card)}
            className="team-box"
            style={{
              backgroundImage:`url(${card.img})`,
              backgroundSize:'100% 100%',
              backgroundRepeat:'no-repeat',
              backgroundPosition:'center',
              backgroundColor:'rgba(0,0,0,0.2)',
              width:'100%',
             
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              border: '8px solid #A89ACD',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
              aspectRatio: '21 / 9',
             
            
            }}
          >
            <h2 className='core-name'>{card.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
