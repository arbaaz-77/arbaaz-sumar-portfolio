import { Hero } from '@/features/hero'
import { Header } from './features/header'
import { Projects } from '@/features/projects'

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Projects />
      </main>
    </>
  )
}

export default App
