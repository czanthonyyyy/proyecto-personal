import React, { useState } from 'react'
import { FaFacebookF, FaInstagram, FaLock, FaShieldAlt, FaTwitter, FaUndoAlt } from 'react-icons/fa'
import BrandLogo from '../ui/BrandLogo'

const Footer = ({ onNavigate = () => {} }) => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Newsletter subscription:', email)
    setEmail('')
    alert('¡Gracias por suscribirte!')
  }

  const handleNavigate = (tab, section) => {
    onNavigate(tab, section)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="glass-strong border-t border-white/20 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & About */}
          <div>
            <BrandLogo orientation="column" />
            <p className="text-white/60 text-sm mt-4">
              NovaForge es la forja digital para jugadores que buscan lanzamientos premium, ofertas
              ultrarrápidas y soporte humano 24/7.
            </p>
            <div className="mt-6">
              <h3 className="text-lg font-bold text-white mb-4">Acerca de</h3>
              <ul className="space-y-2 text-white/60">
                <li>
                  <button
                    type="button"
                    onClick={() => handleNavigate('support', 'about')}
                    className="hover:text-cyan transition-colors duration-300"
                  >
                    Sobre Nosotros
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNavigate('support', 'careers')}
                    className="hover:text-cyan transition-colors duration-300"
                  >
                    Carreras
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNavigate('support', 'press')}
                    className="hover:text-cyan transition-colors duration-300"
                  >
                    Prensa
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Soporte */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Soporte</h3>
            <ul className="space-y-2 text-white/60">
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigate('support', 'help-center')}
                  className="hover:text-cyan transition-colors duration-300"
                >
                  Centro de Ayuda
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigate('support', 'contact')}
                  className="hover:text-cyan transition-colors duration-300"
                >
                  Contacto
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigate('support', 'faq')}
                  className="hover:text-cyan transition-colors duration-300"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-white/60">
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigate('legal', 'terms')}
                  className="hover:text-cyan transition-colors duration-300"
                >
                  Términos de Servicio
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigate('legal', 'privacy')}
                  className="hover:text-cyan transition-colors duration-300"
                >
                  Política de Privacidad
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNavigate('legal', 'cookies')}
                  className="hover:text-cyan transition-colors duration-300"
                >
                  Cookies
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Newsletter</h3>
            <p className="text-white/60 mb-4 text-sm">
              Suscríbete para recibir ofertas exclusivas y novedades
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-cyan text-white rounded-lg hover:bg-cyan-hover transition-colors duration-300"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <FaShieldAlt className="w-5 h-5 text-green-500" aria-hidden="true" />
              <span>Compra Segura</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUndoAlt className="w-5 h-5 text-green-500" aria-hidden="true" />
              <span>Garantía de Devolución</span>
            </div>
            <div className="flex items-center gap-2">
              <FaLock className="w-5 h-5 text-green-500" aria-hidden="true" />
              <span>Certificado SSL</span>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex items-center justify-center gap-4">
            <a
              href="#"
              className="text-white/60 hover:text-cyan transition-colors duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-cyan transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-cyan transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-white/40 text-sm">
          <p>&copy; 2024 NovaForge. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
