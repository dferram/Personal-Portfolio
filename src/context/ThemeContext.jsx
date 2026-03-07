/* 
 * CONTEXTO DE TEMAS - SISTEMA DINAMICO
 * 
 * Este contexto permite cambiar el tema del portafolio en tiempo real
 * sin necesidad de editar codigo o recargar la pagina.
 * 
 * COMO FUNCIONA:
 * - Lee el tema guardado en localStorage al iniciar
 * - Si no hay tema guardado, usa 'classic' por defecto
 * - Aplica los colores del tema como CSS variables en el <html>
 * - Cualquier componente puede cambiar el tema usando setTheme()
 * 
 * PARA DESARROLLADORES:
 * - El tema se guarda automaticamente en localStorage
 * - Los cambios se aplican instantaneamente en toda la app
 * - Para agregar un nuevo tema, solo agregalo en src/styles/themes/
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { allThemes } from '@/styles/themes';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de un ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Leer tema guardado en localStorage o usar 'classic' por defecto
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    return savedTheme && allThemes[savedTheme] ? savedTheme : 'classic';
  });

  // Aplicar el tema actual como CSS variables cada vez que cambie
  useEffect(() => {
    const theme = allThemes[currentTheme];
    if (!theme) return;

    const root = document.documentElement;
    
    // Aplicar cada color del tema como variable CSS
    // Colores base
    root.style.setProperty('--color-primary', theme.primary);
    root.style.setProperty('--color-primary-dark', theme['primary-dark']);
    root.style.setProperty('--color-accent', theme.accent);
    root.style.setProperty('--color-accent-dark', theme['accent-dark']);
    root.style.setProperty('--color-accent-light', theme['accent-light']);
    root.style.setProperty('--color-foreground', theme.foreground);
    root.style.setProperty('--color-foreground-light', theme['foreground-light']);
    root.style.setProperty('--color-muted', theme.muted);
    
    // Header/Navbar colors (fondo, texto, bordes)
    root.style.setProperty('--color-header-bg', theme['header-bg']);
    root.style.setProperty('--color-header-text', theme['header-text']);
    root.style.setProperty('--color-header-border', theme['header-border']);
    
    // Hero "portfolio" text layers (5 capas de profundidad)
    root.style.setProperty('--color-hero-layer-1', theme['hero-layer-1']);
    root.style.setProperty('--color-hero-layer-2', theme['hero-layer-2']);
    root.style.setProperty('--color-hero-layer-3', theme['hero-layer-3']);
    root.style.setProperty('--color-hero-layer-4', theme['hero-layer-4']);
    root.style.setProperty('--color-hero-layer-5', theme['hero-layer-5']);
    root.style.setProperty('--color-hero-year', theme['hero-year']);

    // Guardar en localStorage para que persista entre sesiones
    localStorage.setItem('portfolio-theme', currentTheme);
  }, [currentTheme]);

  const setTheme = (themeName) => {
    if (allThemes[themeName]) {
      setCurrentTheme(themeName);
    } else {
      console.warn(`Tema "${themeName}" no encontrado. Temas disponibles:`, Object.keys(allThemes));
    }
  };

  // Resetear al tema por defecto
  const resetTheme = () => {
    setCurrentTheme('classic');
    localStorage.removeItem('portfolio-theme');
  };

  const value = {
    currentTheme,
    setTheme,
    resetTheme,
    availableThemes: allThemes,
    themeNames: Object.keys(allThemes),
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
