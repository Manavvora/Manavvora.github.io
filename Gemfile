source 'https://rubygems.org'

gem 'jekyll'

# Core plugins that directly affect site building
group :jekyll_plugins do
    gem 'jekyll-link-attributes'
    gem 'jekyll-minifier'
    gem 'jekyll-regex-replace'
    gem 'jekyll-scholar'
    gem 'jekyll-sitemap'
    gem 'jekyll-terser', :git => "https://github.com/RobertoJBeltran/jekyll-terser.git"
end

# Gems required by the retained Jekyll plugins.
group :other_plugins do
    gem 'base64'         # required by safe_yaml on Ruby 4
    gem 'csv'            # required by Jekyll on Ruby 4
    gem 'logger'         # required by Jekyll on Ruby 4
    gem 'nokogiri'       # used by jekyll-link-attributes
    gem 'observer'       # used by jekyll-scholar
    gem 'terser'         # used by jekyll-terser
end
