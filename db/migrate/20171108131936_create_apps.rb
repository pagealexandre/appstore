class CreateApps < ActiveRecord::Migration
  def change
    create_table :apps do |t|
      t.string :name
      t.float :price
      t.float :rating
      t.string :link
      t.string :image
      t.text :genres, array: true, default: []

      t.timestamps null: false
    end
  end
end
