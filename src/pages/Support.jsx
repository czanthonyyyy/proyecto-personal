import React, { useEffect } from 'react'
import Button from '../components/ui/Button'
import { FaHeadset, FaLifeRing, FaMailBulk, FaPhoneAlt, FaRocket, FaUsers } from 'react-icons/fa'

const Support = ({ focusSection, onSectionFocused }) => {
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  useEffect(() => {
    if (focusSection) {
      const section = document.getElementById(focusSection)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      if (onSectionFocused) {
        onSectionFocused()
      }
    }
  }, [focusSection, onSectionFocused])

  const supportChannels = [
    {
      id: 'help-center',
      title: 'Centro de Ayuda',
      description:
        'Guías interactivas, diagnósticos instantáneos y tutoriales para sacarle todo el jugo a NovaForge.',
      icon: FaLifeRing,
      action: 'Ir al Centro de Ayuda',
    },
    {
      id: 'contact',
      title: 'Chat 24/7',
      description:
        'Especialistas bilingües disponibles en menos de 2 minutos para resolver problemas complejos.',
      icon: FaHeadset,
      action: 'Abrir chat en vivo',
    },
    {
      id: 'faq',
      title: 'Preguntas Frecuentes',
      description:
        'Respuestas claras sobre compras, descargas, reembolsos y programas de fidelidad.',
      icon: FaUsers,
      action: 'Ver FAQ',
    },
  ]

  const faqs = [
    {
      question: '¿Cuánto tarda la activación de un juego?',
      answer:
        'Las claves se generan al instante y se vinculan a tu biblioteca. Si ves un retraso, refresca tu biblioteca o contáctanos con el ID de orden.',
    },
    {
      question: '¿Puedo solicitar reembolsos?',
      answer:
        'NovaForge admite reembolsos dentro de los primeros 14 días y con menos de 2 horas de juego. Gestiona la solicitud desde el Centro de Ayuda.',
    },
    {
      question: '¿Cómo funcionan los puntos Nova?',
      answer:
        'Cada compra suma puntos que puedes canjear por cupones, skins exclusivos y acceso anticipado. Los puntos nunca expiran.',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <section className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-cyan/20 via-purple/10 to-transparent p-8 relative">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Soporte NovaForge</p>
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Acompañamiento humano y herramientas inteligentes para tu ecosistema gamer
          </h1>
          <p className="text-white/70 text-lg">
            Estamos disponibles 24/7 con especialistas, diagnósticos automáticos y SLA de respuesta
            inferiores a 5 minutos.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg" onClick={() => scrollToSection('contact')}>
              Hablar con un experto
            </Button>
            <Button variant="ghost" size="lg" onClick={() => scrollToSection('help-center')}>
              Ver Guías
            </Button>
          </div>
        </div>
        <FaRocket className="absolute right-8 bottom-8 text-cyan/30 w-24 h-24 hidden md:block" />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {supportChannels.map(({ id, title, description, icon: Icon, action }) => (
          <article
            key={id}
            id={id}
            className="glass rounded-2xl p-6 flex flex-col justify-between hover:border-cyan/40 transition-all duration-300"
          >
            <div>
              <Icon className="w-8 h-8 text-cyan mb-4" aria-hidden="true" />
              <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
              <p className="text-white/70 text-sm">{description}</p>
            </div>
            <Button
              variant="secondary"
              size="md"
              className="mt-6"
              onClick={() => scrollToSection(id)}
            >
              {action}
            </Button>
          </article>
        ))}
      </section>

      <section id="about" className="glass rounded-2xl p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="space-y-3">
            <h3 className="text-sm uppercase tracking-[0.3em] text-white/50">Visión</h3>
            <p className="text-white/80">
              Crear la plataforma más confiable para descubrir, comprar y disfrutar videojuegos
              premium con experiencias centradas en la comunidad.
            </p>
          </article>
          <article id="careers" className="space-y-3">
            <h3 className="text-sm uppercase tracking-[0.3em] text-white/50">Carreras</h3>
            <p className="text-white/80">
              Buscamos especialistas en soporte, ingenieros de gameplay y estrategas de eCommerce para
              seguir creciendo nuestra red global.
            </p>
            <Button variant="primary" size="sm">
              Ver vacantes
            </Button>
          </article>
          <article id="press" className="space-y-3">
            <h3 className="text-sm uppercase tracking-[0.3em] text-white/50">Prensa</h3>
            <p className="text-white/80">
              Escríbenos para kits de medios, colaboraciones y novedades exclusivas sobre lanzamientos.
            </p>
            <Button variant="ghost" size="sm">
              Contacto de prensa
            </Button>
          </article>
        </div>
      </section>

      <section
        id="contact"
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start rounded-2xl border border-white/10 bg-white/5 p-8"
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white">Estamos listos para ayudarte</h2>
          <p className="text-white/70">
            Horario oficial de soporte: 24/7 (respuestas prioritarias para NovaForge Prime). También
            puedes escribirnos a soporte@novaforge.gg.
          </p>
          <div className="space-y-2 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-cyan" aria-hidden="true" />
              <span>+52 55 1234 5678</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMailBulk className="text-cyan" aria-hidden="true" />
              <span>soporte@novaforge.gg</span>
            </div>
          </div>
        </div>
        <form className="space-y-4 glass rounded-2xl p-6">
          <div>
            <label className="text-white/60 text-sm block mb-2">Correo electrónico</label>
            <input
              type="email"
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan"
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label className="text-white/60 text-sm block mb-2">Categoría</label>
            <select className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan">
              <option value="compras">Problemas de compra</option>
              <option value="tecnico">Soporte técnico</option>
              <option value="cuenta">Cuenta y seguridad</option>
            </select>
          </div>
          <div>
            <label className="text-white/60 text-sm block mb-2">Mensaje</label>
            <textarea
              rows={4}
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan"
              placeholder="Cuéntanos qué está pasando..."
            />
          </div>
          <Button variant="primary" size="lg" className="w-full">
            Enviar solicitud
          </Button>
        </form>
      </section>

      <section id="faq" className="space-y-6">
        <h2 className="text-3xl font-bold text-white">FAQ esenciales</h2>
        <div className="space-y-4">
          {faqs.map(({ question, answer }) => (
            <article key={question} className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{question}</h3>
              <p className="text-white/70">{answer}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Support


