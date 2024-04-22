import { Link } from 'react-router-dom';
// icons
import revenueIcon from '../../assets/icons/revenueIcon.svg';
// images
import personImg from '../../assets/articles/personImg.png';
import imgTwo from '../../assets/articles/imgTwo.png';
import articleImgOne from '../../assets/articles/article-1.png';
import articleImgTwo from '../../assets/articles/article-2.png';
import articleImgThree from '../../assets/articles/article-3.png';
import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-dart';
import 'prismjs/themes/prism-tomorrow.css';

const ArticleDetails = () => {
  useEffect(() => {
    // Delay calling Prism.highlightAll() using setTimeout
    setTimeout(() => {
      Prism.highlightAll();
    }, 0);
  }, []);
  return (
    <div>
      <div className="flex items-center">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M12.5987 4.5296C12.8586 4.75687 12.8849 5.15172 12.6577 5.41152L8.64374 10L12.6577 14.5885C12.8849 14.8483 12.8586 15.2431 12.5987 15.4705C12.339 15.6977 11.9441 15.6713 11.7168 15.4115L7.34294 10.4115C7.13683 10.176 7.13683 9.82412 7.34294 9.58853L11.7168 4.5885C11.9441 4.3287 12.339 4.30233 12.5987 4.5296Z"
              className="fill-dark dark:fill-secondary"
            />
          </svg>
        </Link>
        <h6 className="capitalize text-h6 text-textSecondary">Articles</h6>
      </div>
      <div className="grid lg:flex gap-5 items-start">
        <div>
          <div className="grid gap-4">
            <h3 className="text-h3 text-textPrimary capitalize">
              Shipping A VisionOS App For Lauch
            </h3>
            <div className="grid md:flex items-center gap-4 group">
              <div className="flex items-center gap-4">
                <img
                  className="w-[54px] h-[54px] rounded-full"
                  src={personImg}
                  alt=""
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h6 className="text-h6 text-textPrimary dark:text-secondary">
                      Abu Anwar
                    </h6>
                    <p className="text-h6 text-textSecondary">@abuanwar072</p>
                  </div>
                  <div className="flex gap-[10px] items-center">
                    <p className="text-h6 text-textSecondary capitalize">
                      March 29, 2024
                    </p>
                    <div className="bg-[#D9D9D9] w-2 h-2 rounded-full"></div>
                    <p className="group-hover:text-dark duration-300 text-h6 text-textSecondary capitalize">
                      Flutter, Animation
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <button className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-[20px] dark:border dark:border-darkSecondary dark:bg-dark dark:text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M9.35109 2.99865C9.61763 3.07069 9.77536 3.3452 9.70329 3.61178L7.26076 12.6492C7.18869 12.9158 6.91423 13.0734 6.64762 13.0014C6.38104 12.9294 6.22335 12.6548 6.29539 12.3882L8.73796 3.35087C8.80996 3.08429 9.08449 2.92659 9.35109 2.99865ZM10.8064 4.91104C10.9932 4.70777 11.3096 4.6945 11.5128 4.88141L14.5042 7.63191C14.6072 7.72664 14.6658 7.86011 14.6658 7.99997C14.6658 8.13991 14.6072 8.27337 14.5042 8.36804L11.5128 11.1186C11.3096 11.3054 10.9932 11.2922 10.8064 11.0889C10.6194 10.8856 10.6327 10.5694 10.836 10.3824L13.427 7.99997L10.836 5.61753C10.6327 5.43062 10.6194 5.11431 10.8064 4.91104ZM5.19207 4.91113C5.37897 5.11441 5.36571 5.43071 5.16243 5.61761L2.57136 8.00004L5.16243 10.3825C5.36571 10.5694 5.37897 10.8857 5.19207 11.089C5.00516 11.2923 4.68885 11.3056 4.48558 11.1186L1.49421 8.36811C1.39124 8.27344 1.33264 8.13997 1.33264 8.00004C1.33264 7.86017 1.39125 7.72671 1.49422 7.63197L4.48558 4.88149C4.68885 4.69459 5.00516 4.70785 5.19207 4.91113Z"
                      className="fill-dark dark:fill-secondary"
                    />
                  </svg>{' '}
                  <p>Source code</p>
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
            {/* <img src={imgOne} alt="" /> */}
            <pre
              style={{
                overflowX: 'auto',
                padding: '1em',
                backgroundColor: '#111', // Light background color
                borderRadius: '16px',
                border: '1px solid #2e2e2e',
                fontWeight: 'bold',
                fontSize: '14px',
                lineHeight: '1.5',
              }}
            >
              <code className="language-dart">
                {`void main() {
      runApp(const MyApp());
    }

    final RouteObserver<ModalRoute<void>> routeObserver = RouteObserver<ModalRoute<void>>();

    class MyApp extends StatefulWidget {
      const MyApp({ super.Key });

      @override
      State<MyApp> createState() => _MyAppState();
    }
    `}
              </code>
            </pre>
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
