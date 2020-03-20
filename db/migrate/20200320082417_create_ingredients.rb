class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.string  :name,      limit: 60,  unique: true
      t.integer :priority,  default: 1

      t.timestamps
    end
  end
end
