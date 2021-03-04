import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  margin-bottom: 10px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Style = styled.p`
  font-weight: 700;
  color: #424242;
`;

const SelectedStyle = styled.p`
  margin-left: 1vw;
  font-weight: 300;
  color: #424242;
`;

const Thumbs = styled.div`
flex-basis: 90%
display: flex;
  flex-wrap: wrap;
  margin: 0;
`;

const Image = styled.img`
  flex: 1 0 22%;
  margin: 1vh 1.2vw 1vh 0;
  border: 2px solid #aeaeae;
  border-radius: 100%;
  z-index: 0;
`;

const SelectedImage = styled.img`
  flex: 1 0 22%;
  margin: 1vh 1.2vw 1vh 0;
  border: 3px solid #80ccc4;
  border-radius: 100%;
  z-index: 0;
`;

class Styles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyle: null,
      style_id: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.passUpStyle = this.passUpStyle.bind(this);
  }

  componentDidMount() {
    this.setState({
      currentStyle: this.props.styles.results[0].name,
      style_id: this.props.styles.results[0].style_id,
    });
  }

  clickHandler(event) {
    event.preventDefault();
    this.setState({
      currentStyle: event.target.alt,
      style_id: event.target.id,
    }, () => this.passUpStyle(this.state.style_id));
  }

  passUpStyle(style) {
    this.props.getStyleID(style);
  }

  render() {
    if (this.state.currentStyle) {
      return (
        <StyleWrapper>
          <TextWrapper>
            <Style>STYLE &gt;</Style>
            <SelectedStyle>{this.state.currentStyle.toUpperCase()}</SelectedStyle>
          </TextWrapper>
          <Thumbs>
            { this.props.styles.results.map((image) => {
              if (image.style_id === this.state.style_id) {
                return <SelectedImage onClick={this.clickHandler} key={image.style_id} id={image.style_id} src={image.photos[0].thumbnail_url} alt={image.name} width="65" height="65" />;
              }
              if (image.style_id !== this.state.style_id) {
                return <Image onClick={this.clickHandler} key={image.style_id} id={image.style_id} src={image.photos[0].thumbnail_url} alt={image.name} width="65" height="65" />;
              }
              return <div>Hello</div>;
            })}
          </Thumbs>
        </StyleWrapper>
      );
    }
    return <div>Empty</div>;
  }
}

export default Styles;
