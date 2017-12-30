class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.string :name
      t.string :address, optional: true
      t.string :state, optional: true
      t.integer :zip, optional: true
      t.boolean :pickup
      t.string :date
      t.string :email
      t.decimal :total
      t.decimal :tax
      t.decimal :shipping
      t.boolean :shipped

      t.timestamps
    end
  end
end
