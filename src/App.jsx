import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Equipment from './pages/Equipment'
import Clients from './pages/Clients'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <ScrollProgress />
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />

      {/* WhatsApp floating widget */}
      <WhatsAppButton />
    </>
  )
}

export default App