import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReviewsList from './reviewsSubComponents/ReviewsList.jsx';
import RatingSummary from './reviewsSubComponents/RatingSummary.jsx';
import RatingBreakDown from './reviewsSubComponents/RatingBreakDown.jsx';
import ProductBreakDown from './reviewsSubComponents/ProductBreakDown.jsx';

const ReviewsContainer = styled.div`
  width: 60vw;
  // height: 70vw;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  padding: 10px 20px 10px 20px;
  font-family: 'Lato', sans-serif;
`;

const ReviewsTitle = styled.div`
  color: black;
  font-size: 20px;
  text-align: left;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;

const RatingWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-basis: 35%;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 30px 30px;
`;

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      reviewsMeta: this.props.reviewsMeta,
      filterOn: false,
      product_id: this.props.product,
      entriesCount: this.props.count,
      page: this.props.page,
      displayLimit: 2,
      fullreviewsArr: [],
      sortSelection: 'relavent',
      addReviewShow: false,
    };
    this.starFilter = this.starFilter.bind(this);
    this.loadFirstTwoReviews = this.loadFirstTwoReviews.bind(this);
    this.sortSelected = this.sortSelected.bind(this);
    this.loadMoreReviews = this.loadMoreReviews.bind(this);
    this.addReviewToggle = this.addReviewToggle.bind(this);
  }

  componentDidMount() {
    this.loadFirstTwoReviews(this.props.reviews.results);
  }

  starFilter(star) {
    this.setState({
      fullreviewsArr: this.props.reviews.results.filter((review) => review.rating === star),
      filterOn: true,
    }, () => {
      this.loadFirstTwoReviews(this.state.fullreviewsArr);
    });
  }

  loadFirstTwoReviews(data) {
    const displayArr = [];
    let tileCount = 0;
    while (tileCount < this.state.displayLimit) {
      displayArr.push(data[tileCount]);
      tileCount += 1;
    }
    this.setState({
      reviews: displayArr,
      fullreviewsArr: data,
    });
  }

  loadMoreReviews() {
    const loadArr = [];
    let count = 0;
    let totalLength = loadArr.length + this.state.reviews.length;
    while (count < this.state.displayLimit && totalLength < this.state.fullreviewsArr.length) {
      loadArr.push(this.state.fullreviewsArr[totalLength]);
      count += 1;
      totalLength += 1;
    }
    this.setState((prevState) => ({
      reviews: [...prevState.reviews, ...loadArr],
    }));
  }

  sortSelected(event) {
    const path = window.location.pathname;
    axios.get(`${path.slice(-6)}reviews/${event.target.value}`)
      .then((res) => {
        this.loadFirstTwoReviews(res.data.results);
      })
      .catch((err) => { throw err; });

    event.preventDefault();
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

  render() {
    // console.log(this.state.reviews);
    // console.log(this.state.reviewsMeta);
    if (this.state.reviews.length > 0 && this.state.fullreviewsArr.length > 0) {
      return (
        <ReviewsContainer>
          <ReviewsTitle>RATINGS & REVIEWS</ReviewsTitle>
          <Wrapper>
            <RatingWrapper>
              <RatingSummary reviewsMeta={this.state.reviewsMeta} />
              <RatingBreakDown reviewsMeta={this.state.reviewsMeta} starFilter={this.starFilter} />
              <ProductBreakDown
                reviewsMeta={this.state.reviewsMeta}
              />
            </RatingWrapper>
            <ReviewsList
              loadFirstTwoReviews={this.loadFirstTwoReviews}
              fullreviewsArr={this.state.fullreviewsArr}
              reviews={this.state.reviews}
              reviewsMeta={this.state.reviewsMeta}
              loadMoreReviews={this.loadMoreReviews}
              sortSelected={this.sortSelected}
              addReviewToggle={this.addReviewToggle}
              addReviewShow={this.state.addReviewShow}
            />
          </Wrapper>
        </ReviewsContainer>
      );
    }
    return (
      <div>Loading Data</div>
    );
  }
}

export default Reviews;
