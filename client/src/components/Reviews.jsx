/* eslint-disable react/no-unused-state */
import React from 'react';
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
  color: #424242
`;

const ReviewsTitle = styled.div`
  padding: 10px 0;
  color: #424242;
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-basis: 35%;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 40px 55px;
`;

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      reviewsMeta: this.props.reviewsMeta,
      displayLimit: 4,
      fullreviewsArr: [],
      originalArr: this.props.reviews.results,
      filterArr: [],
      addReviewShow: false,
      filterStars: [],
      isModalOpen: false,
    };
    this.starFilter = this.starFilter.bind(this);
    this.loadFirstTwoReviews = this.loadFirstTwoReviews.bind(this);
    this.sortSelected = this.sortSelected.bind(this);
    this.loadMoreReviews = this.loadMoreReviews.bind(this);
    this.addReviewToggle = this.addReviewToggle.bind(this);
    this.addOneFilter = this.addOneFilter.bind(this);
    this.removeOneFilter = this.removeOneFilter.bind(this);
    this.removeAllFilter = this.removeAllFilter.bind(this);
  }

  componentDidMount() {
    this.loadFirstTwoReviews(this.props.reviews.results);
  }

  loadFirstTwoReviews(data) {
    const displayArr = [];
    let tileCount = 0;
    while (tileCount < this.state.displayLimit && tileCount < data.length) {
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

  addOneFilter(star) {
    // console.log('add', star);
    this.setState((prevState) => ({
      filterArr: [...prevState.filterArr,
        ...prevState.originalArr.filter((review) => (review.rating === star))],
      filterStars: [...prevState.filterStars, star],
    }), () => {
      this.loadFirstTwoReviews(this.state.filterArr);
    });
  }

  removeOneFilter(star) {
    this.setState((prevState) => {
      const index = prevState.filterStars.indexOf(star);
      prevState.filterStars.splice(index, 1);
      return {
        filterStars: prevState.filterStars,
        filterArr: prevState.filterArr.filter((review) => review.rating !== star),
      };
    }, () => {
      if (this.state.filterArr.length === 0 || this.state.filterStars.length === 0) {
        this.loadFirstTwoReviews(this.state.originalArr);
      } else {
        this.loadFirstTwoReviews(this.state.filterArr);
      }
    });
  }

  starFilter(star) {
    if (!this.state.filterStars.includes(star)) {
      this.addOneFilter(star);
    } else {
      this.removeOneFilter(star);
    }
  }

  removeAllFilter() {
    this.setState({
      filterArr: [],
      filterStars: [],
    }, () => {
      this.loadFirstTwoReviews(this.props.reviews.results);
    });
  }

  sortSelected(event) {
    const path = window.location.pathname;
    axios.get(`${path.slice(-6)}reviews/${event.target.value}`)
      .then((res) => {
        this.loadFirstTwoReviews(res.data.results);
        this.setState({
          originalArr: res.data.results,
        });
      })
      .catch((err) => { throw err; })
      .then(() => {
        this.setState({
          filterStars: [],
          filterArr: [],
        });
      });

    event.preventDefault();
  }

  addReviewToggle() {
    this.setState((prevState) => ({
      addReviewShow: !prevState.addReviewShow,
    }));
  }

  render() {
    // console.log(this.props.reviewsMeta);
    // console.log(this.props.reviews.results);
    return (
      <ReviewsContainer id="RATINGS">
        <ReviewsTitle>RATINGS & REVIEWS</ReviewsTitle>
        <Wrapper>
          <RatingWrapper>
            <RatingSummary
              reviews={this.state.reviews}
              reviewsMeta={this.state.reviewsMeta}
            />
            <RatingBreakDown
              reviews={this.state.reviews}
              reviewsMeta={this.state.reviewsMeta}
              starFilter={this.starFilter}
              removeAllFilter={this.removeAllFilter}
              filterStars={this.state.filterStars}
            />
            <ProductBreakDown
              reviews={this.state.reviews}
              reviewsMeta={this.state.reviewsMeta}
            />
          </RatingWrapper>
          <ReviewsList
            loadFirstTwoReviews={this.loadFirstTwoReviews}
            reviewsCount={this.state.originalArr.length}
            fullreviewsArr={this.state.fullreviewsArr}
            filterArr={this.state.filterArr}
            reviews={this.state.reviews}
            reviewsMeta={this.state.reviewsMeta}
            loadMoreReviews={this.loadMoreReviews}
            sortSelected={this.sortSelected}
            addReviewToggle={this.addReviewToggle}
            addReviewShow={this.state.addReviewShow}
            toggleModal={this.toggleModal}
          />
        </Wrapper>
      </ReviewsContainer>
    );
  }
}

export default Reviews;
