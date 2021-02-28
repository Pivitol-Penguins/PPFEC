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
    this.state ={

    }
  }

  render() {
    // Formatting date
    let date = new Date(this.props.review.date);
    let month = monthNames[date.getUTCMonth()];
    let day = date.getUTCDate();
    let year = date.getUTCFullYear();


    return (
      <TileContainer>
        <StarDateWrapper>
          <label><RatingStars
                   rating={this.props.review.rating}
                   starRatedColor='gold'
                   numberofStars={5}
                   starDimension='15px'
                   starSpacing='0px'
                   />
          </label>
          <label>{this.props.review.reviewer_name}, {month} {day}, {year}</label>
        </StarDateWrapper>
        <h3>{this.props.review.summary}</h3>
        <p>{this.props.review.body}</p>
        <div><span>Helpful? <a href=''>Yes</a>({this.props.review.helpfulness})</span>  |  <span><a href=''>Report</a></span></div>
    </TileContainer>
    )
  }
}


export default ReviewTile;