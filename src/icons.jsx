// Icônes SVG line, look tech épuré
const PATHS = {
  ecran: <><rect x="5" y="2" width="14" height="20" rx="2.5" /><line x1="10" y1="18" x2="14" y2="18" /></>,
  batterie: <><rect x="2" y="7" width="16" height="10" rx="2" /><line x1="21" y1="10" x2="21" y2="14" /><line x1="6" y1="10" x2="6" y2="14" /><line x1="10" y1="10" x2="10" y2="14" /></>,
  charge: <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />,
  camera: <><path d="M3 8a2 2 0 0 1 2-2h1.5l1-2h5l1 2H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /><circle cx="12" cy="12.5" r="3.5" /></>,
  vitre: <><rect x="4" y="2" width="16" height="20" rx="2.5" /><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="17" x2="20" y2="17" /></>,
  desox: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />,
  express: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  garantie: <><path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6Z" /><path d="m9 12 2 2 4-4" /></>,
  prix: <><circle cx="12" cy="12" r="9" /><path d="M12 7v10M9.5 9.5a2.5 2 0 0 1 5 0c0 2.5-5 1.5-5 4a2.5 2 0 0 0 5 0" /></>,
  domicile: <><path d="M4 11 12 4l8 7" /><path d="M6 10v9h12v-9" /><path d="M10 19v-5h4v5" /></>,
  expert: <path d="M14.7 6.3a4 4 0 0 0-5.6 5.6l-6.1 6.1 1.4 1.4 6.1-6.1a4 4 0 0 0 5.6-5.6l-2.1 2.1-1.9-.5-.5-1.9Z" />,
  correspondance: <><path d="M3 8 12 3l9 5-9 5Z" /><path d="M3 8v8l9 5 9-5V8" /><line x1="12" y1="13" x2="12" y2="21" /></>,
  phone: <><rect x="6" y="2" width="12" height="20" rx="3" /><line x1="10" y1="18" x2="14" y2="18" /></>,
  chat: <path d="M4 5h16v11H8l-4 4V5Z" />,
  search: <><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.5" y2="16.5" /></>,
};

export default function Icon({ name, className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {PATHS[name] || null}
    </svg>
  );
}
