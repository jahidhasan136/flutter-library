import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/home/Home';
import Templates from '../pages/Templates';
import Articles from '../pages/Articles';
import Screens from '../pages/Screens';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/templates',
        element: <Templates />,
      },
      {
        path: '/articles',
        element: <Articles />,
      },
      {
        path: '/screens',
        element: <Screens />,
      },
    ],
  },
]);
