/* ------------------------------------------------------------------ */
/*  LinkedIn profile link — sits directly under a leader's portrait.    */
/* ------------------------------------------------------------------ */

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function LinkedInButton({
  href,
  name,
  className = "",
}: {
  href: string;
  name: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} on LinkedIn`}
      className={`inline-flex items-center gap-2 rounded-full border border-[#4D397F]/20 bg-white px-4 py-2 text-[14px] font-semibold text-[#4D397F] shadow-sm transition-colors hover:bg-[#4D397F]/5 ${className}`}
    >
      <LinkedInIcon className="size-4" />
      LinkedIn
    </a>
  );
}
