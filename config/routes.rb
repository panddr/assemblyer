Rails.application.routes.draw do

  namespace :admin do
    root to: 'index#index'
    get '/event', to: 'event#index'
  
  end
  # get 'admin/index'

  devise_for :admins, controllers: {
    sessions: 'admin/sessions'
  }
  

  scope '(:locale)', locale: /en|ru/ do
    root to: 'homepage#index'
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
