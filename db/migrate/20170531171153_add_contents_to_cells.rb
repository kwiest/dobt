class AddContentsToCells < ActiveRecord::Migration[5.1]
  def change
    add_column :cells, :content, :string
  end
end
