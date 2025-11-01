import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import boatAnim from '../animations/boat.json' // place file here (see below)

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1>
            Explore the Seas<br />
            with <span className="accent">BookNaav</span>
          </h1>
          <p className="tagline">जहाज़ में सवार, नई उड़ान के लिए तैयार — Book boats in India with ease.</p>
          <p className="desc">Find local skippers, transparent pricing, and verified vessels — like Uber, but for boats.</p>

          <div className="hero-ctas">
            <button
              className="btn btn-primary"
              onClick={() => {
                const bookingSection = document.getElementById('booking-section')
                if (bookingSection) {
                  bookingSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Book Now
            </button>
            <a className="btn btn-ghost" href="#learn">Learn More</a>
          </div>
        </motion.div>

        <motion.div
          className="hero-card"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <div className="card-inner boat-card">
            <Lottie animationData={boatAnim} loop={true} className="boat-lottie" />
            <div className="card-copy">
              <h3>Boat Rentals</h3>
              <p>Browse and book boats across India's coastlines and rivers. Local captains, verified listings.</p>
              <a className="link">Explore →</a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="waves">
        <svg viewBox="0 0 1200 200" preserveAspectRatio="none">
          <path d="M0,80 C300,150 900,0 1200,80 L1200,200 L0,200 Z" className="wave1" />
          <path d="M0,100 C200,10 1000,190 1200,100 L1200,200 L0,200 Z" className="wave2" />
        </svg>
      </div>
    </section>
  )
}

