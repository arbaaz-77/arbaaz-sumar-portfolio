import { Hero } from '@/features/hero'
import { Header } from './features/header'
import { Projects } from '@/features/projects'
import { About } from './features/about'
import { Experience } from './features/experience'
import { Skills } from './features/skills'

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
      </main>
    </>
  )
}

export default App
