import { motion } from 'framer-motion';
import { useI18n } from '@/i18n/I18nProvider';
import { getImagePath } from '@/utils/paths';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1], delay },
});

const HIGHLIGHTS = {
  es: [
    { stat: '2025', label: 'Año de inicio' },
    { stat: 'Global', label: 'Alcance corporativo' },
    { stat: 'Presente', label: 'Empleo activo' },
  ],
  en: [
    { stat: '2025', label: 'Start year' },
    { stat: 'Global', label: 'Corporate reach' },
    { stat: 'Present', label: 'Active position' },
  ],
};

export default function CurrentRole() {
  const { language } = useI18n();

  const isEs = language === 'es';

  const role        = isEs ? 'Software Engineering Intern' : 'Software Engineering Intern';
  const company     = 'Colgate-Palmolive';
  const period      = isEs ? '2025 — Presente' : '2025 — Present';
  const tagline     = isEs
    ? 'Empleo actual'
    : 'Current position';
  const description = isEs
    ? 'Desarrollando soluciones de software para optimizar procesos internos del equipo de IT dentro de una de las empresas de consumo más grandes del mundo.'
    : 'Building software solutions to optimize internal IT processes inside one of the world\'s largest consumer goods companies.';

  const highlights = HIGHLIGHTS[language] ?? HIGHLIGHTS.es;

  return (
    <section className="relative py-32 overflow-hidden bg-primary">

      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        {/* Section tag */}
        <motion.div className="flex items-center gap-4 mb-16" {...fadeUp(0)}>
          <div className="h-px flex-1 max-w-[60px] bg-accent/40" />
          <span className="text-xs font-bold uppercase tracking-[0.35em] text-accent">
            {tagline}
          </span>
        </motion.div>

        {/* Main card */}
        <motion.div
          className="relative rounded-3xl border border-white/8 bg-primary-dark/60 backdrop-blur-sm overflow-hidden"
          {...fadeUp(0.08)}
        >
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* Left — Logo + company name */}
            <div className="flex flex-col items-center justify-center gap-8 p-12 lg:border-r border-white/8">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
                className="relative"
              >
                {/* Glow ring behind logo */}
                <div className="absolute inset-0 rounded-2xl bg-accent/10 blur-2xl scale-125" />
                <div className="relative rounded-2xl bg-white p-6 shadow-clean-lg">
                  <img
                    src={getImagePath('/work/colgate-palmolive.png')}
                    alt="Colgate-Palmolive"
                    className="h-20 w-auto object-contain"
                  />
                </div>
              </motion.div>

              <motion.div className="text-center" {...fadeUp(0.22)}>
                <p className="text-2xl font-black text-foreground tracking-tight">{company}</p>
                <p className="mt-1 text-sm font-medium text-accent uppercase tracking-[0.25em]">{period}</p>
              </motion.div>
            </div>

            {/* Right — Role details */}
            <div className="flex flex-col justify-center gap-8 p-12">
              <motion.div {...fadeUp(0.18)}>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted mb-3">
                  {isEs ? 'Cargo' : 'Role'}
                </p>
                <h2 className="text-3xl font-black text-foreground leading-tight md:text-4xl">
                  {role}
                </h2>
              </motion.div>

              <motion.p
                className="text-base leading-relaxed text-muted md:text-lg border-l-2 border-accent/40 pl-4"
                {...fadeUp(0.26)}
              >
                {description}
              </motion.p>

              {/* Stats row */}
              <motion.div
                className="grid grid-cols-3 gap-4 pt-4 border-t border-white/8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                {highlights.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 + i * 0.08 }}
                    className="flex flex-col gap-1"
                  >
                    <span className="text-xl font-black text-accent">{item.stat}</span>
                    <span className="text-xs text-muted uppercase tracking-[0.2em]">{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
