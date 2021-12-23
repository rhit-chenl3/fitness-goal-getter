class Profile < ApplicationRecord
  belongs_to :user
  has_many :programs
  has_many :exercises, through: :programs
  validates :fitness_goal, presence: true
end
