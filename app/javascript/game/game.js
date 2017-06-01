import * as _ from "underscore";
import * as $ from "jquery";

'use strict';

var game = function game(cells) {
  var cells = cells,

    findCell = function findCell(row, column) {
      return _.filter(cells, function(cell) {
        return cell.row === row && cell.column === column;
      })[0];
    },

    serverMove = function serverMove() {
      var firstEmpty = _.filter(cells, function(cell) {
        return cell.getContent() === "";
      })[0];

      if (typeof(firstEmpty) === "undefined") {
        return gameOver();
      }

      firstEmpty.setContent("X");
    },

    winnerExists = function winnerExists() {
      searchForWinner(_.filter(cells, function(cell) { return cell.row === 1 })); // row 1
      searchForWinner(_.filter(cells, function(cell) { return cell.row === 2 })); // row 2
      searchForWinner(_.filter(cells, function(cell) { return cell.row === 3 })); // row 3
      searchForWinner(_.filter(cells, function(cell) { return cell.column === 1 })); // column 1
      searchForWinner(_.filter(cells, function(cell) { return cell.column === 2 })); // column 2
      searchForWinner(_.filter(cells, function(cell) { return cell.column === 3 })); // column 3
      searchForWinner([findCell(1,1), findCell(2,2), findCell(3,3)]); // Diagonal L-R
      searchForWinner([findCell(1,3), findCell(2,2), findCell(3,1)]); // Diagonal R-L
    },

    // private method to search tuples
    searchForWinner = function searchForWinner(cells) {
      var userWins = ["O", "O", "O"],
        serverWins = ["X", "X", "X"],
        contents = _.map(cells, function(cell) { return cell.getContent(); });

      if (_.isEqual(contents, userWins)) {
        return gameOver("YOU WIN!!!!");
      } else if (_.isEqual(contents, serverWins)) {
        return gameOver("Sorry, you lose >:-O");
      }
    },

    // private method to alert game over
    gameOver = function gameOver(message) {
      var message = message || "GAME OVER - You Tied"
      $("#result").empty().addClass("highlight").append(message);
    };

  return {
    findCell: findCell,
    serverMove: serverMove,
    winnerExists: winnerExists
  };
}

export default game;
