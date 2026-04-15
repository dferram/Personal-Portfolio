import React, { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import {
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/i18n/I18nProvider';
import { useTheme } from '@/context/ThemeContext';
import { FaGithub, FaStar, FaCodeBranch, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function GitHubStats({ username = 'dferram' }) {
  const { t } = useI18n();
  const { currentTheme, availableThemes } = useTheme();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [languageData, setLanguageData] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  // Colores dinámicos basados en el tema
  const theme = availableThemes[currentTheme] || availableThemes['classic'];
  const accentColor = theme.accent;
  const accentDarkColor = theme['accent-dark'];
  const foregroundColor = theme.foreground;

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        if (!reposResponse.ok) throw new Error('Error al cargar repositorios');
        const reposData = await reposResponse.json();

        const sortedRepos = reposData
          .filter(repo => !repo.fork)
          .sort((a, b) => (b.stargazers_count + b.forks_count) - (a.stargazers_count + a.forks_count))
          .slice(0, 6);

        setRepos(sortedRepos);

        const langs = {};
        let total = 0;
        reposData.forEach(repo => {
          if (repo.language) {
            langs[repo.language] = (langs[repo.language] || 0) + 1;
            total++;
          }
        });

        const langChartData = Object.keys(langs)
          .map(name => ({ 
            name, 
            value: langs[name],
            percentage: Math.round((langs[name] / total) * 100)
          }))
          .sort((a, b) => b.value - a.value)
          .slice(0, 5);

        setLanguageData(langChartData);
        setLoading(false);
      } catch (err) {
        console.error('GitHub API Error:', err);
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  // Detect if current theme has a dark background
  const isDarkTheme = (() => {
    const hex = theme.primary.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return (r * 0.299 + g * 0.587 + b * 0.114) < 128;
  })();

  const buildGradient = (accent, accentLight, isDark) => {
    const hex2rgb = (h) => {
      const c = h.replace('#', '');
      return [parseInt(c.substring(0,2),16), parseInt(c.substring(2,4),16), parseInt(c.substring(4,6),16)];
    };
    const rgb2hex = (r,g,b) => '#' + [r,g,b].map(x => Math.max(0,Math.min(255,Math.round(x))).toString(16).padStart(2,'0')).join('');
    const [ar,ag,ab] = hex2rgb(accent);
    const [lr,lg,lb] = hex2rgb(accentLight);

    if (isDark) {
      return [
        rgb2hex(Math.round(ar*0.2), Math.round(ag*0.2), Math.round(ab*0.2)),
        rgb2hex(Math.round(ar*0.45), Math.round(ag*0.45), Math.round(ab*0.45)),
        rgb2hex(Math.round(ar*0.7), Math.round(ag*0.7), Math.round(ab*0.7)),
        accent,
      ];
    } else {
      return [
        rgb2hex(lr + Math.round((255-lr)*0.5), lg + Math.round((255-lg)*0.5), lb + Math.round((255-lb)*0.5)),
        accentLight,
        accent,
        accentDarkColor,
      ];
    }
  };

  const gradient = buildGradient(accentColor, theme['accent-light'], isDarkTheme);
  const emptyColor = isDarkTheme ? '#161b22' : '#ebedf0';
  
  const calendarTheme = {
    light: [emptyColor, ...gradient],
    dark: [emptyColor, ...gradient],
  };

  // Colores personalizados para Streak Stats basados en el tema activo
  const getStreakCustomParams = () => {
    const strip = (hex) => hex.replace('#', '');
    const hex2rgb = (h) => {
      const c = h.replace('#', '');
      return [parseInt(c.substring(0,2),16), parseInt(c.substring(2,4),16), parseInt(c.substring(4,6),16)];
    };
    const rgb2hex = (r,g,b) => [r,g,b].map(x => Math.max(0,Math.min(255,Math.round(x))).toString(16).padStart(2,'0')).join('');

    // Mezclar primary-dark al 50% sobre primary (simula bg-primary-dark/50)
    const [pr, pg, pb] = hex2rgb(theme.primary);
    const [dr, dg, db] = hex2rgb(theme['primary-dark'] || theme.primary);
    const blendedBg = rgb2hex(
      Math.round(dr * 0.5 + pr * 0.5),
      Math.round(dg * 0.5 + pg * 0.5),
      Math.round(db * 0.5 + pb * 0.5)
    );

    const accent = strip(accentColor);
    const accentLt = strip(theme['accent-light'] || accentColor);
    const fg = strip(foregroundColor);
    const muted = strip(theme.muted || foregroundColor);

    return [
      `background=${blendedBg}`,
      `border=${blendedBg}`,
      `stroke=${blendedBg}`,
      `ring=${accent}`,
      `fire=${accent}`,
      `currStreakNum=${accent}`,
      `sideNums=${fg}`,
      `currStreakLabel=${accentLt}`,
      `sideLabels=${muted}`,
      `dates=${muted}`,
    ].join('&');
  };

  // Paleta de colores para gráficos, derivada del tema activo
  const chartColors = [accentColor, accentDarkColor, theme['accent-light'], gradient[1], gradient[2]];

  if (loading) return (
    <div className="flex justify-center items-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
    </div>
  );

  return (
    <section id="github" className="relative py-24 bg-primary overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="mb-12 space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-2 w-20 rounded-full bg-accent" />
            <span className="inline-block rounded-full border-2 border-accent px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-accent">
              {t('github.tag')}
            </span>
          </div>
          <h2 className="text-4xl font-black uppercase tracking-tight text-foreground md:text-5xl">
            {t('github.contributions')}
          </h2>
        </div>

        {/* Contributions Wall */}
        <div className="mb-12 p-8 rounded-2xl bg-primary-dark/50 border border-white/5 shadow-2xl overflow-x-auto">
          <div className="min-w-[800px] flex justify-center">
            <GitHubCalendar 
              username={username}
              theme={calendarTheme}
              fontSize={14}
              blockSize={14}
              blockMargin={5}
              loading={loading}
              labels={{
                totalCount: `contribuciones en el último año`,
              }}
            />
          </div>
        </div>

        {/* CTA Button to Expand */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-accent text-primary-dark font-black uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-lg shadow-accent/20"
          >
            {isExpanded ? (
              <>
                <FaChevronUp /> {t('common.viewProjects')}
              </>
            ) : (
              <>
                <FaChevronDown /> {t('github.viewMore')}
              </>
            )}
          </button>
        </div>

        {/* Expanded Content: Metrics & Repos */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Left Column: Languages & Streak */}
                <div className="space-y-8">
                  {/* Languages Card */}
                  <div className="p-8 rounded-2xl bg-primary-dark/50 border border-white/5 shadow-2xl flex flex-col">
                    <h3 className="text-xl font-bold text-foreground mb-6">{t('github.languages')}</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div className="h-[250px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={languageData}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={80}
                              paddingAngle={5}
                              dataKey="value"
                            >
                              {languageData.map((entry, index) => (
                                <Cell 
                                  key={`cell-${index}`} 
                                  fill={chartColors[index % 5]} 
                                />
                              ))}
                            </Pie>
                            <Tooltip 
                              contentStyle={{ backgroundColor: theme.primary, border: `1px solid ${accentColor}`, borderRadius: '12px' }}
                              itemStyle={{ color: foregroundColor }}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>

                      {/* Glowing Language Bars */}
                      <div className="space-y-4">
                        {languageData.map((lang, index) => (
                          <div key={lang.name} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span className="text-foreground font-bold">{lang.name}</span>
                              <span className="text-muted">{lang.percentage}%</span>
                            </div>
                            <div className="h-2 w-full bg-primary rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${lang.percentage}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                                className="h-full rounded-full relative"
                                style={{ 
                                  backgroundColor: chartColors[index % 5],
                                  boxShadow: `0 0 10px ${chartColors[index % 5]}80`
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Streak Stats */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-2xl bg-primary-dark/50 border border-white/5 shadow-2xl flex flex-col items-center justify-center"
                  >
                    <h3 className="text-xl font-bold text-foreground mb-6 w-full text-left">{t('github.activity')}</h3>
                    <div className="w-full flex justify-center">
                      <img 
                        src={`https://streak-stats.demolab.com?user=${username}&hide_border=true&timezone=America/Mexico_City&${getStreakCustomParams()}`} 
                        alt="GitHub Streak"
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Right Column: Top Repositories */}
                <div className="p-8 rounded-2xl bg-primary-dark/50 border border-white/5 shadow-2xl">
                  <h3 className="text-xl font-bold text-foreground mb-6">{t('github.topRepos')}</h3>
                  <div className="space-y-4">
                    {repos.map((repo) => (
                      <motion.a
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.03)' }}
                        className="flex items-center justify-between p-4 rounded-xl bg-primary border border-white/5 hover:border-accent/50 transition-all duration-300"
                      >
                        <div className="flex flex-col">
                          <span className="font-bold text-foreground">{repo.name}</span>
                          <span className="text-xs text-muted truncate max-w-[200px]">{repo.description || 'No description'}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1 text-accent">
                            <FaStar />
                            <span>{repo.stargazers_count}</span>
                          </div>
                          <div className="flex items-center gap-1 text-muted">
                            <FaCodeBranch />
                            <span>{repo.forks_count}</span>
                          </div>
                          <FaExternalLinkAlt className="text-xs text-muted/50" />
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <a 
                  href={`https://github.com/${username}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:underline font-bold"
                >
                  {t('github.viewAll')} <FaExternalLinkAlt size={12} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
