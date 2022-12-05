import { Outlet, Link } from 'react-router-dom';

const Third = () => {
  return (
    <div>
      <h1>Third page</h1>
      <nav>
        <ul>
          <li>
            <Link className="btn btn-primary" to="/second">
              Second
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Third;
