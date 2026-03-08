import { Link } from 'react-router-dom';

const statusConfig = {
  completed: {
    label: 'Completed',
    className: 'bg-status-completed/10 text-status-completed border border-status-completed/30',
  },
  upcoming: {
    label: 'Upcoming',
    className: 'bg-status-upcoming/10 text-status-upcoming border border-status-upcoming/25',
  },
  development: {
    label: 'In Development',
    className: 'bg-status-dev/10 text-status-dev border border-status-dev/25',
  },
};

// Tailwind gradient classes per poster slot
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
  const badge   = statusConfig[status] ?? statusConfig.upcoming;
  const gradient = posterGradients[posterClass] ?? 'bg-poster-1';

  return (
    <Link
      to={`/projects/${id}`}
      className="group flex flex-col bg-bg-card border border-surface-border rounded-2xl overflow-hidden
                 hover:bg-bg-card-hover hover:border-surface-border-light hover:-translate-y-1
                 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]
                 transition-all duration-250 focus:outline-none focus-visible:ring-2 focus-visible:ring-ice"
    >
      {/* Poster */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <div
          className={`absolute inset-0 ${gradient} transition-transform duration-500 group-hover:scale-105`}
          aria-hidden="true"
        />

        {/* Film-strip texture lines */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.03) 3px, rgba(255,255,255,0.03) 4px)',
          }}
          aria-hidden="true"
        />

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent" aria-hidden="true" />

        {/* Top film-strip holes */}
        <div
          className="absolute top-0 left-0 right-0 h-5 opacity-20"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, transparent, transparent 6px, rgba(255,255,255,0.5) 6px, rgba(255,255,255,0.5) 10px)',
          }}
          aria-hidden="true"
        />

        {/* Status badge */}
        <span
          className={`absolute top-3 right-3 z-10 text-[0.65rem] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full ${badge.className}`}
        >
          {badge.label}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        {/* Meta */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[0.68rem] font-semibold tracking-[0.15em] uppercase text-ice">
            {type}
          </span>
          <span className="w-1 h-1 rounded-full bg-frost-dim" aria-hidden="true" />
          <span className="text-[0.68rem] text-frost-dim">{year}</span>
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-2xl uppercase tracking-wide text-frost leading-tight mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-frost-muted leading-relaxed flex-1 mb-5 line-clamp-3">
          {shortDescription}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-surface-border">
          <div className="flex gap-1.5 flex-wrap">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[0.6rem] font-medium tracking-wide uppercase text-frost-dim px-2 py-0.5 border border-surface-border rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-ice text-lg transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
