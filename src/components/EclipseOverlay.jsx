import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * ECLIPSE OVERLAY
 * 
 * Renders a radial "wave" overlay when the theme changes.
 * The wave expands from a given origin point (or center of screen)
 * using the NEW theme's primary color, then fades away revealing the new theme.
 * 
 * Usage: Place <EclipseOverlay /> at the root of your app.
 * Call triggerEclipse(originX, originY) from ThemeContext before setting a new theme.
 */
export function useEclipse() {
  const [eclipse, setEclipse] = useState(null);
  const timeoutRef = useRef(null);

  const triggerEclipse = useCallback((originX, originY, color) => {
    // Clear any previous animation
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const x = originX ?? window.innerWidth / 2;
    const y = originY ?? window.innerHeight / 2;

    // Calculate the max distance from origin to any corner
    const maxDist = Math.sqrt(
      Math.max(x, window.innerWidth - x) ** 2 +
      Math.max(y, window.innerHeight - y) ** 2
    );

    setEclipse({ x, y, color, maxDist, phase: 'expanding' });

    // After expansion completes, begin fade-out
    timeoutRef.current = setTimeout(() => {
      setEclipse((prev) => prev ? { ...prev, phase: 'fading' } : null);

      timeoutRef.current = setTimeout(() => {
        setEclipse(null);
      }, 500);
    }, 600);
  }, []);

  return { eclipse, triggerEclipse };
}

export function EclipseOverlay({ eclipse }) {
  if (!eclipse) return null;

  const { x, y, color, maxDist, phase } = eclipse;
  const diameter = maxDist * 2.2; // Overshoot slightly to cover full screen

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: x - diameter / 2,
          top: y - diameter / 2,
          width: diameter,
          height: diameter,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${color} 0%, ${color}ee 40%, ${color}00 70%)`,
          transform: phase === 'expanding' ? 'scale(1)' : 'scale(1)',
          opacity: phase === 'fading' ? 0 : 0.6,
          transition: phase === 'expanding'
            ? 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.1s'
            : 'opacity 0.5s ease-out',
          animation: phase === 'expanding' ? 'eclipseExpand 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards' : undefined,
        }}
      />
    </div>
  );
}
