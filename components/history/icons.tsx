type IconProps = {
  className?: string;
};

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function MedalIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m12 6.4.95 1.9 2.1.3-1.52 1.48.36 2.1L12 11.2l-1.89.99.36-2.1-1.52-1.49 2.1-.3z" />
      <path d="M9.7 13.6 7.9 21l4.1-2.3 4.1 2.3-1.8-7.4" />
    </svg>
  );
}

export function TrophyIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 3.5h10v5.5a5 5 0 0 1-10 0z" />
      <path d="M7 5.2H4.9v1.4a2.3 2.3 0 0 0 2.3 2.3" />
      <path d="M17 5.2h2.1v1.4a2.3 2.3 0 0 1-2.3 2.3" />
      <path d="M12 14v3.2" />
      <path d="M8.4 20.5h7.2l-1.1-3.3H9.5z" />
    </svg>
  );
}

export function PhotoIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <circle cx="8.8" cy="10" r="1.6" />
      <path d="m3.8 17.4 4.4-4.1a2 2 0 0 1 2.7 0l3.3 3.1" />
      <path d="m14.3 14.4 1.7-1.6a2 2 0 0 1 2.7 0l1.5 1.4" />
    </svg>
  );
}

export function MonitorIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="2.5" y="4" width="19" height="12.5" rx="2" />
      <path d="M8.5 20.5h7" />
      <path d="M12 16.5v4" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3.2 4.8 6v5.6c0 4.3 2.9 8.2 7.2 9.2 4.3-1 7.2-4.9 7.2-9.2V6z" />
      <path d="m8.9 11.8 2.2 2.2 4-4.2" />
    </svg>
  );
}

export function FilmIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="M7.6 4.5v15" />
      <path d="M16.4 4.5v15" />
      <path d="M2.5 12h19" />
      <path d="M2.5 8.2h5.1M2.5 15.8h5.1M16.4 8.2h5.1M16.4 15.8h5.1" />
    </svg>
  );
}