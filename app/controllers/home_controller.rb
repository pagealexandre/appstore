class HomeController < ApplicationController
  def index
    # Reused in app/views/home/index.html.erb
    @props = { title: "Add an Application" }
  end
end
