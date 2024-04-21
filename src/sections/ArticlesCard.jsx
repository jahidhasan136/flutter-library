import { Link } from 'react-router-dom';
import articleImgOne from '../assets/articles/article-1.png';
import articleImgTwo from '../assets/articles/article-2.png';
import articleImgThree from '../assets/articles/article-3.png';

const ArticlesCard = () => {
  return (
    <>
      <Link to="/article-details">
        <img className="rounded-2xl w-full" src={articleImgOne} alt="" />
        <div className="flex gap-5 pt-4 pb-2 text-textSecondary text-h6 leading-[18.2px] capitalize">
          <h6 className="text-h6">Mar 24, 2024</h6>
          <h6 className="text-h6">Animation</h6>
        </div>
        <h2 className="capitalize text-textPrimary font-semibold leading-[20.8px]">
          Learn flutter animation
        </h2>
        <p className="mt-2 text-textSecondary text-h6">
          Lately, more Flutter developers have been running Dart on the server.
          And it’s no wonder: who doesn’t like using...
        </p>
      </Link>
      <Link to="/article-details">
        <img className="rounded-2xl w-full" src={articleImgTwo} alt="" />
        <div className="flex gap-5 pt-4 pb-2 text-textSecondary text-h6 leading-[18.2px] capitalize">
          <h6 className="text-h6">Mar 24, 2024</h6>
          <h6 className="text-h6">Animation</h6>
        </div>
        <h2 className="capitalize text-textPrimary font-semibold leading-[20.8px]">
          Onboarding Screen with Carousel & Animated Dots
        </h2>
        <p className="mt-2 text-textSecondary text-h6">
          Lately, more Flutter developers have been running Dart on the server.
          And it’s no wonder: who doesn’t like using...
        </p>
      </Link>
      <Link to="/article-details">
        <img className="rounded-2xl w-full" src={articleImgThree} alt="" />
        <div className="flex gap-5 pt-4 pb-2 text-textSecondary text-h6 leading-[18.2px] capitalize">
          <h3 className="text-h6">Mar 24, 2024</h3>
          <h3 className="text-h6">Animation</h3>
        </div>
        <h2 className="capitalize text-textPrimary font-semibold leading-[20.8px]">
          Parallax Scroll Effect with PageView in Flutter
        </h2>
        <p className="mt-2 text-textSecondary text-h6">
          Lately, more Flutter developers have been running Dart on the server.
          And it’s no wonder: who doesn’t like using...
        </p>
      </Link>
    </>
  );
};

export default ArticlesCard;