class AddDescriptionEnToEvents < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :description_en, :text
  end
end
