# Restaurant Rails App

Stack of technologies:

* Ruby 2.3.6

* Ruby on Rails 5.2.4.1

* PostgreSQL 12.2

* Docker-compose

* React



Commands:
-
* `docker-compose up`

In another terminal:

* `docker-compose run app rake db:create`
* `docker-compose run app rake db:migrate`

Run webpack developer server

* `./bin/webpack-dev-server`



Solution for `pg` gem problem for Mac:
-
* install PostgreSQL 12 library as described on the PostgreSQL page http://www.postgresql.org/download/macosx/
* check if you can find the installation open it under `/Library/PostgreSQL/12`
* run `sudo PATH=$PATH:/Library/PostgreSQL/12/bin bundle install`



Solution for @rails/webpacker engine "node" problem
-
* `yarn install --ignore-engines`
