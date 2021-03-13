import React from 'react';
import styled from 'styled-components';
import Item from './Item.jsx';

const QList = styled.div`
  max-height: 70vh;
  overflow-y: scroll;
  margin-bottom: 2vh;
  ::-webkit-scrollbar {
    display: none;
  };
  -ms-overflow-style: none;  
  -scrollbar-width: none;
`;

// /* Hide scrollbar for Chrome, Safari and Opera */
// .example::-webkit-scrollbar {
//   display: none;
// }

// /* Hide scrollbar for IE, Edge and Firefox */
// .example {
//   -ms-overflow-style: none;  /* IE and Edge */
//   scrollbar-width: none;  /* Firefox */
// }

const NoR = styled.div`
display: flex;
justify-content: center;
color: #424242;
font-family: 'Lato', sans-serif;
font-weight: 700;
`;

const LoadingSpan = styled.span`
  display: block;
  color :#42424275;

  &.all-load {
    display: none;
  }
`;

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allLoaded: false,
      prevY: 0,
    };
  }

  componentDidMount() {
    const options = {
      root: document.querySelector('#QList'),
      rootMargin: '0px',
      threshold: 0,
    };
    this.observer = new IntersectionObserver(this.handleObserver.bind(this), options);
    this.observer.observe(this.loadingRef);
  }

  handleObserver(entities) {
    // console.log(entities[0]);

    const { y } = entities[0].boundingClientRect;
    if (this.state.prevY > y) {
      // this.setState({
      //   loading: true,
      // });
      setTimeout(this.props.loadTwo, 1000);
    }
    this.setState({ prevY: y });
    if (this.props.items.length === this.props.data.length) {
      this.setState({
        allLoaded: true,
      });
    }
  }

  render() {
    return (
      <QList id="QList">
        {this.props.items.length === 0
          ? <NoR>NOTHING HERE...</NoR>
          : this.props.items.map((item) => (
            <Item
              item={item}
              key={item.question_id}
              id={item.question_id}
              name={this.props.name}
            />
          ))}
        <LoadingSpan
          className={(this.state.allLoaded) ? 'all-load' : undefined}
          // eslint-disable-next-line no-return-assign
          ref={(loadingRef) => (this.loadingRef = loadingRef)}
        >
          Loading...
        </LoadingSpan>
      </QList>

    );
  }
}

export default QuestionList;
