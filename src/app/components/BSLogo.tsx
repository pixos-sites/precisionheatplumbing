import svgPaths from "../../imports/svg-e9x652v63f";

interface BSLogoProps {
  className?: string;
  variant?: "default" | "white";
}

export function BSLogo({ className = "", variant = "default" }: BSLogoProps) {
  const fillRed = "#FE0000";
  const fillDark = variant === "white" ? "#FFFFFF" : "#1A1818";

  return (
    <div className={className}>
      <svg
        className="block w-full h-full"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 203.685 152.99"
      >
        <g clipPath="url(#clip0_logo)">
          <path d={svgPaths.p1a931900} fill={fillRed} />
          <path d={svgPaths.p13c7fa00} fill={fillDark} />
          <path d={svgPaths.p3db97100} fill={fillDark} />
          <path d={svgPaths.p32b92800} fill={fillDark} />
          <path d={svgPaths.p201a9ab0} fill={fillDark} />
          <path d={svgPaths.p152708c0} fill={fillDark} />
          <path d={svgPaths.p2b86af80} fill={fillDark} />
          <path d={svgPaths.p11a62980} fill={fillDark} />
          <path d={svgPaths.p28063800} fill={fillDark} />
          <path d={svgPaths.peac700} fill={fillDark} />
          <path d={svgPaths.p15884a00} fill={fillDark} />
          <path d={svgPaths.p2e459b00} fill={fillDark} />
          <path d={svgPaths.p1e658800} fill={fillDark} />
          <path d={svgPaths.p24edab00} fill={fillDark} />
        </g>
        <defs>
          <clipPath id="clip0_logo">
            <rect fill="white" height="152.99" width="203.685" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
