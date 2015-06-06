class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user

  def dashboard_json_constructor
  	dashboard_json = current_user.as_json

    # insert dogs
    dashboard_json[:dogs] = current_user.dogs.map do |dog|
      dog.as_json.merge(
        distanceTraveled: dog.distance_traveled, 
        distanceScore: dog.distance_score, 
        area: dog.area)
    end

    # insert neighbors, including their scores, dogs, and walks/marks of both :/
    dashboard_json[:neighbors] = current_user.neighbors.map do |user|

    end
    puts dashboard_json
    return dashboard_json
      
  end


  def current_user
    @_current_user ||= User.find_by(id: session[:user_id])
  end



end
