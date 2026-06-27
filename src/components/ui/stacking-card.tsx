'use client';
import { useRef, useCallback, useState, useEffect } from 'react';

export interface StackingProject {
  title: string;
  description: string;
  src: string;
  color: string;

}

const NAV_HEIGHT = 72;
const TITLE_BAR_HEIGHT = 56;
const CARD_BODY_HEIGHT = 360;

interface CardProps {
  i: number;
  total: number;
  title: string;
  description: string;
  src: string;
  color: string;
  stickyTop: number;
}

function StackingCard({ i, total, title, description, src, color, stickyTop }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const scrollToCard = useCallback(() => {
    if (!cardRef.current) return;
    const y = cardRef.current.offsetTop + (cardRef.current.offsetParent as HTMLElement)?.offsetTop - stickyTop + TITLE_BAR_HEIGHT;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }, [stickyTop]);

  return (
    <div
      ref={cardRef}
      className="sticky rounded-2xl overflow-hidden shadow-xl"
      style={{ top: stickyTop, zIndex: 10 + i, backgroundColor: color }}
    >
      <button
        type="button"
        onClick={scrollToCard}
        className="w-full flex items-center gap-4 px-6 sm:px-8 cursor-pointer group"
        style={{ height: TITLE_BAR_HEIGHT }}
      >
        <span className="flex items-center justify-center size-8 rounded-lg bg-white/15 text-white/80 text-sm font-bold font-heading shrink-0">
          {String(i + 1).padStart(2, '0')}
        </span>
        <h3 className="text-base sm:text-lg font-heading font-semibold text-white truncate text-left flex-1">
          {title}
        </h3>
        <span className="shrink-0 text-white/40 text-xs font-medium font-heading">
          {String(i + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
        </span>
      </button>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 px-6 sm:px-8 pb-8" style={{ height: CARD_BODY_HEIGHT }}>
        <div className="sm:w-[40%] flex flex-col justify-center">
          <p className="text-sm sm:text-[0.9375rem] text-white/85 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="sm:w-[60%] rounded-xl overflow-hidden relative">
          <img
            src={src}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            loading={i < 2 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </div>
  );
}

interface StackingCardsProps {
  projects: StackingProject[];
  stickyHeader?: React.ReactNode;
  headerBgClass?: string;
}

export function StackingCards({
  projects,
  stickyHeader,
  headerBgClass = 'bg-background',
}: StackingCardsProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(104);

  useEffect(() => {
    if (!headerRef.current) return;
    const measure = () => setHeaderHeight(headerRef.current!.offsetHeight);
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [stickyHeader]);

  const headerOffset = NAV_HEIGHT + (stickyHeader ? headerHeight : 0);
  const paddingBottom = CARD_BODY_HEIGHT;

  return (
    <div>
      {stickyHeader && (
        <div
          ref={headerRef}
          className="sticky z-30"
          style={{ top: NAV_HEIGHT }}
        >
          <div className={`${headerBgClass} pt-8 pb-3`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {stickyHeader}
            </div>
          </div>
          <div
            className="h-4"
            style={{
              background: `linear-gradient(to bottom, var(--sticky-header-bg, transparent), transparent)`,
            }}
          />
        </div>
      )}

      {/* All cards as siblings — sticky stacking needs a shared parent */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {projects.map((project, i) => (
            <StackingCard
              key={i}
              i={i}
              total={projects.length}
              title={project.title}
              description={project.description}
              src={project.src}
              color={project.color}
              stickyTop={headerOffset + i * TITLE_BAR_HEIGHT}
            />
          ))}
          {/* Spacer inside the sticky containment block so the last card can stay stuck */}
          <div style={{ height: paddingBottom }} aria-hidden />
        </div>
      </div>
    </div>
  );
}
