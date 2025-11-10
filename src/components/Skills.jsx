import { useEffect, useMemo, useRef } from 'react';

import { SKILLS_DATA } from '@/data/skillsData';
import { useI18n } from '@/i18n/I18nProvider';

const SCROLL_SNAP_CLASSES = 'snap-x snap-mandatory';

const HORIZONTAL_SECTION_BG = 'bg-black';

const SKILL_ITEM_CLASSES =
  'flex w-40 flex-shrink-0 flex-col items-center gap-4 px-6 text-center';
const SKILL_ICON_CLASSES = 'h-20 w-20 object-contain drop-shadow-[0_0_18px_rgba(229,9,20,0.55)]';
const SKILL_NAME_CLASSES = 'text-lg font-medium text-white';

export default function Skills() {
  const { t } = useI18n();

  const tag = t('skills.tag') ?? 'Skillset';
  const title = t('skills.title') ?? 'Habilidades Técnicas';
  const description = t('skills.description') ?? 'Mi Stack Tecnológico y Herramientas';

  const scrollAreaRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollAreaRef.current;
    if (!scrollElement) return;

    const handleWheel = (event) => {
      if (!scrollElement) return;
      const { deltaY, deltaX } = event;

      if (Math.abs(deltaX) > Math.abs(deltaY)) return;

      const maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;
      const atStart = scrollElement.scrollLeft <= 0;
      const atEnd = scrollElement.scrollLeft >= maxScrollLeft;

      if ((deltaY < 0 && atStart) || (deltaY > 0 && atEnd)) {
        return;
      }

      event.preventDefault();
      scrollElement.scrollLeft += deltaY;
    };

    scrollElement.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      scrollElement.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const categories = useMemo(() => {
    return SKILLS_DATA.map((category) => {
      const translatedTitle = t(`skills.categories.${category.id}.title`);
      const translatedDescription = t(`skills.categories.${category.id}.description`);

      return {
        ...category,
        title:
          (typeof translatedTitle === 'string' && translatedTitle.length > 0 && translatedTitle) || category.title || '',
        description:
          (typeof translatedDescription === 'string' && translatedDescription.length > 0 && translatedDescription) ||
          category.description ||
          '',
        items: category.items ?? [],
      };
    });
  }, [t]);

  return (
    <section id="habilidades" className={`relative overflow-hidden py-28 text-white ${HORIZONTAL_SECTION_BG}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(229,9,20,0.25),_transparent_65%)]" />
      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col gap-24 px-6">
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

        {categories.map((category, index) => {
          const isScrollable = category.id !== 'data';

          return (
            <div key={category.id} className="relative flex flex-col gap-12">
              <div
                className={
                  (isScrollable ? 'sticky top-24 z-10 ' : 'relative z-10 ') +
                  'max-w-lg bg-black/95 px-8 pt-6 text-left ' +
                  (isScrollable ? 'pb-12' : 'pb-8')
                }
              >
                <h3 className="text-2xl font-bold uppercase tracking-[0.35em] text-red-500">{category.title}</h3>
              </div>

              <div className="relative z-0">
                {isScrollable ? (
                  <div
                    ref={index === 0 ? scrollAreaRef : undefined}
                    data-horizontal-scroll={index === 0 ? true : undefined}
                    className={`flex gap-16 overflow-x-auto overflow-y-hidden pb-8 ${SCROLL_SNAP_CLASSES}`}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {index === 0 && (
                      <style>{`
                        #habilidades [data-horizontal-scroll="true"]::-webkit-scrollbar { display: none; }
                      `}</style>
                    )}
                    <div className="flex gap-12 px-8">
                      {category.items.map((item) => (
                        <div key={item.name} className={SKILL_ITEM_CLASSES}>
                          <img src={item.icon} alt={item.name} className={SKILL_ICON_CLASSES} loading="lazy" />
                          <p className={SKILL_NAME_CLASSES}>{item.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-wrap justify-center gap-16 px-8 pb-8">
                    {category.items.map((item) => (
                      <div key={item.name} className={SKILL_ITEM_CLASSES}>
                        <img src={item.icon} alt={item.name} className={SKILL_ICON_CLASSES} loading="lazy" />
                        <p className={SKILL_NAME_CLASSES}>{item.name}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
