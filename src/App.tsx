import { FunctionComponent } from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './Login/Login';
import { Layout } from './pages/Layout/Layout';
import { Main } from './pages/Main/Main';
import { NoPage } from './pages/NoPage/NoPage';
import { SingUp } from './SingUp/SingUp';
import './App.css';
import { ROUTE_PATHS } from './constants/constants';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE_PATHS.layout} element={<Layout />}>
            <Route index element={<Main />} />
            <Route path={ROUTE_PATHS.login} element={<Login />} />
            <Route path={ROUTE_PATHS.singUp} element={<SingUp />} />
            <Route path={ROUTE_PATHS.noPage} element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

