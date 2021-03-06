import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const Thumbs = styled.div`
  z-index: 1;
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
  margin: .85vh 0;
  height: 65px;
  width: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ViewerImageContainer = styled.div`
  margin: .85vh 0;
  height: 65px;
  width: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Highlight = styled.div`
  z-index: 2;
  position: absolute;
  margin-top: -4px;
  height: 3px;
  color: #80ccc4;
  background: #80ccc4;
  width: 65px;
  border-radius: 15px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 2px;
  &:hover {transform: scale(1.05);};
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
            if (this.props.viewerIndex === Number(index)
            && Number(index) >= this.props.start
            && Number(index) <= this.props.end) {
              return (
                <div>
                  <ViewerImageContainer key={image.url}>
                    <Image
                      onClick={this.clickHandler}
                      src={image.thumbnail_url}
                      alt={this.props.id}
                      id={index}
                    />
                  </ViewerImageContainer>
                  <Highlight />
                </div>
              );
            }
            if (this.props.viewerIndex !== Number(index)
            && Number(index) >= this.props.start
            && Number(index) <= this.props.end) {
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
