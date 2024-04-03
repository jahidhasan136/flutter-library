import modeIcon from "../assets/icons/mode.png";
import searchIcon from "../assets/icons/search.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="relative">
        <img className="absolute top-1/3 left-5" src={searchIcon} alt="" />
        <input
          className="py-[14px] pl-11
           pr-5 w-[400px] rounded-full bg-secondary text-textSecondary"
          type="text"
          placeholder="Search...."
        />
      </div>
      <div className="flex items-center gap-4">
        <img src={modeIcon} alt="" />
        <button className="px-4 py-[14px] border border-secondary rounded-2xl font-semibold text-primary">
          Log in
        </button>
        <button className="px-4 py-[14px] rounded-2xl font-semibold bg-primary text-white">
          Get Pro
        </button>
      </div>
    </div>
  );
};

export default Header;
