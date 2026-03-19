import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import MenuSection from './components/MenuSection'
import Gallery from './components/Gallery'
import Events from './components/Events'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Gallery />
        <Events />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
