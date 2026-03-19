export interface EventItem {
  title: string
  date: string
  time: string
  description: string
  image: string
}

export const eventsData: EventItem[] = [
  {
    title: 'Noche de Jazz en vivo',
    date: 'Todos los viernes',
    time: '21:00 hs',
    description: 'Disfrutá de jazz en vivo mientras probás nuestros cócteles de autor. Una noche para dejarse llevar.',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&q=80',
  },
  {
    title: 'Happy Hour 2×1',
    date: 'Lunes a Jueves',
    time: '18:00 a 20:00 hs',
    description: 'Todos los cócteles clásicos al 2×1. El mejor cierre del día, entre amigos y buena música.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80',
  },
  {
    title: 'Brunch del domingo',
    date: 'Todos los domingos',
    time: '12:00 a 16:00 hs',
    description: 'Tostadas, huevos, jugos naturales y prosecco. La mejor manera de empezar el domingo.',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&q=80',
  },
  {
    title: 'Noche de vinos — Cata Tannat',
    date: 'Sábado 29 de marzo',
    time: '20:00 hs',
    description: 'Una selección de los mejores Tannat uruguayos, guiada por nuestro sommelier. Cupos limitados.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80',
  },
]
