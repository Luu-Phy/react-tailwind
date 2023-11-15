import React from "react"
import Analytics from "./components/Analytics"
import Cards from "./components/Cards"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter"
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </>
  )
}

export default Home
