require 'rails_helper'

RSpec.describe Api::V1::AppsController, type: :controller do

	let!(:app) { FactoryGirl.create(:app) }
	let!(:second_app) { FactoryGirl.create(:app) }

	describe "POST #create" do

		context "Good parameter" do

			it "create a resource" do
				post :create, { name: app.name, price: app.price, rating: app.rating, link: app.link, image: app.image,
				genres: app.genres }

				expect(response.body).to be_json_eql(app.to_json)
				expect(response).to be_success
				expect(response).to have_http_status(200)
			end

		end
	end

	describe "PUT #update" do

		context "Good parameter" do

			it "should update a resource" do
				put :update, { id: app.id, name: second_app.name, price: second_app.price, rating: second_app.rating, link: second_app.link, image: second_app.image,
					genres: second_app.genres }

				expect(response.body).to be_json_eql(second_app.to_json)
				expect(response).to be_success
			end			
		end

	end

	describe "DELETE #destroy" do

		context "Good parameter" do
			
			it "removes successfully a resource" do
				delete :destroy, { :id => second_app.id }
				parsed_response = JSON.parse(response.body)

				expect(response).to have_http_status(200)
				expect(parsed_response['message']).to eq("Done")
			end
		end

	end

end
