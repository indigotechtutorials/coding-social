class CreatePostContents < ActiveRecord::Migration[8.0]
  def change
    create_table :post_contents do |t|
      t.belongs_to :post, null: false, foreign_key: true
      t.text :content
      t.string :content_type

      t.timestamps
    end
  end
end
