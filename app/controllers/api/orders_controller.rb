class Api::OrdersController < ApplicationController
  before_action :set_order, only: [:update, :destroy] 
  
  def index
    render json: Order.all
  end

  def create
    order = Order.new(order_params)
    if order.save
      render json: order
    else
      render json: { errors: order.errors }
    end
  end

  def update 
    if @order.update(product_params)
      render json: @order
    else
      render json: { errors: @order.errors }
    end
  end

  def destroy
    @order.destroy
    render json: { message: 'Order deleted' }
  end

  private
 
    def order_params
      params.require(:order).permit(:name, :address, :state, :city, :zip, :pickup, :date, :email, :total, :tax, :shipping, :shipped)
    end

    def set_order
      @order = Order.find(params[:id])
    end
end
