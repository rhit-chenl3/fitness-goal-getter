class ProfilesController < ApplicationController
    def index
        render json: Profile.all
    end

    def show

    end
    
    def create
        puts(@current_user)
        profile = @current_user.profile.create!(profile_params)
        render json: profile, status: :created
    end
    
    def update

    end

    def destroy

    end

    private

    def profile_params
        params.permit(:age, :gender, :height, :weight, :fitness_goal, :nutrition_goal)
    end
end
