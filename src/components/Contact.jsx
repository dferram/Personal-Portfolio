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
    <section id="contacto" className="relative py-24 bg-primary">
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center">
        {tag && <span className="text-sm font-bold uppercase tracking-[0.3em] text-accent">{tag}</span>}
        <h2 className="text-4xl font-black text-foreground md:text-5xl">{title}</h2>

        <div className="mt-4 flex w-full flex-col gap-4 md:flex-row md:justify-center">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex flex-1 items-center justify-center gap-3 rounded-full border-2 border-accent bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-accent shadow-clean transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-white hover:shadow-clean-lg"
            >
              <span className="transition-all duration-300">{link.icon}</span>
              <span className="transition-all duration-300">{linkLabels?.[link.key] ?? link.key}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
