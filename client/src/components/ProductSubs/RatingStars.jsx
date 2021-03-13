/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';

const StarsContainer = styled.div`
  unicode-bidi: bidi-override;
  color: #e0e0e0;
  font-size: 1rem;
  height: 1rem;
  line-height: 1rem;
  position: relative;
  padding: 0;
  text-shadow: 0px 1px 0 #a2a2a2;
  object-fit: contain;

  &.top {
    width: ${({ rating }) => (rating / 5) * 100}%;
    color: #80ccc4;
    padding: 0;
    position: absolute;
    z-index: 1;
    display: block;
    top: 0;
    left: 0;
    overflow: hidden;
    object-fit: contain;
  }

  &.bottom {
    padding: 0;
    color: #e0e0e0;
    display: block;
    z-index: 0;
    object-fit: contain;
  }

`;

const InputStarWrapper = styled.div`
  fontSize: 25px;
  color: #FDD700;
  cursor: pointer;
`;

class RatingStars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStars: [1, 2, 3, 4, 5],
      rating: this.props.rating || 0,
      hovered: 0,
      selectedIcon: '★',
      deselectedIcon: '☆',
    };
    this.setRating = this.setRating.bind(this);
    this.hoverRating = this.hoverRating.bind(this);
  }

  setRating(inputRating, callback) {
    this.setState({
      rating: inputRating,
    });
    callback();
  }

  hoverRating(rating) {
    this.setState({
      hovered: rating,
    });
  }

  render() {
    let staticStars;
    let inputStars;
    if (this.props.rating) {
      staticStars = (
        <StarsContainer>
          <StarsContainer className="top" rating={this.props.rating}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </StarsContainer>
          <StarsContainer className="bottom">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </StarsContainer>
        </StarsContainer>
      );
    } else {
      inputStars = (
        <InputStarWrapper>
          {this.state.selectedStars.map((star) => {
            const hoverStars = this.state.hovered < star
              ? this.state.deselectedIcon : this.state.selectedIcon;
            return (
              <span
                key={star}
                onClick={(e) => { this.setRating(star, () => this.props.getRating(star)); }}
                onMouseEnter={() => { this.hoverRating(star); }}
                onMouseLeave={() => { this.hoverRating(0); }}
              >
                {this.state.rating < star ? hoverStars : this.state.selectedIcon}
              </span>
            );
          })}
        </InputStarWrapper>
      );
    }

    return (
      <div>
        {staticStars}
        {inputStars}
      </div>
    );
  }
}

export default RatingStars;
