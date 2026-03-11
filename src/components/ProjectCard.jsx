import { Link } from 'react-router-dom';

const statusConfig = {
  completed:   { label: 'Completed',      cls: 'border border-ink/40 text-ink'         },
  upcoming:    { label: 'Upcoming',        cls: 'border border-ink-dim text-ink-muted'   },
  development: { label: 'In Development', cls: 'border border-ink-ghost text-ink-dim'   },
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
      className="group flex flex-col bg-white border border-edge rounded-none overflow-hidden
                 hover:border-edge-strong hover:-translate-y-1
                 hover:shadow-[0_12px_32px_rgba(0,0,0,0.10)]
                 transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-ink"
    >
      {/* Poster — B&W landscape gradient */}
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <div className={`absolute inset-0 ${gradient} transition-transform duration-600 group-hover:scale-103`} aria-hidden="true" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" aria-hidden="true" />
        {/* Status badge */}
        <span className={`absolute top-3 right-3 z-10 text-[0.58rem] font-bold tracking-[0.18em] uppercase px-2.5 py-1 bg-white/90 backdrop-blur-sm ${badge.cls}`}>
          {badge.label}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[0.62rem] font-bold tracking-[0.18em] uppercase text-ink-dim">{type}</span>
          <span className="w-[3px] h-[3px] rounded-full bg-ink-ghost" aria-hidden="true" />
          <span className="text-[0.62rem] text-ink-dim font-medium">{year}</span>
        </div>

        <h3 className="font-heading font-bold text-[1.15rem] text-ink leading-snug mb-3 tracking-tight">
          {title}
        </h3>

        <p className="text-[0.855rem] text-ink-muted leading-7 flex-1 mb-5 line-clamp-3 font-normal">
          {shortDescription}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-edge-light">
          <div className="flex gap-1.5 flex-wrap">
            {tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-[0.58rem] font-bold tracking-[0.1em] uppercase text-ink-dim px-2 py-0.5 border border-edge-light">
                {tag}
              </span>
            ))}
          </div>
          <span className="text-ink-dim text-base transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
        </div>
      </div>
    </Link>
  );
}
