import React, { useState } from 'react'
import Button from '../components/ui/Button'

const Auth = () => {
  const [mode, setMode] = useState('login')

  const fields = mode === 'login'
    ? [
        { label: 'Correo electrónico', type: 'email', placeholder: 'nombre@correo.com' },
        { label: 'Contraseña', type: 'password', placeholder: '••••••••' },
      ]
    : [
        { label: 'Nombre completo', type: 'text', placeholder: 'Alex Nova' },
        { label: 'Correo electrónico', type: 'email', placeholder: 'nombre@correo.com' },
        { label: 'Contraseña', type: 'password', placeholder: 'Mínimo 8 caracteres' },
      ]

  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan/20 via-purple/10 to-transparent p-8 space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">
          Cuenta NovaForge
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-white">
          {mode === 'login' ? 'Bienvenido de vuelta' : 'Únete a la forja'}
        </h1>
        <p className="text-white/70 max-w-2xl">
          Accede a sincronización en la nube, recompensas Nova y soporte premium de nuestra
          comunidad profesional.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button
            variant={mode === 'login' ? 'primary' : 'ghost'}
            size="md"
            onClick={() => setMode('login')}
          >
            Iniciar sesión
          </Button>
          <Button
            variant={mode === 'register' ? 'primary' : 'ghost'}
            size="md"
            onClick={() => setMode('register')}
          >
            Crear cuenta
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <form className="glass rounded-3xl p-8 space-y-5">
          {fields.map(({ label, type, placeholder }) => (
            <div key={label}>
              <label className="block text-white/70 text-sm mb-2">{label}</label>
              <input
                type={type}
                placeholder={placeholder}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan"
              />
            </div>
          ))}
          {mode === 'login' && (
            <div className="flex items-center justify-between text-sm text-white/60">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="text-cyan bg-white/10 rounded border-white/20" />
                Recuérdame
              </label>
              <button type="button" className="text-cyan hover:text-cyan-hover">
                ¿Olvidaste tu contraseña?
              </button>
            </div>
          )}
          <Button variant="primary" size="lg" className="w-full">
            {mode === 'login' ? 'Acceder a mi cuenta' : 'Crear cuenta NovaForge'}
          </Button>
          <p className="text-xs text-white/60 text-center">
            Al continuar aceptas nuestras políticas de privacidad y términos de servicio.
          </p>
        </form>

        <div className="glass rounded-3xl p-8 space-y-6">
          <h2 className="text-2xl font-bold text-white">Ventajas NovaForge</h2>
          <ul className="space-y-4 text-white/75">
            <li>• Autenticación segura con MFA opcional y alertas de dispositivo.</li>
            <li>• Historial de compras y recibos fiscales en un panel único.</li>
            <li>• Rewards Nova acumulables canjeables por descuentos y betas privadas.</li>
            <li>• Soporte prioritario 24/7 con especialistas verificados.</li>
          </ul>
          <div className="rounded-2xl border border-cyan/30 bg-cyan/5 p-6 space-y-2">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan">Prime Beta</p>
            <p className="text-white">
              Activa NovaForge Prime y obtén 10% de cashback permanente + acceso anticipado a
              colecciones secretas.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Auth

