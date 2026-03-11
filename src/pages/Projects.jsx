import { getByStatus } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SnowCanvas from '../components/SnowCanvas';
import MountainSilhouette from '../components/MountainSilhouette';

const completed = getByStatus('completed');
const upcoming = getByStatus('upcoming');

function SectionLabel({ children, count }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="font-heading font-black text-[1.4rem] text-ink uppercase tracking-tight whitespace-nowrap">{children}</h2>
      <span className="text-[0.62rem] font-bold text-ink-dim bg-bg-elevated border border-edge px-2 py-0.5 tracking-widest">{count}</span>
      <div className="flex-1 h-px bg-edge" />
    </div>
  );
}

export default function Projects() {
  return (
    <div className="bg-bg-base min-h-screen">

      <div className="relative overflow-hidden bg-[#f8f8f8]">
        <SnowCanvas count={40} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 pt-40 pb-36">
          <p className="text-[0.62rem] font-bold tracking-[0.32em] uppercase text-ink-dim mb-5 flex items-center gap-3">
            <span className="block w-8 h-px bg-edge-strong" />
            Portfolio
          </p>
          <h1
            className="font-heading font-black text-ink uppercase tracking-tight leading-none mb-6"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
          >
            Our<br />Projects
          </h1>
          <p className="text-ink leading-8 max-w-[50ch]">
            From debut short films to multi-episode series, every NorthWall Productions project shares a
            commitment to place, character, and cinematic honesty.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-80 pointer-events-none" style={{ zIndex: 5, background: 'linear-gradient(to bottom, rgba(248,248,248,0) 0%, rgba(248,248,248,0.95) 100%)' }} />
        <MountainSilhouette />
      </div>

      <div className="h-px bg-edge" />

      <section className="max-w-[1200px] mx-auto px-8 pt-16 pb-8">
        <SectionLabel count={upcoming.length}>Upcoming</SectionLabel>
        {upcoming.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-edge border border-edge">
            {upcoming.map(p => <div key={p.id} className="bg-bg-base"><ProjectCard project={p} /></div>)}
          </div>
        ) : (
          <p className="text-ink-muted text-sm font-light">No upcoming projects at this time.</p>
        )}
      </section>

      <section className="max-w-[1200px] mx-auto px-8 pt-14 pb-24">
        <SectionLabel count={completed.length}>Completed</SectionLabel>
        {completed.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-edge border border-edge">
            {completed.map(p => <div key={p.id} className="bg-bg-base"><ProjectCard project={p} /></div>)}
          </div>
        ) : (
          <p className="text-ink-muted text-sm font-light">No completed projects yet.</p>
        )}
      </section>

    </div>
  );
}
