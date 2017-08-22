import React, {Component} from 'react';
import Registration from '../Registration';
import axios from 'axios';
import Game from '../Game';
import s from './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {player1: '', player2: '', leaderboard: []};
  }

  async componentDidMount() {
    const response = await axios.get('/api/leaderboard');
    this.setState({leaderboard: response.data});
  }

  async onGameWon(winner) {
    console.log(winner);
    await axios.post('/api/leaderboard', {winner});
    const response = await axios.get('/api/leaderboard');
    this.setState({leaderboard: response.data});
  }

  render() {
    return (
      <div className={s.root}>
        <Registration onNewGame={(player1, player2) => this.setState({player1, player2})}/>
        <Game onGameWon={winner => this.onGameWon(winner)} player1={this.state.player1} player2={this.state.player2}/>
        <ul>
          {this.state.leaderboard.map(lead => <li data-hook="leader-name" key={lead.name + lead.score}>{`${lead.name}: ${lead.score}`}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
