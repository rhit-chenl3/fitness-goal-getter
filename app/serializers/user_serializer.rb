class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :first_name, :last_name, :email
  has_one :profiles
end
