class Admin < ApplicationRecord
  devise :database_authenticatable, :rememberable, :validatable,
         :rememberable, remember_for: 1.year
end