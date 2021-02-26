import React from 'react';
import Product from './Product.jsx';
import QnA from './QnA.jsx';
import Reviews from './Reviews.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  //componentdidmount get request for product id and set state to pass down to components
  componentDidMount() {
    //axios get request to something
    axios.get('/products/14931')
    .then((data)=>{console.log(data.data)})
    .catch((err) => {console.log(err)})
  }


  render() {
    return (
      <div>
        App
        <Product />
        <QnA />
        <Reviews />
      </div>
    );
  }
}

export default App;
