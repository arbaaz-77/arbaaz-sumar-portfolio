import { Hero } from '@/features/hero'
import { Header } from './features/header'
import { Projects } from '@/features/projects'
import { About } from './features/about'
import { Experience } from './features/experience'
import { Skills } from './features/skills'
import { Contact } from './features/contact'
import { Footer } from './features/footer'
import { Certifications } from './features/certifications/'

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
