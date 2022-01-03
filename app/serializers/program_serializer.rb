class ProgramSerializer < ActiveModel::Serializer
  attributes :id, :name, :times_per_week, :reps, :sets
  has_many :profile
  has_many :exercise
end
