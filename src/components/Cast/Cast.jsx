import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActorInfo } from 'service/API';
import styles from './cast.module.css';

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
        const response = await fetchActorInfo(movieId);
        setActors(response.cast);
        console.log(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchInfo();
  }, [movieId]);

  return (
    <div>
      <ul className={styles.myActorList}>
        {actors?.map(el => (
          <li key={el.id}>
            <p className={styles.myActorName}>{el.name}</p>
            <p className={styles.myActorCharacter}>Character{el.character}</p>
            <div>
              {el.profile_path ? (
                <img
                  className={styles.myActorImg}
                  src={`http://image.tmdb.org/t/p/w300${el.profile_path}`}
                  alt={el.title}
                />
              ) : (
                <img
                  className={styles.myActorImg}
                  src="https://png.pngtree.com/png-vector/20190803/ourlarge/pngtree-avatar-user-basic-abstract-circle-background-flat-color-icon-png-image_1647265.jpg"
                  height={200}
                  width={140}
                  alt={el.title}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
