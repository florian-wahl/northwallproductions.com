/**
 * NorthWall Productions — Project Data
 *
 * To add a new project:
 *  1. Add an entry to the `projects` array.
 *  2. Use a unique `id` — it appears in the URL: /projects/:id
 *  3. Set `status` to "completed", "upcoming", or "development".
 *  4. Set `posterClass` to one of "poster-1" … "poster-6"
 *     (each maps to a gradient in tailwind.config.js).
 */

export const projects = [
  // ── COMPLETED ────────────────────────────────────────────────

  {
    id: 'the-long-winter',
    title: 'The Long Winter',
    type: 'Feature Film',
    status: 'completed',
    year: '2023',
    duration: '112 min',
    rating: 'NR',
    language: 'English',
    posterClass: 'poster-1',
    featured: true,
    shortDescription:
      'A survival thriller set deep in the frozen Canadian wilderness where a family must endure an unexpectedly brutal winter season that tests the limits of human resilience.',
    description: [
      'When the Calvert family retreats to their remote cabin in the Yukon for what they expect to be a quiet autumn, an early and unprecedented blizzard cuts them off from the outside world entirely. Roads become impassable, radio communication fails, and temperatures plunge to life-threatening lows.',
      'Over the course of seventy-two days, the film follows each family member as they confront fear, grief, and the raw beauty of an unforgiving landscape. Shot entirely on location in northern British Columbia during a genuine winter season, The Long Winter captures the silence and severity of the north with stunning authenticity.',
      'The film premiered at the Northern Lights Film Festival and received critical praise for its restraint and emotional depth.',
    ],
    tags: ['Thriller', 'Survival', 'Drama'],
    director: 'Sarah Wren',
    producer: 'NorthWall Productions',
    cinematographer: 'Aleksei Orlov',
    awards: [
      'Best Cinematography — Northern Lights Film Festival 2023',
      'Audience Choice Award — Arctic Cinema Showcase 2023',
    ],
  },
  {
    id: 'arctic-pulse',
    title: 'Arctic Pulse',
    type: 'Documentary Series',
    status: 'completed',
    year: '2022',
    duration: '6 episodes · 45 min each',
    rating: 'TV-PG',
    language: 'English / Inuktitut',
    posterClass: 'poster-2',
    featured: true,
    shortDescription:
      'A six-part documentary series following scientists, indigenous community leaders, and explorers working at the forefront of Arctic research and climate observation.',
    description: [
      'Arctic Pulse spent three years embedded with research teams and local communities across Nunavut, Greenland, and the Russian Arctic to document the rapidly changing landscape of the world\'s northern frontier.',
      'Each episode explores a different dimension of life in the Arctic: the scientists racing to document disappearing glaciers, the hunters adapting centuries-old traditions to new realities, the engineers building infrastructure in permafrost, and the policymakers balancing development with conservation.',
      'Narrated in both English and Inuktitut, the series was developed in close collaboration with Inuit community advisors and received funding from the Canadian Broadcasting Corporation.',
    ],
    tags: ['Documentary', 'Nature', 'Indigenous'],
    director: 'Mira Nansen / Thomas Ikoe',
    producer: 'NorthWall Productions · CBC',
    cinematographer: 'Various',
    awards: [
      'Canadian Screen Award — Best Documentary Series 2023',
      'Environmental Media Award — Outstanding Documentary Series 2023',
    ],
  },
  {
    id: 'frost',
    title: 'Frost',
    type: 'Short Film',
    status: 'completed',
    year: '2021',
    duration: '24 min',
    rating: 'NR',
    language: 'English',
    posterClass: 'poster-3',
    featured: false,
    shortDescription:
      "An intimate portrait of an aging lighthouse keeper on Lake Superior who has maintained his post for forty years, told through observation and silence.",
    description: [
      "Frost was NorthWall Productions' debut short film, made with a crew of five over eleven days during the final days of autumn on Lake Superior's northern shore.",
      'The film observes the daily rituals of Edvard, a 74-year-old lighthouse keeper who has refused retirement for decades. Through long, unhurried takes, director James Colt creates a meditative portrait of devotion, solitude, and the slow rhythm of a life lived at the edge of the continent.',
      'Frost has screened at over thirty international film festivals and earned NorthWall Productions its first industry recognition.',
    ],
    tags: ['Drama', 'Short', 'Character Study'],
    director: 'James Colt',
    producer: 'NorthWall Productions',
    cinematographer: 'Elena Marquette',
    awards: [
      'Best Short Film — Great Lakes Film Festival 2021',
      'Special Jury Prize — Midwest Cinema Awards 2022',
    ],
  },

  // ── UPCOMING ─────────────────────────────────────────────────

  {
    id: 'permafrost',
    title: 'Permafrost',
    type: 'TV Series',
    status: 'upcoming',
    year: '2025',
    duration: '8 episodes',
    rating: 'TBD',
    language: 'English',
    posterClass: 'poster-4',
    featured: true,
    shortDescription:
      'A slow-burn mystery series set in the remote northern town of Kavik, where the disappearance of a geologist unravels decades of buried secrets beneath the tundra.',
    description: [
      "Permafrost is NorthWall's most ambitious project to date — an eight-episode mystery thriller unfolding across two timelines. Detective Rena Halvorsen investigates a disappearance that eerily mirrors an unsolved case from her own childhood.",
      'The series explores themes of memory, environmental change, and the tension between progress and preservation in remote communities. Filming is scheduled across two production windows in 2024 and 2025 in northern Manitoba and the Northwest Territories.',
      'Permafrost is currently in pre-production with a writers\' room of six and an attached director lineup that includes three feature film veterans.',
    ],
    tags: ['Mystery', 'Thriller', 'Series'],
    director: 'TBA',
    producer: 'NorthWall Productions',
    cinematographer: 'TBA',
    awards: [],
  },
  {
    id: 'boreal',
    title: 'Boreal',
    type: 'Feature Film',
    status: 'upcoming',
    year: '2025',
    duration: 'TBD',
    rating: 'TBD',
    language: 'English / French',
    posterClass: 'poster-5',
    featured: false,
    shortDescription:
      'An epic family drama tracing three generations of a Métis family in northern Québec, from the logging camps of the 1920s to the climate-threatened forests of today.',
    description: [
      'Boreal is a sweeping generational drama following the Beausoleil family across a century of change in the boreal forest of northern Québec. The film weaves between 1924, 1971, and 2025 — connecting three women whose relationship with the land defines everything they know.',
      'Written by acclaimed playwright Madeleine Roy and adapted for the screen by Roy and James Colt, Boreal is both an intimate family story and a meditation on what we inherit, what we lose, and what we choose to preserve.',
      'The project has received development support from Telefilm Canada and the Québec Cinema Council. Principal photography is planned for summer 2024.',
    ],
    tags: ['Drama', 'Historical', 'Québec'],
    director: 'James Colt',
    producer: 'NorthWall Productions · Productions du Nord',
    cinematographer: 'Elena Marquette',
    awards: [],
  },
  {
    id: 'northern-lights',
    title: 'Northern Lights',
    type: 'Documentary',
    status: 'upcoming',
    year: '2026',
    duration: 'Feature-length',
    rating: 'TBD',
    language: 'English',
    posterClass: 'poster-6',
    featured: true,
    shortDescription:
      'A visually breathtaking documentary exploring the science, mythology, and cultural significance of the aurora borealis through the eyes of those who have devoted their lives to studying it.',
    description: [
      'Northern Lights is our most visually ambitious documentary — designed to be a cinematic spectacle as much as a scientific and cultural exploration. Working with aurora photographers, astrophysicists, Sámi storytellers, and indigenous artists from across the circumpolar world.',
      'The production team will spend three northern winters at locations selected for their aurora frequency and geographic diversity, including northern Norway, Yellowknife, Iceland, and the Yamal Peninsula.',
      'The film is currently in development and expected to enter production in late 2025 for a 2026 release.',
    ],
    tags: ['Documentary', 'Nature', 'Science'],
    director: 'Mira Nansen',
    producer: 'NorthWall Productions',
    cinematographer: 'Aleksei Orlov',
    awards: [],
  },
];

export const getProject = (id) => projects.find((p) => p.id === id) ?? null;

export const getByStatus = (status) => projects.filter((p) => p.status === status);

export const getFeatured = (max = 3) => projects.filter((p) => p.featured).slice(0, max);
