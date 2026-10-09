type LogoMarkProps = {
  variant?: "solid" | "inverse";
  className?: string;
};

export function LogoMark({ variant = "solid", className = "" }: LogoMarkProps) {
  const tone =
    variant === "inverse" ? "bg-white text-navy" : "bg-navy text-white";

  return (
    <span
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] ${tone} ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-5 w-5"
      >
        <path d="M12 3 5 5.6v5.1c0 4.3 2.9 7.7 7 8.8 4.1-1.1 7-4.5 7-8.8V5.6z" />
        <path d="m8.8 11.6 2.1 2.1 4.3-4.4" />
      </svg>
    </span>
  );
}
