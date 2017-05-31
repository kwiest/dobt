require 'test_helper'

class CellTest < Minitest::Test
  def setup
    @cell = Cell.create row: 1, column: 1
  end

  def test_cell
    assert_equal @cell.row, "1"
    assert_equal @cell.column, "1"
  end

  def test_fill_in_cell
    @cell.fill_in_with "O"
    assert_equal "O", @cell.content
    assert_raises Cell::ContentAlreadyExists do
      @cell.fill_in_with "O"
    end
  end
end
