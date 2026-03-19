import { Instagram, Facebook, MessageCircle } from 'lucide-react'

const footerLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Carta', href: '#carta' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Contacto', href: '#contacto' },
]

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/59827091234' },
]

export default function Footer() {
  return (
    <footer className="border-t border-sipan-border bg-sipan-card/20 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="/logo-transparent.png"
              alt="Resto Bar Sipán"
              className="h-8 w-auto opacity-70"
            />
          </a>

          {/* Nav links */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sipan-muted hover:text-sipan-text text-sm font-body transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-sipan-muted hover:text-sipan-blue transition-colors duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-sipan-border text-center">
          <p className="text-sipan-muted/60 text-xs font-body">
            © {new Date().getFullYear()} Resto Bar Sipán. Montevideo, Uruguay.
          </p>
        </div>
      </div>
    </footer>
  )
}
