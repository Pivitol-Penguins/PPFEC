import React from 'react';
import styled from 'styled-components';

const Thumbs = styled.div`
  z-index: 10;
  position: absolute;
  left: 17vw; top: 15vh; right: 0; bottom: 0;
  width: 8vw;
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const Image = styled.img`
  margin: 5px;
  border: 2px solid #aeaeae;
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
      currentStyle: event.target.alt,
      style_id: event.target.id,
    });
  }

  render() {
    if (this.props.images) {
      return (
        <Thumbs>
          {this.props.images.map((image) => <Image onClick={this.clickHandler} src={image.thumbnail_url} key={this.props.id} width="70px" height="70px" />)}
        </Thumbs>
      );
    }
    return <div>.</div>;
  }
}

export default ViewerThumbnails;
