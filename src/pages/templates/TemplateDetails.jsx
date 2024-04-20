import leftArrowIcon from '../../assets/icons/leftArrowIcon.svg';
import templateImgOne from '../../assets/screens/screens-1.png';

const TemplateDetails = () => {
  return (
    <div>
      <div className="flex items-center mb-5">
        <img src={leftArrowIcon} alt="" />
        <h6 className="capitalize text-h6 text-textSecondary">Templates</h6>
      </div>
      <div className="flex items-center justify-between w-full">
        <div>
          <h3 className="capitalize text-h3 text-textPrimary mb-2 ">
            Chat App Template
          </h3>
          <p className="text-textSecondary text-h5 w-2/3">
            Need a boost in your app design? Grab a free Flutter UI kit! These
            handy Flutter UI libraries offer a variety of pre-designed
            templates, making it easy for you to create stunning apps. The best
            part you can download beautiful.
          </p>
        </div>
        <div className="flex items-start gap-4">
          <button className="btn_primary_s">Preview</button>
          <button className="btn_primary_a text-nowrap">Get Code</button>
        </div>
      </div>
      <div className="mt-5 grid md:grid-cols-5 gap-4">
        <img
          className="rounded-2xl border border-secondary"
          src={templateImgOne}
          alt=""
        />
        <img
          className="rounded-2xl border border-secondary"
          src={templateImgOne}
          alt=""
        />
        <img
          className="rounded-2xl border border-secondary"
          src={templateImgOne}
          alt=""
        />
        <img
          className="rounded-2xl border border-secondary"
          src={templateImgOne}
          alt=""
        />
        <img
          className="rounded-2xl border border-secondary"
          src={templateImgOne}
          alt=""
        />
      </div>
    </div>
  );
};

export default TemplateDetails;
