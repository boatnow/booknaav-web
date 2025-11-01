import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BookingSection from '../components/BookingSection'
import Services from '../components/Services'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>BookNaav — Boats & Experiences</title>
        <meta name="description" content="Book boats across India — quick, safe, and local." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="page-wrap">
        <Navbar />
        <main>
          <Hero />
          <BookingSection />
          <Services />
        </main>
        <Footer />
      </div>
    </>
  )
}

