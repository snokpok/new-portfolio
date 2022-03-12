import { IExperienceItem } from "./interfaces";

export const RESUME_LINK =
  "https://docs.google.com/document/d/1IVcw8C8h8BjvmJzcXDvOO2mok98a2nvMmFQ-3nxgfzQ/edit?usp=sharing";

export const projectsList = {
  scp: {
    name: "Spotify Currently Playing",
    description:
      "An API to easily get what you're currently playing on Spotify. Built with React.js and Golang on MongoDB. You should be looking at this app's demo right now whenever I jam :)",
    link: "https://scp.vuvincent.com",
    key: "scp",
    imgFormat: "png",
  },
  listlive: {
    name: "Listlive: Making Productivity Social",
    description:
      "A MVP of a todo-list app where you can share your productivity grinds with others. Built with Next.js + TailwindCSS, with a ReST Python API backend + MongoDB",
    linkLabel: "Repo",
    link: "https://github.com/snokpok/listlive",
    key: "listlive",
    imgFormat: "png",
  },
  koseur: {
    name: "Koseur: Nightlife App",
    description: "Nightlife app for Vietnamese bars, built with Next.js + Sass",
    linkLabel: "Repo",
    link: "https://github.com/snokpok/koseur-frontend",
    key: "koseur",
    imgFormat: "png",
  },
  tds: {
    name: "TDS Company Ltd. Landing Page",
    description:
      "Renewing a Vietnamese ceramics company's landing page with HTML5 + CSS3",
    link: "http://tdsco-ceramic.com",
    key: "tds",
    imgFormat: "jpg",
  },
  "chat-app": {
    name: "Simple chat app",
    description:
      "Chat app to experiment with Firebase's Firestore and OAuth services. Built with Next.js + ChakraUI",
    link: "https://chat-app.vuvincent.com",
    key: "chat-app",
    imgFormat: "png",
  },
};

export const experiences: IExperienceItem[] = [
  {
    logo: "images/hacksc-square.jpeg",
    corp: "HackSC",
    position: "VP, Engineering",
    link: "https://hacksc.com",
    description:
      "Spearheading the migration and infrastructural redesign of HackSC's current hacker dashboard platform",
    duration: {
      from: "Sep 2021",
      to: "Present",
    },
  },
  {
    logo: "images/meetsee-app.jpeg",
    corp: "Meetsee",
    position: "Software Engineer",
    link: "https://meetseeapp.com",
    description:
      "Developing in-person meeting-matching algorithm, scaling our backend infrastructure, CI/CDs + doing some mobile UI/UX development where needed",
    duration: {
      from: "Feb 2022",
      to: "Present",
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
      from: "Oct 2021",
      to: "Present",
    },
  },
  {
    logo: "images/geekup-lny-square.jpg",
    corp: "GEEK Up",
    position: "Software Engineering Intern",
    link: "https://geekup.vn/",
    description:
      "Built an in-house recruitment platform for the company in an agile, cross-functional environment",
    duration: {
      from: "Mar 2021",
      to: "May 2021",
    },
  },
];

export const socialLinks = {
  linkedin: "https://linkedin.com/in/vmvu",
  github: "https://github.com/snokpok",
  instagram: "https://www.instagram.com/_vmvu/",
  email: "mailto:vinceny.fe@gmail.com",
};

export const ACCESS_TOKEN =
  "BQAy2LY1dZW5SNCOxNwLjoCKAW-gUCfuuL356bRTF9zGvpaDzKoCIT8IBaJ92gIWkXYcd_inZjsjprODaxVfutNfPOwoiEh1GOAKFq6268ltZ6roqmHMkjG_l2Atro8PFUoiqcA7vmIgDo7CtisiRI1mEOfczySRNsHhoJemxMRy_4l7QwRqn3DRyL7RmRkc5coNdaH583xMrr73_rm50x0kkCjTkc7C0yDYuZUFFA";

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
