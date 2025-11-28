import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatbotWidget from './components/ChatbotWidget'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Academy from './pages/Academy'
import About from './pages/About'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', position: 'relative', paddingBottom: 60 }}>
      <Navbar />
      <main style={{ paddingBottom: 60 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  )
}
