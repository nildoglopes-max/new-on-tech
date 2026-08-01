const services = [
  {
    id: 1,
    title: 'Automação WhatsApp',
    description: 'Automatize suas mensagens e atenda clientes 24/7',
    icon: '💬',
    features: ['Respostas automáticas', 'Agendamento', 'CRM integrado']
  },
  {
    id: 2,
    title: 'Desenvolvimento Web',
    description: 'Sites modernos e otimizados para conversão',
    icon: '💻',
    features: ['Responsivo', 'SEO', 'Performance']
  },
  {
    id: 3,
    title: 'Consultoria Digital',
    description: 'Estratégia digital para alavancar seu negócio',
    icon: '📊',
    features: ['Análise', 'Planejamento', 'Implementação']
  },
  {
    id: 4,
    title: 'Social Media',
    description: 'Gerenciamento profissional de suas redes sociais',
    icon: '📱',
    features: ['Conteúdo', 'Engajamento', 'Crescimento']
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="section-title">Nossos Serviços</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="card hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <ul className="space-y-2 text-sm text-gray-400">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-accent">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
