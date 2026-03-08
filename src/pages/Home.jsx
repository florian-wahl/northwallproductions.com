import { Link } from 'react-router-dom';
import { getFeatured } from '../data/projects';
import SnowCanvas from '../components/SnowCanvas';
import ProjectCard from '../components/ProjectCard';

const featured = getFeatured(3);

const stats = [
  { number: '6+',   label: 'Projects' },
  { number: '3',    label: 'Awards'   },
  { number: '2',    label: 'Series'   },
  { number: '2021', label: 'Founded'  },
];

export default function Home() {
  return (
    <div className="bg-bg-base min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(92,184,232,0.05) 0%, transparent 70%), radial-gradient(ellipse 60% 80% at 0% 100%, rgba(30,60,100,0.15) 0%, transparent 60%), #07090f',
          }}
        />

        {/* Horizon line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px z-0"
          style={{ background: 'linear-gradient(90deg, transparent, #243248, transparent)' }}
        />

        {/* Snow */}
        <SnowCanvas count={80} />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 pt-[120px] pb-24">
          <p className="text-[0.7rem] font-semibold tracking-[0.28em] uppercase text-ice mb-6 flex items-center gap-3 animate-fade-up">
            <span className="block w-8 h-px bg-ice" />
            Independent Film &amp; Television
          </p>

          <h1 className="font-heading font-extrabold uppercase leading-[0.9] mb-8 animate-fade-up [animation-delay:0.1s]"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}>
            Stories<br />
            <span className="text-ice">Born</span><br />
            from the<br />
            North.
          </h1>

          <p className="text-base text-frost-muted max-w-[48ch] leading-7 mb-10 animate-fade-up [animation-delay:0.2s]"
            style={{ fontSize: 'clamp(0.95rem, 2vw, 1.125rem)' }}>
            NorthWall Productions creates bold, character-driven stories rooted in the landscapes,
            communities, and silences of the north. From feature films to documentary series, we are
            committed to authentic storytelling that resonates far beyond the frozen horizon.
          </p>

          <div className="flex gap-4 flex-wrap animate-fade-up [animation-delay:0.35s]">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-7 py-3 bg-ice text-bg-base font-semibold text-sm rounded-lg
                         hover:bg-ice-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(92,184,232,0.3)]
                         transition-all duration-200"
            >
              View Our Work
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 border border-surface-border-light text-frost-muted text-sm rounded-lg
                         hover:border-ice hover:text-ice hover:-translate-y-0.5
                         transition-all duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <section className="py-24 px-8 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="text-[0.7rem] font-semibold tracking-[0.28em] uppercase text-ice mb-3 flex items-center gap-3">
              <span className="block w-6 h-px bg-ice" />
              About
            </p>
            <h2 className="font-heading font-bold uppercase text-frost leading-tight mb-8"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
              Where Landscape<br />Meets Story
            </h2>
            <div className="space-y-5 text-frost-muted leading-7 text-[0.975rem]">
              <p>
                Founded in 2021, NorthWall Productions was built on a simple belief: that the north — its
                silence, its severity, its extraordinary light — is one of cinema's most under-explored
                territories.
              </p>
              <p>
                We work with a tight-knit group of directors, cinematographers, and storytellers who share
                our commitment to shooting on location, collaborating respectfully with local communities,
                and letting place inform story at every level of production.
              </p>
              <p>
                Our projects span feature films, documentary series, and short-form work — united by an
                aesthetic that prizes restraint, beauty, and emotional honesty over spectacle.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ number, label }) => (
              <div
                key={label}
                className="bg-bg-card border border-surface-border rounded-2xl p-7
                           hover:bg-bg-card-hover hover:border-surface-border-light
                           transition-all duration-200"
              >
                <div className="font-heading font-extrabold text-5xl text-ice leading-none mb-1">
                  {number}
                </div>
                <div className="text-[0.78rem] font-medium tracking-[0.12em] uppercase text-frost-muted">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div
        className="w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #1a2535, transparent)' }}
      />

      {/* ── FEATURED PROJECTS ────────────────────────────────── */}
      <section className="py-24 px-8 max-w-[1200px] mx-auto">
        <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <div>
            <p className="text-[0.7rem] font-semibold tracking-[0.28em] uppercase text-ice mb-2 flex items-center gap-3">
              <span className="block w-6 h-px bg-ice" />
              Featured Work
            </p>
            <h2 className="font-heading font-bold uppercase text-frost leading-tight"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}>
              Selected Projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-ice text-sm font-medium group"
          >
            All Projects
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 px-8">
        <div
          className="max-w-[1200px] mx-auto rounded-2xl border border-surface-border p-12 md:p-16 text-center relative overflow-hidden"
          style={{
            background:
              'radial-gradient(ellipse 70% 80% at 50% 0%, rgba(92,184,232,0.06) 0%, transparent 70%), #0c1018',
          }}
        >
          {/* Subtle top glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(92,184,232,0.5), transparent)' }}
          />

          <p className="text-[0.7rem] font-semibold tracking-[0.28em] uppercase text-ice mb-4 flex items-center justify-center gap-3">
            <span className="block w-6 h-px bg-ice" />
            Work With Us
          </p>
          <h2 className="font-heading font-bold uppercase text-frost mb-5 leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            Have a Story Worth<br />Telling?
          </h2>
          <p className="text-frost-muted text-[0.975rem] leading-7 max-w-[50ch] mx-auto mb-10">
            We're always interested in connecting with writers, directors, partners, and distributors
            who share our vision. Reach out and let's talk.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-ice text-bg-base font-semibold text-sm rounded-lg
                       hover:bg-ice-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(92,184,232,0.3)]
                       transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  );
}
