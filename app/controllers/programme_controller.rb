class ProgrammeController < ApplicationController
    def index
      @programme = Programme.first
    end
  end