/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';

const StarsContainer = styled.div`
  unicode-bidi: bidi-override;
  color: #c5c5c5;
  font-size: 22px;
  height: 22px;
  line-height: 22px;
  position: relative;
  padding: 0;
  text-shadow: 0px 1px 0 #a2a2a2;

  &.top {
    width: ${({ rating }) => (rating / 5) * 100}%;
    color: #FDD700;
    padding: 0;
    position: absolute;
    z-index: 1;
    display: block;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  &.bottom {
    padding: 0;
    display: block;
    z-index: 0;
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

  setRating(inputRating) {
    this.setState({
      rating: inputRating,
    });

    if (this.props.getRating) {
      this.props.getRating(this.state.rating);
    }
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
                onClick={() => { this.setRating(star); }}
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
