import { useEffect } from 'react';

/**
 * Hook para animar elementos al hacer scroll (Scroll Reveal)
 * Utiliza IntersectionObserver con aceleración por hardware (GPU).
 *
 * @param {boolean} active - Si el observador debe estar activo (ej. tras abrir el sobre)
 */
export function useScrollReveal(active = true) {
  useEffect(() => {
    if (!active) return;

    let observer;

    const setupObserver = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)');
      if (!elements.length) return;

      observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              obs.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin: '0px 0px -35px 0px',
        }
      );

      elements.forEach((el) => observer.observe(el));
    };

    // Pequeño retardo para asegurar que el DOM esté completamente montado
    const timer = setTimeout(setupObserver, 150);

    // Observar también mutaciones en el DOM para nuevos elementos
    const mutationObserver = new MutationObserver(() => {
      const unrevealed = document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)');
      if (unrevealed.length && observer) {
        unrevealed.forEach((el) => observer.observe(el));
      }
    });

    const targetNode = document.querySelector('.wedding-paper-sheet') || document.body;
    mutationObserver.observe(targetNode, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [active]);
}

export default useScrollReveal;
