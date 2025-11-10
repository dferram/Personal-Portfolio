export default function About() {
  return (
    <section id="sobre-mí" className="relative py-24">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(229,9,20,0.08),_transparent_55%)]" />
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-10 px-6 md:flex-row md:items-start">
        <div className="h-1.5 w-16 rounded-full bg-accent md:mt-3" />
        <div className="flex-1">
          <h2 className="text-3xl font-semibold uppercase tracking-[0.25em] text-foreground md:text-4xl">
            Sobre Mí
          </h2>
          <div className="mt-6 max-w-3xl border-l-2 border-accent/50 pl-6">
            <p className="text-base leading-7 text-muted md:text-lg">
              Soy estudiante de quinto semestre de Ingeniería de Software apasionado por construir soluciones digitales end-to-end. Mi experiencia abarca el desarrollo full-stack con un enfoque en experiencias modernas y accesibles que generen impacto.
            </p>
            <p className="mt-4 text-base leading-7 text-muted md:text-lg">
              Actualmente estoy pivotando hacia el análisis de datos y la ciencia de datos, combinando mi conocimiento técnico con la curiosidad por entender cómo la información guía decisiones estratégicas. Busco proyectos que me permitan unir ambas disciplinas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
