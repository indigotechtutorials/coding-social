class PagesController < ApplicationController
  def home
    redirect_to dashboard_path if authenticated?
  end
end
