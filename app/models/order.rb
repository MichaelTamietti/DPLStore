class Order < ApplicationRecord
  has_many :products, through: :order_product, optional: true
end
