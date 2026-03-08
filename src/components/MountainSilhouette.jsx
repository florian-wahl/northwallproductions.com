/**
 * Layered mountain silhouette — 6 depth planes, far (light) to near (dark).
 *
 * Each layer has a distinct peak rhythm and character:
 *  1. Far range    — 6 peaks, tall dominant spike far-left, descending right
 *  2. Second range — 7 peaks, busy/uniform small ridge
 *  3. Mid range    — 5 peaks, sparse with one dominant center spike
 *  4. Closer       — 6 peaks, dense cluster left half, sparse right
 *  5. Near         — 7 peaks, ascending staircase (tallest on right)
 *  6. Foreground   — 5 peaks, bold with one dramatically tall off-center spike
 */
export default function MountainSilhouette() {
  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none" aria-hidden="true">
      <svg
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block', width: '100%', height: '46vh', minHeight: '280px' }}
      >
        {/* ── Layer 1 · farthest · #e9e9e9 · 6 peaks
            character: tall dominant spike far-left, smaller peaks descend right */}
        <path fill="#e9e9e9" d="
          M0,155
          L40,120  L100,22   L190,130
          L310,88  L420,135
          L540,62  L650,132
          L780,95  L880,138
          L1020,70 L1140,140
          L1290,105 L1400,145
          L1440,148
          L1440,400 L0,400 Z
        " />

        {/* ── Layer 2 · second range · #d8d8d8 · 7 peaks
            character: many small peaks, busy choppy ridge */}
        <path fill="#d8d8d8" d="
          M0,182
          L40,165  L90,105   L190,162
          L290,82  L390,168
          L490,110 L586,162
          L680,75  L782,165
          L880,98  L988,162
          L1090,80 L1208,166
          L1320,112 L1430,168
          L1440,170
          L1440,400 L0,400 Z
        " />

        {/* ── Layer 3 · mid range · #bfbfbf · 5 peaks
            character: sparse, one dominant spike center-left, others short */}
        <path fill="#bfbfbf" d="
          M0,225
          L150,212
          L280,95  L430,208
          L680,148 L820,210
          L1000,162 L1100,208
          L1200,130 L1295,208
          L1380,175 L1440,210
          L1440,400 L0,400 Z
        " />

        {/* ── Layer 4 · closer · #9c9c9c · 6 peaks
            character: 4 peaks clustered in left half, 2 widely spaced on right */}
        <path fill="#9c9c9c" d="
          M0,258
          L60,242  L120,168  L200,238
          L280,138 L360,240
          L450,172 L535,238
          L620,148 L720,242
          L1000,162 L1175,242
          L1350,185 L1440,242
          L1440,400 L0,400 Z
        " />

        {/* ── Layer 5 · near · #707070 · 7 peaks
            character: ascending staircase — peaks get progressively taller left to right */}
        <path fill="#707070" d="
          M0,292
          L50,280  L100,272  L190,282
          L280,265 L375,282
          L470,258 L565,280
          L660,248 L760,280
          L860,238 L960,278
          L1080,225 L1210,272
          L1340,210 L1430,268
          L1440,270
          L1440,400 L0,400 Z
        " />

        {/* ── Layer 6 · foreground · #373737 · 5 peaks
            character: bold silhouette with one very dramatic spike off-center left */}
        <path fill="#373737" d="
          M0,332
          L175,318
          L350,240 L520,318
          L700,302 L830,322
          L950,272 L1065,318
          L1180,308 L1292,322
          L1400,285 L1440,315
          L1440,400 L0,400 Z
        " />
      </svg>
    </div>
  );
}
