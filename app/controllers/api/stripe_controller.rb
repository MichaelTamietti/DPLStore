class Api::StripeController < ApplicationController
  def token
    render json: ENV['PUBLISHABLE_KEY']
  end
end
