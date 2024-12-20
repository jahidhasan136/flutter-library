import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/home/Home';
import Templates from '../pages/templates/Templates';
import Articles from '../pages/articles/Articles';
import Screens from '../pages/screens/Screens';
import LoginModal from '../components/LoginModal';
import SignUpModal from '../components/SignUpModal';
import TemplateDetails from '../pages/templates/TemplateDetails';
import ArticleDetails from '../pages/articles/ArticleDetails';

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
      {
        path: '/template-details',
        element: <TemplateDetails />,
      },
      {
        path: '/article-details',
        element: <ArticleDetails />,
      },
    ],
  },
]);
