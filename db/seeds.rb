sizes = ["large", "medium", "small"]

10.times do
    name = Faker::Commerce.product_name
    price = Faker::Commerce.price
    description = Faker::Commerce.color
    style = Faker::Commerce.material
    size = sizes

    Product.create(
      name: name,
      price: price,
      description: description,
      style: style,
      size: size
    )
end

10.times do
    name = Faker::Commerce.product_name
    price = Faker::Commerce.price
    description = Faker::Commerce.color
    style = Faker::Commerce.material

    Product.create(
      name: name,
      price: price,
      description: description,
      style: style,
    )
end
