class AboutController < ApplicationController
  def index
    @loc = I18n.locale
    if @loc == :ru
      @space = About.first.space_ru
      @mission = About.first.mission_ru
      @expert = About.first.expert_ru
      @team = About.first.team_ru

    else 
      @space = About.first.space_en
      @mission = About.first.mission_en
      @expert = About.first.expert_en
      @team = About.first.team_en
    end
  end
  end