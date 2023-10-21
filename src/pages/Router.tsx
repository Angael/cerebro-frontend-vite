import React, { Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import Home from './home/Home';
import Browse from './browse/Browse';
import { useAnalytics } from '../utils/useAnalytics';
import ItemPage from './browse/item/ItemPage';
import ImportPage from './import/ImportPage';
import Login from './login/Login';
import ProtectedPath from './ProtectedPath';
import { isProd } from '../env';
const ImportLocalPage = React.lazy(
  () => import('./import-local/ImportLocalPage'),
);

const routes: RouteObject[] = [
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
        path: 'item/:itemId',
        element: <ItemPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/import/*',
    element: (
      <ProtectedPath>
        <ImportPage />
      </ProtectedPath>
    ),
  },
  !isProd && {
    path: '/local',
    element: (
      <ProtectedPath>
        <Suspense fallback={null}>
          <ImportLocalPage />
        </Suspense>
      </ProtectedPath>
    ),
  },
  { path: '*', element: <Home /> },
].filter(Boolean) as RouteObject[];

const Router = () => {
  useAnalytics();

  return useRoutes(routes);
};

export default Router;
