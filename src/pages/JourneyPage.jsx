import { useI18n } from '@/i18n/I18nProvider';
import { JOURNEY_DATA } from '@/data/journeyData';
import { motion } from 'framer-motion';

export default function JourneyPage() {
  const { t, language } = useI18n();

  const title = t('journey.title') ?? 'Recorrido Profesional';
  const subtitle = t('journey.subtitle') ?? 'Mi línea del tiempo y experiencia laboral';

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-primary-dark py-24 px-6 text-foreground md:px-10">
      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <header className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="inline-block text-4xl font-black text-foreground md:text-5xl">
              {title}
            </h1>
            {subtitle && <p className="mt-4 text-base text-muted md:text-lg">{subtitle}</p>}
          </motion.div>
        </header>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Main vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 transform md:-translate-x-1/2"></div>

          <div className="space-y-16">
            {JOURNEY_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              
              // Get localized text
              const itemTitle = item.title[language] || item.title.es;
              const itemRole = item.role[language] || item.role.es;
              const itemDate = item.date[language] || item.date.es;
              const itemDesc = item.description[language] || item.description.es;

              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-center justify-between w-full ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full bg-accent border-4 border-primary-dark z-10 transform -translate-x-1/2 mt-6 md:mt-0 shadow-[0_0_15px_rgba(var(--color-accent-rgb),0.5)]"></div>

                  {/* Content card */}
                  <div className={`w-full pl-20 md:pl-0 md:w-5/12 ${isEven ? 'md:pl-10' : 'md:pr-10'}`}>
                    <div 
                      className="group flex flex-col overflow-hidden rounded-xl shadow-clean transition duration-300 hover:-translate-y-2 hover:shadow-clean-lg bg-primary border border-muted"
                    >
                      {/* Card Header w/ Image */}
                      <div className="relative h-40 w-full overflow-hidden bg-white flex items-center justify-center p-6">
                        <img
                          src={item.imageUrl}
                          alt={itemTitle}
                          className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Card Body */}
                      <div className="flex flex-col p-6">
                        <h3 className="text-2xl font-bold text-foreground mb-1">{itemTitle}</h3>
                        <h4 className="text-lg font-semibold text-accent mb-3">{itemRole}</h4>
                        
                        <div className="flex items-center gap-2 mb-4">
                          <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent border border-accent/20">
                            {itemDate}
                          </span>
                        </div>
                        
                        <p className="text-sm text-muted leading-relaxed">
                          {itemDesc}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Empty spacer for the other side on desktop */}
                  <div className="hidden md:block md:w-5/12"></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
