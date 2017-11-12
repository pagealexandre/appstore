class App < ActiveRecord::Base

	include AlgoliaSearch

	algoliasearch :per_environment => true do
    	attribute :name, :rating, :price, :genres, :link, :image
    	searchableAttributes ['name', 'rating', 'price']

    	attributesForFaceting [:genres]

	    add_replica 'App_price_asc', per_environment: true do
	      customRanking ['asc(price)']
	    end

	    add_replica 'App_price_desc', inherit: true, per_environment: true do
	      customRanking ['desc(price)']
	    end	    
  	end
end
