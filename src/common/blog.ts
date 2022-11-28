import { BlogPost } from "./interfaces";

export const allBlogPostsMetadata: BlogPost[] = [
    {
        title: `"The worst thing I've ever paid for is a CS degree"`,
        date: new Date("2021-10-27"),
        assetUrl: "/content/the-worst-thing-ive-ever-paid-for.md",
        idBlurb: "the-worst-thing-ive-ever-paid-for"
    },
    {
        title: `HibiscusDevLog[0]: history down the drain, dead ideas`,
        date: new Date("2022-05-02"),
        assetUrl: "/content/hibiscus-devlog0.md",
        draft: true,
        idBlurb: "hibiscus-devlog0"
    },
    {
        title: `HibiscusDevLog[1]: upholding standards, iPad sketches and birth of an idea`,
        date: new Date("2022-11-28"),
        assetUrl: "/content/hibiscus-devlog1.md",
        draft: true,
        idBlurb: "hibiscus-devlog1"
    },
    {
        title: `HibiscusDevLog[2]: building a team, org culture`,
        date: new Date("2022-11-28"),
        assetUrl: "/content/hibiscus-devlog2.md",
        draft: true,
        idBlurb: "hibiscus-devlog2"
    },
];