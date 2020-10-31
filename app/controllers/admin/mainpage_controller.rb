class Admin::MainpageController < AdminController
  def edit
    @pageContent = MainPage.last
  end

  def update
    @pageContent = MainPage.last

    if @pageContent.update_attributes(main_block_params)
      redirect_to root_path, notice: 'Header block was successfully updated'
    else
      render :edit
    end
  end

  protected

  def main_block_params
    params.require(:main_page).permit(
      :caption_en,
      :caption_ru
    )
  end
end
