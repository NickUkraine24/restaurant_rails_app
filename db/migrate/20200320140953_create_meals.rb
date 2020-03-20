class CreateMeals < ActiveRecord::Migration[5.2]
  def change
    create_table :meals do |t|
      t.string :name,        limit: 60, unique: true
      t.float  :price
      t.string :description, limit: 200

      t.timestamps
    end
  end
end
