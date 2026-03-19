import { useState } from 'react'
import { X } from 'lucide-react'
import { galleryImages } from '../data/gallery'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)
  const sectionRef = useScrollReveal<HTMLElement>()

  const closeLightbox = () => setLightboxIdx(null)

  return (
    <section
      id="galeria"
      ref={sectionRef}
      className="py-24 md:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-sipan-blue font-body text-sm tracking-widest uppercase mb-4">
            Momentos
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-sipan-text mb-4">
            Galería
          </h2>
          <div className="w-16 h-px bg-sipan-blue mx-auto" />
        </div>

        {/* Grid */}
        <div className="reveal columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setLightboxIdx(idx)}
              className="block w-full overflow-hidden rounded-sm group cursor-pointer break-inside-avoid"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="lightbox-overlay fixed inset-0 z-50 bg-sipan-bg/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-label="Imagen ampliada"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-sipan-muted hover:text-sipan-text transition-colors"
            aria-label="Cerrar"
          >
            <X size={32} />
          </button>
          <img
            src={galleryImages[lightboxIdx].src.replace('w=800', 'w=1400')}
            alt={galleryImages[lightboxIdx].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
