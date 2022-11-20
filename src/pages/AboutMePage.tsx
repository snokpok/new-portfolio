import Experiences from "../components/Experiences/Experiences";

function AboutMePage() {
  return (
    <div className="flex flex-col px-0 items-center md:items-start">
      <div className="flex flex-col space-y-4 md:flex-row-reverse md:justify-center items-center mt-10 relative">
        <div className="ml-24 mr-12">
          <img
            src="images/linkedin-headshot.jpeg"
            width={250}
            height={250}
            className="rounded-md"
            alt="My pic"
          />
        </div>
        <div className="w-3/4 sm:w-2/3 lg:w-1/3 ml-12">
          <div className="text-lg space-y-2">
            <div className="text-3xl font-extrabold">Hello!</div>
            <div>
              I'm Vincent Vu, currently studying Computer Science at the
              University of Southern California. My interest lies in building
              new products and watching them to fruition.
            </div>
            <div>
              I'm also passionate about helping others build out their ideas. I
              currently serve as the lead of engineering at HackSC. My focus is
              on building and maintaining the innovative services, dashboards
              and devtools that revolutionizes the hackathon experience.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col space-y-4 items-center mt-10">
        <div className="md:w-1/2">
          <Experiences />
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;
