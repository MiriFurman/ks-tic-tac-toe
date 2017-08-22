import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Board.scss';

export const getGameStatus = board =>
  (board[0][0] === board[0][1] && board[0][1] === board[0][2] && board[0][0] !== ' ') && board[0][0];

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

    if (getGameStatus(board)) {
      this.props.onGameWon(player);
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
