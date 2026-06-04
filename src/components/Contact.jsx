import { FaGithub, FaLinkedin, FaWhatsapp, FaFilePdf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useI18n } from '@/i18n/I18nProvider';

import { getImagePath } from '@/utils/paths';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay },
});

const linkVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.08 },
  }),
};

const CONTACT_LINKS = [
  {
    key: 'linkedin',
    icon: <FaLinkedin size={26} />,
    href: 'https://www.linkedin.com/in/ferram-garcia',
  },
  {
    key: 'github',
    icon: <FaGithub size={26} />,
    href: 'https://github.com/dferram',
  },
  {
    key: 'cv',
    icon: <FaFilePdf size={26} />,
    href: getImagePath('/cv/CV-01.pdf'),
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
        <motion.div className="flex flex-col items-center gap-4" {...fadeUp(0)}>
          {tag && <span className="text-sm font-bold uppercase tracking-[0.3em] text-accent">{tag}</span>}
          <h2 className="text-4xl font-black text-foreground md:text-5xl">{title}</h2>
        </motion.div>

        <motion.div
          className="mt-4 flex w-full flex-col gap-4 md:flex-row md:justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {CONTACT_LINKS.map((link, i) => (
            <motion.a
              key={link.key}
              custom={i}
              variants={linkVariants}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex flex-1 items-center justify-center gap-3 rounded-full border-2 border-accent px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-accent shadow-clean transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-white hover:shadow-clean-lg"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <span className="transition-all duration-300">{link.icon}</span>
              <span className="transition-all duration-300">{linkLabels?.[link.key] ?? link.key}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
