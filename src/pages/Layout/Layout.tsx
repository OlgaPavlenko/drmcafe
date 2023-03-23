import { FunctionComponent } from 'react';
import { Outlet, Link } from 'react-router-dom';

export const Layout: FunctionComponent = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/createAcc">SingUp</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

