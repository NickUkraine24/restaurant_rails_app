FROM ruby:2.3.6

RUN apt-get update -qq && curl -sL https://deb.nodesource.com/setup_12.x | bash && apt-get install -y nodejs postgresql-client && npm install -g yarnyarn install --ignore-engines

RUN mkdir /restaurant_rails_app
WORKDIR /restaurant_rails_app

COPY Gemfile /restaurant_rails_app/Gemfile
COPY Gemfile.lock /restaurant_rails_app/Gemfile.lock

RUN bundle install
COPY . /restaurant_rails_app

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]