class CreateExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :target_area
      t.string :img
      t.string :video

      t.timestamps
    end
  end
end
