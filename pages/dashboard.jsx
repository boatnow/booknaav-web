import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Dynamically import UserDashboard to handle client-side component
const UserDashboard = dynamic(() => import('../src/components/UserDashboard'), {
  ssr: false
})

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard — BookNaav</title>
        <meta name="description" content="Manage your bookings and trips" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="page-wrap">
        <Navbar />
        <main>
          <UserDashboard />
        </main>
        <Footer />
      </div>
    </>
  )
}

