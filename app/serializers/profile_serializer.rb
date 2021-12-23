class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :age, :gender, :height, :weight, :fitness_goal, :nutrition_goal
  has_one :user
end
