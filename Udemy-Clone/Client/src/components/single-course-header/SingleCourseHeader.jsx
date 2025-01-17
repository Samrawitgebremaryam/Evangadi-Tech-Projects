import React from 'react';
import styles from './SingleCourseHeader.module.css';
import './iconStyle.css';
import { Link } from 'react-router-dom';

const SingleCourseHeader = ({ course }) => {
  const { title, headline, instructors, rating, image, price } = course;

  return (
    <>
      <main className={styles.mainContainer}>
        <div className={styles.body}>
          <section className={styles.categoriesSection}>
            <Link to='/'>
              <p className={styles.subCategory}>Home</p>
            </Link>
            <i className='fa-solid fa-chevron-right sub-category-arrow'></i>
            <Link to='/Udemy-Clone/courses/:id'>
              <p className={styles.subCategory}>courses</p>
            </Link>
          </section>
          <section className={styles.coursePreview}>
            <figure
              className={[styles.imageWrapper, styles.hide].join(' ')}
            >
              <img
                src={image}
                alt={course.category}
              />
            </figure>
            <section className={styles.mainDetails}>
              <h1 className={styles.title}>{title}</h1>
              <p>{headline}</p>
              <p className={styles.rating}>
                {rating.toPrecision(2)}
              </p>

              {/* <StarsRating rating={rating} /> */}
              <p className={styles.linkLikeText}>
                (2,305 ratings)
              </p>
              <p
                style={{
                  display: 'inline-block',
                  marginLeft: '7px',
                }}
              >
                {/* {subscribers} students */}
              </p>
              <p>
                Created by{' '}
                <span className={styles.linkLikeText}>
                  {instructors
                    .map((instructor) => instructor.name)
                    .join(', ')}
                </span>
              </p>
              <div className={styles.lastUpdateLangWrapper}>
                <p>
                  <i className='fa-solid fa-globe'></i> English
                </p>
                {/* <p>
                  <i className='fa-solid fa-closed-captioning'></i>
                  <span className={styles.languages}>
                    {languages.join(', ')}
                  </span>
                </p> */}
              </div>
              <div className={styles.hide}>
                <section className={styles.priceAndOffer}>
                  <p className={styles.headerPrice}>
                    <span className={styles.bigPrice}>
                      E£199.99
                    </span>
                    <span className={styles.smallPrice}>
                      E£679.99
                    </span>
                    <span className={styles.offerSize}>
                      71% off
                    </span>
                  </p>
                  <p className={styles.timeRemaining}>
                    <i className='fa-regular fa-clock'></i>
                    <span className={styles.offerText}>
                      <span className={styles.bold}>
                        5 hours
                      </span> left at this price!
                    </span>
                  </p>
                </section>
                {/* <footer className={styles.previewFooter}>
                  <button
                    type='button'
                    className={styles.addToCartButton}
                  >
                    Add to cart
                  </button>
                  <p className='text-center p-3 pb-0'>
                    30-Day Money-Back Guarantee
                  </p>
                  <p className='text-center'>
                    Full Lifetime Access
                  </p>
                  <div className={styles.previewFooterButtons}>
                    <button className={styles.footerButton}>
                      Share
                    </button>
                    <button className={styles.footerButton}>
                      Gift this course
                    </button>
                    <button className={styles.footerButton}>
                      Apply Coupon
                    </button>
                  </div>
                </footer> */}
              </div>
            </section>
          </section>
        </div>
      </main>
    </>
  );
};

export default SingleCourseHeader;
