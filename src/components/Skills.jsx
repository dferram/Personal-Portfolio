import { useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { SKILLS_DATA } from '@/data/skillsData';
import { useI18n } from '@/i18n/I18nProvider';

gsap.registerPlugin(ScrollTrigger);

const HORIZONTAL_SECTION_BG = 'bg-black';

// Full-width carousel item styling (no cutoff, proper padding/spacing)
const SKILL_ITEM_CLASSES =
  'group flex flex-col items-center justify-center gap-6 text-center transition-all duration-300 hover:scale-105 flex-shrink-0 w-96';
const SKILL_ICON_CLASSES =
  'h-40 w-40 md:h-48 md:w-48 object-contain drop-shadow-[0_0_8px_rgba(229,9,20,0.8)] drop-shadow-[0_0_20px_rgba(229,9,20,0.4)] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(229,9,20,0.95)] group-hover:drop-shadow-[0_0_30px_rgba(229,9,20,0.6)] group-hover:brightness-120 group-hover:saturate-150';
const SKILL_NAME_CLASSES = 'text-2xl md:text-3xl font-bold text-white tracking-wide';
const CATEGORY_TITLE_CLASSES = 'text-5xl md:text-6xl font-black uppercase text-white drop-shadow-[0_4px_16px_rgba(229,9,20,0.3)] leading-tight';
const CATEGORY_DESC_CLASSES = 'mt-3 text-lg md:text-xl text-gray-300 font-light max-w-xl';

export default function Skills() {
  const { t } = useI18n();

  const tag = t('skills.tag') ?? 'Skillset';
  const title = t('skills.title') ?? 'Habilidades Técnicas';
  const description = t('skills.description') ?? 'Mi Stack Tecnológico y Herramientas';

  // Separate refs for each carousel: trigger (outer container) and track (inner scrollable element)
  const carouselTriggersRef = useRef([]);
  const carouselTracksRef = useRef([]);

  const categories = useMemo(() => {
    return SKILLS_DATA.map((category) => {
      const translatedTitle = t(`skills.categories.${category.id}.title`);

      return {
        ...category,
        title:
          (typeof translatedTitle === 'string' && translatedTitle.length > 0 && translatedTitle) || category.title || '',
        items: category.items ?? [],
      };
    });
  }, [t]);

  useEffect(() => {
    // Use gsap.context to manage animations and prevent duplicates in React strict mode
    const ctx = gsap.context(() => {
      carouselTracksRef.current.forEach((track, idx) => {
        if (!track) return;

        const triggerContainer = carouselTriggersRef.current[idx];
        if (!triggerContainer) return;

        // Calculate the total distance the track needs to travel horizontally
        const trackWidth = track.scrollWidth;
        const containerWidth = triggerContainer.clientWidth;
        const distance = trackWidth - containerWidth;

        if (distance <= 0) return;

        // Animate ONLY the X axis (xPercent) to move the track left
        // The trigger container is pinned, so the entire section stays visible
        gsap.to(track, {
          xPercent: -(distance / trackWidth) * 100,
          ease: 'none',
          scrollTrigger: {
            trigger: triggerContainer,
            start: 'top top',
            // End distance: user scrolls down by exactly the amount of horizontal travel
            end: () => `+=${distance}`,
            scrub: 2,
            pin: true, // Pin the ENTIRE section (title + gallery)
            pinSpacing: true,
            invalidateOnRefresh: true,
            markers: false,
          },
        });
      });
    });

    return () => {
      ctx.revert(); // Clean up all animations created in this context
    };
  }, [categories]);

  // Observe right-column groups to trigger entry animations when they enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            const items = el.querySelectorAll('[data-skill-item]');
            items.forEach((it, idx) => {
              setTimeout(() => {
                it.style.opacity = '1';
                it.style.transform = 'translateY(0)';
              }, idx * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    carouselTracksRef.current.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [categories]);

  return (
    <section id="habilidades" className={`relative text-white ${HORIZONTAL_SECTION_BG}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(229,9,20,0.25),_transparent_65%)]" />
      
      {/* Main Header */}
      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col gap-0 px-6 py-28">
        <header className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          {tag && (
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-red-500">{tag}</span>
          )}
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            {title}
            <span className="ml-3 text-red-500">//</span>
          </h2>
          {description && <p className="text-base text-gray-400 md:text-lg">{description}</p>}
        </header>
      </div>

      {/* Each Category is a Full-Screen Panel */}
      {categories.map((category, index) => {
        return (
          <div
            key={category.id}
            ref={(el) => {
              carouselTriggersRef.current[index] = el;
            }}
            className="relative min-h-screen w-full flex flex-col overflow-hidden bg-black"
          >
            {/* Title Section - Top of the panel */}
            <div className="relative z-10 flex flex-col justify-start px-6 pt-20 pb-12 md:pt-24">
              <h3 className={CATEGORY_TITLE_CLASSES}>
                {category.title}
              </h3>
            </div>

            {/* Carousel Track - Fills remaining vertical space, centers content */}
            <div className="relative flex-1 flex items-center overflow-hidden px-6 pb-12">
              <div
                ref={(el) => {
                  carouselTracksRef.current[index] = el;
                }}
                className="flex gap-8 items-center"
                data-carousel-scroll
                style={{
                  minWidth: 'min-content',
                  width: '100%',
                }}
              >
                <style>{`
                  #habilidades [data-carousel-scroll]::-webkit-scrollbar { display: none; }
                `}</style>

                {category.items.map((item, itemIndex) => (
                  <div
                    key={item.name}
                    className={SKILL_ITEM_CLASSES}
                    data-skill-item
                    style={{
                      opacity: 0,
                      transform: 'translateY(24px)',
                      transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                      transitionDelay: `${itemIndex * 100}ms`,
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      className={SKILL_ICON_CLASSES}
                      loading="lazy"
                    />
                    <p className={SKILL_NAME_CLASSES}>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
