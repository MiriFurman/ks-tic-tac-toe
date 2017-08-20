import React, {Component} from 'react';
import axios from 'axios';
import s from './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {inputVal: '', prevValue: '0', prevOperation: '+', savedValues: []};
  }

  async componentDidMount() {
    const response = await axios.get('/api/calcs');
    this.setState({savedValues: response.data});
  }

  equal() {
    let result;
    if (this.state.prevOperation === '+') {
      result = parseInt(this.state.inputVal) + parseInt(this.state.prevValue);
    } else {
      result = parseInt(this.state.prevValue) - parseInt(this.state.inputVal);
    }
    this.setState({inputVal: result});
  }

  save() {
    axios.post('/api/calcs', {calc: this.state.inputVal});
  }

  render() {
    return (
      <div className={s.root}>
        <input className={s.inputVal} data-hook="inputVal" value={this.state.inputVal} onChange={evt => this.setState({inputVal: evt.target.value})}/>
        <button data-hook="plus" onClick={() => this.setState({prevValue: this.state.inputVal})}>{'+'}</button>
        <button data-hook="minus" onClick={() => this.setState({prevValue: this.state.inputVal, prevOperation: '-'})}>{'-'}</button>
        <button data-hook="equal" onClick={() => this.equal()}>{'='}</button>
        <button data-hook="save" onClick={() => this.save()}>{'save'}</button>
        <ul>{this.state.savedValues.map((val, idx) => <li data-hook="savedValue" key={val + idx}>{val}</li>)}</ul>
      </div>
    );
  }
}

export default App;
