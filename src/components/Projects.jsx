import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Proyecto 1',
    description:
      'Plataforma web enfocada en visualización de datos en tiempo real para monitorear KPIs críticos.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    image: 'https://placehold.co/600x400/0a0a0a/E50914?text=Proyecto+1',
    github: '#',
    demo: '#',
  },
  {
    title: 'Proyecto 2',
    description:
      'Dashboard analítico que integra modelos de machine learning para predecir tendencias de negocio.',
    tags: ['Python', 'FastAPI', 'Tailwind CSS'],
    image: 'https://placehold.co/600x400/0a0a0a/E50914?text=Proyecto+2',
    github: '#',
    demo: '#',
  },
  {
    title: 'Proyecto 3',
    description:
      'Aplicación móvil híbrida orientada a mejorar la experiencia del usuario con datos personalizados.',
    tags: ['React Native', 'Firebase', 'Expo'],
    image: 'https://placehold.co/600x400/0a0a0a/E50914?text=Proyecto+3',
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(229,9,20,0.08),_transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto flex flex-col items-center gap-4 text-center md:max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Work</span>
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            Proyectos Destacados
            <span className="ml-3 text-accent">//</span>
          </h2>
          <p className="text-sm text-muted md:text-base">
            Selección de trabajos recientes que combinan ingeniería de software y el potencial de los datos para generar valor.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#121212]/90 shadow-[0_35px_60px_-15px_rgba(229,9,20,0.2)] backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-accent/70"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="flex h-full flex-col gap-4 p-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-accent/40 bg-black/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-foreground/70 transition duration-300 group-hover:border-accent group-hover:text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent transition duration-300 hover:text-white"
                  >
                    <FaGithub size={18} />
                    Código
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent transition duration-300 hover:text-white"
                  >
                    <FaExternalLinkAlt size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
