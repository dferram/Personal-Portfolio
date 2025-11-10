export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#0a0a0a] to-black"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(229,9,20,0.18),_transparent_60%)]" />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
        <span className="rounded-full border border-accent/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-accent">Portfolio 2025</span>
        <h1 className="text-4xl font-bold text-white drop-shadow-[0_0_35px_rgba(229,9,20,0.35)] md:text-7xl">
          Fernando Ramírez
        </h1>
        <h2 className="text-xl font-medium text-foreground/80 md:text-3xl">
          Software Engineer <span className="text-accent-light">|</span> Aspiring Data Scientist
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          Estudiante de 5º semestre de Ingeniería de Software enfocado en construir experiencias digitales robustas y explorar cómo la ciencia de datos potencia decisiones estratégicas basadas en evidencia.
        </p>
        <a
          href="#proyectos"
          className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-glow transition duration-300 ease-out hover:-translate-y-1 hover:bg-accent-light hover:shadow-[0_0_45px_rgba(229,9,20,0.45)]"
        >
          Ver Proyectos
          <span className="text-lg">→</span>
        </a>
      </div>
    </section>
  );
}
