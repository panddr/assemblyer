class Admin::AboutController < AdminController
  def edit
    @about = About.last
  end

  def update
    @about = About.last

    if @about.update_attributes(about_block_params)
      redirect_to root_path, notice: 'Header block was successfully updated'
    else
      render :edit
    end
  end

  protected

  def about_block_params
    params.require(:about).permit(
      :space_ru,
      :space_en,
      :mission_ru,
      :mission_en,
      :expert_ru,
      :expert_en,
      :team_ru,
      :team_en
    )
  end
end
