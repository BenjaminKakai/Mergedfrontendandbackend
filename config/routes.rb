# config/routes.rb
Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get '/home', to: 'home#index' # Define a GET route for the home page
      post '/home', to: 'home#create' # Define a POST route for creating exercises from the home page
      get '/exercises/index', to: 'exercises#index' # Define a GET route for displaying exercises
      post '/exercises/create', to: 'exercises#create' # Define a POST route for creating exercises
      get '/show/:id', to: 'exercises#show' # Define a GET route for displaying a single exercise
      delete '/destroy/:id', to: 'exercises#destroy' # Define a DELETE route for deleting an exercise
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end

