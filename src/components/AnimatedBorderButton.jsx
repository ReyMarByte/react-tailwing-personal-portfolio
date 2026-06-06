export const AnimatedBorderButton = ({ children }) => {
  return (
    <button className="relative bg-transparent border border-border text-foreground hover:border-primary/50 transition-all duration-1000 focus:outline-none focus:visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group px-8 py-4 text-lg font-medium rounded-full overflow-visible animated-border">
      {/* SVG btn animation */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 200 70"
        preserveAspectRatio="none"
      >
        <rect
          x="1"
          y="1"
          width="198"
          height="68"
          rx="28"
          fill="none"
          className="
            animated-border-rect
            stroke-fuchsia-400
            stroke-[2]
            [stroke-dasharray:500]
            [stroke-dashoffset:500]
            group-hover:[stroke-dashoffset:0]
            transition-all
            duration-1000
            ease-out
        "
        />
      </svg>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};
