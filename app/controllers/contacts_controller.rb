class ContactsController < ApplicationController
  def index
      @contacts = Contact.first
  end
  end