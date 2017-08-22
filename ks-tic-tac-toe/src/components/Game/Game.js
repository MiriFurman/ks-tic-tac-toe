import React, {Component} from 'react';
import Board from '../Board';
import PropTypes from 'prop-types';

class Game extends Component {
  constructor() {
    super();
    this.state = {winner: ''};
  }
  render() {
    const {player1, player2} = this.props;
    return (
      <div>
        <span data-hook="player1">{player1}</span>
        <span data-hook="player2">{player2}</span>
        <Board onGameWon={player => this.setState({winner: player === 'X' ? player1 : player2})}/>
        {this.state.winner && <div data-hook="winner-message">{`${this.state.winner} won!`}</div>}
      </div>);
  }
}

Game.propTypes = {
  player1: PropTypes.string.isRequired,
  player2: PropTypes.string.isRequired
};

export default Game;
