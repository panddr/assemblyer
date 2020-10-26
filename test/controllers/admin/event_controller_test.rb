require 'test_helper'

class Admin::EventControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get admin_event_index_url
    assert_response :success
  end

end
