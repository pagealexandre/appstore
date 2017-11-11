Rails.application.routes.draw do
  root 'store#index'
  get 'admin', to: 'admin#index'
  
  namespace :api do
  	namespace :v1 do
    	resources :apps, only: [:edit, :create, :update, :destroy]
  	end
  end
end
