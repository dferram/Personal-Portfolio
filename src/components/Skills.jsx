export default function Skills() {
  const webSkills = ['React', 'Node.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'PostgreSQL', 'MongoDB'];
  const dataSkills = ['Python', 'Pandas', 'NumPy', 'SQL', 'Scikit-learn', 'Matplotlib'];

  const renderBadges = (skills) =>
    skills.map((skill) => (
      <span
        key={skill}
        className="rounded-full border border-accent/50 bg-[#111111] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-foreground/80 transition duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-white hover:shadow-[0_0_25px_rgba(229,9,20,0.4)]"
      >
        {skill}
      </span>
    ));

  return (
    <section id="habilidades" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(229,9,20,0.12),_transparent_65%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto flex flex-col items-center gap-4 text-center md:max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Skillset</span>
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            Habilidades Técnicas
            <span className="ml-3 text-accent">//</span>
          </h2>
          <p className="text-sm text-muted md:text-base">
            Tecnologías que domino para crear productos digitales end-to-end y herramientas que estoy adoptando para impulsar el análisis basado en datos.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="group rounded-2xl border border-white/5 bg-[#111111]/95 p-8 shadow-[0_25px_50px_-12px_rgba(229,9,20,0.15)] transition duration-300 hover:-translate-y-2 hover:border-accent/70">
            <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-foreground/90">
              Desarrollo Web (Full-Stack)
            </h3>
            <p className="mt-4 text-sm text-muted">
              Construcción de experiencias completas: desde interfaces accesibles hasta APIs escalables y bases de datos robustas.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">{renderBadges(webSkills)}</div>
          </div>

          <div className="group rounded-2xl border border-white/5 bg-[#111111]/95 p-8 shadow-[0_25px_50px_-12px_rgba(229,9,20,0.15)] transition duration-300 hover:-translate-y-2 hover:border-accent/70">
            <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-foreground/90">
              Análisis de Datos (En aprendizaje)
            </h3>
            <p className="mt-4 text-sm text-muted">
              Herramientas y librerías que utilizo para limpiar, analizar y visualizar información que apoya la toma de decisiones.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">{renderBadges(dataSkills)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
