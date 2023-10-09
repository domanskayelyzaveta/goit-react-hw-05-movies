import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Layout = () => {
  return (
    <div>
      <nav
        style={{ backgroundColor: 'rgba(238, 130, 238, 0.2)' }}
        className="navbar navbar-light"
      >
        <div className="d-flex align-items-center">
          <NavLink
            style={{ marginRight: '8px', textDecoration: 'none' }}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={{ marginRight: '8px', textDecoration: 'none' }}
            to="/movies"
          >
            Movies
          </NavLink>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
