class Api::ProductsController < ApplicationController
  before_action :set_product, only: [:update, :destroy]

  def index
    render json: Product.all
  end

  def create
    product = Product.new
    product.name = params[:name]
    product.price = params[:price]
    product.style = params[:style]
    product.size = params[:size]
    product.description = params[:description]
    auth = {
      cloud_name: ENV["CLOUD_NAME"],
      api_key:    ENV["CLOUD_API_KEY"],
      api_secret: ENV["CLOUD_API_SECRET"]
    }
    image = Cloudinary::Uploader.upload(params[:file].tempfile, auth)
    product.images << image["secure_url"]

    if product.save
      render json: product
    else
      render json: { errors: product.errors }
    end
  end

  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: { errors: @product.errors }
    end
  end

  def destroy
    @product.destroy
    render json: { message: 'Product deleted' }
  end

  private

    def product_params
      params.require(:product).permit(:name, :price, :description, :style, :size, :images)
    end

    def set_product
      @product = Product.find(params[:id])
    end
end
