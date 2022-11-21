import React, { Component } from 'react';
import MemoryCard from './Cards';

export class GameBoard extends Component {

  state = {
    memoryCards: []
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.memoryCards !== this.state.memoryCards) {
      this.setState({
        memoryCards: this.state.memoryCards
      });
    }
  }
  componentDidMount() {
    this.setState({
      memoryCards: this.props.cards
    });
  }
}