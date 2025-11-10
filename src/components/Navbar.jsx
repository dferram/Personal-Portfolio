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
    <nav className="fixed top-0 w-full bg-black/85 backdrop-blur border-b border-accent-dark/40 z-50">
      <div className="flex w-full items-center justify-between px-2 py-4 sm:px-4 md:px-6">
        <Link to="/" className="text-2xl font-semibold text-white drop-shadow-[0_0_12px_rgba(229,9,20,0.35)]">
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
                'relative text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-foreground transition duration-300 ease-out hover:text-accent after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100';

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

          <div className="flex items-center gap-2 rounded-full border border-accent/40 bg-black/70 px-2 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-foreground">
            {LANG_OPTIONS.map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                aria-pressed={language === lang}
                className={`rounded-full px-2 py-1 transition duration-300 ${
                  language === lang
                    ? 'bg-accent text-white shadow-[0_0_18px_rgba(229,9,20,0.4)]'
                    : 'text-foreground/70 hover:text-white'
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
