import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoMark from './LogoMark';

const links = [
  { to: '/',        label: 'Home'     },
  { to: '/projects', label: 'Projects' },
  { to: '/contact',  label: 'Contact'  },
];

export default function Nav() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  const closeMenu = () => setMenuOpen(false);

  const navBase =
    'fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300';
  const navScrolled =
    'bg-bg-base/85 backdrop-blur-md border-b border-surface-border';

  const linkBase =
    'text-[0.8rem] font-medium tracking-[0.12em] uppercase transition-colors duration-200 relative group';

  return (
    <>
      <nav className={`${navBase} ${scrolled ? navScrolled : ''}`} aria-label="Main navigation">
        <div className="w-full max-w-[1200px] mx-auto px-8 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-85 transition-opacity" onClick={closeMenu}>
            <LogoMark className="w-9 h-9 flex-shrink-0" />
            <div className="flex flex-col leading-none">
              <span className="font-heading font-extrabold text-[1.1rem] tracking-[0.08em] text-frost">
                NORTHWALL
              </span>
              <span className="font-body text-[0.58rem] tracking-[0.22em] text-frost-muted uppercase mt-0.5">
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
                    `${linkBase} ${isActive ? 'text-frost' : 'text-frost-muted hover:text-frost'}`
                  }
                >
                  {label}
                  {/* Underline indicator */}
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-ice scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-[22px] h-[2px] bg-frost-muted rounded-sm transition-all duration-200 ${
                menuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block w-[22px] h-[2px] bg-frost-muted rounded-sm transition-all duration-200 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-[22px] h-[2px] bg-frost-muted rounded-sm transition-all duration-200 ${
                menuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="fixed top-[72px] left-0 right-0 z-40 bg-bg-elevated border-b border-surface-border px-8 py-6 flex flex-col gap-5 md:hidden">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-sm font-medium tracking-[0.12em] uppercase transition-colors ${
                  isActive ? 'text-frost' : 'text-frost-muted'
                }`
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
