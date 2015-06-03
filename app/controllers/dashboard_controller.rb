class DashboardController < ApplicationController
	#build a nested json object for backbone dashboard
	def big-json
		#all objects stem from current_user: user, dogs, walks/marks of both, plus user's neighbors and each of their dog/walk/mark trees.
		#may need to render using eager loading.
		#objects and collections can be reset/fetched from their own urls later.
	end
end
