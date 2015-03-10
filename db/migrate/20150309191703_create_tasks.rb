class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.integer :project_id
      t.string :is_checked
      t.text :body
      t.integer :priority

      t.timestamps null: false
    end
  end
end
