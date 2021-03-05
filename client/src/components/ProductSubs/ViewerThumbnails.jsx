import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const Thumbs = styled.div`
  z-index: 10;
  position: absolute;
  left: 14.25vw;
  top: 2vh;
  width: 6vw;
  height: 53vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: scroll;
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

const UpArrow = styled.div`
  color: #e0e0e0;
  font-size: 1rem;
  z-index: 12;
  top: 1vh;
  position: relative;
  &:hover {
    color: #80ccc4;
    transform: scale(1.1);
  };
`;

const DownArrow = styled.div`
  color: #e0e0e0;
  font-size: 1rem;
  z-index: 12;
  bottom: 1vh;
  position: relative;
  &:hover {
    color: #80ccc4;
    transform: scale(1.1);
  };
`;

class ViewerThumbnails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyle: null,
      style_id: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.clickThumbNavHandler = this.clickThumbNavHandler.bind(this);
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

  clickThumbNavHandler(event) {
    this.props.indexUpdater(Number(event.target.id));
  }

  render() {
    if (this.props.images) {
      return (
        <Thumbs>
          <UpArrow onClick={this.clickThumbNavHandler}><FontAwesome id="-1" name="angle-up" size="2x" /></UpArrow>
          {this.props.images.map((image, index) => {
            if (Number(index) >= this.props.start && Number(index) <= this.props.end) {
              return (
                <ImageContainer key={image.url}>
                  <Image
                    onClick={this.clickHandler}
                    src={image.thumbnail_url}
                    alt={this.props.id}
                    id={index}
                  />
                </ImageContainer>
              );
            }
          })}
          <DownArrow onClick={this.clickThumbNavHandler}><FontAwesome id="1" name="angle-down" size="2x" /></DownArrow>
        </Thumbs>
      );
    }
    return <div>.</div>;
  }
}

export default ViewerThumbnails;
