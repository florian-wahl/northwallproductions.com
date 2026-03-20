import { team } from '../data/team';
import SnowCanvas from '../components/SnowCanvas';
import MountainSilhouette from '../components/MountainSilhouette';

function MemberCard({ member }) {
  const { name, title, photo, bio } = member;

  const initials = name
    .split(' ')
    .map(w => w[0])
    .join('');

  return (
    <div className="bg-white border border-edge">
      {/* Photo */}
      <div className="aspect-square bg-bg-elevated overflow-hidden">
        {photo ? (
          <img
            src={`/team/${photo}`}
            alt={name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-heading font-black text-[4rem] text-edge-strong tracking-tight select-none">
              {initials}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-6 border-t border-edge">
        <p className="text-[0.6rem] font-bold tracking-[0.22em] uppercase text-ink-dim mb-1">{title}</p>
        <h2 className="font-heading font-black text-xl text-ink uppercase tracking-tight mb-4">{name}</h2>
        <p className="text-ink-muted text-sm leading-7 font-light" dangerouslySetInnerHTML={{ __html: bio }} />
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <div className="bg-bg-base min-h-screen">

      <div className="relative overflow-hidden bg-[#f8f8f8]">
        <SnowCanvas count={35} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 pt-40 pb-36">
          <p className="text-[0.62rem] font-bold tracking-[0.32em] uppercase text-ink-dim mb-5 flex items-center gap-3">
            <span className="block w-8 h-px bg-edge-strong" />
            The People
          </p>
          <h1
            className="font-heading font-black text-ink uppercase tracking-tight leading-none mb-6"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
          >
            Our<br />Team
          </h1>
          <p className="text-ink leading-8 max-w-[46ch] font-light">
            Meet our founders.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-80 pointer-events-none" style={{ zIndex: 5, background: 'linear-gradient(to bottom, rgba(248,248,248,0) 0%, rgba(248,248,248,0.95) 100%)' }} />
        <MountainSilhouette />
      </div>

      <div className="h-px bg-edge" />

      <section className="max-w-[1200px] mx-auto px-8 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {team.map(member => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>

    </div>
  );
}
