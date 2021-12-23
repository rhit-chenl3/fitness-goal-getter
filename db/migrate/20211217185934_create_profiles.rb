class CreateProfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :profiles do |t|
      t.integer :age
      t.string :gender
      t.integer :height
      t.integer :weight
      t.string :fitness_goal
      t.string :nutrition_goal
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
