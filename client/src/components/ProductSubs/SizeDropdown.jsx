import React from 'react';
import FontAwesome from 'react-fontawesome';

import styled from 'styled-components';

const DDWrapper = styled.div`
  position: relative;
  width: 65%;
  font-size: 0;
  user-select: none;
`;

const DDHeader = styled.button`
  font-size: 1rem;
  position: relative;
  height: 7vh;
  width: 100%;
  padding: 0 1.25vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: #424242;
  border: 1px solid #424242;
  cursor: default;
  cursor: pointer;
`;

const DDHeaderTitle = styled.div`
  font-weight: 600;
`;

const DDList = styled.div`
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%;
  max-height: 25vh;
  overflow-y: scroll;
  font-weight: 400;
  box-shadow: 0px 0px 5px #a0a0a0;
`;

const DDListItem = styled.button`
  display: inline-block;
  overflow: hidden;
  width: 100%;
  padding: 8px 10px;
  font-size: 1rem;
  cursor: default;
  cursor: pointer;
  background-color: white;
  border: none;
  border-bottom: 1px solid #aeaeae;
  &:hover {
    border-bottom: 2px solid #424242;
    border-top: 1px solid #aeaeae;
    transform: scale(1.1);
  };
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
    }, () => resetThenSet(item.quantity, item.size));
  }

  render() {
    const { isListOpen, headerTitle } = this.state;
    const { list } = this.props;

    return (
      <DDWrapper>
        <DDHeader
          onClick={this.toggleList}
        >
          <DDHeaderTitle>{headerTitle}</DDHeaderTitle>
          {isListOpen
            ? <FontAwesome name="angle-up" size="2x" />
            : <FontAwesome name="angle-down" size="2x" />}
        </DDHeader>
        {isListOpen && (
          <DDList
            role="list"
          >
            {list.map((item) => {
              if (item.quantity > 0) {
                return (
                  <DDListItem
                    type="button"
                    key={item.size}
                    onClick={() => this.selectItem(item)}
                  >
                    {item.size}
                  </DDListItem>
                );
              }
            })}
          </DDList>
        )}
      </DDWrapper>
    );
  }
}

export default SizeDropdown;
