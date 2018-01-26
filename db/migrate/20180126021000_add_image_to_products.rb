class AddImageToProducts < ActiveRecord::Migration[5.1]
  def change
    add_column :products, :images, :text
  end
end
