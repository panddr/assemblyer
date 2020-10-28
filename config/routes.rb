Rails.application.routes.draw do

  namespace :admin do
    root to: 'index#index'
    get '/event', to: 'event#index'
    get '/mainpage', to: 'mainpage#index'
    get '/programme', to: 'programme#index'
    get '/contacts', to: 'contacts#index'
    get '/about', to: 'about#index'
  
  end

  devise_for :admins, controllers: {
    sessions: 'admin/sessions'
  }


  scope '(:locale)', locale: /en|ru/ do
    root to: 'homepage#index'
    resources :about, only: [:index]
    resources :contacts, only: [:index]
    resources :programme, only: [:index]


  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
