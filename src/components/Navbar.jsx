import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '@/i18n/I18nProvider';
import { FiMenu, FiX } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';

const LANG_OPTIONS = ['es', 'en'];

export default function Navbar() {
  const { t, language, setLanguage } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const brand = t('common.brand') ?? 'Portfolio';
  const links = t('navbar.links') ?? [];
  const location = useLocation();

  const [activeSection, setActiveSection] = useState(location.hash || '#inicio');

  // Spy scroll
  useEffect(() => {
    if (location.pathname !== '/') return;
    
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mí', 'proyectos', 'contacto'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
            current = `#${section}`;
            break;
          }
        }
      }
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, activeSection]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
    <nav className="fixed top-0 w-full backdrop-blur border-b z-50 shadow-clean" style={{ backgroundColor: 'var(--color-header-bg)', borderColor: 'var(--color-header-border)' }}>
      <div className="flex w-full items-center justify-between px-4 py-4 md:px-6">
        <Link to="/" className="text-2xl font-bold hover:text-accent transition-colors z-50" style={{ color: 'var(--color-header-text)' }}>
          {brand}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="flex gap-8">
            {links.map((item) => {
              const label = item.label ?? item;
              const href = item.href ?? `#${String(label).toLowerCase().replace(' ', '-')}`;
              const isAnchor = href.startsWith('#');
              const hash = isAnchor ? href : undefined;

              const isActive = isAnchor
                ? location.pathname === '/' && activeSection === hash
                : location.pathname === href || location.pathname.startsWith(href + '/');

              const commonClasses =
                'relative text-xs md:text-sm font-semibold uppercase tracking-[0.2em] transition duration-300 ease-out hover:text-accent py-1';
              const linkStyle = { color: 'var(--color-header-text)' };

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
                    setActiveSection(hash);
                  }
                }
              };

              return (
                <Link key={label} to={destination} className={commonClasses} style={linkStyle} onClick={handleClick}>
                  {label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator-desktop"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                      style={{ backgroundColor: 'var(--color-header-text)' }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2 rounded-full border border-accent/30 bg-primary-dark px-2 py-1 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: 'var(--color-header-text)' }}>
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

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden z-50 p-2 focus:outline-none"
          style={{ color: 'var(--color-header-text)' }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center gap-8 md:hidden shadow-lg"
              style={{ backgroundColor: 'var(--color-header-bg)', paddingTop: '80px' }}
            >
              <div className="flex flex-col items-center gap-8 w-full px-6">
                {links.map((item) => {
                  const label = item.label ?? item;
                  const href = item.href ?? `#${String(label).toLowerCase().replace(' ', '-')}`;
                  const isAnchor = href.startsWith('#');
                  const hash = isAnchor ? href : undefined;
                  const destination = isAnchor ? { pathname: '/', hash } : href;
                  
                  const isActive = isAnchor
                    ? location.pathname === '/' && activeSection === hash
                    : location.pathname === href || location.pathname.startsWith(href + '/');

                  const handleClick = (event) => {
                    setIsMenuOpen(false); // Close menu
                    if (!isAnchor) return;
                    const targetId = hash?.slice(1);
                    if (!targetId) return;

                    if (location.pathname === '/') {
                      event.preventDefault();
                      const section = document.getElementById(targetId);
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        window.history.replaceState(null, '', hash ?? '#');
                        setActiveSection(hash);
                      }
                    }
                  };

                  return (
                    <Link 
                      key={label} 
                      to={destination} 
                      className="text-2xl font-bold uppercase tracking-widest hover:text-accent transition-colors relative py-1"
                      style={{ color: 'var(--color-header-text)' }}
                      onClick={handleClick}
                    >
                      {label}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator-mobile"
                          className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
                          style={{ backgroundColor: 'var(--color-header-text)' }}
                        />
                      )}
                    </Link>
                  );
                })}

                {/* Mobile Language Switcher */}
                <div className="flex items-center gap-4 mt-8">
                  {LANG_OPTIONS.map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => {
                        setLanguage(lang);
                        // Optional: Close menu on language switch? usually better to keep open
                      }}
                      className={`rounded-full px-6 py-3 text-sm font-bold uppercase tracking-widest transition duration-300 border ${
                        language === lang
                          ? 'bg-accent text-white border-accent'
                          : 'bg-transparent text-muted border-gray-300 hover:border-foreground hover:text-foreground'
                      }`}
                    >
                      {t(`common.languageOptions.${lang}`) ?? lang.toUpperCase()}
                    </button>
                  ))}
                </div>


              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
