Rails.application.routes.draw do

  get '/admin', to: 'admin#index'

  namespace :admin do
    resources :ingredients, only: [:index, :show]
  end

end
