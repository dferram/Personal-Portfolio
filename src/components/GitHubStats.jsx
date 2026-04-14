import React, { useState, useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend 
} from 'recharts';
import { motion } from 'framer-motion';
import { useI18n } from '@/i18n/I18nProvider';
import { useTheme } from '@/context/ThemeContext';
import { FaGithub, FaStar, FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa';

export default function GitHubStats({ username = 'dferram' }) {
  const { t } = useI18n();
  const { currentTheme, availableThemes } = useTheme();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [languageData, setLanguageData] = useState([]);

  // Colores dinámicos basados en el tema
  const theme = availableThemes[currentTheme] || availableThemes['classic'];
  const accentColor = theme.accent;
  const accentDarkColor = theme['accent-dark'];
  const mutedColor = theme.muted;
  const foregroundColor = theme.foreground;

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        // Obtener repositorios
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        if (!reposResponse.ok) throw new Error('Error al cargar repositorios');
        const reposData = await reposResponse.json();

        // Filtrar y ordenar por estrellas + forks (relevancia)
        const sortedRepos = reposData
          .filter(repo => !repo.fork)
          .sort((a, b) => (b.stargazers_count + b.forks_count) - (a.stargazers_count + a.forks_count))
          .slice(0, 6);

        setRepos(sortedRepos);

        // Calcular lenguajes
        const langs = {};
        reposData.forEach(repo => {
          if (repo.language) {
            langs[repo.language] = (langs[repo.language] || 0) + 1;
          }
        });

        const langChartData = Object.keys(langs)
          .map(name => ({ name, value: langs[name] }))
          .sort((a, b) => b.value - a.value)
          .slice(0, 5);

        setLanguageData(langChartData);
        setLoading(false);
      } catch (err) {
        console.error('GitHub API Error:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  const calendarTheme = {
    light: ['#ebedf0', accentDarkColor, accentColor, accentColor, accentColor],
    dark: ['#161b22', accentDarkColor, accentColor, accentColor, accentColor],
  };

  if (loading) return (
    <div className="flex justify-center items-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
    </div>
  );

  return (
    <section id="github" className="relative py-24 bg-primary overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="mb-16 space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-2 w-20 rounded-full bg-accent" />
            <span className="inline-block rounded-full border-2 border-accent px-4 py-1 text-xs font-bold uppercase tracking-[0.3em] text-accent">
              {t('github.tag')}
            </span>
          </div>
          <h2 className="text-4xl font-black uppercase tracking-tight text-foreground md:text-5xl">
            {t('github.title')}
          </h2>
          <p className="max-w-2xl text-lg text-muted">
            {t('github.description')}
          </p>
        </div>

        {/* Contributions Wall */}
        <div className="mb-20 p-8 rounded-2xl bg-primary-dark/50 border border-white/5 shadow-2xl overflow-x-auto">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <FaGithub className="text-accent" />
            {t('github.contributions')}
          </h3>
          <div className="min-w-[800px] flex justify-center">
            <GitHubCalendar 
              username={username}
              theme={calendarTheme}
              fontSize={14}
              blockSize={14}
              blockMargin={5}
              loading={loading}
              labels={{
                totalCount: `{{count}} contribuciones en el último año`,
              }}
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Languages Pie Chart */}
          <div className="p-8 rounded-2xl bg-primary-dark/50 border border-white/5 shadow-2xl h-[400px] flex flex-col">
            <h3 className="text-xl font-bold text-foreground mb-6">{t('github.languages')}</h3>
            <div className="flex-1 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={languageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {languageData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={[accentColor, accentDarkColor, theme['accent-light'], '#6366f1', '#a855f7'][index % 5]} 
                      />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: theme.primary, border: `1px solid ${accentColor}` }}
                    itemStyle={{ color: foregroundColor }}
                  />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Top Repositories */}
          <div className="p-8 rounded-2xl bg-primary-dark/50 border border-white/5 shadow-2xl">
            <h3 className="text-xl font-bold text-foreground mb-6">{t('github.topRepos')}</h3>
            <div className="space-y-4">
              {repos.map((repo) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-primary border border-white/5 hover:border-accent transition-colors"
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
            <div className="mt-8 text-center">
              <a 
                href={`https://github.com/${username}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:underline font-bold"
              >
                {t('github.viewAll')} <FaExternalLinkAlt size={12} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
