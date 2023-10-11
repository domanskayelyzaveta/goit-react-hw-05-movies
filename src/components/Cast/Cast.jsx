import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActorInfo } from 'service/API';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchInfo = async () => {
      try {
        const response = await fetchActorInfo();
        setActors(response);
        console.log(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchInfo();
  }, [movieId]);

  return (
    <div>
      <ul>
        {actors?.map(el => (
          <li key={el.id}>
            <p>{el.name}</p>
            <p>Character{el.character}</p>
            <img src="#" alt=""></img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
