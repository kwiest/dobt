class Board < ApplicationRecord
  has_many :cells

  def find_cell_at(row:, column:)
    cells.select { |c| c.row == row && c.column == column }[0]
  end

  def make_server_move
    cell = cells.select { |c| c.content.nil? }[0]
    cell.fill_in_with "X"
  end
end
