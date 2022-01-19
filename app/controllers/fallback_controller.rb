# Controller logic: fallback requests for React Router.
# Leave this here to help deploy your app later!
# class FallbackController < ActionController::Base

#   def index
#     # React app index page
#     render file: 'public/index.html'
#   end
# end


class FallbackController < ApplicationController
  include ActionController::MimeResponds
  
  def index
    respond_to do |format|
      format.html { render body: Rails.root.join('public/index.html').read }
    end
  end
end