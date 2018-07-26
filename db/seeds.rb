tshirt = [
  "https://farm2.staticflickr.com/1828/41629773830_bd706bd411_z.jpg"
]
hoodie = [
  "https://farm1.staticflickr.com/834/41629773730_e53dc94380_z.jpg"
]
iphone = [
  "https://farm1.staticflickr.com/927/41629773590_8a4f3db2a6_z.jpg"
]
hat = [
  "https://farm1.staticflickr.com/840/29566864438_deb5296593_z.jpg"
]
top = [
  "https://farm1.staticflickr.com/836/29566864098_e857f36e63_z.jpg"
]
crewneck = [
  "https://farm2.staticflickr.com/1804/29566863818_3963c379b5_z.jpg"
]


Product.create(
  name: "T-shirt",
  price: 20.00,
  description:"This 100% cotton t-shirt is comfortable and perfect for any occasion. Most popular choice from this season’s Greyscale Collection.",
  images: tshirt
   )

Product.create(
  name: "Hoodie",
  price: 40.00,
  description:"This comfortable hoodie is made from the finest cotton. Great choice from our Greyscale Collection.",
  images: hoodie
  
  )

Product.create(
  name: "Iphone-Case",
  price: 10.00,
  description:"This phone case will keep your iPhone safe and scratch-free. More colors coming up soon!",
  images: iphone
  
  )

Product.create(
  name: "Hat",
  price: 15.00,
  description:"The hat includes an original, screen printed graphic. Not to be missed!",
  images: hat
 
  )

Product.create(
  name: "Top",
  price: 20.00,
  description:"New top in our Greyscale Collection, perfect for the summer days in Salt Lake City!",
  images: top
  
  )

Product.create(
  name: "Crewneck",
  price: 30.00,
  description:"Relaxed and comfortable fashion, perfect for any weather.",
  images: crewneck
  )

