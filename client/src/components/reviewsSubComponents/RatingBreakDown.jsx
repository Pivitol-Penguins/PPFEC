import React from 'react';
import styled from 'styled-components';

const BreakDownWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
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

class RatingBreakDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.getPercentage = this.getPercentage.bind(this);
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
        <div>100% of reviews recommend this product</div>
      </div>
    );
  }
}

export default RatingBreakDown;
