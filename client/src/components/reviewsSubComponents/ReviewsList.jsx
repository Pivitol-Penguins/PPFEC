import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReviewTile from './ReviewTile.jsx';
import Modal from './Modal.jsx';
import AddReviewForm from './AddReviewForm.jsx';

const ReviewsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-basis: 65%;
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
  width: 100%;
  display: flex;
  max-height: 500px;
  overflow-y: scroll;
  flex-direction: column;
  ::-webkit-scrollbar {
    display: none;
  };
  -ms-overflow-style: none;
  scrollbar-width: none;
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

const SelectTag = styled.select`
  width: 120px;
  height: 100%;
  font-size: 20px;
  padding-left: 3px;
  text-decoration: underline;
  border: 0px;
  outline: 0px;
  font-weight: 600;
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
      addReviewClick: false,
    };
    this.loadFirstTwoReviews = this.loadFirstTwoReviews.bind(this);
    this.loadMoreReviews = this.loadMoreReviews.bind(this);
    this.addReviewToggle = this.addReviewToggle.bind(this);
    this.sortSelected = this.sortSelected.bind(this);
    this.freshPage = this.freshPage.bind(this);
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

  freshPage() {
    this.setState({
      addReviewClick: true,
    });
  }

  render() {
    // conditionlal rendering MORE VIEW button
    let moreReviewBtn;
    if (this.state.reviewsArr.length !== this.state.tileMax) {
      moreReviewBtn = <ReviewButton onClick={this.loadMoreReviews}>MORE REVIEWS</ReviewButton>;
    }

    const { reviews, reviewsMeta } = this.props;
    // get totalReviewCount
    let totalReviewCount = 0;
    Object.entries(reviewsMeta.ratings).forEach((rating) => {
      totalReviewCount += Number(rating[1]);
    });

    return (
      <ReviewsWrapper>
        <ReviewSortWrapper>
          <h2>
            {totalReviewCount}
            {' '}
            reviews, sorted by
          </h2>
          <SelectTag value={this.state.sortValue} onChange={this.sortSelected}>
            <option defaultValue="relevant">Relevant</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
          </SelectTag>
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
              freshPage={this.freshPage}
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
