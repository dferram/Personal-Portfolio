/* 
 * CONTEXTO DE TEMAS - CONFIGURACIÓN ESTÁTICA
 * 
 * El tema se define en una sola línea en:
 *   src/styles/themes/index.js
 * 
 * COMO CAMBIAR EL TEMA:
 * 1. Abre src/styles/themes/index.js
 * 2. Cambia la línea:
 *      export const activeTheme = classicTheme;
 *    Por cualquier otro tema, por ejemplo:
 *      export const activeTheme = darkElegantTheme;
 * 3. Guarda el archivo — ¡listo!
 * 
 * TEMAS DISPONIBLES:
 *   classicTheme, darkElegantTheme, retroSolarTheme,
 *   techPastelTheme, oceanBreezeTheme, forestGreenTheme,
 *   sunsetWarmTheme, midnightPurpleTheme, racingRedTheme
 */

import React, { createContext, useContext, useEffect } from 'react';
import { activeTheme } from '@/styles/themes';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de un ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Aplicar el tema activo como CSS variables al montar la app
  useEffect(() => {
    const theme = activeTheme;
    if (!theme) return;

    const root = document.documentElement;

    // Colores base
    root.style.setProperty('--color-primary', theme.primary);
    root.style.setProperty('--color-primary-dark', theme['primary-dark']);
    root.style.setProperty('--color-accent', theme.accent);
    root.style.setProperty('--color-accent-dark', theme['accent-dark']);
    root.style.setProperty('--color-accent-light', theme['accent-light']);
    root.style.setProperty('--color-foreground', theme.foreground);
    root.style.setProperty('--color-foreground-light', theme['foreground-light']);
    root.style.setProperty('--color-muted', theme.muted);

    // Header/Navbar
    root.style.setProperty('--color-header-bg', theme['header-bg']);
    root.style.setProperty('--color-header-text', theme['header-text']);
    root.style.setProperty('--color-header-border', theme['header-border']);

    // Hero layers
    root.style.setProperty('--color-hero-layer-1', theme['hero-layer-1']);
    root.style.setProperty('--color-hero-layer-2', theme['hero-layer-2']);
    root.style.setProperty('--color-hero-layer-3', theme['hero-layer-3']);
    root.style.setProperty('--color-hero-layer-4', theme['hero-layer-4']);
    root.style.setProperty('--color-hero-layer-5', theme['hero-layer-5']);
    root.style.setProperty('--color-hero-year', theme['hero-year']);
  }, []);

  // El valor del contexto expone el tema activo (solo lectura)
  const value = {
    currentTheme: activeTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
