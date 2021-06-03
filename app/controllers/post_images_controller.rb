class PostImagesController < ApplicationController
  def new
    @image = PostImage.new
    @images = PostImage.all
  end
  
  def create
    @image = PostImage.new(image_params)
    @image.save
    @images = PostImage.all
    render 'new'
  end

  def destroy
    image = PostImage.find(params[:id])
    image.destroy
    redirect_to new_post_image_path
  end
  
  private
    def image_params
      params.require(:post_image).permit(:image)
    end
end
