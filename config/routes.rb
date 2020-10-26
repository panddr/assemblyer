Rails.application.routes.draw do

  devise_for :admins
  root to: 'homepage#ru'
  get '/en', to: 'homepage#en'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
