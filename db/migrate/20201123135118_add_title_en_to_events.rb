class AddTitleEnToEvents < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :title_en, :string
  end
end
