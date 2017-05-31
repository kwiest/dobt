class Cell < ApplicationRecord
  class ContentAlreadyExists < Exception; end

  belongs_to :board

  def fill_in_with(value)
    raise ContentAlreadyExists if content
    update_attributes(content: value)
  end
end
