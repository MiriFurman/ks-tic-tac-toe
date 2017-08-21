import React, {Component} from 'react';
import './Board.scss';

class Board extends Component {
  constructor() {
    super();
    this.state = {board: [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]};
  }

  onCellClicked(rowIdx, colIdx) {
    const board = this.state.board
      .map((row, rowI) =>
        rowI !== rowIdx ? row : row.map((col, colI) => colI !== colIdx ? col : 'X'));

    this.setState({board});
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

export default Board;
