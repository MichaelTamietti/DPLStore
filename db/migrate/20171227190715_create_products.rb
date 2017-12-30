class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :name
      t.decimal :price
      t.string :description
      t.string :style
      t.string :size, optional: true

      t.timestamps
    end
  end
end
