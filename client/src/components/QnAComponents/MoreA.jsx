import React from 'react';

class MoreA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.func();
  }

  render() {
    return (
      <div>
        {this.props.display ? <button type="submit" onClick={this.handleClick}>More Answers</button> : null}
      </div>
    );
  }
}
export default MoreA;
