import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 'Search Here',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value }, () => {
      if (this.state.input.length > 2) {
        this.props.func(this.state.input);
      } else {
        this.props.reset();
      }
    });
  }

  handleClick() {
    this.setState({ input: '' });
  }

  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleChange} onClick={this.handleClick} />
      </div>
    );
  }
}
export default Search;
