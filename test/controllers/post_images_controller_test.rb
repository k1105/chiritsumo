require 'test_helper'

class PostImagesControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get post_images_new_url
    assert_response :success
  end

end
