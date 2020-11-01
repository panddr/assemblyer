class Admin::ContactsController < AdminController
  def edit
    @contact = Contact.last
  end

  def update
    @contact = Contact.last

    if @contact.update_attributes(contact_block_params)
      redirect_to root_path, notice: 'Header block was successfully updated'
    else
      render :edit
    end
  end

  protected

  def contact_block_params
    params.require(:contact).permit(
      :caption_en,
      :caption_ru
    )
  end
end
