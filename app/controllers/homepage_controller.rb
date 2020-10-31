class HomepageController < ApplicationController
  def index
    @loc = I18n.locale
    if @loc == :ru
      @pageContent = MainPage.first.caption_ru
    else 
      @pageContent = MainPage.first.caption_en
    end
  end
  
end
