class App < ActiveRecord::Base

	include AlgoliaSearch

	algoliasearch :per_environment => true do
    	attribute :name, :rating, :price, :genres, :image
    	searchableAttributes ['name']

    	attributesForFaceting [:genres]

	    add_replica 'App_price_asc', inherit: true, per_environment: true do
	      customRanking ['asc(price)', 'desc(rating)']
	    end

	    add_replica 'App_price_desc', inherit: true, per_environment: true do
	      customRanking ['desc(price)', 'desc(rating)']
	    end
  	end
end
