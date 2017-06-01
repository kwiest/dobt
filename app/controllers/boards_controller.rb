class BoardsController < ApplicationController
  def index
    @boards = Board.all
  end

  def show
    @board = Board.find params[:id]
    @row1 = @board.cells.select { |c| c.row == "1" }
    @row2 = @board.cells.select { |c| c.row == "2" }
    @row3 = @board.cells.select { |c| c.row == "3" }
  end
end
