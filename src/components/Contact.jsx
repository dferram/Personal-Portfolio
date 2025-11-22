import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
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
    key: 'whatsapp',
    icon: <FaWhatsapp size={26} />,
    href: 'https://wa.me/525560989524',
  },
];

export default function Contact() {
  const { t } = useI18n();
  const tag = t('contact.tag');
  const title = 'Fernando Ramírez';
  const linkLabels = t('contact.links') ?? {};

  return (
    <section id="contacto" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(229,9,20,0.12),_transparent_65%)]" />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
        {tag && <span className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">{tag}</span>}
        <h2 className="text-3xl font-semibold text-foreground md:text-4xl">{title}</h2>

        <div className="mt-4 flex w-full flex-col gap-4 md:flex-row md:justify-center">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex flex-1 items-center justify-center gap-3 rounded-full border border-red-600 bg-black/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-red-600 hover:bg-red-600 hover:text-white"
            >
              <span className="text-red-600 transition-all duration-300 group-hover:text-white">{link.icon}</span>
              <span className="transition-all duration-300 group-hover:text-white">{linkLabels?.[link.key] ?? link.key}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
