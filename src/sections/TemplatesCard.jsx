// icons
import { Link } from 'react-router-dom';
import downloadIcon from '../assets/icons/downloadIcon.svg';
import phoneIcon from '../assets/icons/phoneIcon.svg';
// images
import templateOne from '../assets/templates/template-1.png';
import templateTwo from '../assets/templates/template-2.png';
import templateThree from '../assets/templates/template-3.png';
import templateFour from '../assets/templates/template-4.png';
import templateFive from '../assets/templates/template-5.png';
import templateSix from '../assets/templates/template-6.png';

const TemplatesCard = () => {
  return (
    <>
      <Link
        to="/template-details"
        className="grid gap-2 group overflow-hidden rounded-lg"
      >
        <img
          className="rounded-lg w-full border border-secondary dark:border-darkSecondary group-hover:scale-105 transition-all duration-300"
          src={templateOne}
          alt=""
        />
        <div className="flex justify-between items-start">
          <h2 className="capitalize font-normal text-textPrimary leading-[20.8px] dark:text-secondary text-nowrap text-ellipsis overflow-hidden">
            Foodly Restaurent App template
          </h2>
          <div className="flex gap-2 items-center">
            <div className="flex gap-1 items-center">
              <img src={phoneIcon} alt="" />
              <p className="text-sm leading-[18.2px] dark:text-secondary">28</p>
            </div>
            <div className="flex gap-1 items-center">
              <img src={downloadIcon} alt="" />
              <p className="text-sm leading-[18.2px] dark:text-secondary">
                546
              </p>
            </div>
          </div>
        </div>
      </Link>
      <Link
        to="/template-details"
        className="grid gap-2 group overflow-hidden rounded-lg"
      >
        <img
          className="rounded-lg w-full border border-secondary dark:border-darkSecondary group-hover:scale-105 transition-all duration-300"
          src={templateTwo}
          alt=""
        />
        <div className="flex justify-between items-start">
          <h2 className="capitalize font-normal text-textPrimary leading-[20.8px] dark:text-secondary text-nowrap text-ellipsis overflow-hidden">
            Flutter animation template
          </h2>
          <div className="flex gap-2 items-center">
            <div className="flex gap-1 items-center">
              <img src={phoneIcon} alt="" />
              <p className="text-sm leading-[18.2px] dark:text-secondary">28</p>
            </div>
            <div className="flex gap-1 items-center">
              <img src={downloadIcon} alt="" />
              <p className="text-sm leading-[18.2px] dark:text-secondary">
                546
              </p>
            </div>
          </div>
        </div>
      </Link>
      <Link
        to="/template-details"
        className="grid gap-2 group overflow-hidden rounded-lg"
      >
        <img
          className="rounded-lg w-full border border-secondary dark:border-darkSecondary group-hover:scale-105 transition-all duration-300"
          src={templateThree}
          alt=""
        />
        <div className="flex justify-between items-start">
          <h2 className="capitalize font-normal text-textPrimary leading-[20.8px] dark:text-secondary text-nowrap text-ellipsis overflow-hidden">
            Flutter animation template
          </h2>
          <div className="flex gap-2 items-center">
            <div className="flex gap-1 items-center">
              <img src={phoneIcon} alt="" />
              <p className="text-sm leading-[18.2px] dark:text-secondary">28</p>
            </div>
            <div className="flex gap-1 items-center">
              <img src={downloadIcon} alt="" />
              <p className="text-sm leading-[18.2px] dark:text-secondary">
                546
              </p>
            </div>
          </div>
        </div>
      </Link>
      <Link
        to="/template-details"
        className="grid gap-2 group overflow-hidden rounded-lg"
      >
        <img
          className="rounded-lg w-full border border-secondary dark:border-darkSecondary group-hover:scale-105 transition-all duration-300"
          src={templateFour}
          alt=""
        />
        <div className="flex justify-between items-start">
          <h2 className="capitalize font-normal text-textPrimary leading-[20.8px] dark:text-secondary text-nowrap text-ellipsis overflow-hidden">
            Flutter animation template
          </h2>
          <div className="flex gap-2 items-center">
            <div className="flex gap-1 items-center">
              <img src={phoneIcon} alt="" />
              <p className="text-sm leading-[18.2px] dark:text-secondary">28</p>
            </div>
            <div className="flex gap-1 items-center">
              <img src={downloadIcon} alt="" />
              <p className="text-sm leading-[18.2px] dark:text-secondary">
                546
              </p>
            </div>
          </div>
        </div>
      </Link>
      <Link
        to="/template-details"
        className="grid gap-2 group overflow-hidden rounded-lg"
      >
        <img
          className="rounded-lg w-full border border-secondary dark:border-darkSecondary group-hover:scale-105 transition-all duration-300"
          src={templateFive}
          alt=""
        />
        <div className="flex justify-between items-start">
          <h2 className="capitalize font-normal text-textPrimary leading-[20.8px] dark:text-secondary text-nowrap text-ellipsis overflow-hidden">
            Flutter animation template
          </h2>
          <div className="flex gap-2 items-center">
            <div className="flex gap-1 items-center">
              <img src={phoneIcon} alt="" />
              <p className="text-sm leading-[18.2px] dark:text-secondary">28</p>
            </div>
            <div className="flex gap-1 items-center">
              <img src={downloadIcon} alt="" />
              <p className="text-sm leading-[18.2px] dark:text-secondary">
                546
              </p>
            </div>
          </div>
        </div>
      </Link>
      <Link
        to="/template-details"
        className="grid gap-2 group overflow-hidden rounded-lg"
      >
        <img
          className="rounded-lg w-full border border-secondary dark:border-darkSecondary group-hover:scale-105 transition-all duration-300"
          src={templateSix}
          alt=""
        />
        <div className="flex justify-between items-start">
          <h2 className="capitalize font-normal text-textPrimary leading-[20.8px] dark:text-secondary text-nowrap text-ellipsis overflow-hidden">
            Flutter animation template
          </h2>
          <div className="flex gap-2 items-center">
            <div className="flex gap-1 items-center">
              <img src={phoneIcon} alt="" />
              <p className="text-sm leading-[18.2px] dark:text-secondary">28</p>
            </div>
            <div className="flex gap-1 items-center">
              <img src={downloadIcon} alt="" />
              <p className="text-sm leading-[18.2px] dark:text-secondary">
                546
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default TemplatesCard;
