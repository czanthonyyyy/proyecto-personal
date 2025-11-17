import React, { useEffect } from 'react'

const Legal = ({ focusSection, onSectionFocused }) => {
  useEffect(() => {
    if (focusSection) {
      const el = document.getElementById(focusSection)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      onSectionFocused?.()
    }
  }, [focusSection, onSectionFocused])

  const sections = [
    {
      id: 'terms',
      title: 'Términos de Servicio',
      intro:
        'Governamos la experiencia NovaForge con transparencia: compras seguras, licencias claras y reglas anti-fraude.',
      bullets: [
        'Las claves y descargas son personales e intransferibles salvo que el publisher indique lo contrario.',
        'Podemos revocar acceso ante actividad fraudulenta, uso malicioso o incumplimiento de licencias.',
        'Las reseñas y comentarios deben respetar a la comunidad; moderamos lenguaje ofensivo o spam.',
      ],
      updated: 'Última actualización: 10 de noviembre de 2025',
    },
    {
      id: 'privacy',
      title: 'Política de Privacidad',
      intro:
        'Protegemos tus datos con cifrado AES-256, segmentación zero-trust y auditorías mensuales. Jamás vendemos información personal.',
      bullets: [
        'Recopilamos datos mínimos para pagos, personalización y soporte crítico.',
        'Puedes solicitar exportar o eliminar tus datos desde el Centro de Cuenta en cualquier momento.',
        'Ubicamos nuestros servidores en la UE y EE. UU. cumpliendo con GDPR y estándares SOC 2.',
      ],
      updated: 'Última actualización: 28 de octubre de 2025',
    },
    {
      id: 'cookies',
      title: 'Política de Cookies',
      intro:
        'Utilizamos cookies para recordar preferencias, medir rendimiento y mejorar recomendaciones.',
      bullets: [
        'Las cookies esenciales cargan tu sesión y carrito. Sin ellas, el sitio no funciona.',
        'Las cookies analíticas son opcionales; puedes administrarlas en Configuración de Privacidad.',
        'Nunca usamos cookies de terceros para publicidad invasiva; todas son controladas por NovaForge.',
      ],
      updated: 'Última actualización: 02 de septiembre de 2025',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple/20 via-cyan/10 to-transparent p-8">
        <p className="text-sm uppercase tracking-[0.4em] text-white/60 mb-3">Legal & Compliance</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
          Documentación clara para una comunidad segura
        </h1>
        <p className="text-white/70 max-w-3xl">
          Estas políticas resumen cómo protegemos compras, datos y confianza. Trabajamos con firmas
          legales en LATAM y la UE para mantenernos alineados con normativas globales.
        </p>
      </section>

      <section className="space-y-6">
        {sections.map(({ id, title, intro, bullets, updated }) => (
          <article key={id} id={id} className="glass rounded-3xl p-8 space-y-4">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h2 className="text-2xl font-bold text-white">{title}</h2>
              <span className="text-xs uppercase tracking-[0.3em] text-white/50">{updated}</span>
            </div>
            <p className="text-white/75">{intro}</p>
            <ul className="space-y-3 text-white/80 list-disc pl-5">
              {bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  )
}

export default Legal


