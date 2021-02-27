import React from 'react';
import styled from 'styled-components';


class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state ={

    }
  }

  render() {
    console.log('REVIEW TILE: ', this.props)
    return (
      <div>
        <div>
          <span>Rating: {this.props.review.rating}</span>    <span>{this.props.review.reviewer_name}</span>   <span>{this.props.review.date}</span>
        </div>
        <div>{this.props.review.summary}</div>
        <p>{this.props.review.body}</p>
        <div><span>Helpful? <a href=''>Yes</a>({this.props.review.helpfulness})</span>  |  <span><a href=''>Report</a></span></div>
    </div>
    )
  }
}


export default ReviewTile;