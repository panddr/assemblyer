class AboutController < ApplicationController
  def index
    @space = About.first
    @mission = About.first
    @expert = About.first
    @team = About.first
  end
end