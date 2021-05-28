class Person < ApplicationRecord
  has_many :pets, dependent: :destroy
  belongs_to :family
end
