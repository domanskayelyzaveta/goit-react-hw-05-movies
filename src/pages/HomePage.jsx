// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const HomePage = ({ results }) => {
//   useEffect(() => {
//     const fetchHomeTrending = () => {
//       fetchHomeTrending();
//     };
//   });
//   return (
//     <>
//       <div>HomePage</div>
//       <ul>
//         <li>
//           {results.map(movie => {
//             return <Link key={movie.id}>to={}</Link>;
//           })}
//         </li>
//       </ul>
//     </>
//   );
// };

// export default HomePage;

import React, { useEffect } from 'react';
// import { Outlet } from 'react-router-dom';

const HomePage = () => {
  //state
  //loader
  useEffect(() => {});
  return (
    <>
      <h2>Trending Today</h2>
      {/* <Outlet /> */}
    </>
  );
};

export default HomePage;
