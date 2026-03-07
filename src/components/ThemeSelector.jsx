/* 
 * COMPONENTE: ThemeSelector
 * 
 * Selector de temas integrado en el navbar que permite cambiar la paleta de colores
 * del portafolio de forma visual e instantánea.
 * 
 * CARACTERÍSTICAS:
 * - Dropdown con preview de cada tema disponible
 * - Cambio instantáneo sin recargar la página
 * - Persistencia automática en localStorage
 * - Diseño responsive (desktop y mobile)
 * - Indicador visual del tema activo
 * 
 * CÓMO AGREGAR NUEVOS TEMAS:
 * 1. Crea un nuevo archivo en src/styles/themes/ (usa template.js como guía)
 * 2. Impórtalo y agrégalo en src/styles/themes/index.js
 * 3. ¡Listo! Aparecerá automáticamente en este selector
 * 
 * INTEGRACIÓN:
 * - Se usa en el componente Navbar
 * - Consume el ThemeContext para obtener y cambiar temas
 * - Los temas se definen en src/styles/themes/
 */

import { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { FiDroplet, FiCheck } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';

export default function ThemeSelector() {
  const { currentTheme, setTheme, availableThemes, themeNames } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Cerrar dropdown al presionar Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleThemeSelect = (themeName) => {
    setTheme(themeName);
    setIsOpen(false);
  };

  const getThemeDisplayName = (themeName) => {
    const theme = availableThemes[themeName];
    return theme?.name || themeName;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Botón para abrir el selector de temas */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border border-accent/30 bg-primary-dark px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition duration-300 hover:bg-accent hover:text-white"
        style={{ color: 'var(--color-header-text)' }}
        aria-label="Seleccionar tema"
        aria-expanded={isOpen}
      >
        <FiDroplet size={16} />
        <span className="hidden md:inline">Tema</span>
      </button>

      {/* Dropdown con lista de temas */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-64 rounded-lg shadow-clean-lg border overflow-hidden z-50"
            style={{ 
              backgroundColor: 'var(--color-primary)', 
              borderColor: 'var(--color-accent)'
            }}
          >
            {/* Header del dropdown */}
            <div 
              className="px-4 py-3 border-b"
              style={{ 
                backgroundColor: 'var(--color-primary-dark)',
                borderColor: 'var(--color-muted)'
              }}
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--color-foreground)' }}>
                Seleccionar Tema
              </h3>
              <p className="mt-1 text-xs" style={{ color: 'var(--color-muted)' }}>
                Cambia la paleta de colores
              </p>
            </div>

            {/* Lista de temas con scroll */}
            <div className="max-h-96 overflow-y-auto">
              {themeNames.map((themeName) => {
                const theme = availableThemes[themeName];
                const isActive = currentTheme === themeName;

                return (
                  <button
                    key={themeName}
                    onClick={() => handleThemeSelect(themeName)}
                    className="w-full px-4 py-3 text-left transition duration-200 hover:bg-primary-dark flex items-center justify-between gap-3"
                    style={{ 
                      backgroundColor: isActive ? 'var(--color-accent-light)' : 'transparent'
                    }}
                  >
                    {/* Preview de colores del tema (mini paleta) */}
                    <div className="flex items-center gap-3 flex-1">
                      <div className="flex gap-1">
                        <div 
                          className="w-4 h-4 rounded-full border border-gray-300"
                          style={{ backgroundColor: theme.primary }}
                          title="Color primario"
                        />
                        <div 
                          className="w-4 h-4 rounded-full border border-gray-300"
                          style={{ backgroundColor: theme.accent }}
                          title="Color de acento"
                        />
                        <div 
                          className="w-4 h-4 rounded-full border border-gray-300"
                          style={{ backgroundColor: theme.foreground }}
                          title="Color de texto"
                        />
                      </div>
                      
                      {/* Nombre del tema */}
                      <span 
                        className="text-sm font-semibold"
                        style={{ color: isActive ? '#FFFFFF' : 'var(--color-foreground)' }}
                      >
                        {getThemeDisplayName(themeName)}
                      </span>
                    </div>

                    {/* Indicador de tema activo */}
                    {isActive && (
                      <FiCheck 
                        size={18} 
                        className="text-white flex-shrink-0"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Footer con información */}
            <div 
              className="px-4 py-2 border-t text-xs"
              style={{ 
                backgroundColor: 'var(--color-primary-dark)',
                borderColor: 'var(--color-muted)',
                color: 'var(--color-muted)'
              }}
            >
              Tu selección se guarda automáticamente
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
