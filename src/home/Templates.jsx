import downloadIcon from "../assets/icons/download.png";
import phoneIcon from "../assets/icons/phone.png";
import templateOne from "../assets/templates/template-1.png";
import templateTwo from "../assets/templates/template-2.png";
import templateThree from "../assets/templates/template-3.png";
import templateFour from "../assets/templates/template-4.png";
import templateFive from "../assets/templates/template-5.png";
import templateSix from "../assets/templates/template-6.png";

const Templates = () => {
  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl text-primary leading-[31.2px]">Templates</h2>
        <button className="text-textSecondary text-xs ">See all</button>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="grid gap-2">
          <img
            className="rounded-lg w-full object-cover"
            src={templateOne}
            alt=""
          />
          <div className="flex justify-between">
            <h2 className="capitalize font-semibold text-primary leading-[20.8px]">
              Foodly Restaurent App template
            </h2>
            <div className="flex gap-2 items-center">
              <div className="flex gap-1 items-center">
                <img src={phoneIcon} alt="" />
                <p className="text-sm leading-[18.2px]">28</p>
              </div>
              <div className="flex gap-1 items-center">
                <img src={downloadIcon} alt="" />
                <p className="text-sm leading-[18.2px]">546</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-2">
          <img
            className="rounded-lg w-full object-cover"
            src={templateTwo}
            alt=""
          />
          <div className="flex justify-between">
            <h2 className="capitalize font-semibold text-primary leading-[20.8px]">
              Flutter animation template
            </h2>
            <div className="flex gap-2 items-center">
              <div className="flex gap-1 items-center">
                <img src={phoneIcon} alt="" />
                <p className="text-sm leading-[18.2px]">28</p>
              </div>
              <div className="flex gap-1 items-center">
                <img src={downloadIcon} alt="" />
                <p className="text-sm leading-[18.2px]">546</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-2">
          <img
            className="rounded-lg w-full object-cover"
            src={templateThree}
            alt=""
          />
          <div className="flex justify-between">
            <h2 className="capitalize font-semibold text-primary leading-[20.8px]">
              Flutter animation template
            </h2>
            <div className="flex gap-2 items-center">
              <div className="flex gap-1 items-center">
                <img src={phoneIcon} alt="" />
                <p className="text-sm leading-[18.2px]">28</p>
              </div>
              <div className="flex gap-1 items-center">
                <img src={downloadIcon} alt="" />
                <p className="text-sm leading-[18.2px]">546</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-2">
          <img
            className="rounded-lg w-full object-cover"
            src={templateFour}
            alt=""
          />
          <div className="flex justify-between">
            <h2 className="capitalize font-semibold text-primary leading-[20.8px]">
              Flutter animation template
            </h2>
            <div className="flex gap-2 items-center">
              <div className="flex gap-1 items-center">
                <img src={phoneIcon} alt="" />
                <p className="text-sm leading-[18.2px]">28</p>
              </div>
              <div className="flex gap-1 items-center">
                <img src={downloadIcon} alt="" />
                <p className="text-sm leading-[18.2px]">546</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-2">
          <img
            className="rounded-lg w-full object-cover"
            src={templateFive}
            alt=""
          />
          <div className="flex justify-between">
            <h2 className="capitalize font-semibold text-primary leading-[20.8px]">
              Flutter animation template
            </h2>
            <div className="flex gap-2 items-center">
              <div className="flex gap-1 items-center">
                <img src={phoneIcon} alt="" />
                <p className="text-sm leading-[18.2px]">28</p>
              </div>
              <div className="flex gap-1 items-center">
                <img src={downloadIcon} alt="" />
                <p className="text-sm leading-[18.2px]">546</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-2">
          <img
            className="rounded-lg w-full object-cover"
            src={templateSix}
            alt=""
          />
          <div className="flex justify-between">
            <h2 className="capitalize font-semibold text-primary leading-[20.8px]">
              Flutter animation template
            </h2>
            <div className="flex gap-2 items-center">
              <div className="flex gap-1 items-center">
                <img src={phoneIcon} alt="" />
                <p className="text-sm leading-[18.2px]">28</p>
              </div>
              <div className="flex gap-1 items-center">
                <img src={downloadIcon} alt="" />
                <p className="text-sm leading-[18.2px]">546</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
