class DashboardController < ApplicationController
  def show
    @posts = Post.all.order(created_at: :desc)
  end
end
