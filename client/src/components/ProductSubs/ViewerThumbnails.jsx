import React from 'react';
import styled from 'styled-components';

const Thumbs = styled.div`
  z-index: 10;
  position: absolute;
  left: 14.5vw;
  top: 4.5vh;
  width: 8vw;
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const ImageContainer = styled.div`
  margin: 1vh 0;
  border: 2px solid #aeaeae;
  height: 65px;
  width: 65px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

class ViewerThumbnails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyle: null,
      style_id: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.setState({
      currentStyle: this.props.images[0].name,
      style_id: this.props.images[0].style_id,
    });
  }

  clickHandler(event) {
    this.setState({
      currentStyle: event.target.id,
    }, () => this.props.clickedThumb(this.state.currentStyle));
  }

  render() {
    if (this.props.images) {
      return (
        <Thumbs>
          {this.props.images.map((image, index) => (
            <ImageContainer key={image.url}>
              <Image
                onClick={this.clickHandler}
                src={image.thumbnail_url}
                alt={this.props.id}
                id={index}
              />
            </ImageContainer>
          ))}
        </Thumbs>
      );
    }
    return <div>.</div>;
  }
}

export default ViewerThumbnails;
