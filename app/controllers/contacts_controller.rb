class ContactsController < ApplicationController
  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver    
      render status: 201
    else
      render json: { errors: @contact.errors }
    end
  end

  private

    def contact_params
      params.require(:contact).permit(:name, :email, :subject, :message)
    end
end
