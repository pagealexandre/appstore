class App < ActiveRecord::Base
	include AlgoliaSearch

	algoliasearch :per_environment => true do
    	attribute :name, :rating, :price, :genres, :link, :image
    	searchableAttributes ['name', 'rating', 'price']
  	end
end
