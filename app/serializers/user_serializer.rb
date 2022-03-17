class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :email
  has_one :profiles
end
