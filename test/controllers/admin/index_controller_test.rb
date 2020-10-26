require 'test_helper'

class Admin::IndexControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get admin_index_index_url
    assert_response :success
  end

end
