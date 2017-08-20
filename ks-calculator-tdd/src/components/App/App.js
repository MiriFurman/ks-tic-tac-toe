import React, {Component} from 'react';
import s from './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {inputVal: '', prevValue: '0'};
  }

  equal() {
    const result = parseInt(this.state.inputVal) + parseInt(this.state.prevValue);
    this.setState({inputVal: result});
  }

  render() {
    return (
      <div className={s.root}>
        <input className={s.inputVal} data-hook="inputVal" value={this.state.inputVal} onChange={evt => this.setState({inputVal: evt.target.value})}/>
        <button className={'plus'} onClick={() => this.setState({prevValue: this.state.inputVal})}>{'+'}</button>
        <button className={'equal'} onClick={() => this.equal()}>{'='}</button>
      </div>
    );
  }
}

export default App;
