import { useParams, Link, Navigate } from 'react-router-dom';
import { getProject } from '../data/projects';

const posterGradients = {
  'poster-1': 'bg-poster-1',
  'poster-2': 'bg-poster-2',
  'poster-3': 'bg-poster-3',
  'poster-4': 'bg-poster-4',
  'poster-5': 'bg-poster-5',
  'poster-6': 'bg-poster-6',
};

const statusConfig = {
  completed:   { label: 'Completed',      cls: 'bg-status-completed/10 text-status-completed border border-status-completed/30' },
  upcoming:    { label: 'Upcoming',        cls: 'bg-status-upcoming/10 text-status-upcoming border border-status-upcoming/25'   },
  development: { label: 'In Development', cls: 'bg-status-dev/10 text-status-dev border border-status-dev/25'                  },
};

function InfoRow({ label, value }) {
  if (!value || value === 'TBD') return null;
  return (
    <div className="flex flex-col gap-1 py-3.5 border-b border-edge last:border-0">
      <span className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-ink-dim">{label}</span>
      <span className="text-[0.925rem] text-ink font-semibold">{value}</span>
    </div>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProject(id);

  if (!project) return <Navigate to="/projects" replace />;

  const {
    title, type, status, year, duration, rating, language,
    posterClass, description, tags, director, producer,
    cinematographer, awards,
  } = project;

  const gradient = posterGradients[posterClass] ?? 'bg-poster-1';
  const badge    = statusConfig[status] ?? statusConfig.upcoming;

  return (
    <div className="bg-bg-base min-h-screen pt-[72px]">

      {/* ── HERO ─────────────────────────────────────────── */}
      <div className="relative h-[52vh] min-h-[360px] flex items-end overflow-hidden">
        <div className={`absolute inset-0 ${gradient}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/30 to-transparent" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-8 pb-10 w-full">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-[0.65rem] font-bold tracking-widest uppercase text-white/80">{type}</span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="text-[0.65rem] text-white/60 font-medium">{year}</span>
            <span className={`text-[0.65rem] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${badge.cls}`}>
              {badge.label}
            </span>
          </div>
          <h1
            className="font-heading font-black text-white tracking-tight leading-none drop-shadow-sm"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
          >
            {title}
          </h1>
        </div>
      </div>

      {/* ── BODY ─────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-8 py-14">

        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-[0.78rem] font-bold tracking-widest uppercase text-ink-muted hover:text-glacier transition-colors mb-10 group"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 12L6 8l4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          All Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">

          {/* Description */}
          <div>
            <div className="space-y-5 text-ink-muted leading-8">
              {description.map((para, i) => <p key={i}>{para}</p>)}
            </div>

            {tags.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span key={tag} className="text-[0.7rem] font-bold tracking-wide uppercase text-ink-muted px-3 py-1 border border-edge rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {awards.length > 0 && (
              <div className="mt-12">
                <h2 className="font-heading font-extrabold text-xl text-ink mb-5 tracking-tight">Recognition</h2>
                <ul className="space-y-3">
                  {awards.map(award => (
                    <li key={award} className="flex items-start gap-3 text-[0.9rem] text-ink-muted">
                      <span className="text-glacier mt-1 flex-shrink-0">✦</span>
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 self-start">
            <div className="bg-white border border-edge rounded-2xl p-6 shadow-sm shadow-edge/30">
              <h2 className="font-heading font-extrabold text-[0.9rem] uppercase tracking-widest text-ink-muted pb-4 mb-1 border-b border-edge">
                Project Info
              </h2>
              <InfoRow label="Type"            value={type}            />
              <InfoRow label="Year"            value={year}            />
              <InfoRow label="Duration"        value={duration}        />
              <InfoRow label="Rating"          value={rating}          />
              <InfoRow label="Language"        value={language}        />
              <InfoRow label="Director"        value={director}        />
              <InfoRow label="Producer"        value={producer}        />
              <InfoRow label="Cinematographer" value={cinematographer} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
