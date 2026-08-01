import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WhatsAppCTA from './components/WhatsAppCTA'
import Footer from './components/Footer'
import JokeGenerator from './pages/JokeGenerator'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gradient-to-b from-primary to-secondary">
              <Header mobileMenuOpen={false} setMobileMenuOpen={() => {}} />
              <Hero />
              <Services />
              <WhatsAppCTA />
              <Footer />
            </div>
          }
        />
        <Route path="/joke-generator" element={<JokeGenerator />} />
      </Routes>
    </Router>
  )
}

export default App
