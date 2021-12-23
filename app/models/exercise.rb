class Exercise < ApplicationRecord
    has_many :programs
    has_many :profiles, through: :programs
end
