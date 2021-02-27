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

`;


class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    var count = 0;
    return (
      <ReviewsWrapper>
        <div>
          <h4>{this.props.reviews.count} reviews, sorted by relevance</h4>
          {this.props.reviews.results.map((review => {
            if (count === 2) {
              return;
            }
            count++;
            return ( <ReviewTile key={review.review_id} review={review} />)
          }))}
        </div>
        <ButtonWrapper>
          <button>MORE REVIEWS</button>
          <button>ADD A REVIEW</button>
        </ButtonWrapper>
      </ReviewsWrapper>
    )
  }
}

export default ReviewsList;