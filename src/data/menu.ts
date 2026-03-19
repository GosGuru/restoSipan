export interface MenuItem {
  name: string
  description: string
  price: string
}

export interface MenuCategory {
  id: string
  label: string
  items: MenuItem[]
}

export const menuData: MenuCategory[] = [
  {
    id: 'entradas',
    label: 'Entradas',
    items: [
      { name: 'Provoleta a la parrilla', description: 'Con tomates cherry asados, orégano fresco y miel de mostaza', price: '$420' },
      { name: 'Tabla de fiambres artesanales', description: 'Selección de jamón crudo, bondiola, quesos y pickles de la casa', price: '$680' },
      { name: 'Ceviche de corvina negra', description: 'Leche de tigre, maíz crocante, batata chips y cilantro', price: '$520' },
      { name: 'Empanadas de carne (x3)', description: 'Cortada a cuchillo, con pasas y aceitunas', price: '$350' },
      { name: 'Hummus de remolacha', description: 'Con pan de pita tostado, dukkah y aceite de oliva', price: '$380' },
    ],
  },
  {
    id: 'platos',
    label: 'Platos principales',
    items: [
      { name: 'Entraña a la parrilla', description: 'Con papas rústicas, chimichurri de la casa y ensalada fresca', price: '$890' },
      { name: 'Milanesa napolitana', description: 'De ternera, con muzzarella gratinada, papas fritas y huevo', price: '$780' },
      { name: 'Risotto de hongos de pino', description: 'Parmesano reggiano, manteca de trufa y ciboulette', price: '$720' },
      { name: 'Salmón rosado a la plancha', description: 'Puré de arvejas, chips de alcaparra y limón confitado', price: '$950' },
      { name: 'Ravioles de cordero', description: 'Masa casera, salsa de tomate asado y ricotta salata', price: '$680' },
      { name: 'Burger Sipán', description: 'Blend de cortes, cheddar ahumado, bacon, cebolla caramelizada y papas', price: '$650' },
    ],
  },
  {
    id: 'postres',
    label: 'Postres',
    items: [
      { name: 'Volcán de chocolate', description: 'Con helado de vainilla y frutos rojos', price: '$420' },
      { name: 'Flan casero', description: 'Con crema y dulce de leche', price: '$320' },
      { name: 'Tiramisú de la casa', description: 'Café, mascarpone y cacao amargo', price: '$380' },
      { name: 'Panqueques con dulce de leche', description: 'Dulce de leche artesanal, nueces y merengue italiano', price: '$350' },
    ],
  },
  {
    id: 'cocteles',
    label: 'Cócteles de autor',
    items: [
      { name: 'Sipán Negroni', description: 'Gin, Campari, vermut rojo, twist de naranja ahumada', price: '$380' },
      { name: 'Old Fashioned Tannat', description: 'Bourbon, bitter de tannat, azúcar demerara, cereza negra', price: '$420' },
      { name: 'Aperol Spritz', description: 'Aperol, prosecco, soda, naranja fresca', price: '$350' },
      { name: 'La Rambla', description: 'Gin, pepino, albahaca, limón, tónica artesanal', price: '$380' },
      { name: 'Maracuyá Sour', description: 'Pisco, maracuyá, limón, clara de huevo, amargo de angostura', price: '$360' },
      { name: 'Mojito clásico', description: 'Ron blanco, menta fresca, lima, soda', price: '$320' },
      { name: 'Caipiroska de frutos rojos', description: 'Vodka, lima, frutos rojos frescos, azúcar', price: '$340' },
      { name: 'Espresso Martini', description: 'Vodka, licor de café, espresso doble, crema', price: '$400' },
    ],
  },
  {
    id: 'vinos',
    label: 'Vinos',
    items: [
      { name: 'Tannat Reserva — Bodega Garzón', description: 'Tinto robusto con notas de frutos negros y roble', price: '$650' },
      { name: 'Tannat-Merlot — Bouza', description: 'Blend equilibrado, taninos suaves y final largo', price: '$580' },
      { name: 'Albariño — Bodega Garzón', description: 'Blanco fresco con notas cítricas y minerales', price: '$620' },
      { name: 'Sauvignon Blanc — Juanicó', description: 'Blanco seco, aromático con toques herbales', price: '$480' },
      { name: 'Rosé de Tannat — Artesana', description: 'Fresco, frutal, ideal para acompañar entradas', price: '$520' },
    ],
  },
]
