# frozen_string_literal: true

source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.6.1"

gem "pg", ">= 0.18", "< 2.0"
gem "puma", "~> 3.11"
gem "rails", "~> 5.2.2"
gem "sass-rails", "~> 5.0"
gem "uglifier", ">= 1.3.0"

gem "coffee-rails", "~> 4.2"
gem "jbuilder", "~> 2.5"
gem "turbolinks", "~> 5"

gem "bootsnap", ">= 1.1.0", require: false

gem "bundle-audit"

group :development, :test do
  gem "byebug", platforms: %i[mri mingw x64_mingw]
  gem "rubocop", require: false
  gem "rubocop-rspec"
end

group :development do
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
  gem "web-console", ">= 3.3.0"
end

group :test do
  gem "rspec-rails"
  gem "rspec_junit_formatter"
end

gem "tzinfo-data", platforms: %i[mingw mswin x64_mingw jruby]
