import { CERTIFICATES_DATA } from '@/data/certificatesData';
import { useI18n } from '@/i18n/I18nProvider';
import { getLocalizedValue } from '@/i18n/utils';

export default function CertificatesPage() {
  const { t, language } = useI18n();

  const title = t('certificates.title') ?? 'Mis Certificaciones';
  const subtitle = t('certificates.subtitle');
  const buttonLabel = t('certificates.button') ?? 'Ver Credencial';

  return (
    <section className="relative min-h-screen bg-primary-dark py-24 px-6 text-foreground md:px-10">
      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="text-center">
          <h1 className="inline-block text-4xl font-black text-foreground md:text-5xl">
            {title}
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
                className="group flex h-full flex-col overflow-hidden rounded-lg shadow-clean transition duration-300 hover:-translate-y-2 hover:shadow-clean-lg"
                style={{ backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-muted)', borderWidth: '1px' }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={certificate.imageUrl}
                    alt={`${localizedTitle} - ${localizedIssuer}`}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-foreground">{localizedTitle}</h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">{localizedIssuer}</p>
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
