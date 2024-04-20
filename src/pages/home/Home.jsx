import Articles from '../articles/Articles';
import Screens from '../screens/Screens';
import Templates from '../templates/Templates';
import Hero from './Hero';

const Home = () => {
  return (
    <>
      <Hero />
      <Templates />
      <Articles />
      <Screens />
    </>
  );
};

export default Home;
