import { Link } from 'react-router-dom';
import { getFeatured } from '../data/projects';
import SnowCanvas from '../components/SnowCanvas';
import MountainSilhouette from '../components/MountainSilhouette';
import ProjectCard from '../components/ProjectCard';

const featured = getFeatured(3);

const stats = [
  { number: '6+',   label: 'Projects'  },
  { number: '3',    label: 'Awards'    },
  { number: '2',    label: 'Series'    },
  { number: '2021', label: 'Founded'   },
];

export default function Home() {
  return (
    <div className="bg-bg-base min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Aurora wash background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: [
              'radial-gradient(ellipse 120% 55% at 50% -15%, rgba(100,210,200,0.10) 0%, transparent 65%)',
              'radial-gradient(ellipse 70% 40% at 15% 30%,  rgba(160,200,240,0.07) 0%, transparent 55%)',
              'radial-gradient(ellipse 70% 40% at 85% 20%,  rgba(180,160,220,0.07) 0%, transparent 55%)',
              '#f4f8f9',
            ].join(', '),
          }}
        />

        {/* Falling snow / ice crystals */}
        <SnowCanvas count={70} />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 pt-[110px] pb-48 text-center">

          <p className="inline-flex items-center gap-3 text-[0.7rem] font-bold tracking-[0.28em] uppercase text-glacier mb-8 animate-fade-up">
            <span className="block w-8 h-px bg-glacier/50" />
            Independent Film &amp; Television
            <span className="block w-8 h-px bg-glacier/50" />
          </p>

          <h1
            className="font-heading font-black text-ink leading-tight mb-8 animate-fade-up [animation-delay:0.12s] tracking-tight"
            style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}
          >
            Stories Born<br />
            <span className="text-glacier">from the North.</span>
          </h1>

          <p
            className="text-ink-muted leading-8 max-w-[48ch] mx-auto mb-10 animate-fade-up [animation-delay:0.24s]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)' }}
          >
            NorthWall Productions creates bold, character-driven stories rooted in the landscapes,
            communities, and silences of the north — from feature films to documentary series.
          </p>

          <div className="flex gap-4 justify-center flex-wrap animate-fade-up [animation-delay:0.38s]">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-glacier text-white font-bold text-sm rounded-xl
                         hover:bg-glacier-mid hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(11,110,125,0.35)]
                         transition-all duration-200"
            >
              View Our Work
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white border border-edge-strong text-ink-muted font-semibold text-sm rounded-xl
                         hover:border-glacier hover:text-glacier hover:-translate-y-0.5 hover:shadow-sm
                         transition-all duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Mountain silhouette at horizon */}
        <MountainSilhouette />
      </section>

      {/* ── ABOUT ────────────────────────────────────────────── */}
      <section className="py-24 px-8 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div>
            <p className="text-[0.7rem] font-bold tracking-[0.28em] uppercase text-glacier mb-3 flex items-center gap-3">
              <span className="block w-6 h-px bg-glacier/50" />
              About
            </p>
            <h2
              className="font-heading font-black text-ink tracking-tight leading-tight mb-8"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
            >
              Where Landscape<br />Meets Story
            </h2>
            <div className="space-y-5 text-ink-muted leading-8">
              <p>
                Founded in 2021, NorthWall Productions was built on a simple belief: that the north — its
                silence, its severity, its extraordinary light — is one of cinema's most under-explored
                territories.
              </p>
              <p>
                We work with a tight-knit group of directors, cinematographers, and storytellers who share
                our commitment to shooting on location, collaborating with local communities, and letting
                place inform story at every level of production.
              </p>
              <p>
                Our projects span feature films, documentary series, and short-form work — united by an
                aesthetic that prizes restraint, beauty, and emotional honesty over spectacle.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ number, label }) => (
              <div
                key={label}
                className="bg-white border border-edge rounded-2xl p-7
                           hover:bg-glacier-wash hover:border-edge-strong
                           transition-all duration-200 shadow-sm shadow-edge/40"
              >
                <div className="font-heading font-black text-5xl text-glacier leading-none mb-1">
                  {number}
                </div>
                <div className="text-[0.78rem] font-bold tracking-[0.1em] uppercase text-ink-dim mt-1">
                  {label}
                </div>
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
      <section className="py-24 px-8 max-w-[1200px] mx-auto">
        <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <div>
            <p className="text-[0.7rem] font-bold tracking-[0.28em] uppercase text-glacier mb-2 flex items-center gap-3">
              <span className="block w-6 h-px bg-glacier/50" />
              Featured Work
            </p>
            <h2
              className="font-heading font-black text-ink tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}
            >
              Selected Projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-glacier text-sm font-bold group"
          >
            All Projects
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 px-8">
        <div
          className="max-w-[1200px] mx-auto rounded-2xl border border-glacier-pale p-12 md:p-16 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, #e8f5f7 0%, #f4f8f9 60%, #eaf3f5 100%)',
          }}
        >
          <p className="text-[0.7rem] font-bold tracking-[0.28em] uppercase text-glacier mb-4 flex items-center justify-center gap-3">
            <span className="block w-6 h-px bg-glacier/50" />
            Work With Us
          </p>
          <h2
            className="font-heading font-black text-ink tracking-tight mb-5 leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)' }}
          >
            Have a Story Worth Telling?
          </h2>
          <p className="text-ink-muted leading-8 max-w-[48ch] mx-auto mb-10">
            We're always interested in connecting with writers, directors, partners, and distributors
            who share our vision. Reach out and let's talk.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-glacier text-white font-bold text-sm rounded-xl
                       hover:bg-glacier-mid hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(11,110,125,0.3)]
                       transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  );
}
