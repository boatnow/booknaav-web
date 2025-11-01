import { useState } from 'react'
import { useRouter } from 'next/router'
import { FiMenu, FiX } from 'react-icons/fi'
import SignInModal from './SignInModal'
import PartnerModal from './PartnerModal'

export default function Navbar() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [showSignIn, setShowSignIn] = useState(false)
  const [showPartner, setShowPartner] = useState(false)

  const handleSignIn = (formData) => {
    console.log('Sign In:', formData)
    // Handle sign in logic here (e.g., API call, authentication)
    
    // Simulate successful sign-in and redirect to dashboard
    // In production, you would verify credentials first
    if (formData.email && formData.password) {
      // Close modal
      setShowSignIn(false)
      
      // Redirect to dashboard after a short delay for better UX
      setTimeout(() => {
        router.push('/dashboard')
      }, 300)
    }
  }

  const handlePartner = (formData) => {
    console.log('Partner Application:', formData)
    // Handle partner signup logic here
  }

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <div 
            className="brand" 
            onClick={() => router.push('/')}
            style={{ cursor: 'pointer' }}
          >
            <div className="logo-badge">B</div>
            <div className="brand-text">
              <strong>BookNaav</strong>
              <small>Boat Rentals India</small>
            </div>
          </div>
          <nav className={`nav-links ${open ? 'open' : ''}`}>
            <a 
              href="/" 
              onClick={(e) => {
                e.preventDefault()
                router.push('/')
              }}
            >
              Home
            </a>
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

