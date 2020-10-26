class AdminController < ApplicationController
  before_action :authorize_admin!

  private

  def authorize_admin!
    return redirect_to root_path unless current_admin.present?
  end
end
