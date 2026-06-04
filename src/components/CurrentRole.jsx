import { motion } from 'framer-motion';
import { useI18n } from '@/i18n/I18nProvider';
import { getImagePath } from '@/utils/paths';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1], delay },
});

const STACK = [
  { name: 'Snowflake', color: '#29B5E8' },
  { name: 'SQL',       color: '#F29111' },
  { name: 'Domo',      color: '#2E9BDA' },
  { name: 'JavaScript', color: '#F7DF1E', dark: true },
  { name: 'Google Sheets', color: '#34A853' },
  { name: 'Excel',     color: '#217346' },
  { name: 'Gemini',    color: '#8B5CF6' },
];

export default function CurrentRole() {
  const { language } = useI18n();
  const isEs = language === 'es';

  const tagline     = isEs ? 'Empleo actual' : 'Current position';
  const roleLabel   = isEs ? 'Cargo' : 'Role';
  const role        = 'Intern Direct Procurement IT';
  const company     = 'Colgate-Palmolive';
  const period      = isEs ? 'Junio 2026 — Presente' : 'June 2026 — Present';

  const description = isEs
    ? 'Trabajando en el área de compras de la división Oral Care con manejo de datos masivos: construyo pipelines y reportes conectando Snowflake/SQL con Domo para visualización, y automatizo flujos de trabajo de procurement con JavaScript y Google Sheets.'
    : 'Working in the procurement area of the Oral Care division handling large-scale data: building pipelines and reports connecting Snowflake/SQL with Domo for visualization, and automating procurement workflows with JavaScript and Google Sheets.';

  const stackLabel = isEs ? 'Stack en uso' : 'Stack in use';

  return (
    <section className="relative py-32 overflow-hidden bg-primary">

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        {/* Section header */}
        <motion.div className="flex items-center gap-4 mb-4" {...fadeUp(0)}>
          <div className="h-2 w-20 rounded-full bg-accent" />
          <span className="inline-block rounded-full border-2 border-accent px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-accent">
            {tagline}
          </span>
        </motion.div>
        <motion.h2
          className="text-4xl font-black uppercase tracking-tight text-foreground md:text-5xl mb-16"
          {...fadeUp(0.08)}
        >
          {isEs ? 'Experiencia Profesional' : 'Professional Experience'}
        </motion.h2>

        {/* Main card */}
        <motion.div
          className="relative rounded-3xl border border-white/8 bg-primary-dark/60 backdrop-blur-sm overflow-hidden"
          {...fadeUp(0.14)}
        >
          {/* Top line accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-0">

            {/* Left — Logo */}
            <div className="flex flex-col items-center justify-center gap-6 p-12 lg:border-r border-white/8">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.14 }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-2xl bg-accent/10 blur-2xl scale-150" />
                <div className="relative rounded-2xl bg-white px-8 py-6 shadow-clean-lg">
                  <img
                    src={getImagePath('/work/colgate-palmolive.png')}
                    alt="Colgate-Palmolive"
                    className="h-24 w-auto object-contain"
                  />
                </div>
              </motion.div>

              <motion.div className="text-center" {...fadeUp(0.22)}>
                <p className="text-xl font-black text-foreground tracking-tight">{company}</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-accent">{period}</p>
              </motion.div>
            </div>

            {/* Right — Details */}
            <div className="flex flex-col justify-center gap-7 p-12">

              {/* Role */}
              <motion.div {...fadeUp(0.16)}>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted mb-2">
                  {roleLabel}
                </p>
                <h2 className="text-3xl font-black text-foreground leading-tight md:text-4xl">
                  {role}
                </h2>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-base leading-relaxed text-muted md:text-lg border-l-2 border-accent/40 pl-4"
                {...fadeUp(0.24)}
              >
                {description}
              </motion.p>

              {/* Stack pills */}
              <motion.div
                className="pt-5 border-t border-white/8"
                {...fadeUp(0.30)}
              >
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted mb-4">
                  {stackLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {STACK.map((tool, i) => (
                    <motion.span
                      key={tool.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1], delay: 0.34 + i * 0.06 }}
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em]"
                      style={{
                        backgroundColor: `${tool.color}18`,
                        border: `1px solid ${tool.color}40`,
                        color: tool.dark ? '#b8a900' : tool.color,
                      }}
                    >
                      <span
                        className="inline-block h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: tool.dark ? '#b8a900' : tool.color }}
                      />
                      {tool.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
