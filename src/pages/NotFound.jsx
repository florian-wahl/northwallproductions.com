import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-base flex items-center justify-center px-8 text-center">
      <div>
        <p className="font-heading font-black text-[7rem] leading-none text-edge select-none">404</p>
        <h1 className="font-heading font-black text-2xl text-ink uppercase tracking-tight mb-4 mt-2">
          Lost in the North
        </h1>
        <p className="text-ink-muted mb-10 max-w-[32ch] mx-auto leading-7 font-light">
          The page you're looking for doesn't exist — maybe it drifted away with the snow.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-ink text-white font-bold text-[0.75rem] tracking-[0.15em] uppercase
                     hover:bg-ink-muted hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)]
                     transition-all duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
