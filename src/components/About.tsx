import { useScrollReveal } from '../hooks/useScrollReveal'

export default function About() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="py-24 md:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Image */}
        <div className="reveal">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
              alt="Ambiente interior de Resto Bar Sipán"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-sm"
              loading="lazy"
            />
            <div className="absolute inset-0 border border-sipan-blue/20 rounded-sm translate-x-3 translate-y-3 -z-10" />
          </div>
        </div>

        {/* Text */}
        <div className="reveal">
          <p className="text-sipan-blue font-body text-sm tracking-widest uppercase mb-4">
            Nuestra esencia
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-sipan-text mb-6 leading-tight">
            Un rincón que se siente
            <span className="italic text-sipan-blue-light"> propio</span>
          </h2>
          <div className="space-y-4 text-sipan-muted font-body leading-relaxed">
            <p>
              Sipán nació de una idea simple: crear un lugar donde la noche se disfruta sin apuro.
              Un espacio donde la música suena justo, las luces acompañan y cada trago
              está pensado para quedarse en la memoria.
            </p>
            <p>
              Nuestra carta combina la cocina uruguaya con toques de autor, acompañada por cócteles
              que cuentan su propia historia. Cada detalle —la barra, las mesas, la ambientación—
              fue pensado para que te sientas exactamente donde querés estar.
            </p>
            <p>
              No buscamos ser el bar de moda. Buscamos ser el bar al que siempre volvés.
            </p>
          </div>
          <div className="mt-8 flex gap-8">
            <div>
              <p className="font-display text-3xl text-sipan-blue">+5</p>
              <p className="text-sipan-muted text-sm">años en la barra</p>
            </div>
            <div>
              <p className="font-display text-3xl text-sipan-blue">+20</p>
              <p className="text-sipan-muted text-sm">cócteles de autor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
