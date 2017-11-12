FactoryGirl.define do
  factory :app, class: App do
  	name Faker::Name.name
  	price Faker::Number.decimal
  	rating Faker::Number.between(0, 5)
  	link Faker::Internet.url
  	image Faker::Internet.url('example.com', '/img.png')
  	genres "ARRAY['Activity', 'Games']"
  end
end
