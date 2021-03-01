import React from 'react';
import styled from 'styled-components';

const BarContainer = styled.div`
  height: 10px;
  width: 250px;
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
    return (
      <div>
        <div>
          <div>
            <a href="">5 stars</a>
            <BarContainer>
              <Background />
              <Percentage percent={this.getPercentage(5)} />
            </BarContainer>
          </div>
          <div>
            <a href="">4 stars</a>
            <BarContainer>
              <Background />
              <Percentage percent={this.getPercentage(4)} />
            </BarContainer>
          </div>
          <div>
            <a href="">3 stars</a>
            <BarContainer>
              <Background />
              <Percentage percent={this.getPercentage(3)} />
            </BarContainer>
          </div>
          <div>
            <a href="">2 stars</a>
            <BarContainer>
              <Background />
              <Percentage percent={this.getPercentage(2)} />
            </BarContainer>
          </div>
          <div>
            <a href="">1 stars</a>
            <BarContainer>
              <Background />
              <Percentage percent={this.getPercentage(1)} />
            </BarContainer>
          </div>
        </div>
        <div>100% of reviews recommend this product</div>
      </div>
    );
  }
}

// const RatingBreakDown = ({ reviewsMeta }) => {
//   let totalRating = 0;
//   const stars = Object.keys(reviewsMeta.ratings);
//   stars.forEach((star) => {
//     totalRating += (Number(star) * Number(reviewsMeta.ratings[star]));
//   });

//   return (
//     <div>
//       <div>
//         <div>
//           <a href="">5 stars</a>
//           <span>BAR</span>
//         </div>
//         <div>
//           <a href="">4 stars</a>
//           <span>BAR</span>
//         </div>
//         <div>
//           <a href="">3 stars</a>
//           <span>BAR</span>
//         </div>
//         <div>
//           <a href="">2 stars</a>
//           <span>BAR</span>
//         </div>
//         <div>
//           <a href="">1 stars</a>
//           <span>BAR</span>
//         </div>
//       </div>
//       <div>100% of reviews recommend this product</div>
//     </div>
//   );
// };

export default RatingBreakDown;
