import React from 'react';
import styled from 'styled-components';
import ReviewTile from './ReviewTile.jsx';
import AddReviewForm from './AddReviewForm.jsx';

const ReviewsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-basis: 65%;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  padding: 2vw;
`;

const ButtonWrapper = styled.div`
  width: 40vw;
  padding: 15px 0;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: baseline;
`;

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  max-height: 100vh;
  overflow-y: scroll;
  flex-direction: column;
  ::-webkit-scrollbar {
    display: none;
  };
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ReviewButton = styled.button`
  font-weight: 700;
  color: #424242;
  font-family: 'Lato', sans-serif;
  background-color: #FFFFFF;
  border: 1px solid #424242;
  height: 6vh;
  width: 20vw;
  margin: 0 12px;
  // font-size: 15px;
  &:hover {
    cursor: pointer;
    color: #80CCC4;
    border: 1px solid #80CCC4;
    box-shadow: 0 3px 6px #a0a0a0, 0 3px 6px #a0a0a0;
  };
  &:focus {
    outline: none;
    box-shadow: none;
  };
`;

const ReviewSortWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const SelectTag = styled.select`
  width: 120px;
  height: 100%;
  font-size: 20px;
  padding-left: 3px;
  text-decoration: underline;
  border: 0px;
  outline: 0px;
  font-weight: 600;
  font-family: 'Lato',sans-serif;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  background-color: #42424275;
`;

const NoReviewWrapper = styled.div`
  color: #424242;
  font-family: 'Lato',sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
`;

const ReviewsList = (props) => {
  // conditionlal rendering MORE VIEW button
  let moreReviewBtn;
  if (props.reviews.length !== props.fullreviewsArr.length && props.reviews.length !== 0) {
    moreReviewBtn = (
      <ReviewButton
        onClick={props.loadMoreReviews}
      >
        MORE REVIEWS
      </ReviewButton>
    );
  }

  const { reviewsMeta } = props;
  // get totalReviewCount
  let totalReviewCount = 0;
  if (reviewsMeta !== {}) {
    Object.entries(reviewsMeta.ratings).forEach((rating) => {
      totalReviewCount += Number(rating[1]);
    });
  }

  let reviewTiles;
  if (props.reviews.length === 0) {
    reviewTiles = (<NoReviewWrapper>Be the first one to review the product</NoReviewWrapper>);
  } else {
    reviewTiles = (
      <>
        <ReviewSortWrapper>
          <label>
            {totalReviewCount}
            {' '}
            reviews, sorted by
            <SelectTag onChange={(e) => { props.sortSelected(e); }}>
              <option defaultValue="relevant">Relevant</option>
              <option value="helpful">Helpful</option>
              <option value="newest">Newest</option>
            </SelectTag>
          </label>
        </ReviewSortWrapper>
        <ListWrapper>
          {props.reviews.map(((review) => (
            <ReviewTile
              key={review.review_id}
              review={review}
              loadReview={props.loadFirstTwoReviews}
              handleClickYes={props.handleClickYes}
            />
          )))}
        </ListWrapper>
      </>
    );
  }

  return (
    <ReviewsWrapper>
      {reviewTiles}
      <ButtonWrapper>
        {moreReviewBtn}
        <ReviewButton onClick={props.addReviewToggle}>ADD A REVIEW</ReviewButton>
        {props.addReviewShow && (
          <ModalBackground>
            <AddReviewForm
              toggle={props.addReviewToggle}
              productId={Number(reviewsMeta.product_id)}
              characteristics={reviewsMeta.characteristics}
              loadReview={props.loadFirstTwoReviews}
            />
          </ModalBackground>
        )}
      </ButtonWrapper>
    </ReviewsWrapper>
  );
};

export default ReviewsList;
