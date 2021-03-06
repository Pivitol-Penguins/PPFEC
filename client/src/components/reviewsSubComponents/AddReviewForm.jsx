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
  font-family: 'Lato', sans-serif;
  box-shadow: 0 19px 38px #6d6d6d, 0 15px 12px #6d6d6d;
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
          <span>Yes</span>
          <input type="radio" name="recommend" value="false" required onChange={this.handleChange} />
          <span>No</span>
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
          <span>Review Summary</span>
          <input type="text" id="reviewSummary" name="summary" cols="100" maxLength="60" value={this.state.summary} placeholder="Example: Best purchase ever!" onChange={this.handleChange} />
        </div>
        <div>
          <span>Your Review</span>
          <div>
            <textarea id="reviewBody" name="body" cols="60" rows="10" maxLength="1000" value={this.state.body} placeholder="Why did you like the product or not?" required onChange={this.handleChange} />
          </div>
        </div>
        <div>
          <span>Upload the photos of your purchase</span>
          <div>
            <input type="file" name="photos" ref={this.photosUpload} onChange={this.handlePhotosUpload} multiple />
          </div>
        </div>
        <div>
          <span>Your Nickname</span>
          <input type="text" id="reviewer_name" name="name" maxLength="60" value={this.state.name} placeholder="Example: jackson11!" required onChange={this.handleChange} />
        </div>
        <div>
          <span>Your Email</span>
          <input type="email" id="email" name="email" maxLength="60" value={this.state.email} placeholder="Example: jackson11@mail.com" required onChange={this.handleChange} />
        </div>
        <input type="submit" name="submit" />
        <button type="button" onClick={this.props.toggle}>Cancel</button>
      </StyledForm>

    );
  }
}

export default AddReviewForm;
