class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :task_id
      t.string :file

      t.timestamps null: false
    end
  end
end
