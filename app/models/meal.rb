class Meal < ApplicationRecord
  validates :name, presence: true, length: { in: 3..60 }, uniqueness: true
  validates :price, numericality: { greater_than_or_equal_to: 0 }
  validates :description, presence: true, length: { maximum: 200 }

  has_and_belongs_to_many :ingredients
end
