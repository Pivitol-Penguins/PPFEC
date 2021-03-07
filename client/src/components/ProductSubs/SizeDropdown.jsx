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
  &:focus {
    outline: none;
    z-index: 1;
    border-top: 1px solid #e0e0e0;
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #aeaeae;
    box-shadow: 0 3px 6px #a0a0a0, 0 3px 6px #a0a0a0;
  };
`;

const DDHeaderTitle = styled.div`
  font-weight: 600;
`;

const DDList = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  max-height: 25vh;
  overflow-y: scroll;
  overflow-x: hidden;
  font-weight: 400;
  box-shadow: 0 3px 6px #a0a0a0, 0 3px 6px #a0a0a0;
`;

const DDListItem = styled.button`
  display: inline-block;
  overflow: hidden;
  width: 100%;
  padding: 8px 10px;
  font-weight: 400;
  color: #424242;
  font-size: 1rem;
  cursor: default;
  cursor: pointer;
  border-width: 0;
  border-style: none;
  border-color: clear;
  background-color: white;
  border: 1px solid clear;
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
    this.close = this.close.bind(this);
  }

  componentDidUpdate() {
    const { isListOpen } = this.state;
    setTimeout(() => {
      if (isListOpen) {
        window.addEventListener('click', this.close);
      } else {
        window.removeEventListener('click', this.close);
      }
    }, 0);
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

  close() {
    this.setState({
      isListOpen: false,
    });
  }

  render() {
    const { isListOpen, headerTitle } = this.state;
    const { list } = this.props;

    return (
      <DDWrapper>

        <DDHeader onClick={this.toggleList}>
          <DDHeaderTitle>{headerTitle}</DDHeaderTitle>
          {isListOpen
            ? <FontAwesome name="angle-up" size="2x" />
            : <FontAwesome name="angle-down" size="2x" />}
        </DDHeader>

        {isListOpen && (
          <DDList role="list">
            {list.map((item) => (
              item.quantity > 0 && (
                <DDListItem type="button" key={item.size} onClick={() => this.selectItem(item)}>
                  {item.size}
                </DDListItem>
              )
            ))}
          </DDList>
        )}

      </DDWrapper>
    );
  }
}

export default SizeDropdown;
