class ProgramsController < ApplicationController
    def index
        render json: Program.all
    end
end
