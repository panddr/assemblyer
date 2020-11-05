class Admin::ProgrammeController < AdminController
  def edit
    @programme = Programme.last
  end

  def update
    @programme = Programme.last

    if @programme.update_attributes(main_block_params)
      redirect_to root_path, notice: 'Header block was successfully updated'
    else
      render :edit
    end
  end

  protected

  def main_block_params
    params.require(:programme).permit(
      :caption_en,
      :caption_ru
    )
  end
end
