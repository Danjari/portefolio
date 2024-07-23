'use client';

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
  {
    path: 'https://www.youtube.com/@moudjahidmoussa',
    name: <RiYoutubeFill />,
  },
  {
    path: 'https://www.linkedin.com/in/moudjahid-moussa/',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/Danjari',
    name: <RiGithubFill />,
  },
  {
    path: 'https://www.instagram.com/muja_online/',
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
