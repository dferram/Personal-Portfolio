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
 * - El selector de temas esta integrado en el Navbar (accesible en todas las paginas)
 * 
 * COMO AGREGAR UNA NUEVA PALETA:
 * 1. Crea un nuevo archivo en src/styles/themes/ (ejemplo: mi-tema.js)
 * 2. Define todos los colores requeridos (usa template.js como guia):
 *    - primary, primary-dark (fondos)
 *    - accent, accent-dark, accent-light (colores de acento)
 *    - foreground, foreground-light, muted (textos)
 *    - header-bg, header-text, header-border (navbar)
 *    - hero-layer-1 a hero-layer-5, hero-year (hero section)
 *    - name: 'Nombre Descriptivo del Tema'
 * 3. Importa y exporta tu tema en src/styles/themes/index.js
 * 4. ¡Listo! Aparecera automaticamente en el selector del navbar
 * 
 * IMPORTANTE - USO DE VARIABLES CSS:
 * - TODOS los componentes deben usar var(--color-primary), var(--color-accent), etc.
 * - NUNCA hardcodear colores como 'bg-white' o '#FFFFFF' en componentes
 * - Esto asegura que todos los elementos reaccionen al cambio de tema
 * - Las variables CSS se definen en este contexto y se aplican al <html>
 * 
 * PARA DESARROLLADORES:
 * - El tema se guarda automaticamente en localStorage
 * - Los cambios se aplican instantaneamente en toda la app sin recargar
 * - El selector esta en Navbar (desktop y mobile)
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
