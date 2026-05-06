// Original cybersigilism SVG components for Obsidian Hymn
// Sharp organic-mechanical line work — thorns, circuits, ouroboros frames

const Sigil = {};

// 1. Primary brand mark — thorned ouroboros with central cross-axis
Sigil.Mark = ({ size = 48, stroke = 1.4, color = "currentColor", className = "" }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} className={className} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="square" strokeLinejoin="miter">
    {/* outer ring with breaks */}
    <path d="M 50 6 A 44 44 0 0 1 94 50" />
    <path d="M 94 50 A 44 44 0 0 1 50 94" />
    <path d="M 50 94 A 44 44 0 0 1 6 50" />
    <path d="M 6 50 A 44 44 0 0 1 50 6" />
    {/* inner geometric */}
    <path d="M 50 18 L 82 50 L 50 82 L 18 50 Z" />
    {/* vertical axis with thorns */}
    <path d="M 50 4 L 50 96" />
    <path d="M 50 24 L 44 28 M 50 24 L 56 28" />
    <path d="M 50 76 L 44 72 M 50 76 L 56 72" />
    {/* horizontal */}
    <path d="M 24 50 L 76 50" />
    {/* center node */}
    <circle cx="50" cy="50" r="4" />
    <circle cx="50" cy="50" r="1" fill={color} />
    {/* corner ticks */}
    <path d="M 18 50 L 12 44 M 18 50 L 12 56" />
    <path d="M 82 50 L 88 44 M 82 50 L 88 56" />
  </svg>
);

// 2. Crown of thorns — radial spikes
Sigil.CrownThorn = ({ size = 80, stroke = 1.2, color = "currentColor", className = "" }) => (
  <svg viewBox="0 0 200 100" width={size} height={size} className={className} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="square">
    <path d="M 10 90 L 28 30 L 36 70 L 50 14 L 60 70 L 76 22 L 86 72 L 100 8 L 114 72 L 124 22 L 140 70 L 150 14 L 164 70 L 172 30 L 190 90" />
    <path d="M 10 90 L 190 90" />
    {/* base ring */}
    <path d="M 30 90 L 30 96 M 70 90 L 70 96 M 100 90 L 100 96 M 130 90 L 130 96 M 170 90 L 170 96" />
  </svg>
);

// 3. Barbed cross
Sigil.BarbedCross = ({ size = 32, stroke = 1.2, color = "currentColor", className = "" }) => (
  <svg viewBox="0 0 60 60" width={size} height={size} className={className} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="square">
    <path d="M 30 4 L 30 56" />
    <path d="M 12 22 L 48 22" />
    {/* barbs */}
    <path d="M 30 4 L 24 10 M 30 4 L 36 10" />
    <path d="M 30 56 L 24 50 M 30 56 L 36 50" />
    <path d="M 12 22 L 18 16 M 12 22 L 18 28" />
    <path d="M 48 22 L 42 16 M 48 22 L 42 28" />
    {/* nodes */}
    <circle cx="30" cy="22" r="2.5" />
    <circle cx="30" cy="40" r="1.5" />
  </svg>
);

// 4. Concentric ritual circle — for backgrounds / watermarks
Sigil.RitualCircle = ({ size = 400, stroke = 0.8, color = "currentColor", className = "", style }) => (
  <svg viewBox="0 0 200 200" width={size} height={size} className={className} style={style} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="square">
    <circle cx="100" cy="100" r="98" />
    <circle cx="100" cy="100" r="84" strokeDasharray="2 4" />
    <circle cx="100" cy="100" r="70" />
    <circle cx="100" cy="100" r="50" strokeDasharray="1 3" />
    <circle cx="100" cy="100" r="32" />
    <circle cx="100" cy="100" r="14" />
    {/* radial spikes */}
    {Array.from({ length: 24 }).map((_, i) => {
      const a = (i * 360) / 24;
      return <line key={i} x1="100" y1="100" x2="100" y2="2" transform={`rotate(${a} 100 100)`} strokeDasharray="0 70 28 100" />;
    })}
    {/* tick marks */}
    {Array.from({ length: 60 }).map((_, i) => {
      const a = (i * 360) / 60;
      return <line key={"t"+i} x1="100" y1="14" x2="100" y2="20" transform={`rotate(${a} 100 100)`} />;
    })}
    {/* corner glyphs */}
    <path d="M 100 50 L 96 56 L 100 62 L 104 56 Z" />
    <path d="M 100 138 L 96 144 L 100 150 L 104 144 Z" />
    <path d="M 50 100 L 56 96 L 62 100 L 56 104 Z" />
    <path d="M 138 100 L 144 96 L 150 100 L 144 104 Z" />
  </svg>
);

// 5. Garment silhouettes — for product cards
Sigil.Cloak = ({ size = 200, color = "currentColor", className = "" }) => (
  <svg viewBox="0 0 200 280" width={size} height={size * 1.4} className={className} fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="square">
    {/* hood */}
    <path d="M 70 40 Q 70 10 100 10 Q 130 10 130 40 L 130 60" />
    <path d="M 70 60 L 70 40" />
    {/* shoulders flowing to floor */}
    <path d="M 70 60 Q 40 90 30 140 L 20 270" />
    <path d="M 130 60 Q 160 90 170 140 L 180 270" />
    {/* center seam */}
    <path d="M 100 60 L 100 270" strokeDasharray="2 4" />
    {/* side hem ripples */}
    <path d="M 30 140 L 50 200 L 35 260" />
    <path d="M 170 140 L 150 200 L 165 260" />
    {/* chest sigil */}
    <circle cx="100" cy="110" r="8" />
    <path d="M 100 102 L 100 118 M 92 110 L 108 110" />
    {/* hem ticks */}
    <path d="M 20 270 L 180 270" strokeDasharray="6 4" />
    {/* thorn details on shoulder */}
    <path d="M 70 60 L 64 54 M 130 60 L 136 54" />
  </svg>
);

Sigil.Mask = ({ size = 200, color = "currentColor", className = "" }) => (
  <svg viewBox="0 0 200 240" width={size} height={size * 1.2} className={className} fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="square">
    {/* skull/mask outline */}
    <path d="M 60 60 Q 60 20 100 20 Q 140 20 140 60 L 140 140 Q 140 170 120 180 L 120 220 L 80 220 L 80 180 Q 60 170 60 140 Z" />
    {/* eye slits */}
    <path d="M 72 90 L 92 90 L 90 100 L 74 100 Z" fill={color} />
    <path d="M 108 90 L 128 90 L 126 100 L 110 100 Z" fill={color} />
    {/* nose ridge */}
    <path d="M 100 108 L 96 130 L 100 134 L 104 130 Z" />
    {/* mouth stitches */}
    <path d="M 84 150 L 116 150" />
    <path d="M 84 150 L 80 146 M 84 150 L 80 154" />
    <path d="M 116 150 L 120 146 M 116 150 L 120 154" />
    <path d="M 90 150 L 90 156 M 100 150 L 100 156 M 110 150 L 110 156" />
    {/* crown spikes */}
    <path d="M 70 30 L 72 12 L 78 28" />
    <path d="M 90 22 L 94 6 L 100 24" />
    <path d="M 110 22 L 116 6 L 122 24" />
    <path d="M 130 30 L 134 12 L 140 28" />
    {/* axis */}
    <path d="M 100 60 L 100 180" strokeDasharray="2 4" />
  </svg>
);

Sigil.Boot = ({ size = 200, color = "currentColor", className = "" }) => (
  <svg viewBox="0 0 200 280" width={size} height={size * 1.4} className={className} fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="square">
    {/* shaft */}
    <path d="M 70 20 L 70 180 L 50 180 L 50 240 Q 50 250 60 250 L 170 250 Q 180 250 180 240 L 180 220 L 130 220 L 130 180 L 130 20 Z" />
    {/* lacing eyelets */}
    {Array.from({ length: 7 }).map((_, i) => (
      <g key={i}>
        <circle cx="80" cy={40 + i * 22} r="2" />
        <circle cx="120" cy={40 + i * 22} r="2" />
      </g>
    ))}
    {/* lace lines */}
    {Array.from({ length: 7 }).map((_, i) => (
      <path key={"l"+i} d={`M 80 ${40 + i * 22} L 120 ${40 + i * 22}`} strokeDasharray="2 3" />
    ))}
    {/* sole tread */}
    <path d="M 50 240 L 180 240" />
    <path d="M 60 240 L 60 250 M 80 240 L 80 250 M 100 240 L 100 250 M 120 240 L 120 250 M 140 240 L 140 250 M 160 240 L 160 250" />
    {/* heel spike */}
    <path d="M 50 250 L 40 270 L 50 270 Z" />
    {/* ankle barb */}
    <path d="M 70 180 L 60 174 L 70 168" />
  </svg>
);

Sigil.Chain = ({ size = 200, color = "currentColor", className = "" }) => (
  <svg viewBox="0 0 200 280" width={size} height={size * 1.4} className={className} fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="square">
    {/* chain links */}
    {Array.from({ length: 8 }).map((_, i) => (
      <ellipse key={i} cx="100" cy={30 + i * 30} rx="14" ry="10" transform={`rotate(${i % 2 === 0 ? 0 : 90} 100 ${30 + i * 30})`} />
    ))}
    {/* pendant */}
    <path d="M 100 260 L 80 280 L 100 320 L 120 280 Z" transform="translate(0 -50)" />
    <circle cx="100" cy="240" r="6" />
    <path d="M 100 234 L 100 246 M 94 240 L 106 240" />
  </svg>
);

Sigil.Robe = ({ size = 200, color = "currentColor", className = "" }) => (
  <svg viewBox="0 0 200 280" width={size} height={size * 1.4} className={className} fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="square">
    {/* collar */}
    <path d="M 80 20 L 100 30 L 120 20" />
    <path d="M 100 30 L 100 80" />
    {/* body — wide flowing */}
    <path d="M 80 20 L 40 60 L 20 270" />
    <path d="M 120 20 L 160 60 L 180 270" />
    <path d="M 20 270 L 180 270" />
    {/* sleeves with bell */}
    <path d="M 40 60 L 10 130 L 30 150 L 50 110" />
    <path d="M 160 60 L 190 130 L 170 150 L 150 110" />
    {/* center sigil */}
    <path d="M 100 100 L 100 180" />
    <circle cx="100" cy="140" r="10" />
    <path d="M 100 130 L 100 150 M 90 140 L 110 140" />
    <path d="M 92 132 L 108 148 M 108 132 L 92 148" strokeDasharray="2 3" />
    {/* hem barbs */}
    <path d="M 20 270 L 30 280 M 50 270 L 60 280 M 80 270 L 90 280 M 110 270 L 120 280 M 140 270 L 150 280 M 170 270 L 180 280" />
  </svg>
);

Sigil.Glove = ({ size = 200, color = "currentColor", className = "" }) => (
  <svg viewBox="0 0 200 280" width={size} height={size * 1.4} className={className} fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="square">
    {/* cuff */}
    <path d="M 50 220 L 50 270 L 150 270 L 150 220" />
    {/* palm */}
    <path d="M 50 220 L 50 110 Q 50 90 70 90 L 130 90 Q 150 90 150 110 L 150 220 Z" />
    {/* fingers */}
    <path d="M 55 90 L 55 40 Q 55 30 65 30 Q 75 30 75 40 L 75 90" />
    <path d="M 85 90 L 85 20 Q 85 10 95 10 Q 105 10 105 20 L 105 90" />
    <path d="M 115 90 L 115 30 Q 115 20 125 20 Q 135 20 135 30 L 135 90" />
    <path d="M 145 110 L 160 100 Q 170 96 170 110 L 170 140 Q 170 150 160 150 L 150 145" />
    {/* finger spikes/claws */}
    <path d="M 65 30 L 65 16 L 60 22" />
    <path d="M 95 10 L 95 -4 L 90 4" />
    <path d="M 125 20 L 125 6 L 120 12" />
    {/* knuckle studs */}
    <circle cx="75" cy="120" r="3" />
    <circle cx="100" cy="115" r="3" />
    <circle cx="125" cy="120" r="3" />
    {/* palm sigil */}
    <circle cx="100" cy="170" r="14" />
    <path d="M 100 156 L 100 184 M 86 170 L 114 170" strokeDasharray="2 2" />
  </svg>
);

// 6. Decorative flourishes
Sigil.ThornDivider = ({ width = 400, color = "currentColor", className = "" }) => (
  <svg viewBox="0 0 400 30" width={width} height={width * 0.075} className={className} fill="none" stroke={color} strokeWidth="1" strokeLinecap="square" preserveAspectRatio="none">
    <path d="M 0 15 L 160 15" />
    <path d="M 240 15 L 400 15" />
    {/* center diamond */}
    <path d="M 200 5 L 210 15 L 200 25 L 190 15 Z" />
    <path d="M 175 15 L 185 15 M 215 15 L 225 15" />
    <path d="M 200 5 L 200 0 M 200 25 L 200 30" />
    {/* end barbs */}
    <path d="M 0 15 L 6 9 M 0 15 L 6 21" />
    <path d="M 400 15 L 394 9 M 400 15 L 394 21" />
    {/* ticks */}
    <path d="M 60 10 L 60 20 M 100 10 L 100 20 M 300 10 L 300 20 M 340 10 L 340 20" />
  </svg>
);

Sigil.CornerOrnament = ({ size = 60, color = "currentColor", className = "", flip = "" }) => (
  <svg viewBox="0 0 60 60" width={size} height={size} className={className} fill="none" stroke={color} strokeWidth="1" strokeLinecap="square" style={{ transform: flip }}>
    <path d="M 0 0 L 60 0 L 60 1 L 30 1 L 30 6 L 25 6 L 25 1 L 0 1 Z" fill={color} />
    <path d="M 0 0 L 1 0 L 1 30 L 6 30 L 6 25 L 1 25" fill={color} />
    <path d="M 10 10 L 20 10 L 20 11 L 11 11 L 11 20 L 10 20 Z" fill={color} />
    <circle cx="14" cy="14" r="1.5" fill={color} />
  </svg>
);

// 7. Three-pillar sigils for lore section
Sigil.Hand = ({ size = 80, color = "currentColor", className = "" }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} className={className} fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="square">
    <path d="M 35 90 L 35 50 Q 35 40 45 40 L 55 40 Q 65 40 65 50 L 65 90" />
    <path d="M 38 50 L 38 25 Q 38 18 44 18 Q 50 18 50 25 L 50 40" />
    <path d="M 50 40 L 50 12 Q 50 6 56 6 Q 62 6 62 12 L 62 40" />
    <path d="M 62 40 L 62 22 Q 62 16 68 16 Q 74 16 74 22 L 74 40" />
    <path d="M 65 50 L 78 45 Q 86 42 86 52 L 86 70 Q 86 78 78 78 L 65 75" />
    <circle cx="50" cy="65" r="6" />
    <path d="M 50 59 L 50 71 M 44 65 L 56 65" />
  </svg>
);

Sigil.Hourglass = ({ size = 80, color = "currentColor", className = "" }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} className={className} fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="square">
    <path d="M 20 10 L 80 10 L 80 14 L 70 30 L 55 48 L 55 52 L 70 70 L 80 86 L 80 90 L 20 90 L 20 86 L 30 70 L 45 52 L 45 48 L 30 30 L 20 14 Z" />
    <path d="M 20 10 L 80 10" strokeWidth="2" />
    <path d="M 20 90 L 80 90" strokeWidth="2" />
    {/* sand trickle */}
    <path d="M 50 50 L 50 70" strokeDasharray="1 2" />
    {/* fill */}
    <path d="M 35 80 L 65 80 L 60 75 L 40 75 Z" fill={color} />
    <path d="M 30 20 L 70 20 L 60 35 L 40 35 Z" fill={color} opacity="0.4" />
  </svg>
);

Sigil.Eye = ({ size = 80, color = "currentColor", className = "" }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} className={className} fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="square">
    {/* eye almond */}
    <path d="M 10 50 Q 50 18 90 50 Q 50 82 10 50 Z" />
    {/* iris */}
    <circle cx="50" cy="50" r="16" />
    <circle cx="50" cy="50" r="6" fill={color} />
    {/* lashes / rays */}
    <path d="M 50 18 L 50 8 M 50 92 L 50 82" />
    <path d="M 22 32 L 16 26 M 78 32 L 84 26" />
    <path d="M 22 68 L 16 74 M 78 68 L 84 74" />
    {/* corner brows */}
    <path d="M 10 50 L 4 48 M 90 50 L 96 48" />
  </svg>
);

// 8. Archetype emblems
Sigil.OracleEmblem = ({ size = 200, color = "currentColor" }) => (
  <svg viewBox="0 0 100 200" width={size * 0.5} height={size} fill="none" stroke={color} strokeWidth="0.8" strokeLinecap="square">
    <circle cx="50" cy="40" r="30" />
    <circle cx="50" cy="40" r="22" strokeDasharray="1 3" />
    <circle cx="50" cy="40" r="10" />
    <path d="M 50 10 L 50 70 M 20 40 L 80 40" />
    <path d="M 50 70 L 50 190" />
    <path d="M 35 90 L 65 90" />
    <path d="M 30 130 L 70 130" />
    <path d="M 25 170 L 75 170" />
    <path d="M 40 100 L 40 180 M 60 100 L 60 180" />
    {/* base diamond */}
    <path d="M 50 180 L 40 190 L 50 200 L 60 190 Z" />
    <path d="M 50 10 L 44 4 M 50 10 L 56 4" />
  </svg>
);

Sigil.MartyrEmblem = ({ size = 200, color = "currentColor" }) => (
  <svg viewBox="0 0 100 200" width={size * 0.5} height={size} fill="none" stroke={color} strokeWidth="0.8" strokeLinecap="square">
    {/* large cross */}
    <path d="M 50 20 L 50 180" />
    <path d="M 20 70 L 80 70" />
    {/* barbs */}
    <path d="M 50 20 L 40 30 M 50 20 L 60 30" />
    <path d="M 50 180 L 40 170 M 50 180 L 60 170" />
    <path d="M 20 70 L 30 60 M 20 70 L 30 80" />
    <path d="M 80 70 L 70 60 M 80 70 L 70 80" />
    {/* nodes along axis */}
    <circle cx="50" cy="70" r="4" />
    <circle cx="50" cy="110" r="3" />
    <circle cx="50" cy="140" r="2" />
    {/* dripping */}
    <path d="M 45 70 L 45 100" strokeDasharray="1 3" />
    <path d="M 55 70 L 55 95" strokeDasharray="1 3" />
  </svg>
);

Sigil.RelicEmblem = ({ size = 200, color = "currentColor" }) => (
  <svg viewBox="0 0 100 200" width={size * 0.5} height={size} fill="none" stroke={color} strokeWidth="0.8" strokeLinecap="square">
    {/* hexagonal vessel */}
    <path d="M 50 20 L 80 40 L 80 100 L 50 120 L 20 100 L 20 40 Z" />
    <path d="M 50 35 L 70 47 L 70 95 L 50 107 L 30 95 L 30 47 Z" />
    {/* center gem */}
    <path d="M 50 55 L 60 70 L 50 85 L 40 70 Z" />
    <path d="M 50 55 L 50 85 M 40 70 L 60 70" strokeDasharray="1 2" />
    {/* chains hanging */}
    <path d="M 30 120 L 30 160" strokeDasharray="2 3" />
    <path d="M 50 120 L 50 180" strokeDasharray="2 3" />
    <path d="M 70 120 L 70 160" strokeDasharray="2 3" />
    {/* base barbs */}
    <path d="M 50 180 L 44 186 L 50 192 L 56 186 Z" />
  </svg>
);

Sigil.VesselEmblem = ({ size = 200, color = "currentColor" }) => (
  <svg viewBox="0 0 100 200" width={size * 0.5} height={size} fill="none" stroke={color} strokeWidth="0.8" strokeLinecap="square">
    {/* downward triangle / chalice */}
    <path d="M 20 30 L 80 30 L 50 90 Z" />
    <path d="M 28 40 L 72 40 L 50 80 Z" />
    {/* stem */}
    <path d="M 50 90 L 50 150" />
    <circle cx="50" cy="120" r="6" />
    {/* base */}
    <path d="M 25 180 L 75 180" />
    <path d="M 30 175 L 70 175" />
    <path d="M 50 150 L 50 175" />
    <path d="M 35 150 L 65 150" />
    {/* drips */}
    <path d="M 40 50 L 40 70" strokeDasharray="1 2" />
    <path d="M 50 50 L 50 75" strokeDasharray="1 2" />
    <path d="M 60 50 L 60 70" strokeDasharray="1 2" />
  </svg>
);

window.Sigil = Sigil;
