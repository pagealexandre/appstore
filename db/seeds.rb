# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


json = ActiveSupport::JSON.decode(File.read('db/seeds/apps.json'))

json.each do |elem|
  app = App.create!({ :name => elem['name'],
   					  :price => elem['price'],
   				  	  :rating => elem['rating'],
   				  	  :genres => elem['genres'],
   				  	  :link => elem['link'],
   				  	  :image => elem['image'],
  })
end
