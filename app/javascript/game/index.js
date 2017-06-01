import * as $ from "jquery";
import cell from "./cell";
import game from "./game";

'use strict';

$(function() {
  var cells = [
      cell({ row: 1, column: 1 }),
      cell({ row: 1, column: 2 }),
      cell({ row: 1, column: 3 }),
      cell({ row: 2, column: 1 }),
      cell({ row: 2, column: 2 }),
      cell({ row: 2, column: 3 }),
      cell({ row: 3, column: 1 }),
      cell({ row: 3, column: 2 }),
      cell({ row: 3, column: 3 })
    ],
    ticTacToe;

  ticTacToe = game(cells);

  $(".cell").on("click", function() {
    var row = parseInt($(this).attr("id").split("-")[1]),
      column = parseInt($(this).attr("id").split("-")[2]),
      cell = ticTacToe.findCell(row, column);

    if (cell.setContent("O")) {
      ticTacToe.winnerExists(); // Check for winner after user's move

      ticTacToe.serverMove();
      ticTacToe.winnerExists(); // Check for winner after server's move
    } else {
      alert("Cell already played, please try again");
      return false;
    }
  });
});
