import type { Site, Metadata, Socials } from "@types";

export const ANIMATED_BACKGROUND = true;

export const SITE: Site = {
  NAME: "Ahmed Mujtaba Chang",
  EMAIL: "mujtabachang@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 0,
  NUM_PROJECTS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Ahmed Chang | Tech Solutions Architect",
  DESCRIPTION: "Welcome to my personal website!",
};

export const BLOG: Metadata = {
  TITLE: "Ahmed Chang | Blog",
  DESCRIPTION: "A collection of my thoughts and ideas.",
};

export const WORK: Metadata = {
  TITLE: "Ahmed Chang | Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Ahmed Chang | Projects",
  DESCRIPTION: "A collection of my personal and professional projects.",
};

export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://x.com/mujtaba_chang",
  },
  {
    NAME: "github",
    HREF: "https://github.com/mujtabachang",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/ahmed-mujtaba-chang-89097444/",
  },
];
