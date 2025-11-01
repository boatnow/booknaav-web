import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import SignInModal from './SignInModal'
import PartnerModal from './PartnerModal'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [showSignIn, setShowSignIn] = useState(false)
  const [showPartner, setShowPartner] = useState(false)

  const handleSignIn = (formData) => {
    console.log('Sign In:', formData)
    // Handle sign in logic here
  }

  const handlePartner = (formData) => {
    console.log('Partner Application:', formData)
    // Handle partner signup logic here
  }

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <div className="logo-badge">B</div>
            <div className="brand-text">
              <strong>BookNaav</strong>
              <small>Boat Rentals India</small>
            </div>
          </div>
          <nav className={`nav-links ${open ? 'open' : ''}`}>
            <a href="#home">Home</a>
            <a href="#services">Book Activities</a>
            <a href="#trips">My Trips</a>
            <button
              className="link-accent nav-link-button"
              onClick={() => setShowPartner(true)}
            >
              Partner With Us
            </button>
            <button
              className="btn btn-outline"
              onClick={() => setShowSignIn(true)}
            >
              Sign In
            </button>
          </nav>
          <button className="hamburger" onClick={() => setOpen(!open)}>
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>
      <SignInModal
        isOpen={showSignIn}
        onClose={() => setShowSignIn(false)}
        onSubmit={handleSignIn}
      />
      <PartnerModal
        isOpen={showPartner}
        onClose={() => setShowPartner(false)}
        onSubmit={handlePartner}
      />
    </>
  )
}

