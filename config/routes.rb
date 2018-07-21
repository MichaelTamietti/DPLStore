Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :products, except: [:new, :edit]
    resources :orders, except: [:new, :edit]
    resources :charges
  end
  
  resources "contacts", only: [:create]

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
