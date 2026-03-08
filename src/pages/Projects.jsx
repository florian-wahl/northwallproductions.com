import { getByStatus } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SnowCanvas from '../components/SnowCanvas';
import MountainSilhouette from '../components/MountainSilhouette';

const completed = getByStatus('completed');
const upcoming  = getByStatus('upcoming');

function SectionLabel({ children, count }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="font-heading font-extrabold text-2xl text-ink tracking-tight whitespace-nowrap">
        {children}
      </h2>
      <span className="text-[0.68rem] font-bold text-ink-dim bg-bg-elevated border border-edge px-2 py-0.5 rounded-full">
        {count}
      </span>
      <div className="flex-1 h-px bg-edge" />
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
            background: [
              'radial-gradient(ellipse 100% 60% at 50% -10%, rgba(100,210,200,0.09) 0%, transparent 65%)',
              '#f4f8f9',
            ].join(', '),
          }}
        />
        <SnowCanvas count={45} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 pt-36 pb-28">
          <p className="text-[0.7rem] font-bold tracking-[0.28em] uppercase text-glacier mb-4 flex items-center gap-3">
            <span className="block w-6 h-px bg-glacier/50" />
            Portfolio
          </p>
          <h1
            className="font-heading font-black text-ink tracking-tight leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
          >
            Our Projects
          </h1>
          <p className="text-ink-muted leading-8 mt-4 max-w-[55ch]">
            From debut short films to multi-episode series, every NorthWall project shares a
            commitment to place, character, and cinematic honesty.
          </p>
        </div>
        <MountainSilhouette />
      </div>

      {/* Divider */}
      <div className="h-px bg-edge" />

      {/* ── UPCOMING ──────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-8 pt-16 pb-8">
        <SectionLabel count={upcoming.length}>Upcoming</SectionLabel>
        {upcoming.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {upcoming.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        ) : (
          <p className="text-ink-muted text-sm">No upcoming projects at this time. Check back soon.</p>
        )}
      </section>

      {/* ── COMPLETED ─────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-8 pt-12 pb-24">
        <SectionLabel count={completed.length}>Completed</SectionLabel>
        {completed.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {completed.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        ) : (
          <p className="text-ink-muted text-sm">No completed projects yet.</p>
        )}
      </section>

    </div>
  );
}
