function App() {
  return (
    <main
      style={{
        maxWidth: 'var(--content-width)',
        margin: '0 auto',
        padding: 'var(--space-24) var(--content-padding)',
      }}
    >
      <p
        style={{
          color: 'var(--color-accent)',
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-semibold)',
        }}
      >
        Software Developer · QA Engineer · AWS Learner
      </p>

      <h1
        style={{
          marginBottom: 'var(--space-4)',
          fontSize: 'clamp(var(--font-size-4xl), 8vw, var(--font-size-6xl))',
          letterSpacing: '-0.04em',
        }}
      >
        Arbaaz Sumar
      </h1>

      <p
        style={{
          maxWidth: '42rem',
          color: 'var(--color-text-secondary)',
          fontSize: 'var(--font-size-lg)',
        }}
      >
        Building reliable software with an engineering-first mindset.
      </p>
    </main>
  )
}

export default App
