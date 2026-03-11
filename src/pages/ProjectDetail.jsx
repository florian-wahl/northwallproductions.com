import { useParams, Link, Navigate } from 'react-router-dom';
import { getProject } from '../data/projects';

const posterGradients = {
  'poster-1': 'bg-poster-1', 'poster-2': 'bg-poster-2',
  'poster-3': 'bg-poster-3', 'poster-4': 'bg-poster-4',
  'poster-5': 'bg-poster-5', 'poster-6': 'bg-poster-6',
};

const statusConfig = {
  completed:   { label: 'Completed',      cls: 'border border-ink/40 text-ink'       },
  upcoming:    { label: 'Upcoming',        cls: 'border border-ink-dim text-ink-muted' },
  development: { label: 'In Development', cls: 'border border-edge text-ink-dim'      },
};

function InfoRow({ label, value }) {
  if (!value || value === 'TBD') return null;
  return (
    <div className="flex flex-col gap-1.5 py-4 border-b border-edge last:border-0">
      <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-ink-dim">{label}</span>
      <span className="text-[0.9rem] text-ink font-semibold tracking-tight">{value}</span>
    </div>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProject(id);
  if (!project) return <Navigate to="/projects" replace />;

  const { title, type, status, year, duration, rating, language,
    posterClass, description, tags, director, producer, cinematographer, awards } = project;

  const gradient = posterGradients[posterClass] ?? 'bg-poster-1';
  const badge    = statusConfig[status] ?? statusConfig.upcoming;

  return (
    <div className="bg-bg-base min-h-screen pt-[72px]">

      {/* Hero poster */}
      <div className="relative h-[50vh] min-h-[340px] flex items-end overflow-hidden">
        <div className={`absolute inset-0 ${gradient}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8f8f8] via-[#f8f8f8]/20 to-transparent" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-8 pb-10 w-full">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-ink-muted">{type}</span>
            <span className="w-1 h-1 rounded-full bg-ink-ghost" />
            <span className="text-[0.6rem] text-ink-dim font-medium">{year}</span>
            <span className={`text-[0.6rem] font-bold tracking-[0.2em] uppercase px-2.5 py-1 bg-white/90 backdrop-blur-sm ${badge.cls}`}>
              {badge.label}
            </span>
          </div>
          <h1
            className="font-heading font-black text-ink uppercase tracking-tight leading-none"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
          >
            {title}
          </h1>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-[1200px] mx-auto px-8 py-14">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-ink-dim hover:text-ink transition-colors mb-10 group"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 12L6 8l4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          All Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-14">

          <div>
            <div className="space-y-5 text-ink-muted leading-8 font-light">
              {description.map((para, i) => <p key={i}>{para}</p>)}
            </div>

            {tags.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span key={tag} className="text-[0.62rem] font-bold tracking-[0.12em] uppercase text-ink-dim px-3 py-1 border border-edge">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {awards.length > 0 && (
              <div className="mt-12">
                <h2 className="font-heading font-black text-lg text-ink uppercase tracking-tight mb-5">Recognition</h2>
                <ul className="space-y-3">
                  {awards.map(award => (
                    <li key={award} className="flex items-start gap-3 text-[0.9rem] text-ink-muted font-light">
                      <span className="text-ink-dim mt-1 flex-shrink-0 font-bold">—</span>
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="lg:sticky lg:top-28 self-start">
            <div className="border border-edge p-6 bg-white">
              <h2 className="font-heading font-black text-[0.78rem] uppercase tracking-[0.18em] text-ink-dim pb-4 mb-1 border-b border-edge">
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
