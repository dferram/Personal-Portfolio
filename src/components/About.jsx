import { motion } from 'framer-motion';
import { useI18n } from '@/i18n/I18nProvider';
import { SKILLS_DATA } from '@/data/skillsData';
import { PROFILE_PHOTO } from '@/data/config';
import { getImagePath } from '@/utils/paths';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay },
});

const skillIconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: 'easeOut', delay: i * 0.04 },
  }),
};

export default function About() {
  const { t } = useI18n();
  const title = t('about.title') ?? 'Sobre Mí';
  const paragraphs = t('about.paragraphs') ?? [];

  return (
    <section id="sobre-mí" className="relative py-24 bg-primary-dark">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Main Grid: Content + Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-start">
          
          {/* Left Column: About + Skills */}
          <div className="space-y-12">
            
            {/* About Section */}
            <div className="space-y-6">
              <motion.div className="flex items-center gap-4" {...fadeUp(0)}>
                <div className="h-2 w-20 rounded-full bg-accent" />
                <span className="inline-block rounded-full border-2 border-accent px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                  ABOUT ME
                </span>
              </motion.div>
              
              <motion.h2
                className="text-4xl font-black uppercase tracking-tight text-foreground md:text-5xl"
                {...fadeUp(0.08)}
              >
                {title}
              </motion.h2>
              
              <motion.div className="border-l-4 border-accent pl-6 space-y-4" {...fadeUp(0.16)}>
                {(Array.isArray(paragraphs) ? paragraphs : [paragraphs]).map((paragraph, index) => (
                  <p
                    key={`about-paragraph-${index}`}
                    className="text-lg leading-relaxed text-muted md:text-xl"
                  >
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            </div>

            {/* Skills Section */}
            <div className="space-y-8">
              {SKILLS_DATA.map((category, catIndex) => {
                const translatedTitle = t(`skills.categories.${category.id}.title`);
                const categoryTitle =
                  (typeof translatedTitle === 'string' && translatedTitle.length > 0 && translatedTitle) ||
                  category.title ||
                  '';

                return (
                  <motion.div key={category.id} className="space-y-4" {...fadeUp(catIndex * 0.1)}>
                    <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                      {categoryTitle}
                    </h3>

                    {/* Skills Icons - Small like reference */}
                    <motion.div
                      className="flex flex-wrap gap-4 items-center"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-60px' }}
                    >
                      {category.items.map((skill, i) => (
                        <motion.div
                          key={skill.name}
                          custom={i}
                          variants={skillIconVariants}
                          className="group flex items-center gap-2 transition-transform duration-200 hover:scale-110"
                          title={skill.name}
                        >
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="h-12 w-12 object-contain"
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Photo with tape effect */}
          <motion.div
            className="relative order-first lg:order-none flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          >
            {/* Photo container */}
            <div className="relative inline-block overflow-hidden rounded-lg shadow-clean-lg bg-white p-2">
              {/* Tape effect decorations - cinta adhesiva translúcida tipo scotch */}
              {/* POSICIONAMIENTO RELATIVO AL MARCO: El tape está dentro del contenedor del marco */}
              {/* para que rote y escale junto con él. Usa porcentajes para adaptarse al tamaño. */}
              {/* PERSONALIZACIÓN: Ajusta left-[25%] right-[25%] para posición horizontal relativa */}
              {/* Ajusta -top-4 -bottom-4 para separación vertical del borde del marco */}
              <div 
                className="absolute -top-4 left-[25%] w-24 h-8 bg-blue-200/40 rotate-[-8deg] z-10"
                style={{ backdropFilter: 'blur(1px)' }}
              />
              <div 
                className="absolute -bottom-4 right-[25%] w-24 h-8 bg-blue-200/40 rotate-[12deg] z-10"
                style={{ backdropFilter: 'blur(1px)' }}
              />
              
              <div className="aspect-[3/4] bg-gray-200 rounded flex items-center justify-center">
                <img
                  src={getImagePath(`images/${PROFILE_PHOTO}`)}
                  alt="Fernando Ramírez"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
