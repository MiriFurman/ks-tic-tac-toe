import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Registration from '../Registration';
import Game from '../Game';
import {translate} from 'react-i18next';
import s from './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {player1: '', player2: ''};
  }
  render() {
    return (
      <div className={s.root}>
        <Registration onNewGame={(player1, player2) => this.setState({player1, player2})}/>
        <Game player1={this.state.player1} player2={this.state.player2}/>
      </div>
    );
  }
}

App.propTypes = {
  t: PropTypes.func
};

export default translate(null, {wait: true})(App);
