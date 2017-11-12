class App < ActiveRecord::Base

	validates_presence_of :name, :price, :rating, :link, :image, :genres, message: "parameter is missing"

	include AlgoliaSearch

	algoliasearch :per_environment => true do
    	attribute :name, :rating, :price, :genres, :link, :image
    	searchableAttributes ['name', 'rating', 'price']
  	end
end
