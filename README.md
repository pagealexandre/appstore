# AppStore app

![screenshot1](https://github.com/pagealexandre/appstore/blob/master/img/Screen%20Shot%202017-11-12%20at%2019.33.50.png)

# How to test it ?

You want to use a docker container as I change the DB from Sqlite to Postresql

I use the gem figaro

`touch config/application.yml` and set the following variables :

| Env variables  |
| ------------- |
| db_user  |
| db_password  |
| algolia_app_id |
| algolia_api_key |
| search_only_api_key |

`npm install`

`bundle install`

`be = bundle exec`

`be rake db:create`

`be rake db:migrate`

`be rake db:seed` (This might take some time)

`foreman start -f Procfile.hot`

All the tasks asked in [this assessment](https://gist.github.com/Jerskouille/553717eb770be0a2665be8b8a20ed6e7) has been implemented
