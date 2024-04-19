import filterIcon from "../../assets/icons/filter.png";
import rightArrowIcon from "../../assets/icons/right-arrow.svg";
import screenImgOne from "../../assets/screens/screens-1.png";
import screenImgTen from "../../assets/screens/screens-10.png";
import screenImgTwo from "../../assets/screens/screens-2.png";
import screenImgThree from "../../assets/screens/screens-3.png";
import screenImgFour from "../../assets/screens/screens-4.png";
import screenImgFive from "../../assets/screens/screens-5.png";
import screenImgSix from "../../assets/screens/screens-6.png";
import screenImgSeven from "../../assets/screens/screens-7.png";
import screenImgEight from "../../assets/screens/screens-8.png";
import screenImgNine from "../../assets/screens/screens-9.png";

const Screens = () => {
  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl text-primary leading-[31.2px]">Screens</h2>
        <button className="text-textSecondary text-xs ">See all</button>
      </div>
      {/* Filter sections */}
      <div className="flex gap-2 items-center mb-4">
        <button className="flex gap-2 items-center px-4 py-2 bg-secondary rounded-full mr-4">
          <img src={filterIcon} alt="" />
          <p className="text-h6 leading-[18.2px]">Filters</p>
        </button>
        <div className="border-secondary border-r-2 py-4 mr-4"></div>
        <div className="flex overflow-hidden">
          <div className="flex gap-2 items-center">
            <button className="text-h6 px-4 py-2 border border-secondary hover:bg-primary text-primary rounded-full hover:text-white transition-all duration-300">
              All
            </button>
            <button className="text-h6 px-4 py-2 border border-secondary hover:bg-primary text-primary rounded-full hover:text-white transition-all duration-300">
              New
            </button>
            <button className="text-h6 px-4 py-2 border border-secondary hover:bg-primary text-primary rounded-full hover:text-white transition-all duration-300">
              Popular
            </button>
            <button className="text-h6 px-4 py-2 border border-secondary hover:bg-primary text-primary rounded-full hover:text-white transition-all duration-300">
              Onboarding
            </button>
            <button className="text-h6 px-4 py-2 border border-secondary hover:bg-primary text-primary rounded-full hover:text-white transition-all duration-300">
              Auth
            </button>
            <button className="text-h6 px-4 py-2 border border-secondary hover:bg-primary text-primary rounded-full hover:text-white transition-all duration-300">
              Shop
            </button>
            <button className="text-h6 px-4 py-2 border border-secondary hover:bg-primary text-primary rounded-full hover:text-white transition-all duration-300">
              Chat
            </button>
            <button className="text-h6 px-4 py-2 border border-secondary hover:bg-primary text-primary rounded-full hover:text-white transition-all duration-300">
              Top Verification
            </button>
            <button className="text-h6 px-4 py-2 border border-secondary hover:bg-primary text-primary rounded-full hover:text-white transition-all duration-300">
              Dashboard
            </button>
            {/* <button className="text-h6 px-4 py-2 border border-secondary hover:bg-primary text-primary rounded-full hover:text-white transition-all duration-300">
              Food
            </button>
            <button className="text-h6 px-4 py-2 border border-secondary hover:bg-primary text-primary rounded-full hover:text-white transition-all duration-300">
              Restaurent
            </button>
            <button className="text-h6 px-4 py-2 border border-secondary hover:bg-primary text-primary rounded-full hover:text-white transition-all duration-300">
              Fitness
            </button> */}
            <button>
              <img src={rightArrowIcon} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
      {/* project sections */}
      <div className="grid md:grid-cols-5 gap-4">
        <img className="rounded-2xl w-full" src={screenImgOne} alt="" />
        <img className="rounded-2xl w-full" src={screenImgTwo} alt="" />
        <img className="rounded-2xl w-full" src={screenImgThree} alt="" />
        <img className="rounded-2xl w-full" src={screenImgFour} alt="" />
        <img className="rounded-2xl w-full" src={screenImgFive} alt="" />
        <img className="rounded-2xl w-full" src={screenImgSix} alt="" />
        <img className="rounded-2xl w-full" src={screenImgSeven} alt="" />
        <img className="rounded-2xl w-full" src={screenImgEight} alt="" />
        <img className="rounded-2xl w-full" src={screenImgNine} alt="" />
        <img className="rounded-2xl w-full" src={screenImgTen} alt="" />
      </div>
    </div>
  );
};

export default Screens;
