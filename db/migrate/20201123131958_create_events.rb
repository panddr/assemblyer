class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :title_ru
      t.text :description_ru

      t.timestamps
    end
  end
end
