import { Calendar, Clock } from 'lucide-react'
import { eventsData } from '../data/events'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Events() {
  const sectionRef = useScrollReveal<HTMLElement>()

  return (
    <section
      id="eventos"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 bg-sipan-card/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-sipan-blue font-body text-sm tracking-widest uppercase mb-4">
            Viví la experiencia
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-sipan-text mb-4">
            Eventos
          </h2>
          <div className="w-16 h-px bg-sipan-blue mx-auto" />
        </div>

        {/* Cards grid */}
        <div className="reveal grid md:grid-cols-2 gap-6">
          {eventsData.map((event, idx) => (
            <div
              key={idx}
              className="group bg-sipan-card border border-sipan-border rounded-sm overflow-hidden hover:border-sipan-blue/30 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sipan-card to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-sipan-text mb-3">
                  {event.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sipan-muted text-sm mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-sipan-blue" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-sipan-blue" />
                    {event.time}
                  </span>
                </div>
                <p className="text-sipan-muted font-body text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
