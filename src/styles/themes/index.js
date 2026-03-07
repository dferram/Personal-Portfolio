/* 
 * ARCHIVO CENTRAL DE TEMAS
 * 
 * Aqui se importan y exportan todos los temas disponibles.
 * No necesitas modificar este archivo a menos que agregues un tema nuevo.
 */

import classicTheme from './classic';
import darkElegantTheme from './dark-elegant';
import retroSolarTheme from './retro-solar';
import techPastelTheme from './tech-pastel';
import oceanBreezeTheme from './ocean-breeze';
import forestGreenTheme from './forest-green';
import sunsetWarmTheme from './sunset-warm';
import midnightPurpleTheme from './midnight-purple';
import racingRedTheme from './racing-red';

/* 
 * TEMA ACTIVO
 * 
 * INSTRUCCIONES PARA CAMBIAR EL TEMA:
 * 
 * 1. Busca la linea que dice "export const activeTheme = ..."
 * 2. Cambia el nombre del tema por cualquiera de las opciones disponibles:
 *    - classicTheme (Clasico Profesional - blanco y azul)
 *    - darkElegantTheme (Oscuro Elegante - negro con dorado)
 *    - retroSolarTheme (Retro Solar - crema y naranja)
 *    - techPastelTheme (Tech Pastel - azul claro y lila)
 *    - oceanBreezeTheme (Brisa Marina - azul aqua)
 *    - forestGreenTheme (Bosque Verde - verdes naturales)
 *    - sunsetWarmTheme (Atardecer Calido - rosas y naranjas)
 *    - midnightPurpleTheme (Medianoche Purpura - purpura oscuro)
 * 
 * 3. Guarda el archivo y recarga tu navegador
 * 
 * Ejemplo:
 *   export const activeTheme = darkElegantTheme;  // Cambia a tema oscuro
 */

export const activeTheme = classicTheme;

/* 
 * EXPORTACION DE TODOS LOS TEMAS
 * 
 * Si quieres crear un selector de temas dinamico en el futuro,
 * puedes usar este objeto que contiene todos los temas disponibles.
 */
export const allThemes = {
  classic: classicTheme,
  darkElegant: darkElegantTheme,
  retroSolar: retroSolarTheme,
  techPastel: techPastelTheme,
  oceanBreeze: oceanBreezeTheme,
  forestGreen: forestGreenTheme,
  sunsetWarm: sunsetWarmTheme,
  midnightPurple: midnightPurpleTheme,
  racingRed: racingRedTheme,
};

/* Exportaciones individuales por si las necesitas */
export {
  classicTheme,
  darkElegantTheme,
  retroSolarTheme,
  techPastelTheme,
  oceanBreezeTheme,
  forestGreenTheme,
  sunsetWarmTheme,
  midnightPurpleTheme,
  racingRedTheme,
};
