"use client";

import {
  RiInstagramFill,
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterXFill,
  RiYoutubeFill,
} from "react-icons/ri";

import Link from "next/link";

// icons for the current user and the current user's profile

const icons = [
  {
    path: "https://www.instagram.com/zuhaibzulfiqar21/?next=%2F",
    name: <RiInstagramFill />,
  },
  {
    path: "https://github.com/zabipacer",
    name: <RiGithubFill />,
  },
 
  {
    path: "https://www.linkedin.com/in/zuhaib-zulfiqar-expert-full-stack-developer-908a111a5/ma2002",
    name: <RiLinkedinFill />,
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
