import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const links = [
  {
    label: 'LinkedIn',
    icon: <FaLinkedin size={26} />,
    href: 'https://www.linkedin.com/in/ferram-garcia',
  },
  {
    label: 'GitHub',
    icon: <FaGithub size={26} />,
    href: 'https://github.com/ferramdr',
  },
  {
    label: 'Email',
    icon: <FaEnvelope size={26} />,
    href: 'mailto:dferramm@gmail.com',
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(229,9,20,0.12),_transparent_65%)]" />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">Contacto</span>
        <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
          Construyamos algo increíble
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          Estoy abierto a oportunidades, colaboraciones y proyectos que unan desarrollo de software con el poder del análisis de datos. Escríbeme y exploremos ideas juntos.
        </p>

        <div className="mt-4 flex w-full flex-col gap-4 md:flex-row md:justify-center">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex flex-1 items-center justify-center gap-3 rounded-full border border-accent/50 bg-black/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-foreground transition duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-white hover:shadow-[0_0_35px_rgba(229,9,20,0.45)]"
            >
              <span className="text-accent transition duration-300 group-hover:text-white">{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
