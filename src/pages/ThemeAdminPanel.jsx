/*
 * PANEL DE REFERENCIA DE TEMAS
 *
 * Muestra todos los temas disponibles con su previsualización.
 * Para activar un tema, edita UNA SOLA LÍNEA en:
 *   src/styles/themes/index.js
 *
 * Acceso: escribe /estilos en la URL del navegador.
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { allThemes } from '@/styles/themes';
import { FiHome, FiCode } from 'react-icons/fi';

const themeDescriptions = {
  classic:        'Clásico Profesional — blanco y azul',
  darkElegant:    'Oscuro Elegante — negro con dorado',
  retroSolar:     'Retro Solar — crema y naranja cálido',
  techPastel:     'Tech Pastel — azul claro y lila',
  oceanBreeze:    'Brisa Marina — azul aqua refrescante',
  forestGreen:    'Bosque Verde — verdes naturales',
  sunsetWarm:     'Atardecer Cálido — rosas y naranjas',
  midnightPurple: 'Medianoche Púrpura — oscuro profundo',
  racingRed:      'Racing Red — rojo F1 y negro',
};

const ThemePreview = ({ theme }) => (
  <div className="w-full rounded-lg overflow-hidden shadow-lg">
    {/* Mini Header */}
    <div
      className="px-3 py-2 flex items-center justify-between text-xs border-b"
      style={{ backgroundColor: theme['header-bg'], borderColor: theme['header-border'], color: theme['header-text'] }}
    >
      <span className="font-bold">Portfolio</span>
      <div className="flex gap-2">
        <span>Inicio</span>
        <span>Proyectos</span>
      </div>
    </div>

    {/* Mini Hero */}
    <div className="relative px-4 py-6 flex flex-col items-center" style={{ backgroundColor: theme.primary }}>
      <div className="relative w-full h-12 flex items-center justify-center mb-3">
        <div className="absolute font-black text-4xl select-none" style={{ color: theme['hero-layer-2'], opacity: 0.25, transform: 'translateY(-8%)' }}>
          portfolio
        </div>
        <div className="absolute font-black text-3xl select-none" style={{ color: theme['hero-layer-4'], opacity: 0.55 }}>
          portfolio
        </div>
        <div className="absolute font-black text-2xl select-none" style={{ color: theme['hero-layer-5'] }}>
          portfolio
        </div>
      </div>
      <h2 className="text-base font-bold mb-1" style={{ color: theme.foreground }}>Tu Nombre</h2>
      <p className="text-xs mb-3" style={{ color: theme['foreground-light'] }}>Desarrollador Web</p>
      <button className="px-4 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: theme.accent }}>
        Ver Proyectos
      </button>
    </div>

    {/* Mini Content lines */}
    <div className="px-4 py-3 space-y-2" style={{ backgroundColor: theme['primary-dark'] }}>
      <div className="h-2 rounded" style={{ backgroundColor: theme.foreground, opacity: 0.8, width: '80%' }} />
      <div className="h-2 rounded" style={{ backgroundColor: theme['foreground-light'], opacity: 0.6, width: '60%' }} />
      <div className="h-2 rounded" style={{ backgroundColor: theme.muted, opacity: 0.4, width: '70%' }} />
    </div>
  </div>
);

export default function ThemeAdminPanel() {
  const navigate = useNavigate();
  const themeEntries = Object.entries(allThemes);

  return (
    <div className="min-h-screen bg-primary text-foreground py-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 mt-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-accent">Panel de Estilos</h1>
          <p className="text-lg text-foreground-light max-w-2xl mx-auto mb-6">
            Referencia visual de todos los temas disponibles. Para activar uno, cambia <strong>una sola línea</strong> en el código.
          </p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors shadow-clean"
          >
            <FiHome />
            Volver al Portafolio
          </button>
        </div>

        {/* Instrucciones */}
        <div className="bg-accent/10 border-l-4 border-accent rounded-lg p-6 mb-10 flex gap-4">
          <FiCode className="text-accent text-2xl flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-lg mb-2 text-accent">¿Cómo cambiar el tema?</h3>
            <p className="text-foreground-light mb-2">
              Abre <code className="bg-primary-dark px-2 py-0.5 rounded text-sm">src/styles/themes/index.js</code> y cambia la línea:
            </p>
            <pre className="bg-primary-dark rounded-lg px-4 py-3 text-sm overflow-x-auto">
              <span className="text-muted">{'// Cambia el tema aquí ↓'}</span>{'\n'}
              <span className="text-accent">export const</span>
              {' activeTheme = '}
              <span className="text-foreground font-bold">classicTheme</span>
              {';'}
            </pre>
            <p className="text-foreground-light mt-2 text-sm">
              Sustituye <code className="bg-primary-dark px-1.5 py-0.5 rounded">classicTheme</code> por cualquier nombre de la lista de abajo. ¡Guarda y listo!
            </p>
          </div>
        </div>

        {/* Grid de temas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themeEntries.map(([key, theme]) => (
            <div key={key} className="bg-primary-dark rounded-xl overflow-hidden shadow-clean hover:shadow-clean-lg transition-all">
              <ThemePreview theme={theme} />
              <div className="p-5">
                <h3 className="text-xl font-bold text-foreground mb-1">{theme.name || key}</h3>
                <p className="text-sm text-foreground-light mb-4">{themeDescriptions[key] || 'Tema personalizado'}</p>
                <div className="bg-primary rounded-lg px-4 py-2 text-sm font-mono">
                  <span className="text-muted">activeTheme = </span>
                  <span className="text-accent font-bold">{key.replace(/([A-Z])/g, ($1) => $1)}Theme</span>
                  <span className="text-muted">;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
