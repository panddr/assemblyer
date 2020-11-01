class ContactsController < ApplicationController
  def index
    @loc = I18n.locale
    if @loc == :ru
      @contacts = Contact.first.caption_ru
    else 
      @contacts = Contact.first.caption_en
    end
  end
  end