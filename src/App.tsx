import { Hero } from '@/features/hero'
import { Header } from './features/header'
import { Projects } from '@/features/projects'
import { About } from './features/about'

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Projects />
        <About />
      </main>
    </>
  )
}

export default App
