import { useRef } from 'react';
import { useI18n } from '@/i18n/I18nProvider';
import { motion, useScroll, useTransform } from 'framer-motion';
import { getImagePath } from '@/utils/paths';

export default function Hero() {
  const { t, language } = useI18n();

  const title = t('hero.title');
  const subtitle = t('hero.subtitle');
  const cta = t('hero.cta');

  const trackRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  // --- Portfolio layers: fade out + scale up as user scrolls [0 → 0.55] ---
  const portfolioOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const portfolioScale   = useTransform(scrollYProgress, [0, 0.55], [1, 1.18]);

  // Layer-specific spread: each layer scales slightly differently for depth
  const layer1Scale = useTransform(scrollYProgress, [0, 0.55], [1, 1.35]);
  const layer2Scale = useTransform(scrollYProgress, [0, 0.55], [1, 1.26]);
  const layer3Scale = useTransform(scrollYProgress, [0, 0.55], [1, 1.18]);
  const layer4Scale = useTransform(scrollYProgress, [0, 0.55], [1, 1.10]);

  // --- Personal info: fade in + rise up as user scrolls [0.35 → 0.75] ---
  const infoOpacity = useTransform(scrollYProgress, [0.35, 0.72], [0, 1]);
  const infoY       = useTransform(scrollYProgress, [0.35, 0.72], [48, 0]);

  return (
    /*
     * Scroll track — 200vh gives enough room for the sticky animation to play.
     * The sticky child stays pinned for the full extra 100vh scroll distance.
     */
    <div
      id="inicio"
      ref={trackRef}
      className="relative"
      style={{ height: '200vh' }}
    >
      {/* Sticky viewport-filling canvas */}
      <div
        className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-primary"
      >

        {/* ── LAYER: "portfolio" title stack (exits on scroll) ── */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ opacity: portfolioOpacity }}
          aria-hidden="true"
        >
          {/* Back-most ghost */}
          <motion.span
            className="absolute font-black leading-none"
            style={{
              fontSize: 'clamp(5rem, 24vw, 26rem)',
              color: 'var(--color-hero-layer-1)',
              opacity: 0.12,
              letterSpacing: '-0.05em',
              translateY: '-35%',
              scale: layer1Scale,
            }}
          >
            &ldquo;portfolio&rdquo;
          </motion.span>

          <motion.span
            className="absolute font-black leading-none"
            style={{
              fontSize: 'clamp(4.5rem, 22vw, 24rem)',
              color: 'var(--color-hero-layer-2)',
              opacity: 0.25,
              letterSpacing: '-0.05em',
              translateY: '-15%',
              scale: layer2Scale,
            }}
          >
            &ldquo;portfolio&rdquo;
          </motion.span>

          <motion.span
            className="absolute font-black leading-none"
            style={{
              fontSize: 'clamp(4rem, 20vw, 22rem)',
              color: 'var(--color-hero-layer-3)',
              opacity: 0.45,
              letterSpacing: '-0.05em',
              translateY: '-5%',
              scale: layer3Scale,
            }}
          >
            &ldquo;portfolio&rdquo;
          </motion.span>

          <motion.span
            className="absolute font-black leading-none"
            style={{
              fontSize: 'clamp(3.5rem, 18vw, 20rem)',
              color: 'var(--color-hero-layer-4)',
              opacity: 0.65,
              letterSpacing: '-0.05em',
              scale: layer4Scale,
            }}
          >
            &ldquo;portfolio&rdquo;
          </motion.span>

          {/* Foreground sharp text */}
          <motion.span
            className="absolute font-black leading-none"
            style={{
              fontSize: 'clamp(3rem, 16vw, 18rem)',
              color: 'var(--color-hero-layer-5)',
              opacity: 1,
              letterSpacing: '-0.03em',
              translateY: '2%',
              scale: portfolioScale,
            }}
          >
            &ldquo;portfolio&rdquo;
          </motion.span>

          {/* Year label */}
          <span
            className="absolute font-bold"
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 2.5rem)',
              color: 'var(--color-hero-year)',
              opacity: 0.9,
              letterSpacing: '0.05em',
              textShadow: '0 2px 8px rgba(0,0,0,0.15)',
              zIndex: 20,
              marginTop: '1.5rem',
            }}
          >
            2026
          </span>
        </motion.div>

        {/* ── LAYER: Personal info (enters on scroll) ── */}
        <motion.div
          className="relative z-10 flex flex-col items-center gap-5 px-6 text-center max-w-3xl w-full"
          style={{ opacity: infoOpacity, y: infoY }}
        >
          {/* Colgate badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 rounded-full border border-accent/30 bg-primary-dark/80 px-4 py-1.5 text-sm md:text-base font-semibold text-foreground backdrop-blur-md overflow-hidden shadow-clean"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            <img
              src={getImagePath('/work/colgate-palmolive.png')}
              alt="Colgate-Palmolive"
              className="h-5 w-auto object-contain relative rounded-sm"
            />
            <span className="relative">
              {language === 'es'
                ? 'Actualmente Software Engineering Intern en '
                : 'Currently Software Engineering Intern at '}
              <span className="font-bold text-accent">Colgate-Palmolive</span>
            </span>
          </motion.div>

          {/* Name */}
          <h1 className="text-5xl font-black text-foreground md:text-7xl leading-tight">
            {title ?? 'Fernando Ramírez'}
          </h1>

          {/* Role */}
          <h2 className="text-xl font-semibold text-foreground-light md:text-3xl">
            {subtitle?.split('|')?.[0] ?? subtitle}
            {subtitle?.includes('|') && (
              <>
                <span className="text-accent"> · </span>
                {subtitle.split('|')[1]}
              </>
            )}
          </h2>

          {/* CTA */}
          {cta && (
            <a
              href="#proyectos"
              className="mt-2 inline-flex items-center gap-3 rounded-full bg-accent px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-clean-lg transition duration-300 ease-out hover:-translate-y-1 hover:bg-accent-light hover:shadow-xl"
            >
              {cta}
              <span className="text-lg">→</span>
            </a>
          )}
        </motion.div>

      </div>
    </div>
  );
}
