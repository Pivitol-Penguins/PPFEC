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
  justify-content: space-around;
`;

const NameEmailWraper = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  margin: 0 10px;
`;

const ValueButtonWrapper = styled.div`
  display: flex;
  flex-basis: 20%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLabel = styled.span`
  font-weight: 700;
  padding: 5px 0;
`;

const CharateristicsSelectorWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
`;

const StyledForm = styled.form`
  margin: 0 auto;
  padding: 10px 30px;
  background-color: white;
  width: 55vw;
  height: 100%;
  font-family: 'Lato', sans-serif;
  box-shadow: 0 19px 38px #6d6d6d, 0 15px 12px #6d6d6d;
`;

const NameEmailInput = styled.input`
  width: 23vw;
  height: 3vh;
  border-color: #424242;
  margin: 5px 0;
  margin-right: 50px;
  &:focus {
    border: 1px solid #80CCC4;
    outline: none;
    box-shadow: 0 3px 6px #a0a0a0, 0 3px 6px #a0a0a0;
  };
  &:hover {
    box-shadow: 0 3px 6px #a0a0a0, 0 3px 6px #a0a0a0;
  }
`;

const SytledSubmitButton = styled.input`
  float: right;
  font-family: 'Lato', sans-serif;
  background-color: #FFFFFF;
  border: 1px solid #424242;
  height: 6vh;
  width: 15vw;
  margin: 0 12px;
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
  float: right;
  font-family: 'Lato', sans-serif;
  background-color: #FFFFFF;
  border: 1px solid #424242;
  height: 6vh;
  width: 15vw;
  font-size: 15px;
  color: #424242;
  padding: 5px;
  margin: 0 12px;
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
  width: 51.5vw;
  height: 3vh;
  border: 1px solid #424242;
  font-family: 'Lato', sans-serif;
  &:focus {
    border: 1px solid #80CCC4;
    outline: none;
    box-shadow: 0 3px 6px #a0a0a0, 0 3px 6px #a0a0a0;
  };
  &:hover {
    box-shadow: 0 3px 6px #a0a0a0, 0 3px 6px #a0a0a0;
  }
`;

const StyledTextarea = styled.textarea`
  width: 48vw;
  height: 12vh;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  border: 1px solid #424242;
  z-index: 0;
  position: relative;
  padding: 1.5vh 2vw;

  &:focus {
    border: 1px solid #80CCC4;
    outline: none;
    box-shadow: 0 3px 6px #a0a0a0, 0 3px 6px #a0a0a0;
  };
  &:hover {
    box-shadow: 0 3px 6px #a0a0a0, 0 3px 6px #a0a0a0;
  }
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
      // eslint-disable-next-line no-unused-vars
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
        // eslint-disable-next-line no-unused-vars
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
        <VerticalWrapper>
          <StyledLabel>Overall Rating</StyledLabel>
          <RatingStars getRating={this.getRating} />
        </VerticalWrapper>
        <VerticalWrapper>
          <StyledLabel>Do you recommend this product?</StyledLabel>
          <div>
            <input type="radio" name="recommend" value="true" required onChange={this.handleChange} />
            <span>Yes</span>
            <input type="radio" name="recommend" value="false" required onChange={this.handleChange} />
            <span>No</span>
          </div>
        </VerticalWrapper>
        <div>
          <StyledLabel>Charateristics</StyledLabel>
          <ul style={{ padding: '10px', margin: '0 auto' }}>
            {charateristicsKeys.map((key) => (
              <li key={key}>
                <StyledLabel>{key}</StyledLabel>
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
          <StyledLabel>Review Summary</StyledLabel>
          <StyledInput type="text" id="reviewSummary" name="summary" cols="100" maxLength="60" value={this.state.summary} placeholder="Example: Best purchase ever!" onChange={this.handleChange} />
        </VerticalWrapper>
        <VerticalWrapper>
          <StyledLabel>Your Review</StyledLabel>
          <StyledTextarea id="reviewBody" name="body" maxLength="1000" value={this.state.body} placeholder="Why did you like the product or not?" required onChange={this.handleChange} />
        </VerticalWrapper>
        <HorizontalWrapper>
          <StyledLabel>Upload the photos of your purchase</StyledLabel>
          <input type="file" name="photos" onChange={this.handlePhotosUpload} multiple />
        </HorizontalWrapper>
        <NameEmailWraper>
          <VerticalWrapper>
            <StyledLabel>Your Nickname</StyledLabel>
            <NameEmailInput type="text" id="reviewer_name" name="name" maxLength="60" value={this.state.name} placeholder="Example: jackson11!" required onChange={this.handleChange} />
          </VerticalWrapper>
          <VerticalWrapper>
            <StyledLabel>Your Email</StyledLabel>
            <NameEmailInput type="email" id="email" name="email" maxLength="60" value={this.state.email} placeholder="Example: jackson11@mail.com" required onChange={this.handleChange} />
          </VerticalWrapper>
        </NameEmailWraper>

        <SytledSubmitButton type="submit" name="submit" />
        <SytledButton type="button" onClick={this.props.toggle}>Cancel</SytledButton>
      </StyledForm>
    );
  }
}

export default AddReviewForm;
