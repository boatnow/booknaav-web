import { useEffect, useRef, useState } from 'react'

export default function BookingSection() {
  const bookingRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [searchData, setSearchData] = useState({ 
    from: '', 
    to: '', 
    date: '', 
    passengers: '1' 
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    )
    if (bookingRef.current) observer.observe(bookingRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSearch = () => {
    if (searchData.from && searchData.to && searchData.date) {
      console.log('Search submitted:', searchData)
      // Handle search logic here
    }
  }

  return (
    <section
      id="booking-section"
      ref={bookingRef}
      className={`booking-section ${visible ? 'visible' : ''}`}
    >
      <h2>Find Your Perfect Journey</h2>
      <div className="booking-form">
        <div className="booking-field">
          <label className="booking-label">From</label>
          <div className="booking-input-wrap">
            <input
              type="text"
              placeholder="Departure Port"
              className="booking-input"
              value={searchData.from}
              onChange={(e) => setSearchData({ ...searchData, from: e.target.value })}
            />
            <span className="booking-icon">⚓</span>
          </div>
        </div>
        <div className="booking-field">
          <label className="booking-label">To</label>
          <div className="booking-input-wrap">
            <input
              type="text"
              placeholder="Destination Port"
              className="booking-input"
              value={searchData.to}
              onChange={(e) => setSearchData({ ...searchData, to: e.target.value })}
            />
            <span className="booking-icon">🌊</span>
          </div>
        </div>
        <div className="booking-field">
          <label className="booking-label">Departure</label>
          <input
            type="date"
            className="booking-input"
            value={searchData.date}
            onChange={(e) => setSearchData({ ...searchData, date: e.target.value })}
          />
        </div>
        <div className="booking-field">
          <label className="booking-label">Passengers</label>
          <select
            className="booking-input"
            value={searchData.passengers}
            onChange={(e) => setSearchData({ ...searchData, passengers: e.target.value })}
          >
            <option value="1">1 Passenger</option>
            <option value="2">2 Passengers</option>
            <option value="3">3 Passengers</option>
            <option value="4">4+ Passengers</option>
          </select>
        </div>
        <div className="booking-field booking-cta">
          <button onClick={handleSearch} className="btn btn-primary booking-search-btn">
            🔍 Search Boats
          </button>
        </div>
      </div>
    </section>
  )
}

