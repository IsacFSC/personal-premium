export default function PremiumPulse() {
  const pulsePoints = [
    [20, 100],
    [30, 100],
    [40, 92],
    [50, 108],
    [60, 55],
    [70, 145],
    [80, 100],
  ];

  const repetitions = 80;
  const spacing = 80;

  const segments = [];

  for (let i = 0; i < repetitions; i++) {
    const offset = i * spacing;

    for (const [x, y] of pulsePoints) {
      segments.push(`L${x + offset} ${y}`);
    }
  }

  const width = repetitions * spacing;

  const d = `M0 100 ${segments.join(" ")}`;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="
          absolute
          left-0
          top-[10%]
          h-24
          md:h-32
          lg:h-48
          w-[200%]
          animate-ecg
        "
        viewBox={`0 0 ${width} 200`}
      >
        <defs>
          <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d3d2cc" stopOpacity="0" />
            <stop offset="20%" stopColor="#d3d2cc" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#b7afa8" stopOpacity="0.35" />
            <stop offset="80%" stopColor="#d3d2cc" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#d3d2cc" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d={d}
          fill="none"
          stroke="url(#pulseGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
