# app/controllers/homepage_controller.rb
class HomepageController < ApplicationController
    def index
      # Your logic for the homepage index action goes here
      render plain: "Welcome to the homepage!"
    end
  end
  