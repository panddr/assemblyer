class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts do |t|
      t.string :caption_ru
      t.string :caption_en

      t.timestamps
    end
  end
end
