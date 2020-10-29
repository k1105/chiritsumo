class PostImagesController < ApplicationController
  def new
    @image = PostImage.new
  end
  
  def create
    image = PostImage.new(image_params)
    if image.save
      redirect_to root_path
    else
      render 'new'
    end
  end
  
  private
    def image_params
      params.require(:post_image).permit(:image)
    end
end
