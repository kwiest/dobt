class CreateCells < ActiveRecord::Migration[5.1]
  def change
    create_table :cells do |t|
      t.integer :board_id
      t.string :row
      t.string :column

      t.timestamps
    end
  end
end
