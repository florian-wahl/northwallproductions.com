import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-base flex items-center justify-center px-8 text-center">
      <div>
        <p className="font-heading font-black text-[7rem] leading-none text-edge-strong select-none">
          404
        </p>
        <h1 className="font-heading font-extrabold text-3xl text-ink tracking-tight mb-4 mt-2">
          Lost in the North
        </h1>
        <p className="text-ink-muted mb-10 max-w-[34ch] mx-auto leading-7">
          The page you're looking for doesn't exist — maybe it drifted away with the snow.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-glacier text-white font-bold text-sm rounded-xl
                     hover:bg-glacier-mid hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(11,110,125,0.3)]
                     transition-all duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
