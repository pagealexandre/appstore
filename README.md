# AppStore bootstrapped app

![screenshot1](https://github.com/pagealexandre/appstore/blob/master/img/Screen%20Shot%202017-11-12%20at%2019.33.50.png)

All the tasks asked in [this](https://gist.github.com/Jerskouille/553717eb770be0a2665be8b8a20ed6e7) has been implemented

# How to test it ?

`bundle install`

`npm install`

`be = bundle exec`

`be rake db:create`

`be rake db:migrate`

`be rake db:seed`

`foreman start -f Procfile.hot`

- (You might want to use a docker container as I change the DB from Sqlite to Postresql)
