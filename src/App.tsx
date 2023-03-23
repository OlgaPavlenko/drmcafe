import { FunctionComponent } from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './Login/Login';
import { Layout } from './pages/Layout/Layout';
import { Main } from './pages/Main/Main';
import { NoPage } from './pages/NoPage/NoPage';
import { SingUp } from './SingUp/SingUp';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="createAcc" element={<SingUp />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

