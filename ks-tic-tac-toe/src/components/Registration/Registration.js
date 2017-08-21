import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Registration extends Component {
  constructor() {
    super();
    this.state = {player1: '', player2: ''};
  }

  render() {
    return (
      <div>
        <input data-hook="player1-input" onChange={evt => this.setState({player1: evt.target.value})}/>
        <input data-hook="player2-input" onChange={evt => this.setState({player2: evt.target.value})}/>
        <button data-hook="start-game" onClick={() => this.props.onNewGame(this.state.player1, this.state.player2)}>Start Game</button>
      </div>
    );
  }
}

Registration.propTypes = {
  onNewGame: PropTypes.func
};

export default Registration;
