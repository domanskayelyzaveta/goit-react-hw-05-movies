import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGetReviews } from 'service/API';
import styles from './reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) {
      return;
    }

    const fetchReview = async () => {
      try {
        const response = await fetchGetReviews(movieId);
        setReviews(response.results);
        console.log(response.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchReview();
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 && (
        <div>
          <h2 className={styles.reviewsTitle}>Movie Reviews</h2>
          <ul className={styles.reviewsList}>
            {reviews.map(el => (
              <li key={el.id}>
                <p className={styles.reviewsAuthor}>{el.author}</p>
                <p className={styles.reviewsParagraph}>{el.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {reviews.length === 0 && (
        <div className={styles.dontHaveReviews}>
          Oops...We don't have any reviews for this movie
        </div>
      )}
    </>
  );
};

export default Reviews;
