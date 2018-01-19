class Api::ProductsController < ApplicationController
  before_action :set_product, only: [:update, :destroy]

  def index
    render json: Product.all
  end

  def create
    product = Product.new(product_params)
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
      params.require(:product).permit(:name, :price, :description, :style, :size)
    end

    def set_product
      @product = Product.find(params[:id])
    end
end
