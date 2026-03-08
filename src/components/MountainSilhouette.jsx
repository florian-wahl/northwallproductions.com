/**
 * Layered mountain silhouette SVG — sits at the bottom of the hero.
 * Three depth layers, each a slightly more saturated glacier teal.
 */
export default function MountainSilhouette() {
  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ display: 'block' }}
      >
        {/* Distant range — very pale */}
        <path
          d="M0,180 C60,165 120,175 180,150 C240,125 300,155 360,130
             C420,105 480,140 540,115 C600,90 660,125 720,100
             C780,75 840,115 900,90 C960,65 1020,105 1080,80
             C1140,55 1200,95 1260,75 C1320,55 1380,85 1440,70
             L1440,220 L0,220 Z"
          fill="rgba(11,110,125,0.07)"
        />

        {/* Mid range */}
        <path
          d="M0,195 C50,178 100,192 160,165 C220,138 270,172 330,148
             C400,120 450,158 510,135 C570,112 630,148 700,118
             C760,92 820,138 880,108 C940,80 1000,122 1060,95
             C1120,68 1180,108 1240,88 C1300,68 1370,100 1440,82
             L1440,220 L0,220 Z"
          fill="rgba(11,110,125,0.11)"
        />

        {/* Foreground range — most prominent */}
        <path
          d="M0,210 C40,196 90,208 140,185 C200,158 255,194 310,170
             C370,145 425,182 490,160 C550,140 610,174 670,150
             C730,126 790,168 850,142 C910,118 970,158 1030,132
             C1090,108 1150,148 1210,125 C1270,102 1340,138 1440,118
             L1440,220 L0,220 Z"
          fill="rgba(11,110,125,0.17)"
        />
      </svg>
    </div>
  );
}
