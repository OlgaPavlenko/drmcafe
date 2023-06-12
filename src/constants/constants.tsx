import { Login } from '../Login/Login';
import { Layout } from '../pages/Layout/Layout';
import { Main } from '../pages/Main/Main';
import { NoPage } from '../pages/NoPage/NoPage';
import { SingUp } from '../SingUp/SingUp';

export const ROUTE_PATHS = [
  {
    path: 'main',
    component: <Main />,
  },
  {
    path: 'login',
    component: <Login />,
  },
  {
    path: 'createAcc',
    component: <SingUp />,
  },
  {
    path: '*',
    component: <NoPage />,
  },
];

export const ROUTE_LAYOUT = {
  path: '/',
  component: <Layout />,
};

