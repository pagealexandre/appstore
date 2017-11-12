class Api::V1::AppsController < ApplicationController
	before_action :set_app, only: [:update, :destroy]

	def create
		@app = App.create!(app_params)
		render json: @app
	end

	def update
		@app.update!(app_params)
		render json: @app
	end

	def destroy
		@app.destroy
		render :json => { :message => "Done" }, status: :ok
	end

	private

		def app_params
			params.permit(:name, :price, :rating, :link, :image, :genres)
		end

		def set_app
			@app = App.find(params[:id])
		end

end
