require 'test_helper'

class Admin::ProgrammeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get admin_programme_index_url
    assert_response :success
  end

end
