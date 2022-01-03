class User < ApplicationRecord
    has_secure_password

    # has_one :profile
    has_many :profiles
    validates :profiles, length: { in: 0..1 }
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true

end
