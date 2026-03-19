import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1600&q=80)',
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-sipan-bg/70 via-sipan-bg/60 to-sipan-bg" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <img
          src="/logo-transparent.png"
          alt="Resto Bar Sipán"
          className="w-48 md:w-64 mb-8 animate-fade-in-up"
        />
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-sipan-text mb-4 animate-fade-in-up animation-delay-200">
          Donde cada noche
          <span className="block italic text-sipan-blue-light">tiene su historia</span>
        </h1>
        <p className="font-body text-sipan-muted text-lg md:text-xl max-w-lg mb-10 animate-fade-in-up animation-delay-400">
          Gastronomía, coctelería y buena compañía en Montevideo
        </p>
        <a
          href="#carta"
          className="inline-flex items-center gap-2 px-8 py-3 border border-sipan-blue/50 text-sipan-text font-body text-sm tracking-widest uppercase rounded-sm hover:bg-sipan-blue/10 hover:border-sipan-blue transition-all duration-500 animate-fade-in-up animation-delay-600"
        >
          Conocé nuestra carta
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 z-10 animate-bounce">
        <ChevronDown className="text-sipan-muted/50" size={28} />
      </div>
    </section>
  )
}
