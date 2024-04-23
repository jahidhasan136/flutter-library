// icons
import { Link } from 'react-router-dom';
import ArticlesCard from '../../sections/ArticlesCard';
import FilterCategory from '../../components/FilterCategory';

const Articles = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-h3 text-textPrimary leading-[31.2px] dark:text-secondary">
          Articles
        </h2>
        <Link
          to="/articles"
          className="text-textSecondary text-xs hover:underline"
        >
          See all
        </Link>
      </div>

      {/* Filter sections */}
      <FilterCategory />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <ArticlesCard />
      </div>
    </div>
  );
};

export default Articles;
