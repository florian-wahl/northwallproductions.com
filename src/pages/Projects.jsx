import { getByStatus } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SnowCanvas from '../components/SnowCanvas';

const completed = getByStatus('completed');
const upcoming  = getByStatus('upcoming');

function SectionLabel({ children, count }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="font-heading font-bold text-[1.6rem] uppercase tracking-wider text-frost whitespace-nowrap">
        {children}
      </h2>
      <span className="text-[0.7rem] font-semibold text-frost-dim bg-bg-card border border-surface-border px-2 py-0.5 rounded-full">
        {count}
      </span>
      <div className="flex-1 h-px bg-surface-border" />
    </div>
  );
}

export default function Projects() {
  return (
    <div className="bg-bg-base min-h-screen">

      {/* ── PAGE HERO ──────────────────────────────────────── */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 80% at 50% -10%, rgba(92,184,232,0.06) 0%, transparent 70%), #07090f',
          }}
        />
        <SnowCanvas count={50} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 pt-36 pb-16">
          <p className="text-[0.7rem] font-semibold tracking-[0.28em] uppercase text-ice mb-4 flex items-center gap-3">
            <span className="block w-6 h-px bg-ice" />
            Portfolio
          </p>
          <h1
            className="font-heading font-extrabold uppercase text-frost leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
          >
            Our Projects
          </h1>
          <p className="text-frost-muted text-base leading-7 mt-4 max-w-[55ch]">
            From debut short films to multi-episode series, every NorthWall project shares a
            commitment to place, character, and cinematic honesty.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div
        className="h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #1a2535, transparent)' }}
      />

      {/* ── UPCOMING ──────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-8 pt-16 pb-8">
        <SectionLabel count={upcoming.length}>Upcoming</SectionLabel>
        {upcoming.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {upcoming.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        ) : (
          <p className="text-frost-muted text-sm">No upcoming projects at this time. Check back soon.</p>
        )}
      </section>

      {/* ── COMPLETED ─────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-8 pt-12 pb-24">
        <SectionLabel count={completed.length}>Completed</SectionLabel>
        {completed.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {completed.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        ) : (
          <p className="text-frost-muted text-sm">No completed projects yet.</p>
        )}
      </section>

    </div>
  );
}
