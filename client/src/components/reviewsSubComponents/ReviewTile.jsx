import React from 'react';
import styled from 'styled-components';
import RatingStars from 'react-star-ratings';

const TileContainer = styled.div`
  margin: 0 auto;
  padding: 10px 30px;
  border-bottom: 1px solid black;
`;

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

const StarDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
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

    return (
      <TileContainer>
        <StarDateWrapper>
          <RatingStars
            rating={rating}
            starRatedColor="gold"
            numberofStars={5}
            starDimension="15px"
            starSpacing="0px"
          />
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
        <div>
          <span>
            Helpful?
            <a href="">Yes</a>
            (
            {helpfulness}
            )
          </span>
          {' '}
          |
          {' '}
          <span><a href="">Report</a></span>
        </div>
      </TileContainer>
    );
  }
}

export default ReviewTile;
