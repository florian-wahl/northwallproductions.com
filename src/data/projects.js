/**
 * NorthWall Productions — Project Data
 *
 * To add a new project:
 *  1. Add an entry to the `projects` array.
 *  2. Use a unique `id` — it appears in the URL: /projects/:id
 *  3. Set `status` to "completed", "post-production", or "pre-production".
 *  4. Set `posterClass` to one of "poster-1" … "poster-6"
 *     (each maps to a gradient in tailwind.config.js).
 *  5. Optionally set `posterImage` to a path like "/images/my-film.jpg"
 *     (place the file in public/images/). When set, it overrides the gradient.
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
    posterImage: '/images/nightfish-poster.webp',
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
    posterImage: '/images/nightfish-poster.webp',
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
    posterImage: '/images/christmas.webp',
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
    posterImage: '/images/nana-vs-time-poster.webp',
    featured: true,
    shortDescription:
      'A burnout granddaughter and her wildcard Nana race against dementia to finish Nana’s insane bucket list.',
    description: [
      'A burnout granddaughter and her wildcard Nana race against dementia to finish Nana’s insane bucket list.',
      'Plot Overview: Stuck in a dead-end job and afraid of getting old with nothing to show for it, Ray quits and convinces her Nana to come on a wild adventure. Meanwhile, the rest of the family is very distressed about this “kidnapping,” and do everything they can to track Ray and Nana down. Tackling everything from “flirt with a coal miner” to “do witchcraft,” Ray and Nana travel across the country on their quest to do everything on Nana’s bucket list before dementia and Uncle Dick catch up with them.',
      'Katie North wrote Nana vs. Time after her grandmother was diagnosed with dementia, and Katie was hit with the shockingly commonplace knowledge that no one we love will live forever. So we better do every stupid thing we can with them now.'
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
