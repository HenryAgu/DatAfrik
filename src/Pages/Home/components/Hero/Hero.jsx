// images
import GithubImage from "./images/Github.svg";
import ArrowImage from "./images/Arrow.svg";

const Hero = () => {
  return (
    <div className="text-white my-10 md:my-24 xl:my-24 text-center">
      <h1 className="text-3xl xl:text-5xl font-bold xl:leading-12 xl:w-6/12 xl:my-0 xl:mx-auto">
        It doesn’t matter what <span className="text-yellow">JS Framework</span>{" "}
        you work with.
      </h1>
      <h4 className="xl:pt-3 xl:font-paragraph xl:text-2xl xl:leading-7">
        Our boilerplates works with it <span className="text-skyBlue">out-of-the-box.</span>
      </h4>
      <div className="pt-8 flex justify-center items-center gap-x-5">
        <button className="bg-yellow flex items-center gap-x-2.5 py-2 px-5 rounded-sm border-2 border-yellow"><p className=" text-black font-bold xl:font-paragraph xl:text-2xl xl:leading-7">Get started</p><img src={ArrowImage} alt="Started" /></button>
        <button className="flex items-center gap-x-2.5 py-2 px-5 rounded-sm border-2 border-yellow"><p className=" text-yellow font-bold xl:font-paragraph xl:text-2xl xl:leading-7">See repo</p><img src={GithubImage} alt="Github" /></button>
      </div>
    </div>
  );
};

export default Hero;
