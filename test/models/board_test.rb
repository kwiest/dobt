require 'test_helper'

class BoardTest < Minitest::Test
  def setup
    @board = Board.create
    @board.cells.create row: 1, column: 1
    @board.cells.create row: 1, column: 2
    @board.cells.create row: 1, column: 3
    @board.cells.create row: 2, column: 1
    @board.cells.create row: 2, column: 2
    @board.cells.create row: 2, column: 3
    @board.cells.create row: 3, column: 1
    @board.cells.create row: 3, column: 2
    @board.cells.create row: 3, column: 3
  end

  def test_find_cell_by_coordinate
    cell = @board.find_cell_at(row: "1", column: "1")
    assert_instance_of Cell, cell
  end

  def test_make_server_move
    cell = @board.find_cell_at row: "2", column: "2"
    cell.fill_in_with "O"

    @board.make_server_move

    cell2 = @board.find_cell_at row: "1", column: "1"
    assert_equal "X", cell2.content
  end
end
