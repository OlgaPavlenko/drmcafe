export const ROUTE_PATHS = [
  {
    path: 'main',
    component: '<Main />',
  },
  {
    path: 'login',
    component: '<Login />',
  },
  {
    path: 'createAcc',
    component: '<SingUp />',
  },
  {
    path: '*',
    component: '<NoPage />',
  },
];

export const ROUTE_LAYOUT = {
  path: '/',
  component: '<Layout />',
};

