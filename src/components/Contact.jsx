import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaFilePdf, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [isCvOpen, setIsCvOpen] = useState(false);
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
          {CONTACT_LINKS.map((link, i) => {
            const isCv = link.key === 'cv';
            
            return (
              <motion.a
                key={link.key}
                custom={i}
                variants={linkVariants}
                href={link.href}
                onClick={isCv ? (e) => { e.preventDefault(); setIsCvOpen(true); } : undefined}
                target={!isCv && link.href.startsWith('http') ? '_blank' : undefined}
                rel={!isCv && link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="btn-glass group flex flex-1 items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-accent cursor-pointer"
              >
                <span className="transition-all duration-300">{link.icon}</span>
                <span className="transition-all duration-300">{linkLabels?.[link.key] ?? link.key}</span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>

      {/* CV Modal Overlay */}
      <AnimatePresence>
        {isCvOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 md:p-8 backdrop-blur-sm"
            onClick={() => setIsCvOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl h-[85vh] bg-primary rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsCvOpen(false)}
                className="absolute top-4 right-8 md:right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-accent transition-colors backdrop-blur-md border border-white/10 shadow-lg"
              >
                <FaTimes size={18} />
              </button>
              
              <iframe
                src={`${CONTACT_LINKS.find(l => l.key === 'cv').href}#toolbar=0`}
                className="w-full h-full border-none rounded-2xl"
                title="CV Preview"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
