import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Board.scss';

class Board extends Component {
  constructor() {
    super();
    this.state = {board: [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']], player: 'O'};
  }

  onCellClicked(rowIdx, colIdx) {
    const player = this.state.player === 'O' ? 'X' : 'O';
    const board = this.state.board
      .map((row, rowI) =>
        rowI !== rowIdx ? row : row.map((col, colI) => colI !== colIdx ? col : player));

    if (board[0].every(c => c === 'X')) {
      this.props.onGameWon();
    }

    this.setState({board, player});
  }
  render() {
    return (<table>
      <tbody>
        {this.state.board.map((row, rowIdx) => <tr key={rowIdx}>
          {row.map((col, colIdx) => <td onClick={() => this.onCellClicked(rowIdx, colIdx)} data-hook="board-cell" key={colIdx}>{col}</td>)}
        </tr>)}
      </tbody>
    </table>);
  }
}

Board.propTypes = {
  onGameWon: PropTypes.func
};

export default Board;
