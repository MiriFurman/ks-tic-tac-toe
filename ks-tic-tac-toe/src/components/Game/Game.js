import React, {Component} from 'react';
import Board from '../Board';
import PropTypes from 'prop-types';

class Game extends Component {
  constructor() {
    super();
    this.state = {winner: ''};
  }

  onGameWon(player) {
    const winner = player === 'X' ? this.props.player1 : this.props.player2;
    console.log(player, this.props.player1, this.props.player2);
    this.props.onGameWon(winner);
    this.setState({winner});
  }
  render() {
    const {player1, player2} = this.props;
    return (
      <div>
        <span data-hook="player1">{player1}</span>
        <span data-hook="player2">{player2}</span>
        <Board onGameWon={player => this.onGameWon(player)}/>
        {this.state.winner && <div data-hook="winner-message">{`${this.state.winner} won!`}</div>}
      </div>);
  }
}

Game.propTypes = {
  player1: PropTypes.string.isRequired,
  player2: PropTypes.string.isRequired,
  onGameWon: PropTypes.func
};

export default Game;
