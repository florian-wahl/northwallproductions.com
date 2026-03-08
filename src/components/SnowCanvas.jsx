import { useRef, useEffect } from 'react';

/**
 * Canvas-based snow particle system.
 * Renders subtle falling snowflakes behind hero content.
 */
export default function SnowCanvas({ count = 80 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Respect reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? Math.floor(count * 0.55) : count;

    // ── Helpers ──────────────────────────────────────────────
    const rand = (min, max) => min + Math.random() * (max - min);

    const resize = () => {
      canvas.width  = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    const makeParticle = (atTop = false) => ({
      x:          rand(0, canvas.width),
      y:          atTop ? rand(-20, 0) : rand(0, canvas.height),
      r:          rand(0.8, 3),
      vy:         rand(0.25, 0.85),
      vx:         rand(-0.35, 0.35),
      alpha:      rand(0.2, 0.65),
      drift:      rand(-0.002, 0.002),
      wobble:     rand(0, Math.PI * 2),
      wobbleSpd:  rand(0.012, 0.025),
    });

    // ── Init ─────────────────────────────────────────────────
    resize();
    let particles = Array.from({ length: particleCount }, () => makeParticle(false));

    const onResize = () => {
      resize();
      particles = Array.from({ length: particleCount }, () => makeParticle(false));
    };
    window.addEventListener('resize', onResize);

    // ── Animation loop ────────────────────────────────────────
    let raf;
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.wobble += p.wobbleSpd;
        p.vx     += p.drift;
        p.vx      = Math.max(-0.7, Math.min(0.7, p.vx));
        p.x      += p.vx + Math.sin(p.wobble) * 0.15;
        p.y      += p.vy;

        if (p.y > canvas.height + 10 || p.x < -20 || p.x > canvas.width + 20) {
          particles[i] = makeParticle(true);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(210, 230, 255, ${p.alpha})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
