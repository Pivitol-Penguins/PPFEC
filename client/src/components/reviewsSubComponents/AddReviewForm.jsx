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

const characteristicsNumber = {
  Size: 14,
  Width: 15,
  Comfort: 16,
  Quality: 17,
  Length: 18,
  Fit: 19,
};

const RatingWraper = styled.div`
  display: flex;
  align-items: baseline;
`;

const ValueButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CharateristicsSelectorWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
`;

const StyledForm = styled.form`
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  width: 800px;
  height: 100%;
`;

class AddReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      recommend: true,
      characteristics: {
        sizeId: 0,
        widthId: 0,
        comfortId: 0,
        qualityId: 0,
        lengthId: 0,
        fitId: 0,
      },
      summary: '',
      body: '',
      name: '',
      email: '',
    };
    this.getRating = this.getRating.bind(this);
  }

  getRating(inputRating) {
    this.setState({
      rating: inputRating,
    });
  }

  render() {
    const charateristicsKeys = Object.keys(productCharateristics);
    return (
      <StyledForm>
        <h2>Write A Review</h2>
        <RatingWraper>
          <span>Overall Rating</span>
          <RatingStars percent={0} getRating={this.getRating} />
        </RatingWraper>
        <div>
          <span>Do you recommend this product?</span>
          <input type="radio" name="recommend" value="true" required />
          <label>Yes</label>
          <input type="radio" name="recommend" value="false" required />
          <label>No</label>
        </div>
        <div>
          <span>Charateristics</span>
          {charateristicsKeys.map((key) => (
            <div key={key}>
              <div>{key}</div>
              <CharateristicsSelectorWrapper>
                {productCharateristics[key].map((value, index) => (
                  <ValueButtonWrapper key={value}>
                    <span>{value}</span>
                    <input type="radio" name={characteristicsNumber[key]} value={index + 1} required />
                  </ValueButtonWrapper>
                ))}
              </CharateristicsSelectorWrapper>
            </div>
          ))}
        </div>
        <div>
          <label>Review Summary</label>
          <input type="text" id="reviewSummary" name="summary" cols="100" maxLength="60" placeholder="Example: Best purchase ever!" />
        </div>
        <div>
          <label>Your Review</label>
          <div>
            <textarea id="reviewBody" name="body" cols="60" rows="10" maxLength="1000" placeholder="Why did you like the product or not?" required />
          </div>
        </div>
        <div>
          <label>Upload the photos of your purchase</label>
          <div><input type="file" name="photos" /></div>
        </div>
        <div>
          <span>Your Nickname</span>
          <input type="text" id="reviewer_name" name="name" maxLength="60" placeholder="Example: jackson11!" required />
        </div>
        <div>
          <span>Your Email</span>
          <input type="email" id="email" name="email" maxLength="60" placeholder="Example: jackson11@mail.com" required />
        </div>
        <input type="submit" name="submit" />
        <button type="button" onClick={this.props.cancel}>Cancel</button>
      </StyledForm>

    );
  }
}

export default AddReviewForm;
