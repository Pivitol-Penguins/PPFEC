import React from 'react';
import styled from 'styled-components';

const BreakDownWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  margin: 0 auto;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const BarContainer = styled.div`
  height: 10px;
  width: 200px;
  position: relative;
`;

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

const Background = styled(BaseBox)`
  background: grey;
  width: 100%;
`;

const Percentage = styled(BaseBox)`
  background: green;
  width: ${({ percent }) => percent}%;
`;

const RecommendPercentage = styled.div`
  margin: 0 auto;
  padding-top: 5px;
  padding-bottom: 5px;
`;

class RatingBreakDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.getPercentage = this.getPercentage.bind(this);
    this.getRecommendRate = this.getRecommendRate.bind(this);
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
    return Math.floor((Number(reviewsMeta.recommended.true)
    / (Number(reviewsMeta.recommended.true) + Number(reviewsMeta.recommended.false))) * 100);
  }

  render() {
    const starsArr = [5, 4, 3, 2, 1];
    return (
      <div>
        <div>
          {starsArr.map((star) => (
            <BreakDownWrapper key={star + this.getPercentage(star)}>
              <span>
                {star}
                {' '}
                stars
              </span>
              <BarContainer>
                <Background />
                <Percentage percent={this.getPercentage(star)} />
              </BarContainer>
            </BreakDownWrapper>
          ))}
        </div>
        <RecommendPercentage>
          {this.getRecommendRate()}
          % of reviews recommend this product
        </RecommendPercentage>
      </div>
    );
  }
}

export default RatingBreakDown;
