import React from 'react';
import styled from 'styled-components';
import FilterMessage from './FilterMessage.jsx';
import CountTag from './CountTag.jsx';

const BreakDownWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  margin: 0 auto;
  padding: 5px 10px;
  // padding-top: 5px;
  // padding-bottom: 5px;
`;

const BarContainer = styled.div`
  height: 10px;
  width: 12vw;
  position: relative;

  &:hover {
    visibility: visible;
  }
`;

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

const Background = styled(BaseBox)`
  background: #e0e0e0;
  width: 100%;

`;

const Percentage = styled(BaseBox)`
  background: #80ccc4;
  width: ${({ percent }) => percent}%;

`;

const RecommendPercentage = styled.div`
  width: 18vw;
  margin: 0 auto;
  padding-top: 18px;
  padding-bottom: 5px;
  font-size: 1vw;
`;

const ClickTag = styled.div`
  padding: 2px 1vw 0 0;
  text-decoration:underline;
  &:hover {
    cursor: pointer;
    color: #80CCC4;
    transform: scale(1.1);
  }
`;

class RatingBreakDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: [5, 4, 3, 2, 1],
      isCountTagOn: false,
      hoverBar: null,
    };
    this.getPercentage = this.getPercentage.bind(this);
    this.getRecommendRate = this.getRecommendRate.bind(this);
    this.handleStarFilterClick = this.handleStarFilterClick.bind(this);
    this.showRatingCount = this.showRatingCount.bind(this);
  }

  handleStarFilterClick(event, star) {
    // console.log('IN RATING BREAK DOWN', this.state.filter);
    this.props.starFilter(star);
  }

  getPercentage(starNumber) {
    const { reviewsMeta } = this.props;
    let totalRating = 0;
    let percentage = 0;
    const stars = Object.keys(reviewsMeta.ratings);
    stars.forEach((star) => {
      totalRating += Number(reviewsMeta.ratings[star]);
    });
    if (!stars.includes(starNumber.toString())) {
      return percentage;
    }
    percentage = (reviewsMeta.ratings[starNumber] / totalRating) * 100;
    return percentage;
  }

  getRecommendRate() {
    const { reviewsMeta } = this.props;
    return Math.round((Number(reviewsMeta.recommended.true)
    / (Number(reviewsMeta.recommended.true) + Number(reviewsMeta.recommended.false))) * 100);
  }

  showRatingCount(event) {
    // event.persist();
    // console.log(event.target.id);
    this.setState({
      hoverBar: Number(event.target.id),
    });
    event.preventDefault();
  }

  render() {
    const { stars } = this.state;
    let filterMessage;
    if (this.props.filterStars.length > 0) {
      filterMessage = (
        <FilterMessage
          filterStars={this.props.filterStars}
          handleRemoveLabelClick={this.props.removeAllFilter}
        />
      );
    }
    return (
      <div>
        <div>
          {stars.map((star) => (
            <BreakDownWrapper key={star + this.getPercentage(star)}
            id={star}
            onMouseEnter={(e) => this.showRatingCount(e)}
            onMouseLeave={() => this.setState({hoverBar: null})}
            >
              <ClickTag onClick={(e) => this.handleStarFilterClick(e, star)}>
                {star}
                {' '}
                stars
              </ClickTag>
              <BarContainer>
                {this.state.hoverBar === star
                && <CountTag ratingCount={this.props.reviewsMeta.ratings[star]} />}
                <Background />
                <Percentage percent={this.getPercentage(star)} />
              </BarContainer>
            </BreakDownWrapper>
          ))}
        </div>
        {filterMessage}
        <RecommendPercentage>
          {this.getRecommendRate()}
          % of reviews recommend this product
        </RecommendPercentage>
      </div>
    );
  }
}

export default RatingBreakDown;
