import React from 'react';
import styled from 'styled-components';
import RatingStars from './RatingStars.jsx';

// product Charateristics
const productCharateristics = {
  Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
  Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
  Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
  Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
};

const StyledForm = styled.form`
  background-color: white;
  width: 500px;
  height:800px;
`;

class AddReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const charateristicsKeys = Object.keys(productCharateristics);
    return (
      <StyledForm>
        <h2>Write A Review</h2>
        <div>
          <span>Overall Rating</span>
          <RatingStars percent={0} />
        </div>
        <div>
          <span>Do you recommend this product?</span>
          <input type="radio" name="recommend" value="true" />
          <label>Yes</label>
          <input type="radio" name="recommend" value="false" />
          <label>No</label>
        </div>
        <div>
          <span>Charateristics</span>
          {charateristicsKeys.map((key) => (
            <div key={key + productCharateristics[key][0]}>
              <div>{key}</div>
              {productCharateristics[key].map((value) => (
                <div key={value}>
                  <input type="radio" name="recommend" value="" />
                  <span>{value}</span>
                </div>

              ))}
              {/* <input type="radio" name="recommend" value={index} checked />
                 */}
            </div>
          ))}
        </div>
        <input type="submit" name="submit" />
      </StyledForm>
    );
  }
}

export default AddReviewForm;
