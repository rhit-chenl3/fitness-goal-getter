class ProfilesController < ApplicationController
    def index
        render json: Profile.all
    end

    def show
        profile = Profile.find_by(id: params[:id])
        render json: profile
    end
    
    def create
        # puts(@current_user)
        profile = @current_user.profiles.create!(profile_params)
        render json: profile, status: :created
    end
    
    def update
        profile = Profile.find_by(id: params[:id])
        profile.update(profile_params)
        render json: profile, status: :ok
    end

    def destroy

    end

    private

    def profile_params
        params.permit(:age, :gender, :height, :weight, :fitness_goal, :nutrition_goal, :id)
    end
end
