require 'test_helper'

class HomepageControllerTest < ActionDispatch::IntegrationTest
  test "should get ru" do
    get homepage_ru_url
    assert_response :success
  end

  test "should get en" do
    get homepage_en_url
    assert_response :success
  end

end
