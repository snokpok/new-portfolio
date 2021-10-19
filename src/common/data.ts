import { DEV } from "./env";
import { IExperienceItem } from "./interfaces";

export const RESUME_LINK =
  "https://docs.google.com/document/d/1IVcw8C8h8BjvmJzcXDvOO2mok98a2nvMmFQ-3nxgfzQ/edit?usp=sharing";

export const projectsList = {
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
  },
  {
    logo: "images/geekup-square.png",
    corp: "GEEK Up",
    position: "Software Engineering Intern",
    link: "https://geekup.vn/",
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

export const originalCallbackURL = `http://${window.location.host}/callback`;
