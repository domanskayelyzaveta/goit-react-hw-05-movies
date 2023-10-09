import React from 'react';
import { Outlet } from 'react-router-dom';

const Cast = () => {
  return (
    <>
      <div>Cast</div>
      <Outlet />
    </>
  );
};

export default Cast;
