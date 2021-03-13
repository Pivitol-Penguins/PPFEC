import React from 'react';
import styled from 'styled-components';
import ReviewListView from './ReviewListView.jsx';
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
  margin-top: 20px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: baseline;
`;

const ReviewButton = styled.button`
  font-weight: 700;
  color: #424242;
  font-family: 'Lato', sans-serif;
  background-color: #FFFFFF;
  border: 1px solid #424242;
  height: 6vh;
  width: 20vw;
  margin: 2vh auto;
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
  color: #424242;
  padding-bottom: 5vh;
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
  padding: 7vw 4vh;
`;

const StyledLabel = styled.label`
  font-size: 1.4rem;
  border: 0px;
  outline: 0px;
  font-weight: 600;
  font-family: 'Lato',sans-serif;
`;

const ReviewList = (props) => {
  // conditionlal rendering MORE VIEW button
  // let moreReviewBtn;
  // if (props.reviews.length !== props.fullreviewsArr.length && props.reviews.length !== 0) {
  //   moreReviewBtn = (
  //     <ReviewButton
  //       onClick={props.loadMoreReviews}
  //     >
  //       MORE REVIEWS
  //     </ReviewButton>
  //   );
  // }

  const { reviewsMeta } = props;

  let reviewTiles;
  if (props.reviews.length === 0) {
    reviewTiles = (<NoReviewWrapper>Be the first one to review the product</NoReviewWrapper>);
  } else {
    reviewTiles = (
      <ReviewListView
        filterArr={props.filterArr}
        fullreviewsArr={props.fullreviewsArr}
        loadMoreReviews={props.loadMoreReviews}
        reviews={props.reviews}
        loadReview={props.loadFirstTwoReviews}
        handleClickYes={props.handleClickYes}
      />
    );
  }

  return (
    <ReviewsWrapper>
      <ReviewSortWrapper>
        <StyledLabel>
          {props.reviewsCount || 0}
          {' '}
          reviews, sorted by
          <SelectTag onChange={(e) => { props.sortSelected(e); }}>
            <option defaultValue="relevant">Relevant</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
          </SelectTag>
        </StyledLabel>
      </ReviewSortWrapper>
      {reviewTiles}
      <ButtonWrapper>
        {/* {moreReviewBtn} */}
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

export default ReviewList;
