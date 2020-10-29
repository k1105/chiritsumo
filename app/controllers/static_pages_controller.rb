class StaticPagesController < ApplicationController
  def top
    @images = PostImage.all
    @date = PostImage.count.to_s.gsub("0","O")
  end
end
