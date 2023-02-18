import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './home/Home';
import Browse from './browse/Browse';

type Props = {};

const Router = (props: Props) => {
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
    },
    // {
    //   path: '/item/:id',
    //   element: <ViewItem />,
    // },
    // {
    //   path: '/login',
    //   element: <Login />,
    // },
    // {
    //   path: '/import',
    //   element: <ImportPage />,
    // },
    // {
    //   path: '/upload',
    //   element: <UploadPage />,
    // },
    { path: '*', element: <Home /> },
  ]);
};

export default Router;
