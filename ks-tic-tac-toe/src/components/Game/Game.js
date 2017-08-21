import React, {Component} from 'react';
import Board from '../Board';
import PropTypes from 'prop-types';

class Game extends Component {
  render() {
    return (
      <div>
        <span data-hook="player1">{this.props.player1}</span>
        <span data-hook="player2">{this.props.player2}</span>
        <Board/>
      </div>);
  }
}

Game.propTypes = {
  player1: PropTypes.string.isRequired,
  player2: PropTypes.string.isRequired
};

export default Game;
