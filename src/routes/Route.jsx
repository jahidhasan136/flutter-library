import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/home/Home';
import Templates from '../pages/Templates';
import Articles from '../pages/Articles';
import Screens from '../pages/Screens';
import LoginModal from '../components/LoginModal';
import SignUpModal from '../components/SignUpModal';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: '/login',
            element: <LoginModal />,
          },
          {
            path: '/signup',
            element: <SignUpModal />,
          },
        ],
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
