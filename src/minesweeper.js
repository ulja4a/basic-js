const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];

  matrix.forEach((row, rowIndex) => {
    const resultRow = [];

    row.forEach((col, colIndex) => {
      let count = 0;

      if (rowIndex > 0) {
        if (matrix[rowIndex - 1][colIndex]) {
          count++;
        }
      }

      if (rowIndex < matrix.length - 1) {
        if (matrix[rowIndex + 1][colIndex]) {
          count++;
        }
      }

      if (colIndex > 0) {
        if (matrix[rowIndex][colIndex - 1]) {
          count++;
        }
      }
      
      if (colIndex < row.length - 1) {
        if (matrix[rowIndex][colIndex + 1]) {
          count++;
        }
      }

      if (rowIndex > 0 && colIndex > 0) {
        if (matrix[rowIndex - 1][colIndex - 1]) {
          count++;
        }
      }

      if (rowIndex > 0 && colIndex < row.length - 1) {
        if (matrix[rowIndex - 1][colIndex + 1]) {
          count++;
        }
      }

      if (rowIndex < matrix.length - 1 && colIndex > 0) {
        if (matrix[rowIndex + 1][colIndex - 1]) {
          count++;
        }
      }

      if (rowIndex < matrix.length - 1 && colIndex < row.length - 1) {
        if (matrix[rowIndex + 1][colIndex + 1]) {
          count++;
        }
      }

      resultRow.push(count);
    });

    result.push(resultRow);
  });

  return result;
}

module.exports = {
  minesweeper
};
