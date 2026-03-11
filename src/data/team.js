/**
 * NorthWall Productions — Team Data
 *
 * To add a team member:
 *  1. Add an entry to the `team` array.
 *  2. Set `photo` to the filename of their headshot (place the file in public/team/).
 *     e.g. photo: 'katie-north.jpg'
 *  3. Set `photo` to null to show the placeholder initials instead.
 */

export const team = [
  {
    id: 'katie-north',
    name: 'Katie North',
    title: 'Co-Founder & Producer',
    photo: "katie-north.jpg", // place headshot at public/team/katie-north.jpg
    bio: 'Bio coming soon.',
  },
  {
    id: 'florian-wahl',
    name: 'Florian Wahl',
    title: 'Co-Founder & Producer',
    photo: 'florian-wahl.jpg', // place headshot at public/team/florian-wahl.jpg
    bio: 'Bio coming soon.',
  },
  {
    id: 'rhubarb',
    name: 'Rhubarb',
    title: 'Co-Founder & Actress',
    photo: 'rhubarb.jpeg', // place headshot at public/team/florian-wahl.jpg
    bio: 'Woof.',
  },
];
