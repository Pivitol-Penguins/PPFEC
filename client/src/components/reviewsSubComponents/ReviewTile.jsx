/* eslint-disable camelcase */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RatingStars from './RatingStars.jsx';

const TileContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid black;
  display: ${(props) => (props.reportClick ? 'none' : 'block')};
`;

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

const StarDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const ResponseWrapper = styled.div`
  margin: 0 auto;
  background-color: bisque;
`;

const ReviewThumbsWrapper = styled.img`
  display: inline-flex;
  justify-content: space-around;
  align-items: flex-start;
  border: 1px solid #ddd;
  padding: 5px;
  height: 80px;

  &:hover {
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
  }
`;

const HelpfulnessWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
`;

const ClickTag = styled.div`
  padding: 2px 1vw 0 1vw;
  text-decoration:underline;

  &.not-click {
    &:hover {
      cursor: pointer;
      color: #80CCC4;
      transform: scale(1.1);
    }
  }
`;

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review_id: this.props.review.review_id,
      yesClick: false,
      reportClick: false,
    };
    this.handleClickYes = this.handleClickYes.bind(this);
    this.handleClickReport = this.handleClickReport.bind(this);
  }

  handleClickYes() {
    const path = window.location.pathname;
    axios.put(`${path.slice(-6)}reviews/${this.state.review_id}/helpful`)
      .then((res) => {
        this.props.loadReview(res.data.results);
      })
      .catch((err) => {
        throw err;
      })
      .then(() => {
        this.setState({
          yesClick: true,
        });
      });
  }

  handleClickReport() {
    const path = window.location.pathname;
    axios.put(`${path.slice(-6)}reviews/${this.state.review_id}/report`)
      // .then(() => {
      //   this.props.removeTile(this.state.review_id);
      // })
      .catch((err) => {
        throw err;
      })
      .then(() => {
        this.setState({
          reportClick: true,
        });
      });
  }

  render() {
    const { review } = this.props;
    const {
      date, rating, reviewer_name, summary, body, helpfulness,
    } = review;
    // Formatting date
    const reviewDate = new Date(date);
    const month = monthNames[reviewDate.getUTCMonth()];
    const day = reviewDate.getUTCDate();
    const year = reviewDate.getUTCFullYear();

    // calculating the percentage for stars
    // const percentage = (rating / 5) * 100;

    // conditional rendering for recommend label
    let recommendLabel;
    let response;
    if (review.recommend) {
      recommendLabel = <div>✓ I recommend this product</div>;
    }
    // conditional rendering for response
    if (review.response) {
      response = (
        <ResponseWrapper>
          <h4>Response from seller</h4>
          <p>{review.response}</p>
        </ResponseWrapper>
      );
    }
    // conditional rendering for photos
    let photos;
    if (review.photos.length > 0) {
      photos = (
        <div>
          {review.photos.map((photo, index) => (
            <ReviewThumbsWrapper key={photo.id} src={photo.url} alt={`${index}reviewPhoto`} />
          ))}
        </div>
      );
    }

    return (
      <TileContainer reportClick={this.state.reportClick}>
        <StarDateWrapper>
          <RatingStars rating={rating} />
          <span>
            { reviewer_name }
            ,
            {' '}
            {month}
            {' '}
            {day}
            ,
            {' '}
            {year}
          </span>
        </StarDateWrapper>
        <h3>{summary}</h3>
        <p>{body}</p>
        {photos}
        {recommendLabel}
        {response}
        <HelpfulnessWrapper>
          Helpful?
          <ClickTag
            className={this.state.yesClick ? undefined : 'not-click'}
            onClick={this.state.yesClick ? undefined : this.handleClickYes}
          >
            Yes
            {' '}
            (
            {helpfulness || 0}
            )
          </ClickTag>
          <div>  |  </div>
          <ClickTag className="not-click" onClick={this.handleClickReport}>
            Report
          </ClickTag>
        </HelpfulnessWrapper>
      </TileContainer>
    );
  }
}

export default ReviewTile;
