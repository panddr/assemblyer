require 'test_helper'

class Admin::AboutControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get admin_about_index_url
    assert_response :success
  end

end
