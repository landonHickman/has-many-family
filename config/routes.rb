Rails.application.routes.draw do  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root 'families#main'

  get '/families', to: 'families#index'
  post '/families', to: 'families#create'
  get '/families/:id', to: 'families#show'
  put '/families/:id', to: 'families#update'
  patch '/families/:id', to: 'families#update'
  delete '/families/:id', to: 'families#destroy'
  

end
