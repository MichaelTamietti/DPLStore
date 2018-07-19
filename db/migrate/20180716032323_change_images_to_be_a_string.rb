class ChangeImagesToBeAString < ActiveRecord::Migration[5.1]
  def change
   change_column :products, :images, :string
  end
end
