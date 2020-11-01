class CreateAbouts < ActiveRecord::Migration[6.0]
  def change
    create_table :abouts do |t|
      t.string :space_ru
      t.string :space_en
      t.string :mission_ru
      t.string :mission_en
      t.string :expert_ru
      t.string :expert_en
      t.string :team_ru
      t.string :team_en

      t.timestamps
    end
  end
end
