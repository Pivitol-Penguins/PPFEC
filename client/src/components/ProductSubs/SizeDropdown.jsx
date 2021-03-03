import React from 'react';
import FontAwesome from 'react-fontawesome';

import styled from 'styled-components';

const DDWrapper = styled.div`
  position: relative;
  flex-basis 60%;
  flex-grow: 3;
  width: 10vw;
  font-size: 1.6rem;
  user-select: none;
`;

const DDHeader = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border: 1px solid #424242;
  border-radius: 3px;
  background-color: white;
  line-height: 38px;
  cursor: default;
  cursor: pointer;
`;

const DDHeaderTitle = styled.div`
  font-weight: 300;
`;

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
      <DDWrapper>
        <DDHeader
          type="button"
          className="dd-header"
          onClick={this.toggleList}
        >
          <DDHeaderTitle>{headerTitle}</DDHeaderTitle>
          {isListOpen
            ? <FontAwesome name="angle-up" size="2x" />
            : <FontAwesome name="angle-down" size="2x" />}
        </DDHeader>
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
      </DDWrapper>
    );
  }
}

export default SizeDropdown;
