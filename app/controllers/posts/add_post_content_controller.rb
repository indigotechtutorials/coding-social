module Posts
  class AddPostContentController < ApplicationController
    def create
      @post = Post.new
      @content_type = params[:content_type]
    end
  end
end