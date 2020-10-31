class CreateMainPages < ActiveRecord::Migration[6.0]
  def change
    create_table :main_pages do |t|
      t.string :caption_ru
      t.string :caption_en

      t.timestamps
    end
  end
end
