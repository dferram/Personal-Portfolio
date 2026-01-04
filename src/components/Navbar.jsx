import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '@/i18n/I18nProvider';

const LANG_OPTIONS = ['es', 'en'];

export default function Navbar() {
  const { t, language, setLanguage } = useI18n();
  const brand = t('common.brand') ?? 'Portfolio';
  const links = t('navbar.links') ?? [];
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const targetId = location.hash.slice(1);
      if (targetId) {
        window.requestAnimationFrame(() => {
          const section = document.getElementById(targetId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      }
    }
  }, [location]);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur border-b border-gray-200 z-50 shadow-clean">
      <div className="flex w-full items-center justify-between px-2 py-4 sm:px-4 md:px-6">
        <Link to="/" className="text-2xl font-bold text-foreground hover:text-accent transition-colors">
          {brand}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex gap-8">
            {links.map((item) => {
              const label = item.label ?? item;
              const href = item.href ?? `#${String(label).toLowerCase().replace(' ', '-')}`;
              const isAnchor = href.startsWith('#');
              const hash = isAnchor ? href : undefined;

              const commonClasses =
                'relative text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-foreground-light transition duration-300 ease-out hover:text-accent';

              const destination = isAnchor ? { pathname: '/', hash } : href;

              const handleClick = (event) => {
                if (!isAnchor) return;

                const targetId = hash?.slice(1);
                if (!targetId) return;

                if (location.pathname === '/') {
                  event.preventDefault();
                  const section = document.getElementById(targetId);
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    window.history.replaceState(null, '', hash ?? '#');
                  }
                }
              };

              return (
                <Link key={label} to={destination} className={commonClasses} onClick={handleClick}>
                  {label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2 rounded-full border border-accent/30 bg-primary-dark px-2 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
            {LANG_OPTIONS.map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                aria-pressed={language === lang}
                className={`rounded-full px-3 py-1.5 transition duration-300 ${
                  language === lang
                    ? 'bg-accent text-white'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {t(`common.languageOptions.${lang}`) ?? lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
