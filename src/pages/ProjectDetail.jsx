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
  completed:   { label: 'Completed',      className: 'bg-status-completed/10 text-status-completed border border-status-completed/30' },
  upcoming:    { label: 'Upcoming',        className: 'bg-status-upcoming/10 text-status-upcoming border border-status-upcoming/25'   },
  development: { label: 'In Development', className: 'bg-status-dev/10 text-status-dev border border-status-dev/25'                  },
};

function InfoRow({ label, value }) {
  if (!value || value === 'TBD') return null;
  return (
    <div className="flex flex-col gap-1 py-3.5 border-b border-surface-border last:border-0">
      <span className="text-[0.67rem] font-semibold tracking-[0.15em] uppercase text-frost-dim">
        {label}
      </span>
      <span className="text-[0.9375rem] text-frost font-medium">{value}</span>
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
      <div className="relative h-[55vh] min-h-[380px] flex items-end overflow-hidden">
        {/* Gradient background */}
        <div className={`absolute inset-0 ${gradient}`} />

        {/* Film-strip texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.04) 4px)',
          }}
          aria-hidden="true"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/60 to-bg-base/20" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-8 pb-10 w-full">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-[0.65rem] font-semibold tracking-widest uppercase text-ice">{type}</span>
            <span className="w-1 h-1 rounded-full bg-frost-dim" />
            <span className="text-[0.65rem] text-frost-dim">{year}</span>
            <span
              className={`text-[0.65rem] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full ${badge.className}`}
            >
              {badge.label}
            </span>
          </div>
          <h1
            className="font-heading font-extrabold uppercase text-frost leading-none"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
          >
            {title}
          </h1>
        </div>
      </div>

      {/* ── BODY ─────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-8 py-14">

        {/* Back link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-[0.78rem] font-medium tracking-widest uppercase text-frost-muted hover:text-ice transition-colors mb-10 group"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 12L6 8l4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          All Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">

          {/* Description */}
          <div>
            <div className="space-y-5 text-frost-muted leading-8 text-[1rem]">
              {description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.7rem] font-medium tracking-wide uppercase text-frost-muted px-3 py-1 border border-surface-border rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Awards */}
            {awards.length > 0 && (
              <div className="mt-12">
                <h2 className="font-heading font-bold text-xl uppercase tracking-wider text-frost mb-5">
                  Recognition
                </h2>
                <ul className="space-y-3">
                  {awards.map((award) => (
                    <li key={award} className="flex items-start gap-3 text-[0.9rem] text-frost-muted">
                      <span className="text-ice mt-1 flex-shrink-0" aria-hidden="true">✦</span>
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 self-start">
            <div className="bg-bg-card border border-surface-border rounded-2xl p-6">
              <h2 className="font-heading font-bold text-[0.9rem] uppercase tracking-widest text-frost-muted pb-4 mb-1 border-b border-surface-border">
                Project Info
              </h2>
              <InfoRow label="Type"           value={type}            />
              <InfoRow label="Year"           value={year}            />
              <InfoRow label="Duration"       value={duration}        />
              <InfoRow label="Rating"         value={rating}          />
              <InfoRow label="Language"       value={language}        />
              <InfoRow label="Director"       value={director}        />
              <InfoRow label="Producer"       value={producer}        />
              <InfoRow label="Cinematographer" value={cinematographer} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
