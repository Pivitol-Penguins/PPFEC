import React from 'react';
import styled from 'styled-components';
import ReviewTile from './ReviewTile.jsx';

const ReviewsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
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
      displayLimit: 2,
      reviewsArr: [],
      tileMax: 0,
      displayCount: 0,
    };
    this.loadReview = this.loadReview.bind(this);
  }

  componentDidMount() {
    const displayArr = [];
    let tileCount = 0;
    while (tileCount < this.state.displayLimit) {
      displayArr.push(this.props.reviews.results[tileCount]);
      tileCount += 1;
    }
    this.setState({
      tileMax: this.props.reviews.results.length,
      reviewsArr: displayArr,
      displayCount: tileCount,
    });
  }

  loadReview() {
    const loadArr = [];
    let count = 0;
    console.log(this.state.displayCount);
    while (count < this.state.displayLimit && this.state.displayCount < this.state.tileMax) {
      loadArr.push(this.props.reviews.results[this.state.displayCount]);
      count += 1;
      this.setState((prevState) => ({ displayCount: prevState.displayCount + 1 }));
    }
    console.log(this.state.displayCount);
    this.setState((prevState) => ({
      reviewsArr: [...prevState.reviewsArr, ...loadArr],
    }));
  }

  render() {
    // conditionlal rendering MORE VIEW button
    let moreReviewBtn;
    if (this.state.displayCount !== this.state.tileMax) {
      moreReviewBtn = <ReviewButton onClick={this.loadReview}>MORE REVIEWS</ReviewButton>;
    }

    const { reviews } = this.props;
    return (
      <ReviewsWrapper>
        <ListWrapper>
          <h4>
            {reviews.count}
            {' '}
            reviews, sorted by relevance
          </h4>
          {this.state.reviewsArr.map(((review) => (
            <ReviewTile key={review.review_id} review={review} />)))}
        </ListWrapper>
        <ButtonWrapper>
          {moreReviewBtn}
          <ReviewButton>ADD A REVIEW   +</ReviewButton>
        </ButtonWrapper>
      </ReviewsWrapper>
    );
  }
}

export default ReviewsList;
