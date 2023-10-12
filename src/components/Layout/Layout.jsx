import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './layout.module.css';
import Loader from 'components/Loader/Loader';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Layout = () => {
  return (
    <div>
      <ul className={`nav nav-underline ${styles.myNavbar}`}>
        <li className="nav-item">
          <NavLink
            className={`nav-link ${styles.myHome}`}
            aria-current="page"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`nav-link ${styles.myHome}`} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>{<Loader />}</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
};

export default Layout;
