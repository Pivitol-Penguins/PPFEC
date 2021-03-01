import React from 'react';
import Product from './Product.jsx';
import QnA from './QnA.jsx';
import Reviews from './Reviews.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetails: null,
      productStyles: null,
      reviews: null,
      reviewsMeta: null,
      questions: null,
    }
  }

  componentDidMount() {
    var path = window.location.pathname;
    axios.get(path.slice(-6))
    .then((res)=> {
      this.setState({
        productDetails: res.data[0],
        productStyles: res.data[1],
        reviews: res.data[2],
        reviewsMeta: res.data[3],
        questions: res.data[4],
      })
    })
    .catch((err) => {console.log(err)})
  }


  render() {
    if (this.state.productDetails) {
      return (
        <div>
          <Product productDetails={this.state.productDetails} productStyles={this.state.productStyles} />
          <QnA questions={this.state.questions} />
          <Reviews reviews={this.state.reviews} reviewsMeta={this.state.reviewsMeta} />
        </div>
      );
    } else {
      return <div></div>
    }
  }
}

export default App;