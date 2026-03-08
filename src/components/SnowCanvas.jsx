import { useRef, useEffect } from 'react';

/**
 * Subtle snow / ice-dust particles for the light monochrome theme.
 * Particles are dark gray at very low opacity so they read as falling mist.
 */
export default function SnowCanvas({ count = 60 }) {
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

    const make = (atTop = false) => ({
      x:         rand(0, canvas.width),
      y:         atTop ? rand(-20, 0) : rand(0, canvas.height),
      r:         rand(0.8, 2.4),
      vy:        rand(0.18, 0.65),
      vx:        rand(-0.25, 0.25),
      alpha:     rand(0.06, 0.22),  // very subtle on white bg
      drift:     rand(-0.0015, 0.0015),
      wobble:    rand(0, Math.PI * 2),
      wobbleSpd: rand(0.01, 0.02),
    });

    resize();
    let ps = Array.from({ length: n }, () => make(false));
    const onResize = () => { resize(); ps = Array.from({ length: n }, () => make(false)); };
    window.addEventListener('resize', onResize);

    let raf;
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < ps.length; i++) {
        const p = ps[i];
        p.wobble += p.wobbleSpd;
        p.vx     += p.drift;
        p.vx      = Math.max(-0.5, Math.min(0.5, p.vx));
        p.x      += p.vx + Math.sin(p.wobble) * 0.1;
        p.y      += p.vy;
        if (p.y > canvas.height + 10 || p.x < -20 || p.x > canvas.width + 20) {
          ps[i] = make(true); continue;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(80, 80, 80, ${p.alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, [count]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" />;
}
