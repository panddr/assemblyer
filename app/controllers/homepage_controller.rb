class HomepageController < ApplicationController
  def index
    @main_page = MainPage.first
  end
  
end
