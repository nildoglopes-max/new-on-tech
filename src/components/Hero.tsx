export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="text-center space-y-6 animate-slideUp">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Bem-vindo à <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">Nylox Tech</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Soluções digitais modernas, automação inteligente e presença online profissional para seu negócio
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          <button className="btn-primary">
            Começar Agora
          </button>
          <button className="btn-secondary">
            Saiba Mais
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto text-sm md:text-base">
          <div className="card">
            <div className="text-3xl mb-2">⚡</div>
            <p className="font-semibold">Rápido</p>
          </div>
          <div className="card">
            <div className="text-3xl mb-2">🔒</div>
            <p className="font-semibold">Seguro</p>
          </div>
          <div className="card">
            <div className="text-3xl mb-2">📱</div>
            <p className="font-semibold">Responsivo</p>
          </div>
        </div>
      </div>
    </section>
  )
}
