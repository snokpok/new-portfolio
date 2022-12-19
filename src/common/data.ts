import { IProjectItem } from "../components/Projects/ProjectItem";
import { IExperienceItem } from "./interfaces";

export const RESUME_LINK =
  "https://docs.google.com/document/d/1IVcw8C8h8BjvmJzcXDvOO2mok98a2nvMmFQ-3nxgfzQ/edit?usp=sharing";
export const BLOG_LINK = "https://blog.vuvincent.com";

export const projectsList: Record<string, IProjectItem> = {
  scp: {
    name: "Spotify Currently Playing",
    description:
      "An API to easily get what you're currently playing on Spotify. Built with React.js and Golang on MongoDB. You should be looking at this app's demo right now whenever I jam :)",
    link: "https://github.com/snokpok/scp",
    key: "scp",
    imgFormat: "png",
    technologies: [
      "golang",
      "react",
      "vite",
      "mongodb",
      "docker",
      "tailwindcss",
    ],
  },
  listlive: {
    name: "Listlive: Making Productivity Social",
    description:
      "A MVP of a todo-list app where you can share your productivity grinds with others. Built with Next.js + TailwindCSS, with a ReST Python API backend + MongoDB",
    linkLabel: "Repo",
    link: "https://github.com/snokpok/listlive",
    key: "listlive",
    imgFormat: "png",
    technologies: ["python", "react", "tailwindcss", "mongodb"],
  },
  koseur: {
    name: "Koseur: Nightlife App",
    description: "Nightlife app for Vietnamese bars, built with Next.js + Sass",
    linkLabel: "Repo",
    link: "https://github.com/snokpok/koseur-frontend",
    key: "koseur",
    imgFormat: "png",
    technologies: ["nextjs", "sass"],
  },
  tds: {
    name: "TDS Company Ltd. Landing Page",
    description:
      "Renewing a Vietnamese ceramics company's landing page with HTML5 + CSS3",
    link: "http://tdsco-ceramic.com",
    key: "tds",
    imgFormat: "jpg",
    technologies: ["html", "css", "javascript"],
  },
};

export const experiences: IExperienceItem[] = [
  {
    logo: "images/coursera.png",
    corp: "Coursera",
    position: "Software Engineering Intern",
    description: `Worked in the Platform Foundations team on our internal
      Role-Based-Access-Control (RBAC) authorization system`,
    link: "https://coursera.org",
    duration: {
      from: new Date("May 2022"),
      to: new Date("Aug 2022"),
    },
  },
  {
    logo: "images/geekup-lny-square.jpg",
    corp: "GEEK Up",
    position: "Software Engineering Intern",
    link: "https://geekup.vn/",
    description: `Built an in-house recruitment platform for the company in an agile,
      cross-functional environment`,
    duration: {
      from: new Date("Mar 2021"),
      to: new Date("May 2021"),
    },
  },
];

export const involvements: IExperienceItem[] = [
  {
    logo: "images/hacksc-square.jpeg",
    corp: "HackSC",
    position: "Lead of Engineering",
    link: "https://hacksc.com",
    description: `
      Spearheading development of our technological tools and infrastructures of
      USC's flagship hackathon. Building and rebuilding various services such as
      our custom-made team formation web platform and hacker-personalized
      dashboard used by 1000+ hackers.
    `,
    duration: {
      from: new Date("Sep 2021"),
    },
  },
  {
    logo: "images/icaros.svg",
    corp: "Interactive and Collaborative Autonomous Robotics (ICAROS) Lab",
    position: "Undergraduate Research Assistant",
    link: "https://icaros.usc.edu/",
    description: "Developing Pyribs--a quality-diversity optimization library",
    duration: {
      from: new Date("Nov 2021"),
      to: new Date("Sep 2022"),
    },
  },
  {
    logo: "images/troylabs-red.jpeg",
    corp: "TroyLabs",
    position: "Engineering Member",
    link: "https://troylabs.vc",
    description:
      "Consulting early-stage technology startups, creating various tools and dashboards for internal use",
    duration: {
      from: new Date("Oct 2021"),
      to: new Date("May 2022"),
    },
  },
  {
    logo: "images/meetsee-app.jpeg",
    corp: "Meetsee",
    position: "Software Engineer",
    link: "https://meetseeapp.com",
    description: `Developing in-person meeting-matching algorithm, scaling our backend
      infrastructure, CI/CDs + doing some mobile UI/UX development where
      needed`,
    duration: {
      from: new Date("Feb 2022"),
      to: new Date("Sep 2022"),
    },
  },
];

export const socialLinks = {
  linkedin: "https://linkedin.com/in/vmvu",
  github: "https://github.com/snokpok",
  instagram: "https://www.instagram.com/_vmvu/",
  email: "mailto:vinceny.fe@gmail.com",
};

export const originalCallbackURL = `${window.location.protocol}//${window.location.host}/callback`;

export const avatarPaths = {
  pixelCharacter: "images/me-avatar-char.jpeg",
  instagram: "images/ig-prof-photo.jpg",
};

export const myImagesPaths = {
  igPhoto: "images/ig-photo-2.jpg",
  me: "images/me-vincent.jpg",
  meSecond: "images/me-at-mudd.jpeg",
  linkedin: "images/linkedin-prof-photo.jpeg",
};
