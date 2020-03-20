class Ingredient < ApplicationRecord

  validates :name, presence: true, length: { in: 3..60 }, uniqueness: true
  validates :priority, numericality: { only_integer: true, greater_than: 0}

  belongs_to :meal

end
