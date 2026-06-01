import { useRef } from 'react';
import { useI18n } from '@/i18n/I18nProvider';
import { JOURNEY_DATA } from '@/data/journeyData';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function JourneyPage() {
  const { t, language } = useI18n();
  const ref = useRef(null);

  const title = t('journey.title') ?? 'Recorrido Profesional';

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end 90%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <section className="relative min-h-screen bg-primary py-24 px-6 text-foreground md:px-10 overflow-hidden">

      {/* Subtle background ambient elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <header className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="inline-block text-4xl font-black text-foreground md:text-6xl tracking-tight">
              {title}
            </h1>
          </motion.div>
        </header>

        {/* Timeline Container */}
        <div ref={ref} className="relative pb-16">

          {/* Main vertical line - Mobile */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-[3px] bg-accent/30 rounded-full" />
          <motion.div
            className="md:hidden absolute left-6 top-0 bottom-0 w-[3px] bg-accent rounded-full shadow-[0_0_12px_rgba(var(--color-accent-rgb),0.6)] z-0"
            style={{ scaleY, transformOrigin: "top" }}
          />

          {/* Main vertical line - Desktop */}
          <div className="hidden md:block absolute left-1/2 -ml-[1.5px] top-0 bottom-0 w-[3px] bg-accent/30 rounded-full" />
          <motion.div
            className="hidden md:block absolute left-1/2 -ml-[1.5px] top-0 bottom-0 w-[3px] bg-accent rounded-full shadow-[0_0_12px_rgba(var(--color-accent-rgb),0.6)] z-0"
            style={{ scaleY, transformOrigin: "top" }}
          />

          <div className="flex flex-col gap-16 md:gap-32">
            {JOURNEY_DATA.map((item, index) => {
              const isEven = index % 2 === 0;

              const itemTitle = item.title[language] || item.title.es;
              const itemRole = item.role[language] || item.role.es;
              const itemDate = item.date[language] || item.date.es;
              const itemDesc = item.description[language] || item.description.es;

              return (
                <div key={item.id} className="relative w-full group">

                  {/* Timeline Dot (Mobile: left, Desktop: center) */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 top-16 md:top-1/2 md:-translate-y-1/2 z-20 flex items-center justify-center">
                    {/* Glowing pulse effect */}
                    <motion.div
                      className="absolute w-12 h-12 rounded-full bg-accent/20"
                      animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                    />
                    {/* Core dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="w-5 h-5 rounded-full bg-primary border-[4px] border-accent shadow-[0_0_15px_rgba(var(--color-accent-rgb),0.8)] relative z-10"
                    />
                  </div>

                  {/* Desktop Connectors */}
                  {/* Connector for right side card (isEven = true) */}
                  {isEven && (
                    <motion.div 
                      className="hidden md:block absolute left-1/2 top-1/2 h-[3px] w-[4rem] bg-accent z-10 rounded-r-full"
                      style={{ transformOrigin: "left" }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true, margin: "-100px" }}
                    />
                  )}
                  {/* Connector for left side card (isEven = false) */}
                  {!isEven && (
                    <motion.div 
                      className="hidden md:block absolute right-1/2 top-1/2 h-[3px] w-[4rem] bg-accent z-10 rounded-l-full"
                      style={{ transformOrigin: "right" }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true, margin: "-100px" }}
                    />
                  )}

                  {/* Mobile Connector */}
                  <motion.div 
                    className="md:hidden absolute left-6 top-16 h-[3px] w-12 bg-accent z-10 rounded-r-full"
                    style={{ transformOrigin: "left" }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true, margin: "-100px" }}
                  />

                  {/* Layout Container */}
                  <div className="flex flex-col md:flex-row w-full justify-between items-center">
                    
                    {/* Desktop Left Area */}
                    <div className="hidden md:flex w-[calc(50%-4rem)] justify-end">
                      {!isEven && (
                        <TimelineCard className="ml-auto" item={item} title={itemTitle} role={itemRole} date={itemDate} desc={itemDesc} isLeft={true} />
                      )}
                    </div>

                    {/* Desktop Right Area */}
                    <div className="hidden md:flex w-[calc(50%-4rem)] justify-start">
                      {isEven && (
                        <TimelineCard className="mr-auto" item={item} title={itemTitle} role={itemRole} date={itemDate} desc={itemDesc} isLeft={false} />
                      )}
                    </div>

                    {/* Mobile Area */}
                    <div className="md:hidden w-full pl-20 pr-2">
                      <TimelineCard className="w-full" item={item} title={itemTitle} role={itemRole} date={itemDate} desc={itemDesc} isLeft={false} />
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ item, title, role, date, desc, isLeft, className = '' }) {
  return (
    <motion.div
      className={`relative w-full max-w-[500px] ${className}`}
      style={{ perspective: 1200 }}
      initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 30, rotateY: isLeft ? 10 : -10 }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotateY: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 70, damping: 20 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="group flex flex-col overflow-hidden rounded-2xl bg-primary border border-muted shadow-clean transition-all duration-500 hover:-translate-y-3 hover:shadow-clean-lg hover:border-accent/40 relative z-30">

        {/* Hover accent gradient top border */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent-light via-accent to-accent-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-40" />

        {/* Card Header w/ Image */}
        <div className="relative h-48 w-full overflow-hidden bg-white flex items-center justify-center p-8 border-b border-muted">
          <motion.img
            src={item.imageUrl}
            alt={title}
            className="max-h-full max-w-full object-contain filter drop-shadow-sm transition-transform duration-700 group-hover:scale-110 relative z-10"
          />
          {/* Subtle inner overlay on hover */}
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Card Body */}
        <div className="flex flex-col p-8 bg-primary">
          <h3 className="text-2xl font-black text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <h4 className="text-lg font-bold text-accent mb-4">
            {role}
          </h4>

          <div className="flex items-center gap-2 mb-6">
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent border border-accent/20">
              {date}
            </span>
          </div>

          <p className="text-base text-muted leading-relaxed font-medium">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
