Rails.application.routes.draw do

  namespace :admin do
    root to: 'event#index'
    get '/event', to: 'event#index'
    get '/mainpage/edit', to: 'mainpage#edit'
    put '/mainpage/edit', to: 'mainpage#update'
    get '/programme', to: 'programme#index'
    get '/contacts/edit', to: 'contacts#edit'
    put '/contacts/edit', to: 'contacts#update'
    get '/about/edit', to: 'about#edit'
    put '/about/edit', to: 'about#update'
  
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
