/* eslint-disable no-return-assign */
import React from 'react';
import styled from 'styled-components';
import ReviewTile from './ReviewTile.jsx';

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 70vh;
  overflow-y: scroll;
  flex-direction: column;
  ::-webkit-scrollbar {
    display: none;
  };
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const LoadingSpan = styled.span`
  display: block;
  color :#42424275;

  &.all-load {
    display: none;
  }
`;

class ReviewListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allLoaded: (this.props.fullreviewsArr.length === this.props.reviews.length) || false,
      prevY: 0,
    };
  }

  componentDidMount() {
    const options = {
      root: document.querySelector('#view'),
      rootMargin: '0px',
      threshold: 0,
    };
    this.observer = new IntersectionObserver(this.handleObserver.bind(this), options);
    this.observer.observe(this.loadingRef);
  }

  handleObserver(entities) {
    // console.log(entities[0]);
    const { y } = entities[0].boundingClientRect;
    // console.log(y);
    if (this.state.prevY > y) {
      setTimeout(this.props.loadMoreReviews, 1000);
    }
    this.setState({ prevY: y });
    if (this.props.fullreviewsArr.length === this.props.reviews.length) {
      this.setState({
        allLoaded: true,
      });
    }
  }

  render() {
    // console.log(this.state.allLoaded);
    // console.log((this.props.fullreviewsArr.length === this.props.reviews.length));
    return (
      <ListWrapper id="view">
        {this.props.reviews.map(((review) => (
          <ReviewTile
            key={review.review_id}
            review={review}
            loadReview={this.props.loadFirstTwoReviews}
            handleClickYes={this.props.handleClickYes}
          />
        )))}
        <LoadingSpan
          className={(this.state.allLoaded) ? 'all-load' : undefined}
          ref={(loadingRef) => (this.loadingRef = loadingRef)}
        >
          Loading...
        </LoadingSpan>
      </ListWrapper>
    );
  }
}

export default ReviewListView;
