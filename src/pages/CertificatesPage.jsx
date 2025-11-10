import { CERTIFICATES_DATA } from '@/data/certificatesData';
import { useI18n } from '@/i18n/I18nProvider';
import { getLocalizedValue } from '@/i18n/utils';
import SparkOverlay from '@/components/SparkOverlay';

export default function CertificatesPage() {
  const { t, language } = useI18n();

  const title = t('certificates.title') ?? 'Mis Certificaciones';
  const subtitle = t('certificates.subtitle');
  const buttonLabel = t('certificates.button') ?? 'Ver Credencial';

  return (
    <section className="relative min-h-screen bg-black py-24 px-6 text-foreground md:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(229,9,20,0.1),_transparent_65%)]" />
      <SparkOverlay className="opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="text-center">
          <h1 className="inline-block text-4xl font-bold text-white md:text-5xl">
            {title}
            <span className="ml-3 text-accent">•</span>
          </h1>
          {subtitle && <p className="mt-4 text-base text-muted md:text-lg">{subtitle}</p>}
        </header>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES_DATA.map((certificate) => {
            const localizedTitle = getLocalizedValue(certificate.title, language) ?? certificate.title;
            const localizedIssuer = getLocalizedValue(certificate.issuer, language) ?? certificate.issuer;
            const localizedDate = getLocalizedValue(certificate.date, language) ?? certificate.date;

            return (
              <article
                key={certificate.id}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-800 bg-gray-950/90 shadow-[0_30px_60px_-20px_rgba(229,9,20,0.25)] transition duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-[0_35px_70px_-25px_rgba(229,9,20,0.35)]"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={certificate.imageUrl}
                    alt={`${localizedTitle} - ${localizedIssuer}`}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-white">{localizedTitle}</h3>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.25em] text-accent">{localizedIssuer}</p>
                  <p className="mt-2 text-sm text-muted">{localizedDate}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
