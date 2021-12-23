class ProgramSerializer < ActiveModel::Serializer
  attributes :id, :name, :times_per_week, :reps, :sets
  has_one :profile
  has_one :exercise
end
