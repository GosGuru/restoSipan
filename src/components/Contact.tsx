import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'Av. Rivera 2530, Montevideo, Uruguay',
    href: 'https://www.google.com/maps/place/Resto+Bar+Sip%C3%A1n/@-34.9042988,-56.2062584,17z',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+598 2709 1234',
    href: 'tel:+59827091234',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hola@barsipan.com.uy',
    href: 'mailto:hola@barsipan.com.uy',
  },
]

const schedule = [
  { days: 'Lunes a Jueves', hours: '18:00 – 01:00' },
  { days: 'Viernes y Sábado', hours: '18:00 – 03:00' },
  { days: 'Domingo', hours: '12:00 – 00:00' },
]

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/59827091234' },
]

export default function Contact() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="py-24 md:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-sipan-blue font-body text-sm tracking-widest uppercase mb-4">
            Vení a conocernos
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-sipan-text mb-4">
            Ubicación y contacto
          </h2>
          <div className="w-16 h-px bg-sipan-blue mx-auto" />
        </div>

        <div className="reveal grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-sm overflow-hidden border border-sipan-border h-[350px] lg:h-full min-h-[350px]">
            <iframe
              title="Ubicación de Resto Bar Sipán"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.1!2d-56.2062584!3d-34.9042988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f802bcec95615%3A0x52c41c0283ccc336!2sResto%20Bar%20Sip%C3%A1n!5e0!3m2!1ses-419!2suy!4v1"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="space-y-8">
            {/* Contact details */}
            <div className="space-y-5">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-2.5 bg-sipan-card border border-sipan-border rounded-sm group-hover:border-sipan-blue/40 transition-colors duration-300">
                    <item.icon size={18} className="text-sipan-blue" />
                  </div>
                  <div>
                    <p className="text-sipan-muted text-xs uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sipan-text font-body group-hover:text-sipan-blue-light transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Schedule */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock size={18} className="text-sipan-blue" />
                <p className="text-sipan-muted text-xs uppercase tracking-wider">
                  Horarios
                </p>
              </div>
              <div className="space-y-2">
                {schedule.map((s) => (
                  <div key={s.days} className="flex justify-between text-sm font-body">
                    <span className="text-sipan-muted">{s.days}</span>
                    <span className="text-sipan-text">{s.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-sipan-muted text-xs uppercase tracking-wider mb-4">
                Seguinos
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 bg-sipan-card border border-sipan-border rounded-sm hover:border-sipan-blue/40 hover:bg-sipan-blue/5 transition-all duration-300"
                  >
                    <social.icon size={20} className="text-sipan-muted hover:text-sipan-text transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
