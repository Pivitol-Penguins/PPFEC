import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';
import Modal from './Modal.jsx';
import AddReviewForm from './AddReviewForm.jsx';

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

const ReviewSortWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin: 10px;
  padding: 5px;
`;

class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLimit: 2,
      reviewsArr: [],
      fullreviewsArr: [],
      tileMax: 0,
      addReviewShow: false,
    };
    this.loadFirstTwoReviews = this.loadFirstTwoReviews.bind(this);
    this.loadMoreReviews = this.loadMoreReviews.bind(this);
    this.addReviewToggle = this.addReviewToggle.bind(this);
    this.sortSelected = this.sortSelected.bind(this);
  }

  componentDidMount() {
    this.loadFirstTwoReviews(this.props.reviews.results);
  }

  loadFirstTwoReviews(data) {
    const displayArr = [];
    let tileCount = 0;
    while (tileCount < this.state.displayLimit) {
      displayArr.push(data[tileCount]);
      tileCount += 1;
    }
    this.setState({
      tileMax: data.length,
      reviewsArr: displayArr,
      fullreviewsArr: data,
    });
  }

  loadMoreReviews() {
    const loadArr = [];
    let count = 0;
    let totalLength = loadArr.length + this.state.reviewsArr.length;
    while (count < this.state.displayLimit && totalLength < this.state.tileMax) {
      loadArr.push(this.state.fullreviewsArr[totalLength]);
      count += 1;
      totalLength += 1;
    }
    this.setState((prevState) => ({
      reviewsArr: [...prevState.reviewsArr, ...loadArr],
    }));
  }

  addReviewToggle() {
    if (!this.state.addReviewShow) {
      this.setState({
        addReviewShow: true,
      });
    } else {
      this.setState({
        addReviewShow: false,
      });
    }
  }

  sortSelected(event) {
    const path = window.location.pathname;
    axios.get(`${path.slice(-6)}reviews/${event.target.value}`)
      .then((res) => {
        this.loadFirstTwoReviews(res.data.results);
        this.setState({
          fullreviewsArr: res.data.results,
        });
      })
      .catch((err) => { throw err; });

    event.preventDefault();
  }

  render() {
    // conditionlal rendering MORE VIEW button
    let moreReviewBtn;
    if (this.state.reviewsArr.length !== this.state.tileMax) {
      moreReviewBtn = <ReviewButton onClick={this.loadMoreReviews}>MORE REVIEWS</ReviewButton>;
    }

    const { reviews, reviewsMeta } = this.props;
    return (
      <ReviewsWrapper>
        <ReviewSortWrapper>
          <h2>
            {reviews.count}
            {' '}
            reviews, sorted by
          </h2>
          <select value={this.state.sortValue} onChange={this.sortSelected}>
            <option defaultValue="relevant">Relevant</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
          </select>
        </ReviewSortWrapper>
        <ListWrapper>
          {this.state.reviewsArr.map(((review) => (
            <ReviewTile key={review.review_id} review={review} />)))}
        </ListWrapper>
        <ButtonWrapper>
          {moreReviewBtn}
          <ReviewButton onClick={this.addReviewToggle}>ADD A REVIEW   +</ReviewButton>
          {this.state.addReviewShow && (
          <Modal content={(
            <AddReviewForm
              toggle={this.addReviewToggle}
              productId={Number(reviews.product)}
              characteristics={reviewsMeta.characteristics}
            />
)}
          />
          )}
        </ButtonWrapper>
      </ReviewsWrapper>
    );
  }
}

export default ReviewsList;
