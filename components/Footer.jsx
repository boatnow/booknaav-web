export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>BookNaav</strong>
          <p>© {new Date().getFullYear()} BookNaav — Boats across India</p>
        </div>
        <div className="socials">
          <a>Privacy</a>
          <a>Terms</a>
          <a>Contact</a>
        </div>
      </div>
    </footer>
  )
}

