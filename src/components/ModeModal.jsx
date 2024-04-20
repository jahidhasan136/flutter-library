import lightIcon from '../assets/icons/light.svg';
import darkIcon from '../assets/icons/dark.svg';
import systemIcon from '../assets/icons/systems.svg';

const ModeModal = ({ mode }) => {
  return (
    <div
      className={`${
        mode ? 'grid' : 'hidden'
      } absolute -right-4 top-12 gap-[2px] rounded-lg w-[184px] p-2 shadow-shadowMd bg-white`}
    >
      <div className="flex gap-[10px] items-center hover:bg-bgSecondary hover:text-primary cursor-pointer p-1 rounded-lg">
        <img src={lightIcon} alt="" />
        <h3 className="leading-[18.2px] text-sm">Light</h3>
      </div>
      <div className="flex gap-[10px] items-center hover:bg-bgSecondary hover:text-primary cursor-pointer p-1 rounded-lg">
        <img src={darkIcon} alt="" />
        <h3 className="leading-[18.2px] text-sm">Dark</h3>
      </div>
      <div className="flex gap-[10px] items-center hover:bg-bgSecondary hover:text-primary cursor-pointer p-1 rounded-lg">
        <img src={systemIcon} alt="" />
        <h3 className="leading-[18.2px] text-sm">System</h3>
      </div>
    </div>
  );
};

export default ModeModal;
