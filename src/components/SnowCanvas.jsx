import { useRef, useEffect } from 'react';

/**
 * Canvas snow / ice-particle system.
 * On the light glacier theme, particles render as soft teal-tinted crystals.
 */
export default function SnowCanvas({ count = 70 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const isMobile = window.innerWidth < 768;
    const n = isMobile ? Math.floor(count * 0.55) : count;

    const rand = (min, max) => min + Math.random() * (max - min);

    const resize = () => {
      canvas.width  = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    // Slightly teal-tinted particles so they're visible on the light background
    const makeParticle = (atTop = false) => ({
      x:         rand(0, canvas.width),
      y:         atTop ? rand(-20, 0) : rand(0, canvas.height),
      r:         rand(1, 2.8),
      vy:        rand(0.2, 0.75),
      vx:        rand(-0.3, 0.3),
      alpha:     rand(0.12, 0.38),   // low opacity — subtle on white
      drift:     rand(-0.002, 0.002),
      wobble:    rand(0, Math.PI * 2),
      wobbleSpd: rand(0.01, 0.022),
    });

    resize();
    let particles = Array.from({ length: n }, () => makeParticle(false));

    const onResize = () => {
      resize();
      particles = Array.from({ length: n }, () => makeParticle(false));
    };
    window.addEventListener('resize', onResize);

    let raf;
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.wobble += p.wobbleSpd;
        p.vx     += p.drift;
        p.vx      = Math.max(-0.6, Math.min(0.6, p.vx));
        p.x      += p.vx + Math.sin(p.wobble) * 0.12;
        p.y      += p.vy;

        if (p.y > canvas.height + 10 || p.x < -20 || p.x > canvas.width + 20) {
          particles[i] = makeParticle(true);
          continue;
        }

        // Glacier teal tint: rgb(11, 110, 125)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(11, 110, 125, ${p.alpha})`;
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
