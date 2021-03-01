import React from 'react';
import styled from 'styled-components';
import ReviewTile from './ReviewTile.jsx';

const ReviewsWrapper = styled.div`
  background-color: lightblue;
  height: 100%;
  display: flex;
  flex-grow: 3;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: baseline;
`;

const ListWrapper = styled.div`
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;

`;

const ReviewButton = styled.button`
  font-size: 15px;
  padding: 20px 10px;
  margin: 10px 15px;
  width: 200px;
  height: 55px;
`;

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { reviews } = this.props;
    let count = 0;
    return (
      <ReviewsWrapper>
        <ListWrapper>
          <h4>
            {reviews.count}
            {' '}
            reviews, sorted by relevance
          </h4>
          {reviews.results.map(((review) => {
            if (count === 2) {
              return;
            }
            count += 1;
            // eslint-disable-next-line consistent-return
            return (<ReviewTile key={review.review_id} review={review} />);
          }))}
        </ListWrapper>
        <ButtonWrapper>
          <ReviewButton>MORE REVIEWS</ReviewButton>
          <ReviewButton>ADD A REVIEW   +</ReviewButton>
        </ButtonWrapper>
      </ReviewsWrapper>
    );
  }
}

export default ReviewsList;
