import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoMark from './LogoMark';

const links = [
  { to: '/',         label: 'Home'     },
  { to: '/projects', label: 'Projects' },
  { to: '/team',     label: 'Team'     },
  { to: '/contact',  label: 'Contact'  },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300
          ${scrolled
            ? 'bg-white/92 backdrop-blur-md border-b border-edge shadow-sm'
            : 'bg-white/80 backdrop-blur-sm border-b border-edge/60'
          }`}
        aria-label="Main navigation"
      >
        <div className="w-full max-w-[1200px] mx-auto px-8 flex items-center justify-between">

          <Link to="/" className="flex items-center gap-3 hover:opacity-60 transition-opacity" onClick={closeMenu}>
            <LogoMark className="w-8 h-8 flex-shrink-0" />
            <div className="flex flex-col leading-none">
              <span className="font-heading font-black text-[0.95rem] tracking-[0.15em] text-ink uppercase">
                Northwall
              </span>
              <span className="font-body text-[0.52rem] tracking-[0.25em] text-ink-dim uppercase mt-0.5 font-medium">
                Productions
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `text-[0.72rem] font-semibold tracking-[0.18em] uppercase transition-colors relative group
                    ${isActive ? 'text-ink' : 'text-ink-dim hover:text-ink'}`
                  }
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-ink scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-[22px] h-[2px] bg-ink-dim rounded-sm transition-all duration-200 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-[22px] h-[2px] bg-ink-dim rounded-sm transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-[22px] h-[2px] bg-ink-dim rounded-sm transition-all duration-200 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed top-[72px] left-0 right-0 z-40 bg-white border-b border-edge px-8 flex flex-col md:hidden">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={closeMenu}
              className={({ isActive }) =>
                `py-5 text-sm font-semibold tracking-[0.18em] uppercase transition-colors border-b border-edge last:border-b-0
                ${isActive ? 'text-ink' : 'text-ink-dim'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}
