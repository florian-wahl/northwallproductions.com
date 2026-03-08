export default function LogoMark({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <polygon points="20,2 35,11 35,29 20,38 5,29 5,11" stroke="#111111" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <line x1="20" y1="8"  x2="20" y2="32" stroke="#111111" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="8"  y1="14" x2="32" y2="26" stroke="#111111" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="32" y1="14" x2="8"  y2="26" stroke="#111111" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="20" cy="20" r="3"   fill="#111111" />
      <circle cx="20" cy="8"  r="1.2" fill="#111111" fillOpacity="0.4" />
      <circle cx="20" cy="32" r="1.2" fill="#111111" fillOpacity="0.4" />
      <circle cx="8"  cy="14" r="1.2" fill="#111111" fillOpacity="0.4" />
      <circle cx="32" cy="26" r="1.2" fill="#111111" fillOpacity="0.4" />
      <circle cx="32" cy="14" r="1.2" fill="#111111" fillOpacity="0.4" />
      <circle cx="8"  cy="26" r="1.2" fill="#111111" fillOpacity="0.4" />
    </svg>
  );
}
