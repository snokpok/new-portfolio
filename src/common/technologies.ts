import { Technology } from "./interfaces";

export const technologiesIdAssetMap: Record<string, Technology> = {
  "golang": {
    displayName: "Golang",
    assetLogoPathPublic: "/technologies/golang.png"
  },
  "mongodb": {
    displayName: "MongoDB",
    assetLogoPathPublic: "/technologies/mongodb.png"
  },
  "vite": {
    displayName: "Vite.js",
    assetLogoPathPublic: "/technologies/vite.png"
  },
  "react": {
    displayName: "React.js",
    assetLogoPathPublic: "/technologies/react.png"
  },
  "tailwindcss": {
    displayName: "TailwindCSS",
    assetLogoPathPublic: "/technologies/tailwindcss.png"
  },
  "docker": {
    displayName: "Docker",
    assetLogoPathPublic: "/technologies/docker.png"
  }
}
