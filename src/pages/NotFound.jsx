import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-base flex items-center justify-center px-8 text-center">
      <div>
        <p className="font-heading font-extrabold text-[8rem] leading-none text-surface-border-light select-none">
          404
        </p>
        <h1 className="font-heading font-bold text-3xl uppercase tracking-widest text-frost mb-4 mt-2">
          Lost in the North
        </h1>
        <p className="text-frost-muted text-base mb-10 max-w-[36ch] mx-auto leading-7">
          The page you're looking for doesn't exist — maybe it drifted away with the snow.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-7 py-3 bg-ice text-bg-base font-semibold text-sm rounded-lg
                     hover:bg-ice-light hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(92,184,232,0.3)]
                     transition-all duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
