import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useI18n } from '@/i18n/I18nProvider';

const CONTACT_LINKS = [
  {
    key: 'linkedin',
    icon: <FaLinkedin size={26} />,
    href: 'https://www.linkedin.com/in/ferram-garcia',
  },
  {
    key: 'github',
    icon: <FaGithub size={26} />,
    href: 'https://github.com/ferramdr',
  },
  {
    key: 'email',
    icon: <FaEnvelope size={26} />,
    href: 'mailto:dferramm@gmail.com',
  },
];

export default function Contact() {
  const { t } = useI18n();
  const tag = t('contact.tag');
  const title = t('contact.title');
  const description = t('contact.description');
  const linkLabels = t('contact.links') ?? {};

  return (
    <section id="contacto" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(229,9,20,0.12),_transparent_65%)]" />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
        {tag && <span className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">{tag}</span>}
        <h2 className="text-3xl font-semibold text-foreground md:text-4xl">{title}</h2>
        {description && (
          <p className="max-w-2xl text-sm leading-relaxed text-muted md:text-base">{description}</p>
        )}

        <div className="mt-4 flex w-full flex-col gap-4 md:flex-row md:justify-center">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex flex-1 items-center justify-center gap-3 rounded-full border border-accent/50 bg-black/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-foreground transition duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-white hover:shadow-[0_0_35px_rgba(229,9,20,0.45)]"
            >
              <span className="text-accent transition duration-300 group-hover:text-white">{link.icon}</span>
              {linkLabels?.[link.key] ?? link.key}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
