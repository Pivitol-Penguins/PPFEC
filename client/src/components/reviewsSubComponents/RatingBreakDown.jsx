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
  width: 12vw;
  position: relative;
`;

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

const Background = styled(BaseBox)`
  background: #c1bdbd;
  width: 100%;
`;

const Percentage = styled(BaseBox)`
  background: green;
  width: ${({ percent }) => percent}%;
`;

const RecommendPercentage = styled.div`
  margin: 0 auto;
  padding-top: 18px;
  padding-bottom: 5px;
  font-size: 15px;
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
    return Math.round((Number(reviewsMeta.recommended.true)
    / (Number(reviewsMeta.recommended.true) + Number(reviewsMeta.recommended.false))) * 100);
  }

  render() {
    const { stars } = this.state;
    return (
      <div>
        <div>
          {stars.map((star) => (
            <BreakDownWrapper key={star + this.getPercentage(star)}>
              <ClickTag onClick={(e) => { this.props.starFilter(star); e.preventDefault(); }}>
                {star}
                {' '}
                stars
              </ClickTag>
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
