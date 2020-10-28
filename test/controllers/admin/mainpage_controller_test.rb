require 'test_helper'

class Admin::MainpageControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get admin_mainpage_index_url
    assert_response :success
  end

end
