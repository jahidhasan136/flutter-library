import { Link } from 'react-router-dom';
// icons
import leftArrowIcon from '../../assets/icons/leftArrowIcon.svg';
import codeIcon from '../../assets/icons/codeIcon.svg';
import revenueIcon from '../../assets/icons/revenueIcon.svg';
// images
import personImg from '../../assets/articles/personImg.png';
import imgTwo from '../../assets/articles/imgTwo.png';
import imgOne from '../../assets/articles/imgOne.png';
import articleImgOne from '../../assets/articles/article-1.png';
import articleImgTwo from '../../assets/articles/article-2.png';
import articleImgThree from '../../assets/articles/article-3.png';

const ArticleDetails = () => {
  return (
    <div>
      <div className="flex items-center">
        <Link to="/">
          <img src={leftArrowIcon} alt="" />
        </Link>
        <h6 className="capitalize text-h6 text-textSecondary">Articles</h6>
      </div>
      <div className="grid lg:flex gap-5 items-start">
        <div>
          <div className="grid gap-4">
            <h3 className="text-h3 text-textPrimary capitalize">
              Shipping A VisionOS App For Lauch
            </h3>
            <div className="grid md:flex items-center gap-4">
              <div className="flex items-center gap-4">
                <img src={personImg} alt="" />
                <div>
                  <div className="flex items-center gap-2">
                    <h6 className="text-h6 text-textPrimary">Abu Anwar</h6>
                    <p className="text-h6 text-textSecondary">@abuanwar072</p>
                  </div>
                  <div className="flex gap-[10px] items-center">
                    <p className="text-h6 text-textSecondary capitalize">
                      March 29, 2024
                    </p>
                    <div className="bg-[#D9D9D9] w-2 h-2 rounded-full"></div>
                    <p className="text-h6 text-textSecondary capitalize">
                      Flutter, Animation
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <button className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-[20px]">
                  <img src={codeIcon} alt="" /> Source code
                </button>
              </div>
            </div>
            <p className="text-textSecondary">
              Need a boost in your app design? Grab a free Flutter UI kit! These
              handy Flutter UI libraries offer a variety of pre-designed
              templates, making it easy for you to create stunning apps. The
              best part you can download beautiful.
            </p>
            <img src={imgTwo} alt="" />
            <p className="text-textSecondary">
              Need a boost in your app design? Grab a free Flutter UI kit! These
              handy Flutter UI libraries offer a variety of pre-designed
              templates, making it easy for you to create stunning apps. The
              best part you can download beautiful.
            </p>
            <img src={imgOne} alt="" />
          </div>
          <div className="grid gap-4 mt-6">
            <h3 className="text-h3 dark:text-secondary">
              Build You Shop App in Days
            </h3>
            <p className="text-textSecondary">
              Need a boost in your app design? Grab a free Flutter UI kit! These
              handy Flutter UI libraries offer a variety of pre-designed
              templates, making it easy for you to create stunning apps. The
              best part you can download beautiful.
            </p>
          </div>
        </div>

        {/* right side revenue cat content */}
        <div className="border border-secondary rounded-2xl">
          <div className="flex justify-end">
            <p className="capitalize text-h7 font-medium px-2 py-1 text-textSecondary inline-block border border-t-0 border-r-0 rounded-lg">
              Sponsored
            </p>
          </div>
          <div className="grid gap-2 p-4">
            <img src={revenueIcon} alt="" />
            <p className="text-h6 text-black dark:text-textSecondary">
              Libriwi is a plugin for Figma that lets you easily created and
              share Figma groups, layouts and components with a single click of
              the button.
            </p>
            <button className="btn_primary_a ml-auto">Learn more</button>
          </div>
        </div>
      </div>

      {/* you may also like */}
      <div className="mt-10 grid gap-4">
        <div className="flex justify-between items-center">
          <h3 className="text-h3 text-textPrimary capitalize dark:text-secondary">
            You may also like...
          </h3>
          <p className="text-h7 text-textSecondary">See all</p>
        </div>

        {/* you may also like cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div>
            <img className="rounded-2xl w-full" src={articleImgOne} alt="" />
            <div className="flex gap-5 pt-4 pb-2 text-textSecondary text-h6 leading-[18.2px] capitalize">
              <h6 className="text-h6">Mar 24, 2024</h6>
              <h6 className="text-h6">Animation</h6>
            </div>
            <h2 className="capitalize text-textPrimary font-semibold leading-[20.8px] dark:text-secondary">
              Learn flutter animation
            </h2>
            <p className="mt-2 text-textSecondary text-h6">
              Lately, more Flutter developers have been running Dart on the
              server. And it’s no wonder: who doesn’t like using...
            </p>
          </div>
          <div>
            <img className="rounded-2xl w-full" src={articleImgTwo} alt="" />
            <div className="flex gap-5 pt-4 pb-2 text-textSecondary text-h6 leading-[18.2px] capitalize">
              <h6 className="text-h6">Mar 24, 2024</h6>
              <h6 className="text-h6">Animation</h6>
            </div>
            <h2 className="capitalize text-textPrimary font-semibold leading-[20.8px] dark:text-secondary">
              Onboarding Screen with Carousel & Animated Dots
            </h2>
            <p className="mt-2 text-textSecondary text-h6">
              Lately, more Flutter developers have been running Dart on the
              server. And it’s no wonder: who doesn’t like using...
            </p>
          </div>
          <div>
            <img className="rounded-2xl w-full" src={articleImgThree} alt="" />
            <div className="flex gap-5 pt-4 pb-2 text-textSecondary text-h6 leading-[18.2px] capitalize">
              <h3 className="text-h6">Mar 24, 2024</h3>
              <h3 className="text-h6">Animation</h3>
            </div>
            <h2 className="capitalize text-textPrimary font-semibold leading-[20.8px] dark:text-secondary">
              Parallax Scroll Effect with PageView in Flutter
            </h2>
            <p className="mt-2 text-textSecondary text-h6">
              Lately, more Flutter developers have been running Dart on the
              server. And it’s no wonder: who doesn’t like using...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
