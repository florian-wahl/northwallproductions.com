/**
 * NorthWall Productions — Project Data
 *
 * To add a new project:
 *  1. Add an entry to the `projects` array.
 *  2. Use a unique `id` — it appears in the URL: /projects/:id
 *  3. Set `status` to "completed", "post-production", or "pre-production".
 *  4. Set `posterClass` to one of "poster-1" … "poster-6"
 *     (each maps to a gradient in tailwind.config.js).
 */

export const projects = [
  // ── COMPLETED ────────────────────────────────────────────────

  {
    id: 'nightfish-pilot',
    title: 'Nightfish Pilot',
    type: 'TV Series Pilot',
    status: 'completed',
    year: '2024',
    duration: '20 min',
    rating: 'NR',
    language: 'English',
    posterClass: 'poster-1',
    featured: false,
    shortDescription:
      'Nightfish follows the unlikely friendship of two overnight aquarium employees.',
    description: [
      'Nightfish follows the unlikely friendship of two overnight aquarium employees: Sam, a depressed security guard with thwarted ambitions of being a marine biologist, and Piper, a joyfully unbalanced trash-lover who is living out her dream of being a night janitor.',
    ],
    tags: ['Comedy', 'Workplace', 'Drama'],
    director: 'Sophie Niesenbaum',
    writers: ['Katie North', 'Daniel Yaiullo'],
    cast: ['Katie North', 'Daniel Yaiullo'],
    producers: ['Katie North', 'Daniel Yaiullo'],
    cinematographer: 'Maddalena De Beni',
    awards: [
      'Winner, Best Episodic, 2024 Festival Cinema',
    ],
  },


  // ── UPCOMING ─────────────────────────────────────────────────

  {
    id: 'nightfish',
    title: 'Nightfish',
    type: 'TV Series',
    status: 'pre-production',
    year: '2026',
    duration: '8 episodes',
    rating: 'TBD',
    language: 'English',
    posterClass: 'poster-2',
    featured: true,
    shortDescription:
      'Nightfish follows the unlikely friendship of two overnight aquarium employees.',
    description: [
      'Nightfish follows the unlikely friendship of two overnight aquarium employees: Sam, a depressed security guard with thwarted ambitions of being a marine biologist, and Piper, a joyfully unbalanced trash-lover who is living out her dream of being a night janitor.',
    ],
    tags: ['Comedy', 'Workplace', 'Drama'],
    director: 'Sophie Niesenbaum',
    writers: ['Katie North', 'Daniel Yaiullo'],
    cast: ['Katie North', 'Daniel Yaiullo'],
    producers: ['NorthWall Productions'],
    cinematographer: 'Maddalena De Beni',
    awards: [],
  },
  {
    id: 'you-better-not-cry',
    title: 'You Better Not Cry',
    type: 'Feature Film',
    status: 'pre-production',
    year: '2026',
    duration: '~90 mins',
    rating: 'TBD',
    language: 'English',
    posterClass: 'poster-3',
    featured: true,
    shortDescription:
      'When family is stifling and Christmas joy is oppressive, a group of friends escape to a cabin in the woods, only to find the house is haunted - by Christmas.',
    description: [
      'When family is stifling and Christmas joy is oppressive, a group of friends escape to a cabin in the woods, only to find the house is haunted - by Christmas.',
    ],
    tags: ['Horror', 'Comedy', 'Christmas'],
    director: 'TBD',
    writers: ['Katie North'],
    cast: [],
    producers: ['NorthWall Productions'],
    cinematographer: 'TBD',
    awards: [],
  },
  {
    id: 'nana-vs-time',
    title: 'Nana vs. Time',
    type: 'Feature Film',
    status: 'pre-production',
    year: '2027',
    duration: '~100 mins',
    rating: 'TBD',
    language: 'English',
    posterClass: 'poster-6',
    featured: true,
    shortDescription:
      'Nam et sem ut massa feugiat suscipit. Nullam consequat euismod viverra.',
    description: [
      'Phasellus tellus tortor, consequat quis dui in, vestibulum lacinia dolor. Integer hendrerit cursus rutrum. Quisque laoreet mauris in elit pretium scelerisque. Nulla luctus sem a ipsum posuere dictum ut eget diam. Sed sagittis aliquam mi sit amet tempus. Morbi at vulputate lacus.',
      'Nam et sem ut massa feugiat suscipit. Nullam consequat euismod viverra.',
      'Nulla luctus sem a ipsum posuere dictum ut eget diam. Sed sagittis aliquam mi sit amet tempus. Morbi at vulputate lacus.',
    ],
    tags: ['Comedy', 'Drama', 'Family'],
    director: 'TBD',
    writers: ['Katie North'],
    cast: [],
    producers: ['NorthWall Productions'],
    cinematographer: 'TBD',
    awards: [],
  },
];

export const getProject = (id) => projects.find((p) => p.id === id) ?? null;

export const getByStatus = (status) => projects.filter((p) => p.status === status);

export const getFeatured = (max = 3) => projects.filter((p) => p.featured).slice(0, max);
