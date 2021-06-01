class RenameImageIdColumnToPostImages < ActiveRecord::Migration[5.1]
  def change
    rename_column :post_images, :image_id, :image
  end
end
