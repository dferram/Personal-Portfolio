/* 
 * PANEL DE ADMINISTRACION DE TEMAS (OCULTO)
 * 
 * ¡Bienvenido al panel de estilos! Aqui puedes probar todos los temas que hay 
 * disponibles y ver cual combina mejor con tu portafolio.
 * 
 * ACCESO:
 * - Este panel solo es accesible escribiendo la URL: /estilos
 * - No hay enlaces visibles en el portafolio que apunten aqui
 * - Es completamente seguro, no requiere autenticacion
 * 
 * COMO USAR:
 * 1. Observa la vista previa REAL de cada tema (muestra header, hero, textos, etc.)
 * 2. Haz clic en "Seleccionar" para aplicar el tema en todo el portafolio
 * 3. Tu seleccion se guarda automaticamente en el navegador
 * 4. Vuelve al inicio con el boton "Volver al Portafolio"
 * 
 * PARA AGREGAR MAS TEMAS:
 * 1. Crea un nuevo archivo en src/styles/themes/ (usa template.js como guia)
 * 2. Importalo y agregalo en src/styles/themes/index.js
 * 3. ¡Listo! Aparecera automaticamente aqui
 * 
 * ¿NO TE GUSTO EL CAMBIO?
 * - Simplemente selecciona otro tema
 * - O haz clic en "Restablecer a Clasico" para volver al tema original
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';
import { FiHome, FiRefreshCw, FiCheck } from 'react-icons/fi';

/* 
 * COMPONENTE DE PREVIEW INTERACTIVO
 * 
 * Este componente muestra una miniatura REAL de como se vera el portafolio
 * con el tema seleccionado. Incluye:
 * - Header con fondo y texto del tema
 * - Hero "portfolio" con las 5 capas de colores
 * - Texto de ejemplo con los colores del tema
 * - Botones con los colores de acento
 * 
 * Es una representacion fiel y funcional de la home page.
 */
const ThemePreview = ({ theme, themeName, isActive }) => {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg border-2" style={{ borderColor: isActive ? theme.accent : 'transparent' }}>
      {/* Mini Header Preview */}
      <div 
        className="px-3 py-2 flex items-center justify-between text-xs border-b"
        style={{ 
          backgroundColor: theme['header-bg'],
          borderColor: theme['header-border'],
          color: theme['header-text']
        }}
      >
        <span className="font-bold">Portfolio</span>
        <div className="flex gap-2">
          <span>Inicio</span>
          <span>Proyectos</span>
        </div>
      </div>

      {/* Mini Hero Preview con "portfolio" text */}
      <div 
        className="relative px-4 py-8 flex flex-col items-center"
        style={{ backgroundColor: theme.primary }}
      >
        {/* Mini "portfolio" watermark con 3 capas (simplificado) */}
        <div className="relative w-full h-16 flex items-center justify-center mb-3">
          {/* Capa trasera */}
          <div 
            className="absolute font-black text-4xl select-none"
            style={{ 
              color: theme['hero-layer-2'],
              opacity: 0.3,
              transform: 'translateY(-10%)'
            }}
          >
            "portfolio"
          </div>
          {/* Capa media */}
          <div 
            className="absolute font-black text-3xl select-none"
            style={{ 
              color: theme['hero-layer-4'],
              opacity: 0.6
            }}
          >
            "portfolio"
          </div>
          {/* Capa frontal */}
          <div 
            className="absolute font-black text-2xl select-none"
            style={{ 
              color: theme['hero-layer-5'],
              opacity: 1
            }}
          >
            "portfolio"
          </div>
        </div>

        {/* Titulo y subtitulo */}
        <h2 
          className="text-lg font-bold mb-1"
          style={{ color: theme.foreground }}
        >
          Tu Nombre
        </h2>
        <p 
          className="text-xs mb-3"
          style={{ color: theme['foreground-light'] }}
        >
          Desarrollador Web
        </p>

        {/* Boton de ejemplo */}
        <button 
          className="px-4 py-1.5 rounded-full text-xs font-semibold text-white"
          style={{ backgroundColor: theme.accent }}
        >
          Ver Proyectos
        </button>
      </div>

      {/* Mini Content Preview */}
      <div 
        className="px-4 py-3"
        style={{ backgroundColor: theme['primary-dark'] }}
      >
        <div className="space-y-2">
          <div 
            className="h-2 rounded"
            style={{ backgroundColor: theme.foreground, opacity: 0.8, width: '80%' }}
          />
          <div 
            className="h-2 rounded"
            style={{ backgroundColor: theme['foreground-light'], opacity: 0.6, width: '60%' }}
          />
          <div 
            className="h-2 rounded"
            style={{ backgroundColor: theme.muted, opacity: 0.4, width: '70%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default function ThemeAdminPanel() {
  const navigate = useNavigate();
  const { currentTheme, setTheme, resetTheme, availableThemes, themeNames } = useTheme();

  const handleThemeSelect = (themeName) => {
    setTheme(themeName);
  };

  const handleResetTheme = () => {
    if (window.confirm('¿Estas seguro de que quieres restablecer al tema Clasico?')) {
      resetTheme();
    }
  };

  const getThemeDisplayName = (themeName) => {
    const theme = availableThemes[themeName];
    return theme?.name || themeName;
  };

  const getThemeDescription = (themeName) => {
    const descriptions = {
      classic: 'Un estilo limpio y profesional con tonos azules y grises',
      darkElegant: 'Elegancia oscura con detalles dorados para un look sofisticado',
      retroSolar: 'Vibes retro con tonos crema y naranja calido',
      techPastel: 'Colores pastel suaves con un toque tecnologico moderno',
      oceanBreeze: 'Inspirado en el oceano con azules y aquas refrescantes',
      forestGreen: 'Tonos verdes naturales que evocan tranquilidad',
      sunsetWarm: 'Colores calidos de atardecer en rosas y naranjas',
      midnightPurple: 'Misterioso y profundo con purpuras oscuros',
      racingRed: 'Rojo vibrante y negro profundo inspirado en Formula 1',
    };
    return descriptions[themeName] || 'Tema personalizado';
  };

  return (
    <div className="min-h-screen bg-primary text-foreground py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 mt-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-accent">
             Panel de Estilos
          </h1>
          <p className="text-lg text-foreground-light mb-6 max-w-2xl mx-auto">
            Bienvenido al panel de administracion de temas. Aqui puedes cambiar 
            visualmente el estilo de tu portafolio sin tocar una sola linea de codigo.
          </p>
          
          {/* Botones de accion */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors shadow-clean"
            >
              <FiHome />
              Volver al Portafolio
            </button>
            <button
              onClick={handleResetTheme}
              className="flex items-center gap-2 px-6 py-3 bg-primary-dark text-foreground border-2 border-accent rounded-lg hover:bg-accent hover:text-white transition-colors"
            >
              <FiRefreshCw />
              Restablecer a Clasico
            </button>
          </div>
        </div>

        {/* Tema actual */}
        <div className="bg-primary-dark rounded-xl p-6 mb-8 shadow-clean-lg border-2 border-accent">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-bold text-accent mb-2">
                Tema Actual: {getThemeDisplayName(currentTheme)}
              </h2>
              <p className="text-foreground-light">
                Este tema se esta aplicando en todo el portafolio y se guardara automaticamente.
              </p>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <FiCheck className="text-3xl" />
              <span className="font-semibold">Activo</span>
            </div>
          </div>
        </div>

        {/* Instrucciones */}
        <div className="bg-accent/10 border-l-4 border-accent rounded-lg p-6 mb-8">
          <h3 className="font-bold text-lg mb-2 text-accent">💡 Instrucciones</h3>
          <ul className="space-y-2 text-foreground-light">
            <li>• Observa la vista previa REAL de cada tema (header, hero "portfolio", textos, botones)</li>
            <li>• Haz clic en "Seleccionar" para aplicar el tema en todo el portafolio</li>
            <li>• Tu seleccion se guarda automaticamente en el navegador</li>
            <li>• La preview muestra exactamente como se vera tu portafolio con ese tema</li>
          </ul>
        </div>

        {/* Grid de temas con PREVIEW REAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themeNames.map((themeName) => {
            const theme = availableThemes[themeName];
            const isActive = currentTheme === themeName;

            return (
              <div
                key={themeName}
                className="bg-primary-dark rounded-xl overflow-hidden shadow-clean hover:shadow-clean-lg transition-all"
              >
                {/* PREVIEW REAL del portafolio con este tema */}
                <ThemePreview theme={theme} themeName={themeName} isActive={isActive} />

                {/* Informacion del tema */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {getThemeDisplayName(themeName)}
                      </h3>
                      <p className="text-sm text-foreground-light">
                        {getThemeDescription(themeName)}
                      </p>
                    </div>
                    {isActive && (
                      <span className="bg-accent text-white text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap">
                        ✓ ACTIVO
                      </span>
                    )}
                  </div>

                  {/* Boton de seleccion */}
                  <div className="mt-4">
                    {!isActive ? (
                      <button
                        onClick={() => handleThemeSelect(themeName)}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors font-semibold shadow-clean"
                      >
                        <FiCheck />
                        Seleccionar este tema
                      </button>
                    ) : (
                      <div className="w-full text-center py-3 text-accent font-semibold border-2 border-accent rounded-lg">
                        ✓ Tema en uso
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
