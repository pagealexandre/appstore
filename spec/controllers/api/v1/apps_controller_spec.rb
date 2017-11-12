require 'rails_helper'

RSpec.describe Api::V1::AppsController, type: :controller do

	let!(:app) { FactoryGirl.create(:app) }

	describe "POST #create" do

		it "create a resource" do
			post :create, { name: app.name, price: app.price, rating: app.rating, link: app.link, image: app.image,
			genres: app.genres }

			expect(response.body).to be_json_eql(app.to_json)
			expect(response).to be_success
			expect(response).to have_http_status(200)
		end
	end

end
