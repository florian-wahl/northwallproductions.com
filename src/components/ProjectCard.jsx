import { Link } from 'react-router-dom';

const statusConfig = {
  completed:   { label: 'Completed',      cls: 'bg-status-completed/10 text-status-completed border border-status-completed/30' },
  upcoming:    { label: 'Upcoming',        cls: 'bg-status-upcoming/10 text-status-upcoming border border-status-upcoming/25'   },
  development: { label: 'In Development', cls: 'bg-status-dev/10 text-status-dev border border-status-dev/25'                  },
};

const posterGradients = {
  'poster-1': 'bg-poster-1',
  'poster-2': 'bg-poster-2',
  'poster-3': 'bg-poster-3',
  'poster-4': 'bg-poster-4',
  'poster-5': 'bg-poster-5',
  'poster-6': 'bg-poster-6',
};

export default function ProjectCard({ project }) {
  const { id, title, type, status, year, posterClass, shortDescription, tags } = project;
  const badge    = statusConfig[status] ?? statusConfig.upcoming;
  const gradient = posterGradients[posterClass] ?? 'bg-poster-1';

  return (
    <Link
      to={`/projects/${id}`}
      className="group flex flex-col bg-bg-card border border-edge rounded-2xl overflow-hidden
                 hover:bg-bg-card-hover hover:border-edge-strong hover:-translate-y-1
                 hover:shadow-[0_16px_40px_rgba(11,110,125,0.12)]
                 transition-all duration-250 focus:outline-none focus-visible:ring-2 focus-visible:ring-glacier"
    >
      {/* Poster */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <div
          className={`absolute inset-0 ${gradient} transition-transform duration-500 group-hover:scale-105`}
          aria-hidden="true"
        />
        {/* Bottom fade into white card */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" aria-hidden="true" />

        {/* Status badge */}
        <span className={`absolute top-3 right-3 z-10 text-[0.62rem] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${badge.cls}`}>
          {badge.label}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[0.67rem] font-bold tracking-[0.15em] uppercase text-glacier">{type}</span>
          <span className="w-1 h-1 rounded-full bg-ink-ghost" aria-hidden="true" />
          <span className="text-[0.67rem] text-ink-dim font-medium">{year}</span>
        </div>

        <h3 className="font-heading font-extrabold text-[1.35rem] text-ink leading-tight mb-3 tracking-tight">
          {title}
        </h3>

        <p className="text-[0.875rem] text-ink-muted leading-relaxed flex-1 mb-5 line-clamp-3">
          {shortDescription}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-edge-light">
          <div className="flex gap-1.5 flex-wrap">
            {tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-[0.6rem] font-semibold tracking-wide uppercase text-ink-dim px-2 py-0.5 border border-edge rounded">
                {tag}
              </span>
            ))}
          </div>
          <span className="text-glacier text-lg transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
        </div>
      </div>
    </Link>
  );
}
