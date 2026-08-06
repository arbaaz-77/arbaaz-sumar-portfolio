import { Hero } from '@/features/hero'
import { Header } from './features/header'
import { Projects } from '@/features/projects'
import { About } from './features/about'
import { Experience } from './features/experience'

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Projects />
        <About />
        <Experience />
      </main>
    </>
  )
}

export default App
