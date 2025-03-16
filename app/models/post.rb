class Post < ApplicationRecord
  belongs_to :user
  has_many :post_contents, dependent: :destroy

  accepts_nested_attributes_for :post_contents
end
