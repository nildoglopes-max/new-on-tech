import { useState } from 'react'

interface HeaderProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  return (
    <header className="fixed w-full bg-primary/95 backdrop-blur-md z-50 border-b border-secondary">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
          🚀 Nylox Tech
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#hero" className="hover:text-accent transition-colors">Início</a>
          <a href="#services" className="hover:text-accent transition-colors">Serviços</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contato</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-secondary border-t border-secondary p-4 space-y-2">
          <a href="#hero" className="block py-2 hover:text-accent">Início</a>
          <a href="#services" className="block py-2 hover:text-accent">Serviços</a>
          <a href="#contact" className="block py-2 hover:text-accent">Contato</a>
        </div>
      )}
    </header>
  )
}
