import Experiences from "../components/Experiences/Experiences";
import { H1, Text } from "../components/Typography";
import styles from "./AboutMePage.module.css";

interface Interest {
  title: React.ReactNode;
  description: React.ReactNode;
}

function AboutMePage() {
  const interests: Interest[] = [
    {
      title: "🔨 Startups",
      description: `I love startups and solo creators who build products that has the potential to
  disrupt the market. I have always put innovation first, and I strive to create an environment where that can be grown and fostered.`,
    },
    {
      title: "📊 Cloud infrastructure and observability",
      description: ` I have a
  great passion for developing scalable microservices and infrastructures on
  the cloud, where I get a lot of experience doing this at HackSC building
  hackathon portals, services and all. Have experience playing around with observability tools such as
  Grafana, Prometheus, and New Relic.`,
    },
    {
      title: "🎷 Music",
      description: `Mostly lo-fi and jazz but sometimes I might feel like listening to emo rock or something like that instead.`,
    },
    {
      title: "👾 Linux",
      description: `I currently boot i3wm on Manjaro. Highly recommend!`,
    },
    {
      title: "😺 Cats",
      description: `I don't often like Instagram posts, but when I do, those likes are for cat videos only.`,
    },
    {
      title: "🕹 Gaming",
      description: `I have an avid childhood gaming away on my dad's Windows 7 PC playing cringy-ass Flash games that have now unfortunately fell out of support; I mostly play Valorant nowadays.`,
    },
  ];

  const Interests = () => {
    return (
      <div className="flex flex-col gap-6">
        {interests.map((item) => (
          <div className="max-w-2xl">
            <Text className="font-bold">{item.title}</Text>
            <Text>{item.description}</Text>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className={styles.aboutMeDiv}>
        <div className="m-0 sm:ml-24 sm:mr-12">
          <img
            src="images/linkedin-headshot.jpeg"
            width={250}
            height={250}
            className="rounded-md"
            alt="My pic"
          />
        </div>
        <div className="w-3/4 sm:w-2/3 lg:w-1/3 sm:ml-12 m-0 space-y-2">
          <H1>Hello!</H1>
          <Text>
            I'm Vincent Vu, currently studying Computer Science at the
            University of Southern California. My interest lies in building
            great products and watching them to fruition.
          </Text>
          <Text>
            I'm also passionate about helping others build out their ideas. I
            currently serve as the lead of engineering at HackSC. My focus is on
            building and maintaining the innovative services, dashboards and
            devtools that revolutionizes the hackathon experience.
          </Text>
        </div>
      </div>
      <div className={styles.expDiv}>
        <Experiences />
      </div>
      <div className="flex flex-col text-left sm:ml-4 m-0 gap-5 items-center">
        <H1>❤️ What I love</H1>
        <Interests />
      </div>
    </div>
  );
}

export default AboutMePage;
