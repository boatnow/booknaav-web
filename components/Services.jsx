import { motion } from 'framer-motion'
import { FaShip, FaUmbrellaBeach, FaFish } from 'react-icons/fa'
import { useRef } from 'react'

const data = [
  { id: 1, icon: <FaShip />, title: 'Boat Rentals', desc: 'Quick booking across 100+ harbors.' },
  { id: 2, icon: <FaUmbrellaBeach />, title: 'Yacht Trips', desc: 'Curated sunset and party trips.' },
  { id: 3, icon: <FaFish />, title: 'Fishing Trips', desc: 'Local guides & equipment included.' }
]

function useTilt() {
  const ref = useRef(null)

  function handleMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rx = (py - 0.5) * 12
    const ry = (px - 0.5) * -12
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`
  }

  function reset() {
    const el = ref.current
    if (!el) return
    el.style.transform = ''
  }

  return { ref, handleMove, reset }
}

export default function Services() {
  return (
    <section id="services" className="services container">
      <motion.h2 initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        Experiences & Services
      </motion.h2>
      <p className="services-sub">Choose the vibe: calm sunset cruise, party yacht, or fishing with local captains.</p>
      <div className="card-grid">
        {data.map((item, i) => (
          <ServiceCard key={item.id} item={item} i={i} />
        ))}
      </div>
    </section>
  )
}

function ServiceCard({ item, i }) {
  const { ref, handleMove, reset } = useTilt()
  return (
    <motion.div
      className="service-card"
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      initial={{ y: 20, opacity: 0, scale: 0.98 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 * i + 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="icon-wrap">{item.icon}</div>
      <h4>{item.title}</h4>
      <p>{item.desc}</p>
      <a className="card-link">Book →</a>
    </motion.div>
  )
}

