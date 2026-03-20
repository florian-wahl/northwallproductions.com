import { Link } from 'react-router-dom';
import { getFeatured } from '../data/projects';
import SnowCanvas from '../components/SnowCanvas';
import MountainSilhouette from '../components/MountainSilhouette';
import ProjectCard from '../components/ProjectCard';

const featured = getFeatured(3);

const stats = [
  { number: '3+', label: 'Projects' },
  { number: '2', label: 'Movies' },
  { number: '1', label: 'TV Series' },
  { number: '2026', label: 'Founded' },
];

export default function Home() {
  return (
    <div className="bg-bg-base min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-start overflow-hidden bg-[#f8f8f8]">
        <SnowCanvas count={60} />

        {/* Text block — upper portion of hero */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 pt-44 pb-12 text-center">
          <p className="inline-flex items-center gap-4 text-[0.62rem] font-bold tracking-[0.35em] uppercase text-ink-dim mb-10 animate-fade-up">
            <span className="block w-10 h-px bg-ink-ghost" />
            Independent Film &amp; Television
            <span className="block w-10 h-px bg-ink-ghost" />
          </p>

          <h1
            className="font-heading font-black text-ink uppercase leading-none tracking-tight mb-8 animate-fade-up [animation-delay:0.12s]"
            style={{ fontSize: 'clamp(3.2rem, 9.5vw, 8.5rem)', letterSpacing: '-0.02em' }}
          >
            Northwall<br />
            <span className="font-light tracking-widest text-ink-dim" style={{ fontSize: '0.52em', letterSpacing: '0.3em' }}>
              PRODUCTIONS
            </span>
          </h1>

          <p
            className="text-ink-muted leading-8 max-w-[44ch] mx-auto animate-fade-up [animation-delay:0.25s] font-light"
            style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.05rem)' }}
          >
            Independent film and television that makes us laugh, think, and cry, especially when we weren't expecting to.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mt-10 animate-fade-up [animation-delay:0.38s]">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-ink text-white font-bold text-[0.75rem] tracking-[0.15em] uppercase
                         hover:bg-ink-muted hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)]
                         transition-all duration-200"
            >
              View Our Work
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white border border-edge-strong text-ink-muted font-bold text-[0.75rem] tracking-[0.15em] uppercase
                         hover:border-ink hover:text-ink hover:-translate-y-0.5
                         transition-all duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Mountain silhouette at the horizon */}
        <MountainSilhouette />
      </section>

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <section className="py-28 px-8 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="text-[0.62rem] font-bold tracking-[0.32em] uppercase text-ink-dim mb-4 flex items-center gap-3">
              <span className="block w-8 h-px bg-edge-strong" />
              About
            </p>
            <h2
              className="font-heading font-black text-ink uppercase tracking-tight leading-tight mb-8"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
            >
              The Pursuit of <br /> Creative Stories
            </h2>
            <div className="space-y-5 text-ink-muted leading-8 font-light text-[0.95rem]">
              <p>
                NorthWall Productions strives to create art that makes us laugh, think, and cry, especially when we weren't expecting to.
              </p>
              <p>
                Founded by <strong>Katie North</strong>, a Tony-Nominated Producer (<em>Operation Mincemeat</em>) and Slamdance Alum (<em>Bad Survivor</em>), and <strong>Florian Wahl</strong>, a Product Executive with years of experience in financial services, consulting, and product leadership, NorthWall combines creativity and business acumen to produce film and television.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ number, label }) => (
              <div key={label} className="border border-edge p-8 hover:border-edge-strong hover:bg-bg-elevated transition-all duration-200">
                <div className="font-heading font-black text-5xl text-ink leading-none mb-2">{number}</div>
                <div className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-ink-dim">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="h-px bg-edge" />
      </div>

      {/* ── FEATURED PROJECTS ────────────────────────────────── */}
      <section className="py-28 px-8 max-w-[1200px] mx-auto">
        <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <div>
            <p className="text-[0.62rem] font-bold tracking-[0.32em] uppercase text-ink-dim mb-3 flex items-center gap-3">
              <span className="block w-8 h-px bg-edge-strong" />
              Featured Work
            </p>
            <h2
              className="font-heading font-black text-ink uppercase tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
            >
              Selected Projects
            </h2>
          </div>
          <Link to="/projects" className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-ink-dim hover:text-ink transition-colors group inline-flex items-center gap-2">
            All Projects
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map(p => (
            <div key={p.id}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 px-8 max-w-[1200px] mx-auto">
        <div className="border border-edge p-16 md:p-20 text-center bg-bg-elevated">
          <p className="text-[0.62rem] font-bold tracking-[0.32em] uppercase text-ink-dim mb-4 flex items-center justify-center gap-4">
            <span className="block w-8 h-px bg-edge-strong" />
            Work With Us
            <span className="block w-8 h-px bg-edge-strong" />
          </p>
          <h2
            className="font-heading font-black text-ink uppercase tracking-tight mb-5 leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            Have a Story Worth Telling?
          </h2>
          <p className="text-ink-muted leading-8 max-w-[46ch] mx-auto mb-10 font-light">
            We're always interested in connecting with writers, directors, partners, and distributors
            who share our vision.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-ink text-white font-bold text-[0.75rem] tracking-[0.15em] uppercase
                       hover:bg-ink-muted hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)]
                       transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  );
}
