import Articles from '../articles/Articles';
import Screens from '../screens/Screens';
import Templates from '../templates/Templates';
import Hero from './Hero';

const Home = () => {
  return (
    <div className="grid gap-10 ">
      <Hero />
      <Templates />
      <Articles />
      <Screens />
    </div>
  );
};

export default Home;
