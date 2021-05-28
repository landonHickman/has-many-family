class Family < ApplicationRecord
  has_many :people, dependent: :destroy
end
