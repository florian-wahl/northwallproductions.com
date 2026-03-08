/**
 * Layered mountain silhouette — 6 depth planes, far (light) to near (dark).
 *
 * Each layer has 5–7 peaks with deliberate size variation:
 * one dominant tall peak, 2–3 medium peaks, 1–2 short foothills.
 * Nearer (darker) layers are drawn on top and their tallest peaks
 * intentionally reach into the silhouette space of layers behind them.
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
        {/* ── Layer 1 · farthest · 6% · 6 peaks ──────────────────────────── */}
        {/* dominant: x=150 y=18 | medium: x=570 y=55, x=1020 y=62
            secondary: x=350 y=95, x=1280 y=88 | foothill: x=780 y=105 */}
        <path fill="#e9e9e9" d="
          M0,158
          L60,135  L150,18   L250,128
          L350,95  L460,138
          L570,55  L680,130
          L780,105 L900,140
          L1020,62 L1150,132
          L1280,88 L1380,140
          L1440,145
          L1440,400 L0,400 Z
        " />

        {/* ── Layer 2 · second range · 13% · 5 peaks ──────────────────────── */}
        {/* dominant: x=210 y=55 | medium: x=720 y=72, x=1250 y=92
            secondary: x=470 y=128 | foothill: x=970 y=115 */}
        <path fill="#d8d8d8" d="
          M0,182
          L95,162  L210,55  L340,158
          L470,128 L600,170
          L720,72  L845,162
          L970,115 L1110,168
          L1250,92 L1380,165
          L1440,170
          L1440,400 L0,400 Z
        " />

        {/* ── Layer 3 · mid range · 23% · 6 peaks ─────────────────────────── */}
        {/* dominant: x=170 y=100 | medium: x=600 y=128, x=1050 y=145
            secondary: x=390 y=175, x=1310 y=170 | foothill: x=810 y=188 */}
        <path fill="#bfbfbf" d="
          M0,225
          L80,205  L170,100 L285,198
          L390,175 L510,210
          L600,128 L720,200
          L810,188 L940,208
          L1050,145 L1185,202
          L1310,170 L1415,208
          L1440,210
          L1440,400 L0,400 Z
        " />

        {/* ── Layer 4 · closer · 37% · 5 peaks ────────────────────────────── */}
        {/* dominant: x=230 y=128 (breaks into layer-2 space) | medium: x=760 y=162, x=1295 y=182
            secondary: x=500 y=218 | foothill: x=1030 y=205 */}
        <path fill="#9c9c9c" d="
          M0,258
          L115,238 L230,128 L365,235
          L500,218 L640,248
          L760,162 L895,242
          L1030,205 L1165,245
          L1295,182 L1415,245
          L1440,248
          L1440,400 L0,400 Z
        " />

        {/* ── Layer 5 · near · 55% · 6 peaks ──────────────────────────────── */}
        {/* dominant: x=185 y=180 (breaks into layer-3 space) | medium: x=650 y=210, x=1110 y=225
            secondary: x=420 y=258, x=1345 y=245 | foothill: x=875 y=250 */}
        <path fill="#707070" d="
          M0,292
          L90,275  L185,180 L308,268
          L420,258 L540,280
          L650,210 L768,272
          L875,250 L995,278
          L1110,225 L1228,272
          L1345,245 L1430,275
          L1440,278
          L1440,400 L0,400 Z
        " />

        {/* ── Layer 6 · foreground · 78% · 5 peaks ─────────────────────────── */}
        {/* dominant: x=220 y=235 (breaks into layer-4/5 space) | medium: x=760 y=262, x=1315 y=275
            secondary: x=490 y=305 | foothill: x=1040 y=298 */}
        <path fill="#373737" d="
          M0,332
          L108,315 L220,235 L358,315
          L490,305 L628,320
          L760,262 L900,318
          L1040,298 L1180,318
          L1315,275 L1430,315
          L1440,318
          L1440,400 L0,400 Z
        " />
      </svg>
    </div>
  );
}
