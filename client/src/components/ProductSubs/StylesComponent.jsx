import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Style = styled.p`
  margin-left: 1vw;
  font-weight: bold;
  color: #424242
`;

const SelectedStyle = styled.p`
  margin-left: 1vw;
  color: #424242
`;

const Thumbs = styled.div`
flex-basis: 90%
display: flex;
  flex-wrap: wrap;
  margin: 0;
`;

const Image = styled.img`
  flex: 1 0 21%;
  margin: 5px;
  border-radius: 100%;
`;

class Styles extends React.Component {
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
      currentStyle: this.props.styles.results[0].name,
      style_id: this.props.styles.results[0].style_id,
    });
  }

  clickHandler(event) {
    this.setState({
      currentStyle: event.target.alt,
      style_id: event.target.id,
    });
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
            { this.props.styles.results.map((image) => <Image onClick={this.clickHandler} key={image.style_id} id={image.style_id} src={image.photos[0].thumbnail_url} alt={image.name} width="70" height="70" />)}
          </Thumbs>
        </StyleWrapper>
      );
    }
    return <div>Empty</div>;
  }
}

export default Styles;
