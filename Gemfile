source 'https://rubygems.org'

ruby '2.3.1'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.7'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use turbolinks
gem 'turbolinks'

# Use react on rails
gem 'react_on_rails', "~> 6"
gem 'mini_racer', platforms: :ruby

gem 'algoliasearch-rails'
gem 'pg'
gem 'figaro'
gem 'bootstrap-sass', '~> 3.3.7'
gem 'jquery-rails'

group :production do
  gem 'rails_12factor'
  gem 'unicorn'
end

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  gem 'factory_bot'
  gem 'rspec-rails', '~> 3.6'
  gem 'database_cleaner'
  gem 'factory_girl_rails'
  gem 'faker'
  gem 'json_spec'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'

  # Better debugger
  gem 'pry-rails'
end
