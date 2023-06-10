import { FunctionComponent, ReactNode } from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './pages/Layout/Layout';
import './App.css';
import { ROUTE_LAYOUT, ROUTE_PATHS } from './constants/constants';

const App: FunctionComponent = () => {
  let render: ReactNode;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE_LAYOUT.path} element={<Layout />}>
            {ROUTE_PATHS.map((item, index) => {
              item.path === 'main'
                ? (render = <Route key={index} index path={item.path} element={item.component} />)
                : (render = <Route key={index} path={item.path} element={item.component} />);
              return render;
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

