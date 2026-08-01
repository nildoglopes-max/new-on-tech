import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const currentYear = new Date().getFullYear()

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Subscribe:', email)
    setEmail('')
  }

  return (
    <footer className="bg-primary border-t border-secondary py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nylox Tech</h3>
            <p className="text-gray-400 text-sm">
              Transformando ideias em soluções digitais inovadoras.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#hero" className="hover:text-accent transition-colors">Início</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Serviços</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-3 py-2 bg-secondary rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <button type="submit" className="px-4 py-2 bg-accent rounded text-white text-sm font-semibold hover:bg-blue-600 transition-colors">
                Enviar
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-secondary pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Nylox Tech. Todos os direitos reservados.</p>
          <div className="mt-4 flex justify-center gap-4">
            <a href="#" className="hover:text-accent transition-colors">Facebook</a>
            <a href="#" className="hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
