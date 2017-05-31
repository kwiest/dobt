class CellsController < ApplicationController
  def update
    @cell = Cell.find params[:id]
    @board = @cell.board
    begin
      @cell.fill_in_with "O"
      @board.make_server_move
      render json: json_response
    rescue Cell::ContentAlreadyExistsError
      render status: 500
    end
  end


  protected

  def json_response
    json = "["
    @board.cells.each do |cell|
      json << cell.to_json
    end
    json << "]"
    json.to_json
  end
end
