import TemplatesCard from '../../sections/TemplatesCard';
// icons
import { Link } from 'react-router-dom';
import FilterCategory from '../../components/FilterCategory';

const Templates = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl text-textPrimary leading-[31.2px] dark:text-secondary">
          Templates
        </h2>
        <Link
          to="/templates"
          className="text-textSecondary text-xs hover:underline"
        >
          See all
        </Link>
      </div>
      {/* Filter sections */}
      <FilterCategory />

      {/* templates card section */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <TemplatesCard />
      </div>
    </div>
  );
};

export default Templates;
