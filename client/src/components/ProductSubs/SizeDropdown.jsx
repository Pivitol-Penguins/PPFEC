import React from 'react';
import FontAwesome from 'react-fontawesome';

import styled from 'styled-components';

class SizeDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isListOpen: false,
      headerTitle: this.props.title,
    };
    this.toggleList = this.toggleList.bind(this);
    this.selectItem = this.selectItem.bind(this);
  }

  toggleList() {
    this.setState((prevState) => ({
      isListOpen: !prevState.isListOpen,
    }));
  }

  selectItem(item) {
    const { resetThenSet } = this.props;
    this.setState({
      headerTitle: item.size,
      isListOpen: false,
    }, () => resetThenSet(item.size, item.quantity));
  }

  render() {
    const { isListOpen, headerTitle } = this.state;
    const { list } = this.props;

    return (
      <div className="dd-wrapper">
        <button
          type="button"
          className="dd-header"
          onClick={this.toggleList}
        >
          <div className="dd-header-title">{headerTitle}</div>
          {isListOpen
            ? <FontAwesome name="angle-up" size="2x" />
            : <FontAwesome name="angle-down" size="2x" />}
        </button>
        {isListOpen && (
          <div
            role="list"
            className="dd-list"
          >
            {list.map((item) => {
              if (item.quantity > 0) {
                return (
                  <button
                    type="button"
                    key={item.size}
                    className="dd-list-item"
                    onClick={() => this.selectItem(item)}
                  >
                    {item.size}
                    {' '}
                    {item.selected && <FontAwesome name="check" />}
                  </button>
                );
              }
            })}
          </div>
        )}
      </div>
    );
  }
}

export default SizeDropdown;
