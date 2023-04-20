import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './home/Home';
import Browse from './browse/Browse';
import { useAnalytics } from '../utils/useAnalytics';
import ItemPage from './browse/item/ItemPage';
import ImportPage from './import/ImportPage';
import Login from './login/Login';
import ProtectedPath from './ProtectedPath';

type Props = {};

const Router = (props: Props) => {
  useAnalytics();

  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/browse',
      element: <Browse />,
      children: [
        {
          path: 'item/:id',
          element: <ItemPage />,
        },
      ],
    },
    // {
    //   path: '/browse/itemitem/:id',
    //   element: <ItemPage />,
    // },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/import',
      element: (
        <ProtectedPath>
          <ImportPage />
        </ProtectedPath>
      ),
    },
    // {
    //   path: '/upload',
    //   element: <UploadPage />,
    // },
    { path: '*', element: <Home /> },
  ]);
};

export default Router;
