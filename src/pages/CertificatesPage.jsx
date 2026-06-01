import { CERTIFICATES_DATA, IN_PROGRESS_CERTIFICATES } from '@/data/certificatesData';
import { useI18n } from '@/i18n/I18nProvider';
import { getLocalizedValue } from '@/i18n/utils';
import { motion } from 'framer-motion';

export default function CertificatesPage() {
  const { t, language } = useI18n();

  const title = t('certificates.title') ?? 'Mis Certificaciones';
  const subtitle = t('certificates.subtitle');
  const workingOnTitle = t('certificates.workingOn') ?? 'Trabajando en...';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-primary py-24 px-6 text-foreground md:px-10 overflow-hidden">
      
      {/* Subtle background ambient elements to match JourneyPage */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <header className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="inline-block text-4xl font-black text-foreground md:text-6xl tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-5 text-base text-muted md:text-xl font-medium max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        </header>

        <motion.div 
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {CERTIFICATES_DATA.map((certificate) => (
            <CertificateCard 
              key={certificate.id} 
              certificate={certificate} 
              language={language} 
              variants={cardVariants} 
            />
          ))}
        </motion.div>

        {/* Working On Section */}
        {IN_PROGRESS_CERTIFICATES && IN_PROGRESS_CERTIFICATES.length > 0 && (
          <div className="mt-32">
            <header className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="inline-block text-3xl font-black text-foreground md:text-4xl tracking-tight">
                  {workingOnTitle}
                </h2>
              </motion.div>
            </header>

            <motion.div 
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {IN_PROGRESS_CERTIFICATES.map((certificate) => (
                <div key={certificate.id} className="relative">
                  <CertificateCard 
                    certificate={certificate} 
                    language={language} 
                    variants={cardVariants} 
                  />
                </div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

function CertificateCard({ certificate, language, variants }) {
  const localizedTitle = getLocalizedValue(certificate.title, language) ?? certificate.title;
  const localizedIssuer = getLocalizedValue(certificate.issuer, language) ?? certificate.issuer;
  const localizedDate = getLocalizedValue(certificate.date, language) ?? certificate.date;

  return (
    <motion.article
      variants={variants}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-primary border border-muted shadow-clean transition-all duration-500 hover:-translate-y-3 hover:shadow-clean-lg hover:border-accent/40 z-30"
      style={{ perspective: 1000 }}
    >
      {/* Hover accent gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent-light via-accent to-accent-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-40" />

      <div className="relative h-56 w-full overflow-hidden bg-white flex items-center justify-center border-b border-muted">
        <motion.img
          src={certificate.imageUrl}
          alt={`${localizedTitle} - ${localizedIssuer}`}
          className="h-full w-full object-contain p-6 filter drop-shadow-sm transition-transform duration-700 group-hover:scale-110 relative z-10"
        />
        {/* Subtle inner overlay on hover */}
        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="flex flex-1 flex-col p-8 bg-primary">
        <h3 className="text-xl font-black text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
          {localizedTitle}
        </h3>
        
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center justify-center rounded-full bg-accent/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-accent border border-accent/20">
            {localizedIssuer}
          </span>
        </div>
        
        <p className="mt-auto text-sm font-medium text-muted">{localizedDate}</p>
      </div>
    </motion.article>
  );
}
