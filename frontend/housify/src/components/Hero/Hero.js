import HeroImageBox from "../utils/HeroImageBox";

const Hero = (props) => {
  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto py-5 px-10  md:flex justify-between">
        <div className="md:grid text-center md:text-left grid-cols-2 gap-10">
          {/* Header Text */}
          <div className="my-10 md:my-auto">
            <h1 className="pb-4 text-4xl md:text-6xl">{props.header}</h1>
            <h5>{props.text}</h5>
          </div>

          {/* HeroImageBox component */}
          <HeroImageBox p="Texas ChampHouse UK" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
