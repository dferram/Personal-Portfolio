import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar, FaChevronLeft, FaChevronRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useI18n } from '@/i18n/I18nProvider';
import { PROJECTS_DATA } from '../data/projects';
import { getImagePath } from '@/utils/paths';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay },
});

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.1 },
  }),
};

const getRepoLogo = (repoName) => {
  const name = repoName.toLowerCase();
  if (name.includes('honatu')) return getImagePath('/logos/honatu.png');
  if (name.includes('aniei')) return getImagePath('/logos/aniei.png');
  if (name.includes('visionfeast')) return getImagePath('/logos/visionfeast.png');
  if (name.includes('razoconnect')) return getImagePath('/logos/razoconnect.png');
  if (name.includes('taskkey')) return getImagePath('/logos/taskkey.png');
  if (name.includes('fuzzy')) return getImagePath('/logos/fuzzymed.png');
  if (name.includes('leetcode')) return getImagePath('/logos/leetcode.png');
  if (name.includes('github-course')) return getImagePath('/logos/sac-github-course.png');
  if (name.includes('devpal')) return getImagePath('/logos/devpal.png');
  
  return getImagePath('/logos/github.png');
};

export default function Projects() {
  const { t } = useI18n();
  const sectionTag = t('projects.tag');
  const sectionTitle = t('projects.title');
  const sectionDescription = t('projects.description');

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/dferram/repos?sort=updated&per_page=15');
        if (!response.ok) throw new Error('Error fetching repos');
        let data = await response.json();
        
        // Filter out forks and sort by stars/updated
        data = data.filter(r => !r.fork);
        
        setRepos(data);
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="proyectos" className="relative py-24 bg-primary-dark overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        <motion.div
          className="mx-auto flex flex-col items-center gap-4 text-center md:max-w-3xl mb-16"
          {...fadeUp(0)}
        >
          {sectionTag && (
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-accent">
              {sectionTag}
            </span>
          )}
          <h2 className="text-4xl font-black text-foreground md:text-5xl">
            {sectionTitle}
          </h2>
          {sectionDescription && (
            <p className="text-base text-muted md:text-lg">{sectionDescription}</p>
          )}
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
          </div>
        ) : (
          <div className="relative w-full group">
            {/* Scroll Container */}
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide px-4 md:px-12"
            >
              {repos.map((repo, i) => {
                const localMatch = PROJECTS_DATA.find(p => p.links?.github?.toLowerCase() === repo.html_url.toLowerCase() || p.id === repo.name.toLowerCase());
                const ogImageUrl = localMatch?.images?.hero || localMatch?.images?.gallery?.[0] || getRepoLogo(repo.name);
                
                // Color intermedio único para que logos claros y oscuros sean visibles (sin cambios por modo oscuro)
                const bgClass = 'bg-gray-300';
                
                return (
                  <motion.article
                    key={repo.id}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    className="relative flex-none w-[320px] md:w-[400px] snap-center overflow-hidden rounded-2xl shadow-clean bg-primary border border-white/5 transition-all duration-500 hover:-translate-y-3 hover:shadow-accent/20 hover:border-accent/50"
                  >
                    <div className={`relative h-48 md:h-56 overflow-hidden ${bgClass} flex items-center justify-center p-8`}>
                      <img
                        src={ogImageUrl}
                        alt={repo.name}
                        className={`h-full w-full transition duration-700 hover:scale-110 opacity-90 hover:opacity-100 ${ogImageUrl.includes('/logos/') ? 'object-contain' : 'object-cover'}`}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = getRepoLogo(repo.name);
                          e.currentTarget.className = "h-full w-full transition duration-700 hover:scale-110 opacity-90 hover:opacity-100 object-contain";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                      <div className="absolute top-4 right-4 flex gap-2 pointer-events-none">
                         <span className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md text-xs font-bold text-white border border-white/10">
                            <FaStar className="text-accent" /> {repo.stargazers_count}
                         </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-4 p-6 h-[260px]">
                      <div>
                        <h3 className="text-xl font-bold text-foreground line-clamp-1 hover:text-accent transition-colors">
                          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3 min-h-[4.5rem]">
                          {repo.description || 'Sin descripción disponible.'}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {repo.language && (
                          <span className="px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-xs font-semibold">
                            {repo.language}
                          </span>
                        )}
                        {repo.topics?.slice(0, 2).map((topic) => (
                          <span key={topic} className="px-3 py-1 rounded-full bg-white/5 text-muted border border-white/10 text-xs font-medium">
                            {topic}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 flex items-center gap-6 border-t border-white/5 pt-4">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground hover:text-accent transition-colors"
                        >
                          <FaGithub size={18} /> Repo
                        </a>
                        {repo.homepage && (
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground hover:text-accent transition-colors"
                          >
                            <FaExternalLinkAlt size={16} /> Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
            
            {/* Navigation Arrows */}
            <div className="absolute top-[40%] -left-4 md:left-2 -translate-y-1/2 z-20">
              <button 
                onClick={() => scroll('left')}
                className="btn-glass w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-lg"
                aria-label="Scroll left"
              >
                <FaArrowLeft />
              </button>
            </div>
            
            <div className="absolute top-[40%] -right-4 md:right-2 -translate-y-1/2 z-20">
              <button 
                onClick={() => scroll('right')}
                className="btn-glass w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-lg"
                aria-label="Scroll right"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

