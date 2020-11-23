Rails.application.routes.draw do

  namespace :admin do
    root to: 'events#index'
    get '/event', to: 'events#index'
    get '/mainpage/edit', to: 'mainpage#edit'
    put '/mainpage/edit', to: 'mainpage#update'
    get '/programme', to: 'programme#index'
    get '/programme/edit', to: 'programme#edit'
    put '/programme/edit', to: 'programme#update'
    get '/contacts/edit', to: 'contacts#edit'
    put '/contacts/edit', to: 'contacts#update'
    get '/about/edit', to: 'about#edit'
    put '/about/edit', to: 'about#update'

    resources :events do
      get :new, to: 'events#new'
    end
  
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
