Rails.application.routes.draw do
  root 'home#index'
  namespace :api do
  	namespace :v1 do
    	resources :apps, only: [:edit, :create, :update, :destroy]
  	end
  end
end
