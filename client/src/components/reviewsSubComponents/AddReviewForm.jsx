import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RatingStars from './RatingStars.jsx';

// product Charateristics
const productCharacteristics = {
  Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
  Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
  Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
  Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
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
      productId: this.props.productId,
      rating: 0,
      recommend: true,
      summary: '',
      body: '',
      name: '',
      email: '',
    };
    this.getRating = this.getRating.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    axios.post();
    this.props.toggle();
    event.preventDefault();
  }

  getRating(inputRating) {
    this.setState({
      rating: inputRating,
    });
  }

  render() {
    const charateristicsKeys = Object.keys(this.props.characteristics);
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <h2>Write A Review</h2>
        <RatingWraper>
          <span>Overall Rating</span>
          <RatingStars getRating={this.getRating} />
        </RatingWraper>
        <div>
          <span>Do you recommend this product?</span>
          <input type="radio" name="recommend" value="true" required onChange={this.handleChange} />
          <label>Yes</label>
          <input type="radio" name="recommend" value="false" required onChange={this.handleChange} />
          <label>No</label>
        </div>
        <div>
          <span>Charateristics</span>
          {charateristicsKeys.map((key) => (
            <div key={key}>
              <div>{key}</div>
              <CharateristicsSelectorWrapper>
                {productCharacteristics[key].map((value, index) => (
                  <ValueButtonWrapper key={value}>
                    <span>{value}</span>
                    <input type="radio" name={this.props.characteristics[key].id} value={index + 1} required onChange={this.handleChange} />
                  </ValueButtonWrapper>
                ))}
              </CharateristicsSelectorWrapper>
            </div>
          ))}
        </div>
        <div>
          <label>Review Summary</label>
          <input type="text" id="reviewSummary" name="summary" cols="100" maxLength="60" placeholder="Example: Best purchase ever!" onChange={this.handleChange} />
        </div>
        <div>
          <label>Your Review</label>
          <div>
            <textarea id="reviewBody" name="body" cols="60" rows="10" maxLength="1000" placeholder="Why did you like the product or not?" required onChange={this.handleChange} />
          </div>
        </div>
        <div>
          <label>Upload the photos of your purchase</label>
          <div><input type="file" name="photos" value={this.state.photos} onChange={this.handleChange} /></div>
        </div>
        <div>
          <span>Your Nickname</span>
          <input type="text" id="reviewer_name" name="name" maxLength="60" placeholder="Example: jackson11!" required onChange={this.handleChange}/>
        </div>
        <div>
          <span>Your Email</span>
          <input type="email" id="email" name="email" maxLength="60" placeholder="Example: jackson11@mail.com" required onChange={this.handleChange}/>
        </div>
        <input type="submit" name="submit" />
        <button type="button" onClick={this.props.toggle}>Cancel</button>
      </StyledForm>

    );
  }
}

export default AddReviewForm;
