import { Link } from 'react-router-dom';
import LogoMark from './LogoMark';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-edge bg-bg-elevated">
      <div className="max-w-[1200px] mx-auto px-8 py-10 flex flex-wrap items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 hover:opacity-60 transition-opacity">
          <LogoMark className="w-7 h-7" />
          <div className="flex flex-col leading-none">
            <span className="font-heading font-black text-[0.85rem] tracking-[0.15em] text-ink uppercase">
              Northwall
            </span>
            <span className="font-body text-[0.5rem] tracking-[0.22em] text-ink-dim uppercase mt-0.5 font-medium">
              Productions
            </span>
          </div>
        </Link>

        <nav aria-label="Footer navigation">
          <ul className="flex gap-7">
            {[
              { to: '/',         label: 'Home'     },
              { to: '/projects', label: 'Projects' },
              { to: '/contact',  label: 'Contact'  },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="text-[0.72rem] font-medium tracking-[0.12em] uppercase text-ink-dim hover:text-ink transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-[0.68rem] font-medium text-ink-ghost tracking-wide">
          &copy; {year} NorthWall Productions
        </p>
      </div>
    </footer>
  );
}
