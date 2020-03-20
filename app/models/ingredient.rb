class Ingredient < ApplicationRecord

  validates :name, presence: true, length: { in: 3..60 }, uniqueness: true
  validates :priority, numericality: { only_integer: true, greater_than: 0}

  has_and_belongs_to_many :meals

end
