import { useState } from 'react'
import { menuData } from '../data/menu'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState(menuData[0].id)
  const sectionRef = useScrollReveal<HTMLElement>()

  const activeCategory = menuData.find((c) => c.id === activeTab)!

  return (
    <section
      id="carta"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 bg-sipan-card/30"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-sipan-blue font-body text-sm tracking-widest uppercase mb-4">
            Nuestra propuesta
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-sipan-text mb-4">
            La Carta
          </h2>
          <div className="w-16 h-px bg-sipan-blue mx-auto" />
        </div>

        {/* Tabs */}
        <div className="reveal flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-5 py-2 text-sm font-body tracking-wide rounded-sm transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-sipan-blue/15 text-sipan-text border border-sipan-blue/40'
                  : 'text-sipan-muted hover:text-sipan-text border border-transparent hover:border-sipan-border'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="reveal space-y-1">
          {activeCategory.items.map((item, idx) => (
            <div
              key={idx}
              className="group flex items-start justify-between gap-4 py-5 px-4 rounded-sm hover:bg-sipan-card/60 transition-colors duration-300"
            >
              <div className="flex-1">
                <h3 className="font-display text-lg text-sipan-text group-hover:text-sipan-blue-light transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-sipan-muted text-sm mt-1 font-body">
                  {item.description}
                </p>
              </div>
              <span className="font-display text-sipan-blue text-lg whitespace-nowrap pt-0.5">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
