import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RatingStars from './RatingStars.jsx';

// product Charateristics
const productCharacteristics = {
  Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
  Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'OK', 'Comfortable', 'Perfect'],
  Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
  Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
  Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
};

const VerticalWrapper = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  padding: 10px 0;
`;

const HorizontalWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justisfy-content: space-around;
`;

const ValueButtonWrapper = styled.div`
  display: flex;
  flex-basis: 20%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CharateristicsSelectorWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
`;

const StyledForm = styled.form`
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  width: 55vw;
  height: 100%;
  font-family: 'Lato', sans-serif;
  box-shadow: 0 19px 38px #6d6d6d, 0 15px 12px #6d6d6d;
`;

const SytledSubmitButton = styled.input`
  font-family: 'Lato', sans-serif;
  background-color: #FFFFFF;
  border: 1px solid #424242;
  height: 6vh;
  width: 20vw;
  font-size: 15px;
  color: #424242;
  &:hover {
    cursor: pointer;
    color: #80CCC4;
    border: 1px solid #80CCC4;
    box-shadow: 0 3px 6px #a0a0a0, 0 3px 6px #a0a0a0;
  };
  &:focus {
    outline: none;
    box-shadow: none;
  };
`;

const SytledButton = styled.button`
  font-family: 'Lato', sans-serif;
  background-color: #FFFFFF;
  border: 1px solid #424242;
  height: 6vh;
  width: 20vw;
  font-size: 15px;
  color: #424242;
  padding: 5px;
  &:hover {
    cursor: pointer;
    color: #80CCC4;
    border: 1px solid #80CCC4;
    box-shadow: 0 3px 6px #a0a0a0, 0 3px 6px #a0a0a0;
  };
  &:focus {
    outline: none;
    box-shadow: none;
  };
`;

const StyledInput = styled.input`
  width: 100%;
  height: 3vh;
  border-color: #424242;
`;

class AddReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.productId,
      rating: 0,
      characteristics: {},
      recommend: undefined,
      summary: '',
      body: '',
      name: '',
      email: '',
      photos: [],
    };
    this.getRating = this.getRating.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePhotosUpload = this.handlePhotosUpload.bind(this);
  }

  handleChange(event) {
    if (!Number.isNaN(Number(event.target.name))) {
      event.persist();
      this.setState((prevState) => {
        Object.assign(prevState.characteristics,
          { [event.target.name]: Number(event.target.value) });
      });
    } else if (event.target.name === 'recommend') {
      if (event.target.value === 'true') {
        this.setState({
          recommend: true,
        });
      } else {
        this.setState({
          recommend: false,
        });
      }
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  }

  handlePhotosUpload(event) {
    event.persist();
    const uploadPhotos = event.target.files;
    if (uploadPhotos.length > 5) {
      alert('The number of the photos you selected is exceeded 5.');
    } else {
      Object.entries(uploadPhotos).forEach(([number, photo]) => {
        console.log(photo.name);
        this.setState((prevState) => ({
          photos: [...prevState.photos, photo],
        }));
      });
    }
  }

  handleSubmit(event) {
    const formdata = new FormData();
    Object.entries(this.state).forEach(([key, value]) => {
      if (key === 'photos') {
        Object.entries(this.state.photos).forEach(([photoKey, photo]) => {
          formdata.append('photos', photo);
        });
      } else {
        formdata.append(key, JSON.stringify(value));
      }
    });
    const path = window.location.pathname;
    axios.post(`${path.slice(-6)}reviews`, formdata, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then((res) => {
        this.props.loadReview(res.data.results);
      })
      .catch((err) => { throw err; })
      .then(() => {
        this.props.toggle();
      });
    // event.preventDefault();
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
        <VerticalWrapper>
          <span>Overall Rating</span>
          <RatingStars getRating={this.getRating} />
        </VerticalWrapper>
        <VerticalWrapper>
          <span>Do you recommend this product?</span>
          <div>
            <input type="radio" name="recommend" value="true" required onChange={this.handleChange} />
            <span>Yes</span>
            <input type="radio" name="recommend" value="false" required onChange={this.handleChange} />
            <span>No</span>
          </div>
        </VerticalWrapper>
        <div>
          <span>Charateristics</span>
          <ul>
            {charateristicsKeys.map((key) => (
              <li key={key}>
                <div>{key}</div>
                <CharateristicsSelectorWrapper>
                  {productCharacteristics[key].map((value, index) => (
                    <ValueButtonWrapper key={value}>
                      <span>{value}</span>
                      <input type="radio" name={this.props.characteristics[key].id} value={index + 1} required onChange={this.handleChange} />
                    </ValueButtonWrapper>
                  ))}
                </CharateristicsSelectorWrapper>
              </li>
            ))}
          </ul>
        </div>
        <VerticalWrapper>
          <span>Review Summary</span>
          <StyledInput type="text" id="reviewSummary" name="summary" cols="100" maxLength="60" value={this.state.summary} placeholder="Example: Best purchase ever!" onChange={this.handleChange} />
        </VerticalWrapper>
        <VerticalWrapper>
          <span>Your Review</span>
          <textarea id="reviewBody" name="body" cols="60" rows="10" maxLength="1000" value={this.state.body} placeholder="Why did you like the product or not?" required onChange={this.handleChange} />
        </VerticalWrapper>
        <HorizontalWrapper>
          <span>Upload the photos of your purchase</span>
          <input type="file" name="photos" onChange={this.handlePhotosUpload} multiple />
        </HorizontalWrapper>
        <HorizontalWrapper>
          <VerticalWrapper>
            <span>Your Nickname</span>
            <input type="text" id="reviewer_name" name="name" maxLength="60" value={this.state.name} placeholder="Example: jackson11!" required onChange={this.handleChange} />
          </VerticalWrapper>
          <VerticalWrapper>
            <span>Your Email</span>
            <input type="email" id="email" name="email" maxLength="60" value={this.state.email} placeholder="Example: jackson11@mail.com" required onChange={this.handleChange} />
          </VerticalWrapper>
        </HorizontalWrapper>

        <SytledSubmitButton type="submit" name="submit" />
        <SytledButton type="button" onClick={this.props.toggle}>Cancel</SytledButton>
      </StyledForm>

    );
  }
}

export default AddReviewForm;
