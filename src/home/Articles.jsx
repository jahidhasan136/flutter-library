import articleImgOne from "../assets/articles/article-1.png";
import articleImgTwo from "../assets/articles/article-2.png";
import articleImgThree from "../assets/articles/article-3.png";

const Articles = () => {
  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl text-primary leading-[31.2px]">Articles</h2>
        <button className="text-textSecondary text-xs ">See all</button>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        <div>
          <img className="rounded-2xl w-full" src={articleImgOne} alt="" />
          <div className="flex gap-5 pt-4 pb-2 text-textSecondary text-sm leading-[18.2px] capitalize">
            <h3>Mar 24, 2024</h3>
            <h3>Animation</h3>
          </div>
          <h2 className="capitalize text-primary font-semibold leading-[20.8px]">
            Learn flutter animation
          </h2>
          <p className="mt-2 text-textSecondary text-sm">
            Lately, more Flutter developers have been running Dart on the
            server. And it’s no wonder: who doesn’t like using...
          </p>
        </div>
        <div>
          <img className="rounded-2xl w-full" src={articleImgTwo} alt="" />
          <div className="flex gap-5 pt-4 pb-2 text-textSecondary text-sm leading-[18.2px] capitalize">
            <h3>Mar 24, 2024</h3>
            <h3>Animation</h3>
          </div>
          <h2 className="capitalize text-primary font-semibold leading-[20.8px]">
            Onboarding Screen with Carousel & Animated Dots
          </h2>
          <p className="mt-2 text-textSecondary text-sm">
            Lately, more Flutter developers have been running Dart on the
            server. And it’s no wonder: who doesn’t like using...
          </p>
        </div>
        <div>
          <img className="rounded-2xl w-full" src={articleImgThree} alt="" />
          <div className="flex gap-5 pt-4 pb-2 text-textSecondary text-sm leading-[18.2px] capitalize">
            <h3>Mar 24, 2024</h3>
            <h3>Animation</h3>
          </div>
          <h2 className="capitalize text-primary font-semibold leading-[20.8px]">
            Parallax Scroll Effect with PageView in Flutter
          </h2>
          <p className="mt-2 text-textSecondary text-sm">
            Lately, more Flutter developers have been running Dart on the
            server. And it’s no wonder: who doesn’t like using...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Articles;
