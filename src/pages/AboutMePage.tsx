import Experiences from "../components/Experiences/Experiences";
import styles from "./AboutMePage.module.css";

function AboutMePage() {
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
          <h1 className="text-3xl font-extrabold">Hello!</h1>
          <p className="text-lg">
            I'm Vincent Vu, currently studying Computer Science at the
            University of Southern California. My interest lies in building
            great products and watching them to fruition.
          </p>
          <p className="text-lg">
            I'm also passionate about helping others build out their ideas. I
            currently serve as the lead of engineering at HackSC. My focus is on
            building and maintaining the innovative services, dashboards and
            devtools that revolutionizes the hackathon experience.
          </p>
        </div>
      </div>
      <div className={styles.expDiv}>
        <Experiences />
      </div>
    </div>
  );
}

export default AboutMePage;
