class PostImage < ApplicationRecord
  mount_uploader :image, PostImageUploader
end
