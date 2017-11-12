class StoreController < ApplicationController
	
  def index
  	@props = { appId: ENV['algolia_app_id'], searchOnlyApiKey: ENV['search_only_api_key'], env: Rails.env }
  end
end
