export default function WhatsAppCTA() {
  const whatsappLink = 'https://wa.me/5585999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Nylox%20Tech'

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="card border-2 border-accent">
          <div className="text-6xl mb-6">💬</div>
          <h2 className="text-3xl font-bold mb-4">Fale Conosco</h2>
          <p className="text-gray-300 mb-8">
            Tem dúvidas? Quer saber mais sobre nossos serviços? Entre em contato pelo WhatsApp!
          </p>
          
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-primary"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.364-3.905 6.75-1.896 10.306 2.017 3.57 6.38 4.557 9.941 2.139l.46.046h5.035l-.575-5.035.039-.461c.77-3.593 2.201-6.771 1.589-10.069z" />
            </svg>
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
