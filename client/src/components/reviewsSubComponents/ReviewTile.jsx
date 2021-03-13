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
  font-size: 1rem;
  font-weight: 300;
  color: #424242;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const ResponseWrapper = styled.div`
  margin: 0 auto;
  padding: 0.5vw;
  background-color: #80ccc4;
  // font-size: 1rem;
  // font-weight: 300;
  color: #424242;
`;

const ReviewThumbsWrapper = styled.img`
  display: inline-flex;
  justify-content: space-around;
  align-items: flex-start;
  // border: 1px solid #ddd;
  // padding: 5px;
  // height: 80px;

  // &:hover {
  //   box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
  // }
  height: 10vh;
  weight: 10vw;
  margin: 0 1vw 1vh 1vw;
  border: 1px solid #424242;
  &:hover {
    transform: scale(1.1);
    border: 1px solid #80CCC4;
    box-shadow: 0 3px 6px #a0a0a0, 0 3px 6px #a0a0a0;
  }
`;

const HelpfulnessWrapper = styled.div`
  font-size: 1rem;
  font-weight: 300;
  color: #424242;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  padding: 5px 0;
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

const StyledSummary = styled.div`
  font-size: 1.45rem;
  padding: 15px 0;
  font-weight: 600;
  font-family: 'Lato',sans-serif;
`;

const StyledBody = styled.p`
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Lato',sans-serif;
  line-height: 21px;
`;

const StyledResponseHead = styled.div`
  font-size: 1.2rem;
  padding-top: 15px;
  font-weight: 600;
  font-family: 'Lato',sans-serif;
`;

const StyledRecommend = styled.div`
  font-size: 1rem;
  padding: 15px 0;
  font-weight: 400;
  font-family: 'Lato',sans-serif;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  background-color: #42424275;
`;

const Img = styled.img`
  max-height: 60vh;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`;

const ImgWrapper = styled.div`
  position: fixed;
  display: table;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 70vw;
  max-height; 60vh;
  margin: 0px auto;
`;

const PhotosWrapper = styled.div`
  display: inline-flex;
  justify-content: space-around;
  align-items: flex-start;
`;

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review_id: this.props.review.review_id,
      yesNum: this.props.review.helpfulness,
      yesClick: false,
      reportClick: false,
      photoClick: false,
      photoURL: '',
    };
    this.handleClickYes = this.handleClickYes.bind(this);
    this.togglePhoto = this.togglePhoto.bind(this);
    this.handleClickReport = this.handleClickReport.bind(this);
  }

  handleClickYes() {
    const path = window.location.pathname;
    axios.put(`${path.slice(-6)}reviews/${this.state.review_id}/helpful`)
      .then(() => {
        this.setState((prevState) => ({
          yesClick: true,
          yesNum: prevState.yesNum + 1,
        }));
      })
      .catch((err) => {
        throw err;
      });
    // event.preventDefault();
  }

  handleClickReport() {
    const path = window.location.pathname;
    axios.put(`${path.slice(-6)}reviews/${this.state.review_id}/report`)
      .catch((err) => {
        throw err;
      })
      .then(() => {
        this.setState({
          reportClick: true,
        });
      });
  }

  togglePhoto(event) {
    event.persist();
    this.setState((prevState) => ({
      photoClick: !prevState.photoClick,
      photoURL: event.target.src,
    }));
  }

  render() {
    const { review } = this.props;
    const {
      date, rating, reviewer_name, summary, body,
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
      recommendLabel = <StyledRecommend>✓ I recommend this product</StyledRecommend>;
    }
    // conditional rendering for response
    if (review.response) {
      // console.log(review.response);
      response = (
        <ResponseWrapper>
          <StyledResponseHead>Response from seller</StyledResponseHead>
          <StyledBody>{review.response}</StyledBody>
        </ResponseWrapper>
      );
    }
    // conditional rendering for photos
    let photos;
    if (review.photos.length > 0) {
      photos = (
        <div>
          {review.photos.map((photo, index) => (
            <PhotosWrapper key={photo.id}>
              <ReviewThumbsWrapper onClick={(e) => this.togglePhoto(e)} src={photo.url} alt={`${index}reviewPhoto`} />
              {this.state.photoClick ? (
                <ModalBackground onMouseDown={this.togglePhoto}>
                  <ImgWrapper><Img src={this.state.photoURL} alt={index} /></ImgWrapper>
                </ModalBackground>
              ) : (<div />)}
            </PhotosWrapper>
          ))}

        </div>
      );
    }

    return (
      <TileContainer className="tile" reportClick={this.state.reportClick}>
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
        <StyledSummary>{summary}</StyledSummary>
        <StyledBody>{body}</StyledBody>
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
            {this.state.yesNum || 0}
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
