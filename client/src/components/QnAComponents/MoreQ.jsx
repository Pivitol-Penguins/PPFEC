import React from 'react';

class MoreQ extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('clicked');
    this.props.func();
  }

  render () {
    return (
      <div>
      {this.props.buttonDisplay ? <button onClick={this.handleClick}>Add More Items</button> : null}
      </div>
    );
  }

}

export default MoreQ;